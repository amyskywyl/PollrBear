import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


class EditQuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      body: "",
      group_id: 0,
      choices: this.props.choices,
      choiceCount: 0,
      question_type: "",
    }
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({
      ['choiceCount']: this.state.choiceCount + 1,
      ['choices']:
        merge({}, this.state.choices, { [this.state.choiceCount]: { body: '', question_id: 0 } })
    });
  }

  updateChoices(i) {
    return e => (this.setState({ ['choices']: merge({}, this.state.choices, { [i]: { body: e.target.value } }) }))
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId)
    .then(response => {
      this.setState ({
        body: response.data.question.body,
        group_id: response.data.question.group_id,
        question_type: response.data.question.question_type
      })
     }
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.choices !== nextProps.choices) {
      this.setState({
        choiceCount: parseInt(Object.keys(nextProps.choices)[Object.keys(nextProps.choices).length - 1]) + 1});
      this.setState({ choices: nextProps.choices });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.questionId !== this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.match.params.questionId);
    }
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
    const choicesArray = Object.values(this.state.choices);
    this.props.updateQuestion(question, choicesArray)

  }

  render() {
    let choiceList = [];
    Object.keys(this.state.choices).forEach(i => {
      choiceList.push(
        <div key={i} className="responses">
          <input key={i} type="text" placeholder={"Choices goes here"}
            onChange={this.updateChoices(i)}
            value={this.state.choices[i]['body']} />
          <button onClick={e => (this.deleteChoice(i))} className="trashcan"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      )
    })
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

              <div className="choices">
                {choiceList}
                <div className="add-answers-button">
                  <button onClick={this.handleButton}>+</button>
                </div>
              </div>

            </div>

            <input className="component-activity-creator__create" type="submit" value={this.props.formType} />
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(EditQuestionForm);