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
        <div className="app-discovery">
          <Link className="create-poll" to="/questions/new">Create</Link>
          <div className="app-discovery--title">
          Download the app
          </div>
          <p>
          Use the  app to embed polls in your slides.
          </p>
          <p>
          Select your presentation software to start the download.
          </p>
          <ul>
            <li>
              <div className="icon app-discovery--icon" data-glyph="powerpoint-logo-gray"></div>
            </li>
            <li>
              <div className="icon app-discovery--icon" data-glyph="keynote-logo-gray"></div>
            </li>
            <li>
              <div className="icon app-discovery--icon" data-glyph="googleslides-logo-gray"></div>
            </li>
          </ul>
        </div>
        <ul className="poll-groups">
          {groups}
        </ul>
      </div>
    );
  }
}

export default GroupIndex;