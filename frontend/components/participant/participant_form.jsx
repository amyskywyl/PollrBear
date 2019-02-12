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
    //this.props.fetchActive(this.props.match.params.username)
  }

  componentDidMount() {
    this.props.fetchActive(this.props.match.params.username);
    //this.props.fetchQuestion(this.props.active_id)
    // .then(() => {
    //   return this.props.fetchChoices(this.props.question.id)
    //     .then(() => this.setState({ load: true }))
    // })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active_id !== nextProps.active_id) {
      this.props.fetchQuestion(nextProps.active_id);
      //this.setState({ load: true });
      // this.props.fetchActive();
    }
    if (this.props.choices !== nextProps.choices &&  !this.state.load) {
      //this.props.fetchQuestion(nextProps.active_id);
      this.setState({ load: true });
    }
  }

  handleEvents() {
    this.props.fetchActive(this.props.match.params.username);
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
  //  let answerRecorded;
  //  if(this.props.question.id !== -1) {
  //    responseRecorded = this.state.answered ? "Response recorded" : "You can response once";
  //  } else {
  //    responseRecorded = "As soon as " + this.props.match.params.username + " display a poll\
  //    we'll update this area to give you the voting options.\
  //    Easy as pie. Just hang tight, you're ready to go.";
  //  }

   let clearAnswer;
   if (this.state.answered) {
     clearAnswer = <button className="delete-answer" onClick={this.handleClear}>Clear Response</button>;
   }
   return (
     <div>
       <section className="participant-main-content">
        <div>
          <h1>{this.props.question[this.props.active_id].body}</h1>
          {/* <h2>{answerRecorded}</h2> */}
          <ul>{choices}</ul>
          {clearAnswer}
        </div>
       </section>
     </div>
   )
 }
}

export default ParticipantForm;