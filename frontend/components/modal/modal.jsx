import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import GroupUngroupContainer from '../groups/create_group_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  return (
    <div className="modal-dialog">
      <div className="modal-dialog--backdrop" onClick={closeModal}></div>
      <div className="modal-dialog--shell" onClick={e => e.stopPropagation()}>
        <GroupUngroupContainer />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);