import React from 'react';
import GroupIndexItem from './group_index_item';
import CreateGroupFormContainer from './create_group_form_container';
import EditGroupFormContainer from './edit_group_form_container';
import { Link } from 'react-router-dom';

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
      <div className="poll-body">
        <Link className="create-poll" to="/questions/new">Create</Link>

        <ul className="poll-groups">
          {groups}
        </ul>
      </div>
    );
  }
}

export default GroupIndex;