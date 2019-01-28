import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionForm from '../../actions/questions';

const mapStateToProps = (state, ownProps) => {
  const post = { question_type: '', body: '' };
  const formType = 'Create Question';

  return { question, formType };
};
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionForm from './question_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const post = { title: '', body: '' };
  const formType = 'Create Post';

  return { post, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: post => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);