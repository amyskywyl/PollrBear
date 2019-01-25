import { connect } from 'react-redux';
import GroupForm from './group_form';
import { updateGroup } from '../../actions/groups';

const mapStateToProps = (state, ownProps) => {
  const post = { title: '' };
  const formType = 'Edit Group';

  return { group, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: group => dispatch(updateGroup(group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);