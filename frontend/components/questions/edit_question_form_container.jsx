import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import EditQuestionForm from './edit_question_form';
import { fetchQuestion, updateQuestion } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => {
  const defaultQuestion = { question_type: '', body: '', group_id: 0};
  const choices = state.entities.choices;
  const question = state.entities.questions[ownProps.match.params.questionId] || defaultQuestion;
  // const groups = Object.values(state.entities.groups)
  const formType = 'Edit'
  return { question, choices, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    updateQuestion: (question, choices) => dispatch(updateQuestion(question, choices)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm));