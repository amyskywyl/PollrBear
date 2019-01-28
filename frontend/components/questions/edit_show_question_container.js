import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditShowQuestion from './edit_show_question';
import { updateQuestion } from '../../actions/questions';

const mapStateToProps = (state) => {
  return {
    formType: 'Question'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuestion: (question) => dispatch(updateQuestion(question))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditShowQuestion));