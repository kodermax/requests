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
  author: {
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
    let filter = {'category.code': 'trip'};
    this.props.fetchItems({conditions: JSON.stringify(filter)});
  };

  render () {
    const source = this.props.data.items ? this.props.data.items.map((item) => {
      return ({
        id: item.requestId,
        title: item.title,
        author: item.author.shortName,
        changedBy: '',
        messages: item.messages.toString(),
        category: item.category.title,
        status: item.status.title,
        responsible: ''
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
