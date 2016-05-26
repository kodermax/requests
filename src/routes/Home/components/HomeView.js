import React from 'react';
import classNames from 'classnames/bind';
import classes from './HomeView.scss';

const cx = classNames.bind(classes);

export const HomeView = () => (
  <div>
    <h4>Добро пожаловать!</h4>
    <div className={cx('g-cols')}>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top','size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i class="mdfi_hardware_phonelink"></i></div>
          <h4 className={cx('w-iconbox-title')}>Web Development</h4>
          <div className={cx('w-iconbox-text')}>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
          </div>
        </div>
        <div className={cx('w-separator', 'type_invisible', 'size_medium', 'thick_1', 'style_solid', 'color_border', 'cont_none')}>
          <span className={cx('w-separator-h')}> </span>
        </div>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i class="mdfi_file_cloud_upload"></i></div>
          <h4 className={cx('w-iconbox-title')}>Cloud Hosting</h4>
          <div className={cx('w-iconbox-text')}>
            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
          </div>
        </div>
      </div>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top','size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i class="mdfi_hardware_phonelink"></i></div>
          <h4 className={cx('w-iconbox-title')}>Web Development</h4>
          <div className={cx('w-iconbox-text')}>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
          </div>
        </div>
        <div className={cx('w-separator', 'type_invisible', 'size_medium', 'thick_1', 'style_solid', 'color_border', 'cont_none')}>
          <span className={cx('w-separator-h')}> </span>
        </div>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i class="mdfi_file_cloud_upload"></i></div>
          <h4 className={cx('w-iconbox-title')}>Cloud Hosting</h4>
          <div className={cx('w-iconbox-text')}>
            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
          </div>
        </div>
      </div>
      <div className={cx('one-third')}>
        <div className={cx('w-iconbox', 'iconpos_top','size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i class="mdfi_hardware_phonelink"></i></div>
          <h4 className={cx('w-iconbox-title')}>Web Development</h4>
          <div className={cx('w-iconbox-text')}>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
          </div>
        </div>
        <div className={cx('w-separator', 'type_invisible', 'size_medium', 'thick_1', 'style_solid', 'color_border', 'cont_none')}>
          <span className={cx('w-separator-h')}> </span>
        </div>
        <div className={cx('w-iconbox', 'iconpos_top', 'size_medium', 'style_circle', 'color_light')}>
          <div className={cx('w-iconbox-icon')}><i class="mdfi_file_cloud_upload"></i></div>
          <h4 className={cx('w-iconbox-title')}>Cloud Hosting</h4>
          <div className={cx('w-iconbox-text')}>
            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default HomeView;
