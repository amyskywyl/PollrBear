import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question.id != this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.match.params.questionId);
    }
  }

  render() {
    const { question } = this.props;
    if (!question) {
      return <div>Loading...</div>;
    }
    return(
      <div>
        <h3>{question.body}</h3>
        <Link to="/groups">Back to Index</Link>
      </div>
    )
  }
}

export default QuestionShow;