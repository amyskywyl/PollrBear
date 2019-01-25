import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './group_form';
import { fetchGroup, updateGroup } from '../../actions/groups';

const mapStateToProps = (state, ownProps) => {
  const group = { title: '' };
  const formType = 'Edit Group';

  return { group, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id)),
    action: group => dispatch(updateGroup(group)),
  };
};

class EditGroupForm extends React.Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.group.id !== this.props.match.params.groupId) {
      this.props.fetchGroup(this.props.match.params.groupId);
    }
  }

  render() {
    const { action, formType, group } = this.props;
    return (
      <GroupForm
        action={action}
        formType={formType}
        group={group} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupForm);