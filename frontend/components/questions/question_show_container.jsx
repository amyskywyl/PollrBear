import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { fetchQuestion } from '../../actions/questions';
import { updateQuestion } from '../../util/question_api_util';
import { updateActive, fetchActive } from '../../actions/active';

const mapStateToProps = (state, ownProps) => {
  debugger
  return({
    id: parseInt(ownProps.match.params.questionId),
    question: state.entities.questions[ownProps.match.params.questionId],
    choices: state.entities.choices,
    answers: state.entities.answers,
    activeId: state.entities.active.question_id,
    currentUser: state.entities.users[state.session.id],
    answerCount: answerCount(choices),
})};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateActive: questionId => dispatch(updateActive(questionId)),
  fetchActive: (user) => dispatch(fetchActive(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);