import React, { Component } from 'react';
import Input from 'react-biz/lib/input';
import DatePicker from 'react-biz/lib/date_picker';
import { Button } from 'react-biz/lib/button';

export default class CreateView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: '',
      company: '',
      country: '',
      daily: '',
      date: '',
      otherExpenses: '',
      target: '',
      transport: '',
      tripBack: '',
      tripThere: ''
    };
  }

  handleChange = (item, value) => {
    this.setState({ ...this.state, [item]: value });
  };

  render () {
    return (
      <div>
        <DatePicker onChange={this.handleChange.bind(this, 'date')} label='Дата командировки' value={this.state.date} />
        <Input type='text' label='Страна' name='country' value={this.state.country}
          onChange={this.handleChange.bind(this, 'country')} maxLength={16}
        />
        <Input type='text' label='Город' name='city' value={this.state.city}
          onChange={this.handleChange.bind(this, 'city')} maxLength={50}
        />
        <Input type='text' label='Организация' name='company' value={this.state.company}
          onChange={this.handleChange.bind(this, 'company')} maxLength={100}
        />
        <Input type='text' label='Цель' name='target' value={this.state.target}
          onChange={this.handleChange.bind(this, 'target')} multiline
        />
        <Input type='text' label='Проезд Туда' name='tripThere' value={this.state.tripThere}
          onChange={this.handleChange.bind(this, 'tripThere')} multiline
        />
        <Input type='text' label='Проезд Обратно' name='tripBack' value={this.state.tripBack}
          onChange={this.handleChange.bind(this, 'tripBack')} multiline
        />
        <Input type='text' label='Суточные' name='daily' value={this.state.daily}
          onChange={this.handleChange.bind(this, 'daily')} multiline
        />
        <Input type='text' label='Прочие расходы' name='otherExpenses' value={this.state.otherExpenses}
          onChange={this.handleChange.bind(this, 'otherExpenses')} multiline
        />
        <Button label='Отправить' raised primary />
      </div>
    );
  }
}
