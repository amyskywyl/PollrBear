import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.question;
  }
  
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.setState({ question_type: '', body: '', group_id: 0 })); ;
  }
  
  render () {
    debugger
    const groups = this.props.groups.map((group, index) => {
      return (
        <option key={index} value={group.id}>{group.title}</option>
        )
      });

      debugger
      
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Question Type
            <input
              type="text"
              value={this.state.question_type}
              onChange={this.update('question_type')} />
          </label>

          <label>Question:
            <textarea
              value={this.state.body}
              onChange={this.update('body')} />
          </label>

          <div className="groups-dropdown">
            <select onChange={this.update('group_id')}>{groups}</select>
          </div>

          <input type="submit" value={this.props.formType} />
        </form>
        
      </div>
    )
  }
}

export default withRouter(QuestionForm);