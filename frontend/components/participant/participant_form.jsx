import React from 'react';

class ParticipantForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
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
    
    const pusher = new Pusher('c63d1e70a3b1cf4564ac', {
      cluster: 'us2',
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
    debugger
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
      debugger
      return (
      <h1>"As soon as {this.props.match.params.username} display a poll
      we'll update this area to give you the voting options.
      Easy as pie. Just hang tight, you're ready to go." </h1>
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
      clearAnswer = <button className="delete-answer" onClick={this.handleClear}>Clear Response</button>;
    }
    debugger
    return (
      <div>
        <section className="participant-main-content">
        <div>
          <h1>{this.props.question[this.props.active_id].body}</h1>
          <h2>{answerRecorded}</h2>
          <ul>{choices}</ul>
          {clearAnswer}
        </div>
        </section>
      </div>
    )
  }
}

export default ParticipantForm;