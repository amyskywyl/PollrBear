import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapStateToProps = ({ entities }, ownProps) => ({
  questions: Object.keys(entities.questions).map(id => entities.questions[id]),
  group: ownProps.group
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id, entities.questions[id].groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);