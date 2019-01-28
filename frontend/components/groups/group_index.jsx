import React from 'react';
import GroupIndexItem from './group_index_item';
import CreateGroupFormContainer from './create_group_form_container';
import EditGroupFormContainer from './edit_group_form_container';

class GroupIndex extends React.Component {

  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    const groups = this.props.groups.map(group => {
      return (
        <GroupIndexItem
          key={`group${group.id}`}
          group={group}
          deleteGroup={this.props.deleteGroup} />
      );
    });

    return (
      <div>
        <ul>
          {groups}
        </ul>
        <CreateGroupFormContainer />
      </div>
    );
  }
}

export default GroupIndex;