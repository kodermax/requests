import React from 'react';
import Autosuggest from 'react-biz/lib/autosuggest';
import Avatar from 'react-biz/lib/avatar';
import FontIcon from 'react-biz/lib/font_icon';
import Highlighter from 'react-highlight-words/dist/main';
import style from './SelectUser.scss';

export default class SelectUser extends React.Component {
  static propTypes = {
    error: React.PropTypes.string,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string]),
  };
  state = {
    countries: '',
    query: '',
    user: this.props.value,
    users: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.value});
  }

  fetchData = (q) => {
    if (q) {
      let token = localStorage.getItem('userToken') || null;
      let filter = {'$or': [{name: {'$regex': q}}, {lastName: {'$regex': q}}]};

      return fetch(`http://10.1.1.219:3001/api/users?conditions=${JSON.stringify(filter)}`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(json => this.setState({users: json}));
    }
  };
  handleChange = (query) => {
    this.setState({user: query});
    this.fetchData(query);
  };
  handleSelect = (key, value) => {
    this.props.onChange(value);
  };

  customUser = (item) => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2,
      paddingLeft: '5px',
    };
    const positionStyle = {
      fontSize: '11px',
      color: 'gray',
    };
    const avatarStyle = {
      display: 'inline-block',
      width: 40,
      height: 40,
    };
    return (
      <div style={containerStyle}>
        {item.photo ? <Avatar><img src={item.photo} /></Avatar> :
          <Avatar style={avatarStyle} icon={<FontIcon value="person" />} />}
        <div style={contentStyle}>
          <Highlighter highlightClassName={style.highlightRed}
            searchWords={this.state.query.trim().length > 0 ? this.state.query.split(' ') : []}
            textToHighlight={item.fullName ? item.fullName : ''}
          />
          <span style={positionStyle}>{item.position}</span>
        </div>
      </div>
    );
  };

  render() {
    let label = this.props.label ? this.props.label : 'Выбор сотрудника';
    return (
      <Autosuggest
        className={style.suggest}
        direction="down"
        label={label}
        multiple={false}
        name="user"
        error={this.props.error}
        onChange={this.handleChange}
        onSelectItem={this.handleSelect}
        source={this.state.users}
        template={this.customUser}
        value={this.state.user}
      />
    );
  }
}
