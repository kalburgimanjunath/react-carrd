import React from 'react';
import './style.css';
import Container from './components/Container';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function App() {
  const icons = [
    {
      icon: 'faCoffee',
      title: 'Twitter',
      text: 'Purus in mollis nunc sed semper risus tortor pretium.',
    },
    {
      icon: 'faCoffee',
      title: 'YouTube',
      text: 'Senectus et netus fames magna turpis egestas maecenas.',
    },
    {
      icon: 'faCoffee',
      title: 'Instagram',
      text: 'Morbi quis commodo aenean donec consectetur.',
    },
    {
      icon: 'faCoffee',
      title: 'Tik Tok',
      text: 'Donec pretium sapien nec nulla sagittis feugiat veroeros.',
    },
    {
      icon: 'faCoffee',
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
