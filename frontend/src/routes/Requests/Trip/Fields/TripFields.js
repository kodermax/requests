import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import theme from '../../Item/components/FieldsView.scss';

const tripHelps = {
  auto: 'Автомобиль',
  plane: 'Самолет',
  train: 'Поезд'
};

export default class TripFields extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired
  };

  render () {
    const {fields} = this.props;
    const startDate = moment(fields.startDate);
    const endDate = moment(fields.endDate);
    return (
      <div className={theme.fields}>
        <h5>Основные сведения</h5>
        <table className={theme.table}>
          <tbody>
            <tr>
              <td className={theme.key}>Тип поездки:</td>
              <td className={theme.value}>
                <pre>{fields.tripType === 'trip' ? 'Командировка' : 'Служебная поездка'}</pre>
              </td>
            </tr>
            <tr>
              <td className={theme.key}>Период:</td>
              <td className={theme.value}>
                <pre>{startDate.format('DD.MM.YYYY')} - {endDate.format('DD.MM.YYYY')}</pre>
              </td>
            </tr>
            <tr>
              <td className={theme.key}>Сотрудники:</td>
              <td className={theme.value}>
                <pre>
                  {Object.keys(fields.forUsers).map((key) => {
                    return <span key={key}>{fields.forUsers[key].title}</span>;
                  })}
                </pre>
              </td>
            </tr>
            <tr>
              <td className={theme.key}>Цель поездки:</td>
              <td className={theme.value}>
                <pre>{fields.target}</pre>
              </td>
            </tr>
          </tbody>
        </table>
        <h5>Местоназначение</h5>
        <table className={theme.table}>
          <tbody>
            <tr>
              <td className={theme.key}>Страна, город:</td>
              <td className={theme.value}><pre>{fields.country} {fields.city}</pre></td>
            </tr>
            <tr>
              <td className={theme.key}>Организация:</td>
              <td className={theme.value}><pre>{fields.company}</pre></td>
            </tr>
            <tr>
              <td className={theme.key}>Проезд туда:</td>
              <td className={theme.value}><pre>{tripHelps[fields.tripTo]}</pre></td>
            </tr>
            <tr>
              <td className={theme.key}>Проезд обратно:</td>
              <td className={theme.value}><pre>{tripHelps[fields.tripBack]}</pre></td>
            </tr>
            <tr>
              <td className={theme.key}>Другие расходы:</td>
              <td className={theme.value}><pre>{fields.otherExpenses}</pre></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
