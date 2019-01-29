import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { fetchQuestion, updateQuestion } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => {
  const defaultQuestion = { question_type: '', body: '', groupd_id: 0};
  const question = state.entities.questions[ownProps.match.params.questionId] || defaultQuestion;
  const groups = Object.values(state.entities.groups)
  const formType = 'Update Question'
  return { question, groups, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    action: question => dispatch(updateQuestion(question)),
  };
};

class EditQuestionForm extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.questionId != this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.match.params.questionId);
    }
  }

  render() {
    const { action, formType, question, groups } = this.props;
    return (
      <QuestionForm
        action={action}
        formType={formType}
        question={question}
        groups={groups} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);