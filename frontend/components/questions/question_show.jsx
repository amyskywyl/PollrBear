import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAixs, YAxis, Tooltip, ResponseiveContainer} from 'recharts';

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
    let data = [];
    return(
      <div className="poll">
        {/* <div className="poll-question">
          <h3>{question.body}</h3>
        </div>
        {/* <Link to="/groups">Back to Index</Link> */}
        <div className="poll-choices">
          {choicesArr}
        </div>
        <div className="chart-buttons">
          <button className={buttonClassName} onClick={this.handleActive} >Activate</button>

        </div> */}


        {/* <BarChart width={730} height={250} data={choicesArr} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart> */}
      </div>
    )
  }
}

export default QuestionShow;