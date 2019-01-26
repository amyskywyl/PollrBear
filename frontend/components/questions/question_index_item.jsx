import React from 'react';

const QuestionDetail= ({ question, deleteQuestion }) => {
  return (
    <li className="question-index-item">
      <Link to={`/groups/${question.groupId}/question/${question.id}`}>
        <span>{question.title}</span>
      </Link>
      <button onClick={() => deleteQuestion(question.id, question.groupId)}>Delete</button>
    </li>
  )
}

export default QuestionIndexItem;