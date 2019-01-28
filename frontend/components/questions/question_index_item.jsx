import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem= ({ question, deleteQuestion }) => {
  return (
    <li className="question-index-item">
      <Link to={`/questions/${question.id}`}>
        {question.title}
      </Link>
      <Link to={`/questions/${question.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deleteQuestion(question.id)}>Delete</button>
    </li>
  )
}

export default QuestionIndexItem;