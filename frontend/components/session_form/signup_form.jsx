import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h1>Create your account</h1>
          <br />
          {this.renderErrors()}
          <div className="signup-form">
            <br />
            <label>First name:
              <input required type="text"
                value={this.state.firstname}
                onChange={this.update('firstname')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Last name:
              <input required type="text"
                value={this.state.lastname}
                onChange={this.update('lastname')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Email:
              <input required type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Password:
              <input required type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value="Create my Pollr Bear account" />
          </div>
        <div className="signup-message">Already have an account? {this.props.navLink}</div>
        </form>
      </div>
    );
  }
}

export default SignupForm;