import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditActiveQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId)
      .then(response => {
        this.setState({
          active: response.data.question.active,
        })
      }
      )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.questionId !== this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.match.params.questionId);
    }
  }

  update() {
    return (e) => {
      this.setState( prevState => ({
        active: !prevState.active
      }));
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = {
      active: this.state.active,
    }
    question = Object.assign({}, this.props.question, question);
    this.props.activeQuestion(question)

  }

  toggleActive() {
    if (this.state.active === true) {
      return "active"
    } else {
      return "inactive"
    }
  }

  render() {
    return (
      <div className="active-button">
        <form onSubmit={this.handleSubmit}>
          <input className={this.toggleActive()} type="submit" value="Activate" onClick={this.update()}/>
        </form>

      </div>
    )
  }
}

export default withRouter(EditActiveQuestionForm);