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

export default class ListView extends Component {
  static propTypes = {
    fetchItems: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };
  componentDidMount = () => {
    this.props.fetchItems();
  };

  handleSelect = (selected) => {
    this.setState({ selected });
  };

  render () {
    const source = this.props.data.items ? this.props.data.items.map((item) => {
      return ({
        id: item.requestId,
        title: item.title,
        createdBy: '',//item.creator.name + ' ' + item.creator.surname,
        changedBy: '',//item.changer.name + ' ' + item.changer.surname,
        messages: item.messages ? item.messages.length : 0,
        category: '',//item.department.title,
        status: '',//item.status.title,
        responsible: '',//item.responsible.title
      });
    }) : [];
    return (
      <Table
        model={requestColumns}
        selectable={false}
        source={source}
      />
    );
  }
}
