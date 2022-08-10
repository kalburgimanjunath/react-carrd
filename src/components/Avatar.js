import React from 'react';
export default function Avatar({ user }) {
  return (
    <div className="Avatar">
      <img src={user.image} className="image" />
      <div className="name">{user.name}</div>
      <div className="bio">{user.bio}</div>
    </div>
  );
}
