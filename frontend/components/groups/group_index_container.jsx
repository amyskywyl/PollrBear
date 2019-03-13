import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, deleteGroup, updateUngroup } from '../../actions/groups';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities }) => {
  return({
  groups: Object.keys(entities.groups).map(id => entities.groups[id])
})};

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  deleteGroup: (group) => dispatch(deleteGroup(group)),
  openModal: (questionIds) => dispatch(openModal(questionIds)),
  updateUngroup: (group, questionIds) => dispatch(updateUngroup(group, questionIds)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);