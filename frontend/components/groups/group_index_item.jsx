import React from 'react';
import { Link } from 'react-router-dom';
// import QuestionIndexContainer from '../questions/question_index_container';

const GroupIndexItem = ({ group, deleteGroup }) => {
  debugger
  return (
    <li key={group.id} className="group-index-item">
      <Link to={`/group/${group.id}`}>
        <span>{group.title}</span>
      </Link>
      <button onClick={() => deleteGroup(group.id)}>Delete</button>
      {/* <QuestionIndexContainer
        group={group} /> */}
    </li>
)};

export default GroupIndexItem;