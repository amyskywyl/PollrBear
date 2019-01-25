import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.state = {
      username: 'pollrbear',
      password: 'bearbear'
    }
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  renderErrors() {
    return(
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Log in</h1>
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username:
              <input required type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input required type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input required className="session-submit" type="submit" value={this.props.formType} />
          </div>
        <div className="login-message">Need an account? {this.props.navLink}</div>
        </form>
        <div className="demo-login-form-container">
          <form onSubmit={this.handleDemo} className="login-form-box">
            <input required className="demo-session-submit" type="submit" value="Demo Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;