import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group, deleteGroup }) => {
  return(
  <li className="group-index-item">
    <Link to={`/group/${group.id}`}>
      <span>{group.title}</span>
    </Link>
    <button onClick={() => deleteGroup(group.id)}>Delete</button>
  </li>
)};

export default GroupIndexItem;