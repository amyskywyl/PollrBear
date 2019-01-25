import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group }) => (
  <li className="group-index-item">
    <Link to={`/group/${group.id}`}>
      <span>{group.id}</span>
      <span>{group.title}</span>
    </Link>
  </li>
);

export default GroupIndexItem;