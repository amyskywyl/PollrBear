import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.questionId !== this.props.match.params.questionId) {
  //     this.props.fetchQuestion(this.props.match.params.questionId);
  //   }
  // }

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
    return(
      <div className="poll">
        <h3 className="poll-question">{question.body}</h3>
        {/* <Link to="/groups">Back to Index</Link> */}
        <div className="poll-choices">
          {choicesArr}
        </div>
      </div>
    )
  }
}

export default QuestionShow;