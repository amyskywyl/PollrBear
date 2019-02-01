import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditQuestionForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: this.props.question.body,
      group_id: this.props.question.group_id,
      choice1: "",
      choice2: "",
      question_type: "",
    }
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId).then(response => {
      this.setState ({
        body: response.data.question.body,
        choice1: Object.values(response.data.choices)[0].body,
        choice2: Object.values(response.data.choices)[1].body,
        group_id: response.data.question.group_id,
        question_type: response.data.question.question_type
      })
     }
    )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.questionId != this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.match.params.questionId);
    }
    this.props.history.push(`/groups`)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = {
      question_type: this.state.question_type,
      body: this.state.body,
      group_id: this.state.group_id,
    }
    question = Object.assign({}, this.props.question, question);
    const choice1 = Object.values(this.props.choices)[0];
    const choice2 = Object.values(this.props.choices)[1];
    choice1.body = this.state.choice1;
    choice2.body = this.state.choice2;
    const choicesArray = [choice1, choice2];
    const choices = [this.state.choice1, this.state.choice2]
    this.props.updateQuestion(question, choicesArray)
  }

  render() {
    return (
      <div className="columns">
        <Link to="/groups" className="x-btn">
          x
        </Link>
        <div className="poll-body">
          <form onSubmit={this.handleSubmit}>
            <div className="component-editor-multiple-choice">
              <label>
                <input
                  placeholder="Question"
                  className="question-body"
                  value={this.state.body}
                  onChange={this.update('body')} />
              </label>

              <label className="choices">
                <li>
                  <input
                    placeholder="Text, Image URL, LaTex"
                    className="choice1-body"
                    value={this.state.choice1}
                    onChange={this.update('choice1')} />
                </li>
              </label>

              <label className="choices">
                <li>
                  <input
                    placeholder="Text, Image URL, LaTex"
                    className="choice2-body"
                    value={this.state.choice2}
                    onChange={this.update('choice2')} />
                </li>
              </label>

            </div>

            <input className="component-activity-creator__create" type="submit" value={this.props.formType} />
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(EditQuestionForm);