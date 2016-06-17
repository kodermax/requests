import React, { Component, PropTypes } from 'react';
import Input from 'react-biz/lib/input';
import DatePicker from 'react-biz/lib/date_picker';
import { Button } from 'react-biz/lib/button';
import theme from './CreateView.scss';

export default class CreateView extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  static defaultProps = {
    fields: {
      city: {name: 'city'},
      company: {name: 'company'},
      country: {name: 'country'},
      daily: {name: 'daily'},
      date: {name: 'date'},
      otherExpenses: {name: 'otherExpenses'},
      target: {name: 'target'},
      transport: {name: 'transport'},
      tripBack: {name: 'tripBack'},
      tripThere: {name: 'tripThere'}
    }
  };
  static propTypes = {
    fields: PropTypes.object.isRequired
  };
  constructor (props) {
    super(props);
    let fields = {};
    this.changeField = {};
    Object.keys(props.fields).map((key) => {
      fields[props.fields[key].name] = '';
      this.changeField[props.fields[key].name] = this.handleChangeField.bind(this, props.fields[key].name);
    });
    this.btnCancel = this.handleCancel.bind(this);
    this.state = fields;
  }

  handleChangeField = (item, value) => {
    this.setState({ ...this.state, [item]: value });
  };
  handleCancel = (e) => {
    e.preventDefault();
    this.context.router.push('/');
  };

  render () {
    return (
      <div>
        <DatePicker onChange={this.changeField['date']} label='Дата командировки' value={this.state.date} />
        <Input type='text' label='Страна' name='country' value={this.state.country}
          onChange={this.changeField['country']} maxLength={16}
        />
        <Input type='text' label='Город' name='city' value={this.state.city}
          onChange={this.changeField['city']} maxLength={50}
        />
        <Input type='text' label='Организация' name='company' value={this.state.company}
          onChange={this.changeField['company']} maxLength={100}
        />
        <Input type='text' label='Цель' name='target' value={this.state.target}
          onChange={this.changeField['target']} multiline
        />
        <Input type='text' label='Проезд Туда' name='tripThere' value={this.state.tripThere}
          onChange={this.changeField['tripThere']} multiline
        />
        <Input type='text' label='Проезд Обратно' name='tripBack' value={this.state.tripBack}
          onChange={this.changeField['tripBack']} multiline
        />
        <Input type='text' label='Суточные' name='daily' value={this.state.daily}
          onChange={this.changeField['daily']} multiline
        />
        <Input type='text' label='Прочие расходы' name='otherExpenses' value={this.state.otherExpenses}
          onChange={this.changeField['otherExpenses']} multiline
        />
        <div className={theme.actions}>
          <Button label='Отправить' raised primary />
          <Button label='Отменить' raised onMouseUp={this.btnCancel} />
        </div>
      </div>
    );
  }
}
