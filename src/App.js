import React from 'react';
import './style.css';
import Container from './components/Container';
export default function App() {
  const icons = [
    {
      icon: 'faTwitter',
      title: 'Twitter',
      text: 'Purus in mollis nunc sed semper risus tortor pretium.',
    },
    {
      icon: 'YouTube',
      title: 'YouTube',
      text: 'Senectus et netus fames magna turpis egestas maecenas.',
    },
    {
      icon: 'Instagram',
      title: 'Instagram',
      text: 'Morbi quis commodo aenean donec consectetur.',
    },
    {
      icon: 'Tik Tok',
      title: 'Tik Tok',
      text: 'Donec pretium sapien nec nulla sagittis feugiat veroeros.',
    },
    {
      icon: 'Snapchat',
      title: 'Snapchat',
      text: 'Proin sagittis nisl rhoncus mattis et euismod lorem quis.',
    },
  ];
  const user = {
    image:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
    name: 'Manjunath Kalburgi',
    bio: 'Software Engineer from India,Hubli',
    email: 'manjunathkalburgi@gmail.com',
  };
  return (
    <div className="main">
      <Container user={user} icons={icons} />
    </div>
  );
}
