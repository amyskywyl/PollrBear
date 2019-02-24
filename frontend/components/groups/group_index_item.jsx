import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group, deleteGroup }) => {
  let questions;
  if (!group.questions) {
    questions = null
  } else {
    questions = Object.values(group.questions).map((question, index) => {
      return (
        <li key={index} className="question-index-item">
          <Link to={`/questions/${question.id}`}>
            <span>{question.body}</span>
          </Link>
          <Link className="edit-icon" to={`/questions/${question.id}/edit`}><i className="fas fa-edit"></i></Link>
        </li>
      )
    })
  }
  let showQuestion = "question-index"
  return (
    <div className="groups">
      <ul key={group.id} className="group-index-item">
        <Link className="question-index" to={`/group/${group.id}`}>
          <span>{group.title}</span>
        </Link>
        <button onClick={() => deleteGroup(group)}><i className="fas fa-trash"></i></button>
      </ul>
      <ul className={showQuestion}>{questions}</ul>
    </div>
)};

export default GroupIndexItem;