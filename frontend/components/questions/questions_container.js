import Questions from './questions';
import { updateQuestion, deleteQuestion } from '../../actions/questions';

const mapState = (state, props) => {
  const question = props.question;

  return {
    props: props.props,
    question,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Questions));