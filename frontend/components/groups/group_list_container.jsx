import { connect } from 'react-redux';
import { fetchGroups, createGroup, deleteGroup, updateGroup, receiveUngroupedId, createRegroup }
  from '../../actions/group_actions';
import GroupList from './group_list';
import { allObjects } from '../../reducers/selectors';
import { selectElement, deselectElement } from '../../actions/selection_actions';
import { updateQuestion } from '../../actions/questions';
import { fetchActive } from '../../actions/active';

const mapStateToProps = ({ groups, errors }, ownProps) => ({
  groups: allObjects(groups),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createGroup: (group) => dispatch(createGroup(group)),
  deleteGroup: (group) => dispatch(deleteGroup(group)),
  updateGroup: (group) => dispatch(updateGroup(group)),
  selectElement: (group, type) => dispatch(selectElement(group, type)),
  deselectElement: (group, type) => dispatch(deselectElement(group, type)),
  receiveUngroupedId: (id) => dispatch(receiveUngroupedId(id)),
  createRegroup: (group, questions) => dispatch(createRegroup(group, questions)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  fetchActive: () => dispatch(fetchActive())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);