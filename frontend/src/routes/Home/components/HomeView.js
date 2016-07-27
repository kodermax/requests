import React from 'react';
import classNames from 'classnames/bind';
import classes from './HomeView.scss';
import { Link } from 'react-router';

const cx = classNames.bind(classes);

export const HomeView = () => (
  <div>
    <div className={cx('g-cols')}>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className="mdfi_hardware_phonelink"></i></div>
          <h4 className={cx('w-iconbox-title')}>АХД</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li><Link to="/trip/list">Заявка на командировку</Link></li>
              <li>Канцелярия</li>
              <li>Курьер</li>
              <li>Организация рабочего места</li>
              <li>Закупка мебели</li>
              <li>Закупка ТМЦ</li>
              <li>Визитки</li>
              <li>Уборка помещения</li>
              <li>Цветы</li>
              <li>Заявка на ремонт</li>
            </ul>
          </div>
        </div>
        <div className={cx('w-separator', 'type_invisible', 'size_medium', 'thick_1', 'style_solid', 'color_border',
          'cont_none')}>
          <span className={cx('w-separator-h')}> </span>
        </div>
      </div>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className="mdfi_hardware_phonelink"></i></div>
          <h4 className={cx('w-iconbox-title')}>ИТ</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li>ИТ</li>
              <li>Портал</li>
              <li>1С</li>
            </ul>
          </div>
        </div>
        <div className={cx('w-separator', 'type_invisible', 'size_medium', 'thick_1', 'style_solid', 'color_border',
          'cont_none')}>
          <span className={cx('w-separator-h')}> </span>
        </div>
      </div>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className='mdfi_hardware_phonelink'></i></div>
          <h4 className={cx('w-iconbox-title')}>Бухгалтерия</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li>Справка 2-НДФЛ</li>
              <li>Справка о доходах</li>
              <li>Расчетный лист</li>
            </ul>
          </div>
        </div>
        <div className={cx('w-separator', 'type_invisible', 'size_medium', 'thick_1', 'style_solid', 'color_border',
          'cont_none')}>
          <span className={cx('w-separator-h')}> </span>
        </div>
      </div>
    </div>
    <div className={cx('g-cols')}>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className='mdfi_file_cloud_upload'></i></div>
          <h4 className={cx('w-iconbox-title')}>HR</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li>Отпуск</li>
              <li>Увольнение</li>
              <li>Мат. помощь</li>
              <li>Мобильная связь</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className='mdfi_file_cloud_upload'></i></div>
          <h4 className={cx('w-iconbox-title')}>Юридический отдел</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li>Консультация</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className='mdfi_file_cloud_upload'></i></div>
          <h4 className={cx('w-iconbox-title')}>Отдел закупок</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li>Заявка на закупку</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default HomeView;
