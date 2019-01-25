import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createGroup } from '../../actions/groups';

const mapStateToProps = (state, ownProps) => {
  const formType = 'Create Group';

  return { group, formType };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchGroup: id => dispatch(fetchGroup(id)),
    action: group => dispatch(createGroup(group)),
  };
};

class CreateGroupForm extends React.Component {
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


export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupForm);