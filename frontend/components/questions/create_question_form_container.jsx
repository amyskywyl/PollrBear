import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/questions';
import { fetchGroups } from '../../actions/groups'

const mapStateToProps = (state, ownProps) => {
  const question = { question_type: '', body: '', group_id: 0};
  const choices = { choice1: '', choice2: ''};
  const formType = 'Create';
  const groups = Object.values(state.entities.groups)
  return { question, choices, groups, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups()),
    createQuestion: (question, choices) => dispatch(createQuestion(question, choices)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);