import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createGroup } from '../../actions/groups';

const mapStateToProps = (state, ownProps) => {
  const group = { title: ''};
  const formType = 'Create Group';
  return { group, formType };
};

const mapDispatchToProps = (dispatch) => {
  return{
    action: group => dispatch(createGroup(group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);