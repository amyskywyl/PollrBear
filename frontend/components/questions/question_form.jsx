import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import merge from 'lodash/merge';


class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateType = this.updateType.bind(this);
    this.state = {
      body: "",
      group_id: this.props.groups[0].id,
      choices: { 0: { body: '' }, 1: { body: '' } },
      choiceCount: 2,
      question_type: "",
    }
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({['choiceCount']: this.state.choiceCount + 1,
    ['choices']:
    merge({}, this.state.choices, {[this.state.choiceCount]: {body: ''}})
    });
  }

  updateChoices(i) {
    return e => (this.setState({['choices']: merge({}, this.state.choices, {[i]: {body: e.target.value}})}))
  }

  deleteChoice(i) {
    let newState = merge({}, this.state);
    delete newState.choices[i];
    this.setState(newState);
  }
  
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateType(type) {
    return (e) => {
      this.setState({question_type: type})
    }
  }
  
  componentDidMount() {
    this.props.fetchGroups();
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.createQuestion(question, question.choices).then( (response) => {
    this.props.history.push(`/questions/${response.question.id}`);
    })
  }
  
  render () {
    let choiceList = [];
    Object.keys(this.state.choices).forEach( i => {
      choiceList.push(
        <div key={i} className="responses">
          <input key={i} type="text" placeholder={"Choices goes here"}
          onChange={this.updateChoices(i)}
          value={this.state.choices[i]['body']}/>
          <button onClick={e => (this.deleteChoice(i))} className="trashcan"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      )
    })
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
              <div className="tabs">
                <div tabIndex="0" role="button" className="component-picker__btn component-picker__btn--active" data-identifier="multiple-choice" onClick={this.updateType("Multiple choice")}>
                  <div className="component-picker__btn__image-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 104" className="component-picker__btn__image" title="Multiple choice">
                      <g fill="none" fillRule="evenodd">
                        <path fill="#60E2DC" d="M33 20.7h104.8v26H33zM33 56.3h76.6v26H33z"></path>
                        <path fill="#4F4F4F" d="M16.3 26.9h2.2l5.3 15.7h-2.1l-1.5-4.8h-5.7L13 42.6h-2l5.3-15.7zM15 36.2h4.7l-.7-2.4c-.6-1.7-1.1-3.5-1.6-5.3h-.1c-.5 1.8-1 3.5-1.6 5.3l-.7 2.4zM13 61.5h4.7c3.2 0 5.4 1.1 5.4 3.8 0 1.6-.8 2.9-2.3 3.4v.1c1.9.4 3.2 1.6 3.2 3.8 0 3.1-2.4 4.6-6 4.6h-5V61.5zm4.3 6.7c2.7 0 3.8-1 3.8-2.6 0-1.8-1.2-2.5-3.7-2.5H15v5.1h2.3zm.4 7.4c2.7 0 4.3-1 4.3-3.1 0-1.9-1.5-2.8-4.3-2.8H15v5.9h2.7z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="component-picker__btn__title" >Multiple Choice</div>
                </div>

                <div tabIndex="0" role="button" className="component-picker__btn" data-identifier="word-cloud" onClick={this.updateType("Word cloud")}>
                  <div className="component-picker__btn__image-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 104" className="component-picker__btn__image" title="Word cloud">
                      <g fill="none" fillRule="evenodd">
                        <path fill="#60E2DC" d="M24.6 13.8h4.2l4.9 15.6H30l-1-3.7h-4.8l-1 3.7h-3.6l5-15.6zm.4 9.1h3.3l-.4-1.4c-.4-1.6-.9-3.4-1.3-5h-.1c-.4 1.6-.8 3.5-1.2 5l-.3 1.4zM34 17.5h3.5l1.1 5.5c.2 1.2.3 2.3.5 3.5h.1c.2-1.2.4-2.4.7-3.5l1.3-5.5h3l1.3 5.5c.3 1.2.5 2.3.7 3.5h.1c.2-1.2.3-2.3.6-3.5l1.1-5.5h3.3l-2.8 11.9h-4.1l-1.1-4.7c-.2-1.1-.4-2.2-.6-3.5h-.1c-.2 1.3-.4 2.4-.6 3.5l-1.1 4.7h-4L34 17.5zM52.6 23.4c0-3.8 2.7-6.2 5.6-6.2 3.4 0 5 2.5 5 5.7 0 .6-.1 1.3-.1 1.6H56c.3 1.7 1.5 2.5 3.1 2.5.9 0 1.7-.3 2.6-.8l1.2 2.1c-1.2.8-2.8 1.3-4.2 1.3-3.5 0-6.1-2.3-6.1-6.2zm7.7-1.3c0-1.3-.6-2.2-2-2.2-1.1 0-2.1.7-2.3 2.2h4.3zM64.7 28l1.6-2.2c1.1.8 2.1 1.2 3.1 1.2 1.1 0 1.5-.4 1.5-1 0-.8-1.2-1.1-2.4-1.6-1.4-.6-3.1-1.5-3.1-3.5 0-2.2 1.8-3.7 4.5-3.7 1.8 0 3.2.7 4.2 1.5l-1.6 2.1c-.9-.6-1.7-1-2.5-1-.9 0-1.3.3-1.3.9 0 .8 1.1 1.1 2.3 1.5 1.5.6 3.2 1.4 3.2 3.6s-1.7 3.8-4.9 3.8c-1.7 0-3.5-.6-4.6-1.6zM75.6 23.4c0-3.9 2.8-6.2 5.8-6.2s5.8 2.3 5.8 6.2c0 3.9-2.8 6.2-5.8 6.2s-5.8-2.2-5.8-6.2zm8 0c0-2.1-.7-3.4-2.2-3.4-1.5 0-2.2 1.3-2.2 3.4 0 2.1.7 3.4 2.2 3.4 1.4 0 2.2-1.3 2.2-3.4zM89.6 17.5h2.9l.2 1.5h.1c1-1 2-1.8 3.6-1.8 1.7 0 2.7.7 3.3 2 1.1-1.1 2.2-2 3.7-2 2.6 0 3.7 1.8 3.7 4.8v7.4h-3.5v-6.9c0-1.7-.5-2.2-1.5-2.2-.6 0-1.3.4-2 1.1v8h-3.5v-6.9c0-1.7-.5-2.2-1.5-2.2-.6 0-1.3.4-2 1.1v8h-3.5V17.5zM109.4 23.4c0-3.8 2.7-6.2 5.6-6.2 3.4 0 5 2.5 5 5.7 0 .6-.1 1.3-.1 1.6h-7.1c.3 1.7 1.5 2.5 3.1 2.5.9 0 1.7-.3 2.6-.8l1.2 2.1c-1.2.8-2.8 1.3-4.2 1.3-3.5 0-6.1-2.3-6.1-6.2zm7.6-1.3c0-1.3-.6-2.2-2-2.2-1.1 0-2.1.7-2.3 2.2h4.3z"></path>
                        <path fill="#4F4F4F" d="M5.4 58.1L7 56.2c1.1 1.1 2.6 1.8 4.1 1.8 1.8 0 2.7-.8 2.7-2 0-1.3-1-1.7-2.4-2.3l-2.2-.9C7.7 52.2 6 50.9 6 48.6c0-2.5 2.2-4.4 5.3-4.4 1.8 0 3.6.8 4.8 2L14.7 48c-1-.8-2.1-1.3-3.4-1.3-1.5 0-2.5.7-2.5 1.8 0 1.2 1.2 1.7 2.5 2.2l2.1.9c1.8.8 3.2 2 3.2 4.2 0 2.5-2.1 4.6-5.6 4.6-2 0-4.1-.8-5.6-2.3zM18.1 48.4h2.8l1.4 6.1c.2 1.1.4 2.2.6 3.4h.1c.2-1.1.5-2.3.7-3.4l1.5-6.1h2.5l1.6 6.1c.3 1.1.5 2.2.8 3.4h.1c.2-1.1.4-2.2.6-3.4l1.4-6.1h2.6l-3 11.7h-3.3l-1.4-5.5c-.3-1.1-.5-2.2-.7-3.4h-.1c-.2 1.2-.4 2.3-.7 3.4l-1.3 5.5h-3.2l-3-11.7zM36.3 54.3c0-3.8 2.7-6.2 5.4-6.2 3.2 0 4.9 2.3 4.9 5.6 0 .5 0 1.1-.1 1.3H39c.2 2.1 1.6 3.3 3.5 3.3 1 0 1.9-.3 2.7-.9l.9 1.7c-1.1.7-2.5 1.3-4 1.3-3.3 0-5.8-2.3-5.8-6.1zm7.8-1.2c0-1.8-.8-2.9-2.4-2.9-1.4 0-2.6 1-2.8 2.9h5.2zM48.4 54.3c0-3.8 2.7-6.2 5.4-6.2 3.2 0 4.9 2.3 4.9 5.6 0 .5 0 1.1-.1 1.3h-7.5c.2 2.1 1.6 3.3 3.5 3.3 1 0 1.9-.3 2.7-.9l.9 1.7c-1.1.7-2.5 1.3-4 1.3-3.3 0-5.8-2.3-5.8-6.1zm7.9-1.2c0-1.8-.8-2.9-2.4-2.9-1.4 0-2.6 1-2.8 2.9h5.2zM61.4 56.1v-5.6h-1.7v-2.1l1.8-.1.3-3.2h2.3v3.2h3v2.2h-3v5.6c0 1.4.5 2.1 1.6 2.1.4 0 .9-.1 1.2-.3l.5 2c-.6.2-1.5.4-2.4.4-2.6.1-3.6-1.6-3.6-4.2z"></path>
                        <path fill="#4F4F4F" d="M39.6 71.3H51v2.8h-8v5.4h6.9v2.8H43v7.9h-3.4M53.4 85v-9h3.3v8.5c0 2.3.7 3.2 2.2 3.2 1.2 0 2.1-.6 3.2-2V76h3.3v14.2h-2.7l-.3-2.1h-.1c-1.2 1.5-2.6 2.4-4.6 2.4-2.9.1-4.3-1.9-4.3-5.5zM69.7 76h2.8l.2 1.9h.1c1.3-1.2 2.7-2.3 4.7-2.3 3 0 4.4 2.1 4.4 5.7v8.9h-3.3v-8.5c0-2.3-.7-3.2-2.2-3.2-1.2 0-2.1.6-3.2 1.8v9.9h-3.3V76h-.2zM77.7 68.6v-3.4c0-2.1.6-3.7 2.5-3.7.9 0 1.9.5 2.2 1.3h.1c.3-1 1-1.8 2.4-1.8 2.1 0 3 1.7 3 3.9v3.7H77.7zm4-3.4c0-1.1-.5-1.6-1.2-1.6-.8 0-1.1.5-1.1 1.6v1.1h2.3v-1.1zM86 65c0-1.2-.4-1.9-1.4-1.9-.9 0-1.2.6-1.2 1.9v1.3H86V65zM83.9 59.9c-2.5 0-4-1.8-4-3.6 0-2.2 1.6-3.3 3.7-3.3.4 0 .8 0 1 .1v4.6c1.1-.2 1.6-1 1.6-2 0-.6-.2-1.1-.5-1.7l1.4-.8c.5.8.9 1.8.9 2.7 0 2.3-1.5 4-4.1 4zm-.8-5c-.8 0-1.5.4-1.5 1.3 0 .7.5 1.3 1.5 1.5v-2.8zM86.9 52.1l-1.4-1c.5-.7.8-1.3.8-2s-.2-1-.6-1c-.5 0-.7.8-1 1.6-.4.9-1 2-2.3 2-1.4 0-2.4-1.2-2.4-2.9 0-1.2.5-2 1-2.7l1.4 1c-.4.6-.6 1.1-.6 1.6 0 .6.2.9.6.9.5 0 .7-.7 1-1.5.4-1 .9-2.1 2.3-2.1s2.5 1.1 2.5 3.1c-.2 1.1-.7 2.2-1.3 3zM85 44.6h-3.1v1h-1.7l-.1-1.2-2-.3v-1.9h2v-1.8h1.8v1.8H85c.9 0 1.2-.4 1.2-1 0-.2-.1-.5-.2-.7l1.7-.4c.1.4.3 1 .3 1.7 0 2.1-1.2 2.8-3 2.8z" opacity=".7"></path>
                        <path fill="#4F4F4F" d="M95.7 44.1c0-3.7 2.5-5.8 5.4-5.8 1.6 0 2.8.7 3.5 1.4l-1.3 1.6c-.6-.5-1.1-.9-2.1-.9-1.7 0-2.9 1.3-2.9 3.6s1 3.6 3.1 3.6c.5 0 .9-.1 1.2-.3v-1.9h-1.8v-2h4.1v5.1c-.8.7-2.1 1.3-3.7 1.3-3.2 0-5.5-2-5.5-5.7zM106.8 41.1h2l.2 1.5h.1c.6-1.1 1.5-1.7 2.4-1.7.5 0 .8.1 1 .2l-.4 2.2c-.3-.1-.6-.1-.9-.1-.6 0-1.4.4-1.9 1.6v4.9h-2.5v-8.6zM113 45.4c0-2.7 2-4.4 4-4.4 2.4 0 3.6 1.8 3.6 4.1 0 .4-.1.9-.1 1.1h-5.1c.2 1.2 1.1 1.8 2.2 1.8.6 0 1.2-.2 1.8-.6l.8 1.5c-.9.6-2 1-3 1-2.4-.1-4.2-1.7-4.2-4.5zm5.4-.9c0-.9-.4-1.6-1.4-1.6-.8 0-1.5.5-1.6 1.6h3zM121.7 47.2c0-1.8 1.4-2.7 4.8-3.1-.1-.7-.4-1.2-1.3-1.2-.7 0-1.4.3-2.2.8l-1-1.7c1.1-.6 2.3-1.1 3.6-1.1 2.2 0 3.4 1.2 3.4 3.8v4.8h-2l-.2-.9h-.1c-.7.6-1.5 1.1-2.5 1.1-1.5.1-2.5-1-2.5-2.5zm4.7-.1v-1.5c-1.8.2-2.4.7-2.4 1.4 0 .5.4.8 1 .8.6.1 1-.2 1.4-.7zM131.1 46.5v-3.4h-1.2v-1.9l1.3-.1.3-2.2h2.1v2.2h2v2h-2v3.4c0 1 .4 1.3 1.1 1.3.3 0 .6-.1.8-.2l.4 1.8c-.4.1-1.1.3-1.9.3-2.1.1-2.9-1.2-2.9-3.2z"></path>
                        <path fill="#60E2DC" d="M99.9 69.6c0-5.1 3.2-8.2 7.1-8.2 2 0 3.5.9 4.5 2l-1.5 1.8c-.8-.8-1.7-1.4-3-1.4-2.6 0-4.4 2.2-4.4 5.7 0 3.6 1.7 5.7 4.3 5.7 1.4 0 2.5-.6 3.3-1.6l1.5 1.7c-1.3 1.5-2.9 2.3-4.9 2.3-3.8.1-6.9-2.8-6.9-8zM113.5 71.6c0-3.9 2.7-6.2 5.6-6.2 2.9 0 5.6 2.2 5.6 6.2 0 3.9-2.7 6.1-5.6 6.1-3 0-5.6-2.3-5.6-6.1zm8.3 0c0-2.4-1.1-3.9-2.8-3.9-1.7 0-2.7 1.6-2.7 3.9s1 3.9 2.7 3.9c1.8-.1 2.8-1.6 2.8-3.9zM126.6 71.6c0-3.9 2.7-6.2 5.6-6.2 2.9 0 5.6 2.2 5.6 6.2 0 3.9-2.7 6.1-5.6 6.1-3 0-5.6-2.3-5.6-6.1zm8.3 0c0-2.4-1.1-3.9-2.8-3.9-1.7 0-2.7 1.6-2.7 3.9s1 3.9 2.7 3.9c1.8-.1 2.8-1.6 2.8-3.9zM140.5 74.4V60.5h2.7v14c0 .7.3.9.6.9h.4l.4 2.1c-.3.1-.8.2-1.5.2-1.9 0-2.6-1.3-2.6-3.3z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="component-picker__btn__title" >Word cloud</div>
                </div>
                <div tabIndex="0" role="button" className="component-picker__btn" data-identifier="up-down-vote" onClick={this.updateType("QnA")}><div className="component-picker__btn__image-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 104" className="component-picker__btn__image" title="Q&amp;A"><g fill="none" fillRule="evenodd"><path fill="#000" d="M26 39.5L18.5 32l-2.7-2.7L13 32l-7.4 7.5 2.7 2.7 7.5-7.5 7.4 7.5"></path><path fill="#848484" d="M5.6 60.7l7.4 7.5 2.8 2.7 2.7-2.7 7.5-7.5-2.8-2.7-7.4 7.5L8.3 58" opacity=".35"></path><path fill="#4F4F4F" d="M129.4 47H57.6c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h71.8c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7zM122.6 54.7h-65c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h65c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7z" opacity=".7"></path><path fill="#60E2DC" d="M137.7 34.7H49.3c-3.2 0-5.8 2.6-5.8 5.8v17.6c0 3.2 2.6 5.8 5.8 5.8h.5v8.6c0 .5.1 1.1.5 1.5.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l10.1-10.1h74.5c3.2 0 5.8-2.6 5.8-5.8V40.5c0-3.2-2.6-5.8-5.8-5.8zm1.9 23.4c0 1.1-.9 1.9-1.9 1.9H62.5c-.5 0-1 .1-1.4.5l-7.4 7.4v-6c0-1.1-.9-1.9-1.9-1.9h-2.4c-1.1 0-1.9-.9-1.9-1.9V40.5c0-1.1.9-1.9 1.9-1.9h88.4c1.1 0 1.9.9 1.9 1.9v17.6h-.1z"></path></g></svg></div>
                  <div className="component-picker__btn__title" >Q&amp;A</div>
                </div>

                <div tabIndex="0" role="button" className="component-picker__btn" data-identifier="clickable-image" onClick={this.updateType("Clickable image")}><div className="component-picker__btn__image-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 104" className="component-picker__btn__image" title="Clickable image"><g fill="none" fillRule="evenodd"><path fill="#60E2DC" d="M116.6 99.1c-.3 0-.7-.1-.9-.3-5.9-4.8-6.5-8-6.9-10.2-.2-1-.3-1.3-.6-1.6-1-1-3.3-1-6.3-1.1-1.4 0-2.9-.1-4.6-.2h-.8c-1.1 0-1.5.2-1.5.3-.1.1 0 .4.1.6.1.2.2.4.2.7 0 .8-.7 1.5-1.5 1.5h-.2c-3.1-.4-5.5-.6-7.2-.6-3 0-3.9.5-5.1 1.3-.9.6-2 1.3-3.9 1.9-1.3.4-2.2 1.1-2.6 2-.7 1.5-.2 3.3 0 3.7.1.2.1.4.1.6 0 .8-.7 1.5-1.5 1.5h-.1c-5.3-.2-6.9-3.8-8.4-7.3-.5-1.2-1-2.3-1.7-3.5-.6-.9-1-1.3-1.3-1.3-.6 0-1.5 1.1-1.9 1.9-.2.4-.5.6-.9.7-.4.1-.8.1-1.2-.1l-.1-.1c-2.1-1.2-2.2-1.5-4.4-5.4l-.4-.7c-.8-1.5-2-2.2-3.5-2.2-1.1 0-2 .4-2 .4-.3.1-.7.2-1 .1-13.9-3.8-24.2-10.9-29-20-3.1-5.9-3.7-12.1-1.7-17.6 3.9-11.2 4.7-19.5 4.7-19.6 0-.5.3-1 .8-1.2.5-.2 1-.2 1.4 0l1.8 1v-.1c0-.5.2-1 .6-1.3.4-.3.9-.4 1.4-.2 19.2 6.5 42.7 7 49.4 7h1.8c.3 0 .6.1.8.2 1.7 1.1 6.8 1.8 9.7 2.1.4 0 .9.3 1.1.6.7 1.1.1 2.2-.6 3.1l1.2-.3c1.3-.3 2.5-.6 3.5-.6 2.2 0 2.9 1.3 3.2 2.1.3 1.1.2 2.7-.2 5 0-.1.1-.2.1-.4.9-2.1 2.7-3.3 5.1-3.3 1.4 0 2.5.5 3.4 1.6 1.8 2.2 1.9 6.2 1.7 8.8 3.3-1.4 4-4.8 4.1-4.8.1-.7.7-1.1 1.4-1.2 4-.3 4.9-4.3 4.9-4.5.1-.6.6-1.1 1.2-1.2 4.8-.9 7.8-3.2 7.8-4.3 0-5.1 2.7-6.5 4.3-6.5.8 0 1.5.3 2 .8s.8 1.2.8 2c-.1 2.5.8 3.5 1.5 4.3.5.5 1 1.1 1 2.1 0 .6-.4 1.2-1 1.6-4.7 3.8-3 7.1-2.7 7.5.3.4.3.9.2 1.4-.2.5-.6.8-1.1.9-2.2.5-4.6 2.4-6 5-1.3 2.3-1.7 4.8-1 6.8 1.8 5.3-.3 10.9-6.2 16.1-4 3.5-5.3 5.7-1.3 11.1 5.4 7.3 1.5 12.7 1.3 13-.2.3-.6.5-1 .6-.1-.2-.2-.2-.3-.2zM61.8 84c1.5 0 2.8.9 3.9 2.8.8 1.3 1.4 2.6 1.9 3.8 1.2 2.8 2.1 4.4 3.8 5.1-.1-1.1 0-2.4.6-3.7.8-1.7 2.3-2.9 4.4-3.6 1.6-.5 2.4-1 3.2-1.6 1.4-.9 2.8-1.8 6.7-1.8 1.5 0 3.4.1 5.7.4.1-.4.2-.8.4-1.2.7-1.1 2.1-1.7 4-1.7.3 0 .7 0 1.1.1 1.6.1 3 .2 4.4.2 3.6.1 6.4.1 8.3 1.9 1 1 1.3 2.1 1.5 3.3.3 1.6.7 3.8 4.4 7.2.5-1.6.6-4.4-2-7.9-2.6-3.4-3.5-6.2-2.9-8.8.5-2.4 2.1-4.2 4.6-6.3 3.4-3 7.1-7.7 5.3-12.9-1-2.9-.5-6.1 1.2-9.2 1.5-2.7 3.9-4.8 6.3-5.9-.2-.6-.3-1.2-.3-2 0-1.8.7-4.5 3.8-7.3-.8-.9-2.1-2.6-2.1-5.8-.4.3-1.1 1.2-1.1 3.4 0 3.4-4.7 6-9.3 7.1-.7 2.1-2.6 5-6.3 5.8-.9 2.5-3.3 6-8.2 6.7-.5.1-.9-.1-1.3-.4-.3-.3-.5-.8-.4-1.3.4-2.5.5-7-.8-8.6-.3-.4-.6-.5-1.1-.5-2.3 0-2.8 1.5-3.1 5.8-.1 1.2-.2 2.4-.4 3.4-.5 1.9-1.7 2.4-2.6 2.5-.9.1-1.7-.2-2.2-.9-1.3-1.5-.9-4.4-.1-9 .3-1.9.7-4.5.5-5.3h-.3c-.7 0-1.7.2-2.8.5-1.4.3-3 .7-4.5.7-.7 0-1.4-.1-2-.3-.5-.2-.9-.6-1-1.2-.1-.6.1-1.1.6-1.5.6-.5 1.3-1 1.8-1.5-2.5-.3-6.2-.9-8.2-2h-1.4c-6.6 0-29-.5-48.2-6.4l.1.7c0 .6-.2 1.1-.7 1.4-.5.3-1.1.3-1.6 0L23.1 27c-.5 3.3-1.7 9.9-4.6 18-1.7 4.7-1.1 10.1 1.6 15.2 4.4 8.3 13.8 14.8 26.7 18.4.6-.2 1.5-.4 2.7-.4 2.6 0 4.8 1.3 6.1 3.7l.4.7c1 1.8 1.5 2.8 1.9 3.3l.3.3c.7-1 2-2.2 3.6-2.2z"></path><path fill="#4F4F4F" d="M43.3 3.9c-6.7 0-12.1 5.4-12.1 12.1 0 1.1.1 2.1.4 3.1l.1.3c.1.5.3 1 .5 1.4l8.9 19.7c.3.8 1.1 1.4 2.1 1.4.9 0 1.7-.6 2.1-1.4l8.5-18.8c.1-.2 1-2.1 1-2.3.4-1.1.5-2.5.5-3.6.1-6.4-5.3-11.9-12-11.9zm0 18.4c-3.3 0-5.9-2.7-5.9-5.9s2.7-5.9 5.9-5.9 5.9 2.7 5.9 5.9-2.6 5.9-5.9 5.9z" opacity=".7"></path></g></svg></div>
                  <div className="component-picker__btn__title" >Clickable image</div>
                </div>
              </div>
            </label>

            <div className="component-editor-multiple-choice">
              <div className="question">
              <label>
                <input
                  placeholder="Question"
                  className="question-body"
                  value={this.state.body}
                  onChange={this.update('body')} />
              </label>
              </div>
              <div className="choices">
                {choiceList}
                <div className="add-answers-button">
                  <button onClick={this.handleButton}>+ Add option</button>
                </div>
              </div>

              <div className="activity-creator">
                <div className="groups-dropdown">
                  <select onChange={this.update('group_id')}>{groups}</select>
                </div>
              </div>
            </div>

            <input className="component-activity-creator__create" type="submit" value={this.props.formType} />
          </form>
          
        </div>
      </div>
    )
  }
}

export default withRouter(QuestionForm);