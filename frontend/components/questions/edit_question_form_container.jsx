import React from 'react';
import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import { fetchQuestion, updateQuestion } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => {
  const defaultQuestion = { question_type: '', body: '', group_id: 0};
  const choices = { choice1: Object.values(state.entities.choices)[0], choice2: Object.values(state.entities.choices)[1] };
  const question = state.entities.questions[ownProps.match.params.questionId] || defaultQuestion;
  // const groups = Object.values(state.entities.groups)
  const formType = 'Edit'
  return { question, choices, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchGroups: () => dispatch(fetchGroups()),
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    updateQuestion: (question, choices) => dispatch(updateQuestion(question, choices)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);