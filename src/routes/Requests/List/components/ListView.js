import React from 'react';
import Table from 'react-biz/lib/table';

const requestColumns = {
  id: {
    title: 'ID',
    type: String,
    sortable: true
  },
  title: {
    crop: true,
    sortable: true,
    title: 'Заголовок',
    type: String
  },
  createdBy: {
    sortable: true,
    title: 'Автор',
    type: String
  },
  changedBy: {
    sortable: true,
    title: 'Изменил',
    type: String
  },
  messages: {
    title: 'Сооб.',
    type: String
  },
  category: {
    sortable: true,
    title: 'Категория',
    type: String
  },
  status: {
    sortable: true,
    title: 'Статус',
    type: String
  },
  responsible: {
    title: 'Исполнитель',
    type: String
  }
};

const users = [
  {id: '213', title: 'Заявка на канц. товары', createdBy: 'Карпычев Максим', changedBy: 'Романенко Юрий', messages: 3,
  category: 'АХД - Канцтовары', status: 'В Работе'},
  {id: '213', title: 'Заявка на цветы', createdBy: 'Карпычев Максим', changedBy: 'Романенко Юрий', messages: 3,
    category: 'АХД - Канцтовары', status: 'В Работе'}
];

export default class ListView extends React.Component {
  state = { selected: [], source: users };
  handleChange = (row, key, value) => {
    const source = this.state.source;
    source[row][key] = value;
    this.setState({source});
  };

  handleSelect = (selected) => {
    this.setState({selected});
  };
  render () {
    return (
      <Table
        model={requestColumns}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        selected={this.state.selected}
        selectable={false}
        source={this.state.source}
      />
    );
  }
}
