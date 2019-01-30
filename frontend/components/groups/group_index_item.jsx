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
        </li>
      )
    })
  }
  let showQuestion = "question-index"
  return (
    <div>
      <ul key={group.id} className="group-index-item">
        <Link onClick={() => "question-index"} to={`/group/${group.id}`}>
          <span>{group.title}</span>
        </Link>
        <button onClick={() => deleteGroup(group.id)}>Delete</button>
      </ul>
      <ul className={showQuestion}>{questions}</ul>
    </div>
)};

export default GroupIndexItem;