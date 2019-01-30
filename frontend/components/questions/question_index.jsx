import React from 'react';
import QuestionIndexItem from './question_index_item';
import CreateQuestionFormContainer from './create_question_form_container';

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    debugger
    const questions = this.props.questions.map((question, index) => {
      return (
        <QuestionIndexItem
          key={index}
          question={question}
          deleteQuestion={this.props.deleteQuestion} />
      );
    }); 

    return (
      <div>
        <ul>
          {questions}
        </ul>
        {/* <CreateQuestionFormContainer /> */}
      </div>
    );
  }
}

export default QuestionIndex;