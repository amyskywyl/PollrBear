import  React from 'react';

class GroupsDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const groups = this.props.groups.map(group => {
      return (
        <select onChange={this.update('body')}>
        <option value={group.id}>{group.title}</option>
      </select>
      )
    })
    return (
      <div className="groups-dropdown">
        <ul>{groups}</ul>
      </div>
    )
  }
}

export default GroupsDropdown;