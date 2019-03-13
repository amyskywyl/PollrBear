import React from 'react';
import GroupIndexItem from './group_index_item';
import GroupUngroupContainer from './create_group_form_container';
import EditGroupFormContainer from './edit_group_form_container';
import { Link } from 'react-router-dom';

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, showModal: false }
    this.handleModal = this.handleModal.bind(this);
    this.handleUngroup = this.handleUngroup.bind(this);
    this.question_ids =[];
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }
  componentDidMount() {
    this.props.fetchGroups();
    this.setState({ checked: event.target.unchecked })
  }
  
  handleModal() {
    this.props.openModal(this.question_ids);
    this.question_ids = [];
  }

  handleUngroup() {
    let ungrouped = this.props.groups[0];
    this.props.updateUngroup(ungrouped, this.question_ids)
      var items = document.getElementsByName('isGoing');
      for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox') {
          items[i].checked = false;
        }
      }
    this.question_ids = [];
  }

  handleCheckboxChange(id, event) {
    this.setState({ checked: event.target.checked})
    if (event.target.checked) {
      this.question_ids.push(id)
    } else {
      var index = this.question_ids.indexOf(id);
      this.question_ids.splice(index, 1);
    }
  }
  render() {
    const groups = this.props.groups.map(group => {
      return (
        <GroupIndexItem
          key={`group${group.id}`}
          group={group}
          deleteGroup={this.props.deleteGroup} 
          handleCheckboxChange={this.handleCheckboxChange}/>
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
        <div className="poll-container">
          <div className="top-bar">
            <button disabled={this.question_ids.length === 0} className={this.question_ids.length === 0 ? "disabled" : "abled"} onClick={this.handleModal}>Group</button>
            <button disabled={this.question_ids.length === 0} className={this.question_ids.length === 0 ? "disabled" : "abled"} onClick={this.handleUngroup}>Ungroup</button>
          </div>
          <ul className="poll-groups">
            {groups}
          </ul>
        </div>
      </div>
    );
  }
}

export default GroupIndex;