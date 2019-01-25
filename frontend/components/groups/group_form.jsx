import React from 'react';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.group;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
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
      <section className="questions">
      <ul>{this.errors()}</ul>
      <form className="group-form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.update('title')}/>
        <button>Create Group</button>
      </form>
      </section>
    );
  }
}

export default GroupForm;