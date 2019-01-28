import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions, deleteQuestion } from '../../actions/questions';

const mapStateToProps = (state) => {
  return{
  questions: Object.keys(state.entities.questions).map(id => state.entities.questions[id])
  }
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);