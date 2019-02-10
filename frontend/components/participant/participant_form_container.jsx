import { connect } from 'react-redux';
import ParticipantForm from './participant_form';
import { fetchActive } from '../../actions/active';
import { createAnswer, deleteAnswer } from '../../actions/answer';
import { fetchChoices } from '../../actions/choices';
import { fetchQuestion } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return({
    answers: state.entities.answers,
    choices: state.entities.choices,
    active_id: state.entities.active.question_id,
    question: state.entities.questions,

  })
};

const mapDispatchToProps = (dispatch) => ({
  createAnswer: params => dispatch(createAnswer(params)),
  fetchChoices: question_id => dispatch(fetchChoices(question_id)),
  fetchQuestion: question_id => dispatch(fetchQuestion(question_id)),
  fetchActive: username => dispatch(fetchActive(username)),
  deleteAnswer: choice_id => dispatch(deleteAnswer(choice_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantForm);