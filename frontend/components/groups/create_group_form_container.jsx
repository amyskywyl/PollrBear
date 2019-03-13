import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createRegroup, fetchGroups } from '../../actions/groups';
import { openModal, closeModal, clearModal } from '../../actions/modal_actions'; 

const mapStateToProps = (state, ownProps) => {
  const group = { title: ''};
  const formType = 'Create Group';
  return { 
    group, 
    formType,
    questionIds: state.ui.modal
   };
};

const mapDispatchToProps = (dispatch) => {
  return{
    action: (group, questionIds) => dispatch(createRegroup(group, questionIds)),
    closeModal: () => dispatch(closeModal()),
    clearModal: () => dispatch(clearModal()),
    fetchGroups: () => dispatch(fetchGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);