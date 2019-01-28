import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class EditShowQuestion extends React.Component {
  constructor(props) {
    super(props);
    let questionForm = { body: "", question_type:"", active:"false" }
    this.state = merge(questionForm, props.question);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.updateQuestion(this.state);
  }

  render() {
    return (
      <div className="body-question">
        {/* <p className="body-icon"><i className="fas fa-align-left"></i></p> */}

        <form onBlur={this.handleSubmit} className="question-body-form">
          <textarea onChange={this.update('body')} className="question-body"
            placeholder="body" value={this.state.body}>
          </textarea>
        </form>
      </div>
    )
  }
}