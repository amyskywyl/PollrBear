import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, deleteGroup } from '../../actions/groups';

const mapStateToProps = ({ entities }) => {
  return({
  groups: Object.keys(entities.groups).map(id => entities.groups[id])
})};

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  deleteGroup: (group) => dispatch(deleteGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);