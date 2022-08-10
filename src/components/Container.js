import React from 'react';
import Avatar from './Avatar';
import ListIcons from './ListIcons';
export default function Container({ user, icons }) {
  return (
    <div className="container">
      <Avatar user={user} />
      <ListIcons icons={icons} email={user.email} />
    </div>
  );
}
