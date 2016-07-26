import React from 'react';
import Autosuggest from 'react-biz/lib/autosuggest';
import Avatar from 'react-biz/lib/avatar';
import Highlighter from 'react-highlight-words/dist/main';
import style from './SelectUser.scss';

const PersonIcon = (props) => (
  <svg {...props} fill="#000000" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);
export default class SelectUser extends React.Component {
  static propTypes = {
    error: React.PropTypes.string,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string])
  };
  state = {
    countries: '',
    query: '',
    user: this.props.value,
    users: []
  };

  componentDidMount () {
    this.fetchData();
  }
  componentWillReceiveProps (nextProps) {
    this.setState({user: nextProps.value});
  }
  fetchData = (q) => {
    if (!q) {
      q = '';
    }
    let token = localStorage.getItem('userToken') || null;
    let filter = { '$or': [ { name: q }, { lastName: q } ] };

    return fetch(`http://10.1.1.219:3001/api/users?conditions=${JSON.stringify(filter)}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => this.setState({users: json})).bind(this);
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
      flexDirection: 'row'
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2,
      paddingLeft: '5px'
    };
    const positionStyle = {
      fontSize: '11px',
      color: 'gray'
    };
    const avatarStyle = {
      display: 'inline-block',
      width: 40,
      height: 40
    };
    return (
      <div style={containerStyle}>
        {item.img ? <Avatar><img src={item.img} /></Avatar> :
          <Avatar style={avatarStyle} icon={<PersonIcon height="60" width="60" />} />}
        <div style={contentStyle}>
          <Highlighter highlightClassName={style.highlightRed}
            searchWords={this.state.query.trim().length > 0 ? this.state.query.split(' ') : []}
            textToHighlight={item.value}
          />
          <span style={positionStyle}>{item.position}</span>
        </div>
      </div>
    );
  };
  render () {
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
