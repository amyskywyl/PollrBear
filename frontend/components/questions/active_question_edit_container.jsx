import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import EditActiveQuestionForm from './active_question_edit';
import { fetchQuestion, activeQuestion } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => {
  const defaultQuestion = { question_type: '', body: '', group_id: 0 };
  const question = state.entities.questions[ownProps.match.params.questionId] || defaultQuestion;
  return { question };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    activeQuestion: (question) => dispatch(activeQuestion(question)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditActiveQuestionForm));