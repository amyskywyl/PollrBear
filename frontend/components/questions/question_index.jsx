import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndex extends React.Component {

  componentDidMount() {
    // debugger
    this.props.fetchQuestions();
  }

  render() {
    debugger
    const questions = this.props.group.questions.map(question => {
      return (
        <QuestionIndexItem
          key={question.id}
          question={question}
          deleteQuestion={this.props.deleteQuestion} />
      );
    });

    return (
      <div>
        <ul>
          {questions}
        </ul>
        {/* <CreateGroupFormContainer /> */}
      </div>
    );
  }
}

export default QuestionIndex;