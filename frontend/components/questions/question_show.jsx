import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleActive = this.handleActive.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    // this.props.fetchActive(this.props.currentUser);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.questionId !== nextProps.match.params.questionId) {
      this.props.fetchQuestion(nextProps.match.params.questionId);
      // this.props.fetchActive();
    }
  }

  handleActive(e) {
    // if (this.props.question.active) {
    //   this.props.updateActive({question_id: null});
    // } else {
    //   this.props.updateActive({question_id: this.props.question.id})
    // }
    this.props.updateActive(this.props.question.id)
  }

  render() {
    const { question, choices } = this.props;
    let choicesArr;
    if(choices){
      choicesArr = Object.values(choices).map((choice,index) => {
        return (
          <li key={index}>{choice.body}</li>
        )
      })
    }
    if (!question) {
      return <div>Loading...</div>;
    }
    if (question.unaccessible === true){
      return "No active question right now."
    }

    let buttonClassName = "";
    if (this.props.id === this.props.activeId) {
      buttonClassName = "active-button";
    }
    return(
      <div className="poll">
        <div className="poll-question">
          <h3>{question.body}</h3>
        </div>
        {/* <Link to="/groups">Back to Index</Link> */}
        <div className="poll-choices">
          {choicesArr}
        </div>
        <div className="chart-buttons">
          <button className={buttonClassName} onClick={this.handleActive} >Activate</button>

        </div>

      </div>
    )
  }
}

export default QuestionShow;