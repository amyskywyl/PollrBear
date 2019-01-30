import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.question
  }
  
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.props.question, this.state);
    this.props.action(question).then(this.setState({ question_type: '', body: '', group_id: 0 })); ;
  }
  
  render () {
    const groups = this.props.groups.map((group, index) => {
      return (
        <option key={index} value={group.id}>{group.title}</option>
        )
      });
 
    return (
      <div className="columns">
        <Link to="/groups" className="x-btn">
          x
        </Link>
        <div className="poll-body">
          <form onSubmit={this.handleSubmit}>
            <label>Question Type
              {this.tabs()}
            </label>

            <label>
              <input
                className="question-body"
                name="Question"
                value={`Question: ${this.props.question.body}`}
                onChange={this.update('body')} />
            </label>
            <div className="activity-creator">
              <div className="groups-dropdown">
                <select onChange={this.update('group_id')}>{groups}</select>
              </div>
            </div>

            <input type="submit" value={this.props.formType} />
          </form>
          
        </div>
      </div>
    )
  }

  tabs () {
    return (
      <div className="tabs">
        <div id="multiple_choice" onClick={() => this.setState({question_type: "Multiple choice"})}>Multiple Choice</div>
        <div id="word_cloud" onClick={() => this.setState({ question_type: "Word cloud" })}>Word cloud</div>
        <div id="QnA" onClick={() => this.setState({ question_type: "Word cloud" })}>Word cloud</div>
        <div id="Clickable image" onClick={() => this.setState({ question_type: "Clickable image" })}>Clickable image</div>
      </div>
    )
  }
}

export default withRouter(QuestionForm);