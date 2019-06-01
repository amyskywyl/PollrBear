import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

class QuestionShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleActive = this.handleActive.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchActive(this.props.currentUser);
    const pusher = new Pusher('ad9fa68c4a14e101bb75', {
      cluster: 'us2',
      forceTLS: true,
      encrypted: true
    });

    Pusher.logToConsole = false;
    const channel = pusher.subscribe('my-channel');
    // channel.bind('pusher:subscription_succeeded', function (members) {
    //   console.log('subscribed successful');
    // });
    // channel.bind('pusher:subscription_error', function (status) {
    //   console.log('subscribed error: ' + status);
    // });
    channel.bind('my-event', this.handleEvents);
  }

  handleEvents(data) {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.questionId !== nextProps.match.params.questionId) {
      this.props.fetchQuestion(nextProps.match.params.questionId);
    }
  }

  renderToolTip(props) {
    if (props.payload[0]) {
      return (
        <div className="tool-tip">
          <h1>{props.label}</h1>
          <h2>Total Responses: {props.payload[0].payload.thisChoiceCount}</h2>
          <h2>Percentage: {Math.round(props.payload[0].value * 100)}%</h2>
        </div>
      );
    }
  }
  
  handleActive(e) {
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

    let buttonClassName = "control";
    if (this.props.id === this.props.activeId) {
      buttonClassName += " active-button";
    }
    let data = [];
    this.props.choices.forEach((choice, i) => {
      if (choice.answer_count === 0){
        data.push(
          {
            name: choice.body, answers: 0, thisChoiceCount: choice.answer_count, amt: 100, time: 1
          }
        )
      } else {
        data.push(
          {
            name: choice.body, answers: ((choice.answer_count) / this.props.answerCount).toFixed(2), thisChoiceCount: choice.answer_count, amt: 100, time: 1
          }
        )

      }
    });

    const ticks = [
      0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1
    ];

    const toPercent = (decimal, fixed =0) => {
      return `${(decimal * 100).toFixed(fixed)}%`;
    };


    return(
      <div className="chart">
        <div className="controls">
          <button className={buttonClassName} onClick={this.handleActive} >Activate</button>
        </div>

        <div className="chart-header">
          <div className="chart header--title">
            <div className="chart--title center">
              <span className="title">
                <h3>{question.body}</h3>
              </span>
              <div className="modality web">
                <span className="icon web--icon" m-icon-medium="" data-glyph="desktop" m-icon-wide=""></span>
                <span className="web--text">Respond at <a className="url emphasis" target="_blank" rel="noopener" href={"/#/" + this.props.currentUser.username}>{"/#/" + this.props.currentUser.username}</a></span>
              </div> 
            </div>
          </div>
        </div>
        
        <div className="chart-container">
          <ResponsiveContainer width="95%">
            <BarChart
              className="bar-chart"
              layout="vertical"
              data={data}
              maxBarSize={100}
              textAnchor="middle"
              stackOffset="expand"
              overflow="visible"
              thisresponses="hi"
              margin={{ top: 5, right: 50, left: 20, bottom: 5 }}>
              <XAxis
                domain={[0, 1]}
                type="number"
                ticks={ticks}
                tickCount={5}
                tickFormatter={toPercent}
                stroke="#000"
                fontSize={20 + "px"}
                fontWeight="bold"
              />
              <Tooltip content={this.renderToolTip} />
              <YAxis type="category" dataKey="name" stroke="#000" fontSize={20 + "px"} fontWeight="bold" overflow="visible" />

              <Bar dataKey="answers" label={{ fill: 'white', fontSize: 20, position: 'insideRight' }} isAnimationActive={false} fill="rgb(60, 116, 158)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="branding-footer">
          <p className="logo">
            <img className="logo-img" src={window.logoURL} />
            Poll'r Bear
          </p>
        </div>
      </div>
    )
  }
}

export default QuestionShow;