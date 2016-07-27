import React, {Component, PropTypes} from 'react';
import Table from 'react-biz/lib/table';
import Button from 'react-biz/lib/button';
import theme from './ListView.scss';
import {Link} from 'react-router';

const requestColumns = {
  id: {
    title: 'ID',
    type: String,
    sortable: true,
  },
  title: {
    crop: true,
    sortable: true,
    title: 'Заголовок',
    type: String,
  },
  author: {
    sortable: true,
    title: 'Автор',
    type: String,
  },
  changedBy: {
    sortable: true,
    title: 'Изменил',
    type: String,
  },
  messages: {
    title: 'Сооб.',
    type: String,
  },
  category: {
    sortable: true,
    title: 'Категория',
    type: String,
  },
  status: {
    sortable: true,
    title: 'Статус',
    type: String,
  },
  responsible: {
    title: 'Исполнитель',
    type: String,
  },
};

export default class ListView extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchItems: PropTypes.func.isRequired,
  };
  constructor (props, context) {
    super(props, context);
    this.toCreate = this.handleCreate.bind(this);
  }
  componentDidMount = () => {
    let filter = {'category.code': 'trip'};
    this.props.fetchItems({conditions: JSON.stringify(filter)});
  };
  handleCreate = (e) => {
    e.preventDefault();
    this.context.router.push('/requests/trip/new');
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
        responsible: '',
      });
    }) : [];
    return (
      <div className={theme.listContent}>
        <Table
          model={requestColumns}
          selectable={false}
          source={source}
        />
        <Link to="/requests/trip/new">
          <Button theme={theme} icon="add" floating={true} primary={true} />
        </Link>
      </div>
    );
  }
}
