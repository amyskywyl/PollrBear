import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, deleteGroup } from '../../actions/groups';

const mapStateToProps = ({ entities }) => {
  debugger
  return({
  groups: Object.keys(entities.groups).map(id => entities.groups[id])
})};

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  deleteGroup: id => dispatch(deleteGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);