import React from 'react';
import classNames from 'classnames/bind';
import classes from './HomeView.scss';

const cx = classNames.bind(classes);

export const HomeView = () => (
  <div>
    <h4>Добро пожаловать!</h4>
    <div className={cx('g-cols')}>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i className='mdfi_hardware_phonelink'></i></div>
          <h4 className={cx('w-iconbox-title')}>АХД</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li><a href=''>Закупка канцелярии</a></li>
              <li><a href=''>Курьер</a></li>
              <li><a href=''>Цветы</a></li>
              <li><a href=''>Уборка помещения</a></li>
              <li><a href=''>Жалоба на уборку</a></li>
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
          <h4 className={cx('w-iconbox-title')}>ИТ</h4>
          <div className={cx('w-iconbox-text')}>
            <ul className={cx('items')}>
              <li><a href=''>ИТ</a></li>
              <li><a href=''>Портал</a></li>
              <li><a href=''>1С</a></li>
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
              <li><a href=''>Справка 2-НДФЛ</a></li>
              <li><a href=''>Справка о доходах</a></li>
              <li><a href=''>Расчетный лист</a></li>
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
              <li><a href=''>Отпуск</a></li>
              <li><a href=''>Увольнение</a></li>
              <li><a href=''>Мат. помощь</a></li>
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
              <li><a href=''>Консультация</a></li>
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
              <li><a href=''>Заявка на закупку</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default HomeView;
