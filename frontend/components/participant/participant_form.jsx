import React from 'react';

class ParticipantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      load: Object.keys(this.props.choices).length > 0,
      choiceId: -1,
    };

    this.handleChoice = this.handleChoice.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchActive(this.props.match.params.username)
    
    const pusher = new Pusher('ad9fa68c4a14e101bb75', {
      cluster: 'us2',
      forceTLS: true,
      encrypted: true
    });

    Pusher.logToConsole = true;
    const channel = pusher.subscribe('answer_channel');
    channel.bind('pusher:subscription_succeeded', function (members) {
      console.log('subscribed successful');
    });
    channel.bind('pusher:subscription_error', function (status) {
      console.log('subscribed error: ' + status);
    });
    channel.bind('new-active', this.handleEvents);
  }
    
    componentWillReceiveProps(nextProps) {
      if (this.props.active_id !== nextProps.active_id) {
        this.props.fetchQuestion(nextProps.active_id);
      }
      else if (this.props.choices !== nextProps.choices &&  !this.state.load) {
        this.setState({ load: true });
      }
    }

  handleEvents() {
    this.setState({ load: false });
    this.props.fetchActive(this.props.match.params.username)
  }

  handleChoice(id, body) {
    this.setState({answered: true, choiceId: id});
    this.props.createAnswer(
      {
          answer: {
            body: body,
            choice_id: id
          }
      }
    );
  }

  handleClear() {
    this.props.deleteAnswer(this.state.choiceId);
    this.setState({choice: -1, answered: false});
  }

  render() {
    if (this.props.active_id === -1) {
      return (
        <div className="active-poll">
          <div className="hold-screen">
            <h1 className="header">Welcome to {this.props.match.params.username}'s presentation</h1>
            <div className="callout">
              <div className="instruction">
                  As soon as {this.props.match.params.username} display a poll, we'll update this area to give you the voting options.
              </div>
              <div className="instruction">Easy as pie. Just hang tight, you're ready to go.</div>
            </div>
          </div>
        </div>
      )
    }
     if(!this.state.load) {
       return null
     }

    const choices = (
      Object.values(this.props.choices).map((choice, i) => {
        let className ="";
        if (this.state.choiceId === choice.id ) {
          className = "participant-form selected"
        }
        return (
          <li key={i}>
            <button disabled={this.state.answered} className={className} onClick={e => this.handleChoice(choice.id, choice.body)}>
              {choice.body}
            </button>
          </li>
        )
      })
    );
    const answerRecorded = this.state.answered ? "Answer recorded" : "You can answer once";

    let clearAnswer;
    if (this.state.answered) {
      clearAnswer = <button className="delete-answer" onClick={this.handleClear}>Clear last response</button>;
    }
    return (
      <div className="active-poll">
        <section className="component-response-multiple-choice">
          <div className="component-response-multiple-choice">
            <div className="component-response-header">
              <div className="component-response-header__title">{this.props.question[this.props.active_id].body}</div>
              <div className="component-response-header__status">{answerRecorded}</div>
            </div>
            <div className="component-response-multiple-choice__body">
              <ul>{choices}</ul>
            </div>
            {clearAnswer}
          </div>
        </section>
      </div>
    )
  }
}

export default ParticipantForm;