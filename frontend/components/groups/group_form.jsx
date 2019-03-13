import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleGroup = this.handleGroup.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleGroup() {
    let group = {title: this.state.title};
    this.props.action(group, this.props.questionIds).then(() =>{
      var items = document.getElementsByName('isGoing');
      for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
          items[i].checked = false;
      }
      this.props.closeModal()
    })
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render () {
    return (
      <div className="modal-dialog--content">
        <div className="modal-dialog--body">
          <h3>New Group</h3>
          "What should this group be named?"
          <div className="modal-dialog--prompt"><input onChange={this.update('title')} /></div>
        </div>
        <div className="modal-dialog--footer">
          <button className="modal-dialog--primary modal-dialog__btn" onClick={this.handleGroup}>Create group</button>
          <button className="modal-dialog--cancel" onClick={this.props.closeModal}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupForm);