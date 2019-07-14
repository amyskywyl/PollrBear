import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { fetchQuestion, clearQuestion } from '../../actions/questions';
import { updateQuestion } from '../../util/question_api_util';
import { updateActive, fetchActive } from '../../actions/active';
import { allObjects, answerCount } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return({
    id: parseInt(ownProps.match.params.questionId),
    question: state.entities.questions[ownProps.match.params.questionId],
    choices: allObjects(state.entities.choices),
    answers: state.entities.answers,
    activeId: state.entities.active.question_id,
    currentUser: state.entities.users[state.session.id],
    answerCount: answerCount(state.entities.choices),
})};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  clearQuestion: () => dispatch(clearQuestion()),
  updateActive: questionId => dispatch(updateActive(questionId)),
  fetchActive: (user) => dispatch(fetchActive(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);