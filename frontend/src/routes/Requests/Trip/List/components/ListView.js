import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText} from 'react-biz/lib/card';
import Table from 'react-biz/lib/table';
import Button from 'react-biz/lib/button';
import theme from './ListView.scss';
import {Link} from 'react-router';
import moment from 'moment';
import themeTable from '../../../../../styles/table.scss';

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
  period: {
    title: 'Период',
    type: String
  },
  city: {
    title: 'Город',
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
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchItems: PropTypes.func.isRequired
  };
  constructor(props, context) {
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
  render() {
    const source = this.props.data.items ? this.props.data.items.map((item) => {
      let startDate = moment(item.fields.startDate);
      let endDate = moment(item.fields.endDate);
      let url = `/requests/item/${item.requestId}`;
      return ({
        id: item.requestId,
        title: <Link to={url}>{item.title}</Link>,
        author: item.author.shortName,
        period: `${startDate.format('DD.MM.YYYY')} - ${endDate.format('DD.MM.YYYY')}`,
        city: item.fields.city,
        changedBy: '',
        messages: item.messages.toString(),
        status: item.status.title,
        responsible: ''
      });
    }) : [];
    return (
      <div className={theme.listContent}>
        <Card theme={theme}>
          <CardTitle title="Деловые поездки" />
          <CardText theme={theme}>
            <Table
              model={requestColumns}
              selectable={false}
              source={source}
              className={themeTable.table}
            />
            <Link to="/requests/trip/new">
              <Button theme={theme} icon="add" floating primary />
            </Link>
          </CardText>
        </Card>
      </div>
    );
  }
}
