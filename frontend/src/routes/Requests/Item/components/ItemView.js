import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText} from 'react-biz/lib/card';
import {Button} from 'react-biz/lib/button';
import FieldsView from './FieldsView';
import RichEditor from '../../../../components/RichEditor/RichEditor';
import Disqus from './Disqus';
import {stateToHTML} from 'draft-js-export-html';
import theme from './ItemView.scss';

export default class ListView extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    fetchItem: PropTypes.func.isRequired,
    fetchMessages: PropTypes.func.isRequired,
    params: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.id = this.props.params.id;
    this.btnAddMessage = this.handleAddMessage.bind(this);
    this.editorChange = this.handleEditorChange.bind(this);
    this.state = {
      editor: {}
    };
  }

  componentDidMount = () => {
    this.props.fetchItem(this.props.params.id);
  };
  handleAddMessage = () => {
    let options = {
      inlineStyles: {
        red: {style: {color: 'rgba(255, 0, 0, 1.0)'}},
        orange: {
          style: {
            color: 'rgba(255, 127, 0, 1.0)'
          }
        },
        yellow: {
          style: {
            color: 'rgba(180, 180, 0, 1.0)'
          }
        },
        green: {
          style: {
            color: 'rgba(0, 180, 0, 1.0)'
          }
        },
        blue: {
          style: {
            color: 'rgba(0, 0, 255, 1.0)'
          }
        },
        indigo: {
          style: {
            color: 'rgba(75, 0, 130, 1.0)'
          }
        },
        violet: {
          style: {
            color: 'rgba(127, 0, 255, 1.0)'
          }
        }
      }
    };
    let html = stateToHTML(this.state.editor.getCurrentContent(), options);
    let request = {
      message: html
    };
    this.props.addMessage(this.props.params.id, request);
  }
  handleEditorChange = (editorState) => {
    this.setState({editor: editorState});
  }

  render() {
    const {item} = this.props.data;
    if (item) {
      const title = `№${item.requestId} ${item.title}`;
      return (
        <div className={theme.itemContent}>
          {item ? <div>
            <Card>
              <CardTitle title={title} />
              <CardText theme={theme}>
                <FieldsView data={item} />
                <h6>
                  <span>Обсуждение</span>
                </h6>
                <Disqus fetchMessages={this.props.fetchMessages} requestId={this.props.params.id} />
                <RichEditor onChange={this.editorChange} />
                <Button label="Отправить" raised primary onMouseUp={this.btnAddMessage} />
              </CardText>
            </Card>
          </div>
            : undefined}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
