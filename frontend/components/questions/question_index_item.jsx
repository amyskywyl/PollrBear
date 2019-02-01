import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem= ({ question, deleteQuestion }) => {
  return (
    <li className="question-index-item">
      <Link to={`/questions/${question.id}`}>
        {question.body}
      </Link>
      <Link to={`/questions/${question.id}/edit`}>
        Edit
      </Link>
      <button className="delete-icon" onClick={() => deleteQuestion(question.id)}><i class="fas fa-trash"></i></button>
    </li>
  )
}

export default QuestionIndexItem;