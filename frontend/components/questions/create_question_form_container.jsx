import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/questions';
import { fetchGroups } from '../../actions/groups'

const mapStateToProps = (state, ownProps) => {
  const question = { question_type: '', body: '', group_id: 0};
  const formType = 'Create';
  const groups = Object.values(state.entities.groups)
  return { question, groups, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups()),
    action: question => dispatch(createQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);