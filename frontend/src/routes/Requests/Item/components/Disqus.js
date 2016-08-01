import React, {Component, PropTypes} from 'react';
import style from './Disqus.scss';
import Avatar from 'react-biz/lib/avatar';
import FontIcon from 'react-biz/lib/font_icon';
import classNames from 'classnames';

export default class Disqus extends Component {
  static propTypes = {
    fetchMessages: PropTypes.func.isRequired,
    requestId: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    console.log(props);
  }

  render() {
    const messageNodes = this.state.messages ? this.state.messages.map((message, i) => {
      return (
        <div className={classNames(style.ticketMessage, {[style.supportMessage]: message.author.supportTeam})}
          key={i}
        >
          <div className={style.messageHead}>
            {!message.author.supportTeam ? <span>Клиент: </span> : <span>Сотрудник техподдержки: </span>}
            {message.author.title}
            <span className={style.tDelimeter}>|</span>
            {message.dates.created}
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
              {message.files.length > 0 ? <div className={style.filesBlock}>
                <div className={style.filesTitle}>Вложения</div>
                {message.files.map((item, i) => {
                  return (
                    <div className={style.file} key={i}>
                      <a href={item.path}>{item.name}</a>
                    </div>
                  );
                })}
              </div> : undefined}
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
