import React, {Component, PropTypes} from 'react';
import style from './Disqus.scss';
import Avatar from 'react-biz/lib/avatar';
import FontIcon from 'react-biz/lib/font_icon';
import classNames from 'classnames';
import moment from 'moment';

export default class Disqus extends Component {
  static propTypes = {
    messages: PropTypes.any.isRequired
  }

  render() {
    const {messages} = this.props;
    const messageNodes = messages && Object.keys(messages).length > 0 ? Object.keys(messages).map((key, i) => {
      let message = messages[key];
      return (
        <div className={classNames(style.ticketMessage)} key={i}>
          <div className={style.messageHead}>
            {message.author.shortName}
            <span className={style.tDelimeter}>|</span>
            {moment(message.createdAt).format('DD.MM.YYYY h:mm:ss')}
          </div>
          <div className={style.messageBody}>
            <div className={style.avatarBlock}>
              {message.author.photo ? <img className={style.avatar} src={message.author.photo} /> : <Avatar
                className={style.avatar} style={{height: '67px'}} icon={<FontIcon value="person" />}
              />
              }
            </div>
            <div className={style.content}>
              <div className={style.title}></div>
              <div className={style.text} dangerouslySetInnerHTML={{__html: message.message}}></div>
            </div>
          </div>
        </div>
      );
    }) : undefined;
    if (messageNodes) {
      return (
        <div className={style.discussBlock}>
          {messageNodes}
        </div>
      );
    } else {
      return (
        <div className={style.discussBlock}>
          {undefined}
        </div>
      );
    }
  }
}
