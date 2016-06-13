import React, { Component, PropTypes } from 'react';
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
  {
    id: '213', title: 'Заявка на канц. товары', createdBy: 'Максим', changedBy: 'Юрий', messages: 3,
    category: 'АХД - Канцтовары', status: 'В Работе'
  },
  {
    id: '213', title: 'Заявка на цветы', createdBy: ' Максим', changedBy: 'Юрий', messages: 3,
    category: 'АХД - Канцтовары', status: 'В Работе'
  }
];

export default class ListView extends Component {
  state = { selected: [], items: users };
  static propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array
  };
  componentDidMount = () => {
    this.props.fetchItems();
  };

  handleSelect = (selected) => {
    this.setState({ selected });
  };

  render () {
    console.log(this.props.data.items);
    return (
      <Table
        model={requestColumns}
        onSelect={this.handleSelect}
        selected={this.state.selected}
        selectable={false}
        source={this.state.items}
      />
    );
  }
}
