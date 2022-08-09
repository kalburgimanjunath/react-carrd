import React from 'react';
export default function ListIcons() {
  const icons = [
    {
      icon: 'Twitter',
      text: 'Purus in mollis nunc sed semper risus tortor pretium.',
    },
    {
      icon: 'YouTube',
      text: 'Senectus et netus fames magna turpis egestas maecenas.',
    },
    {
      icon: 'Instagram',
      text: 'Morbi quis commodo aenean donec consectetur.',
    },
    {
      icon: 'Tik Tok',
      text: 'Donec pretium sapien nec nulla sagittis feugiat veroeros.',
    },
    {
      icon: 'Snapchat',
      text: 'Proin sagittis nisl rhoncus mattis et euismod lorem quis.',
    },
  ];
  return (
    <div className="ListIcons">
      {icons.map((item) => {
        return (
          <div className="row">
            <div>
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100"
                className="image"
              />
            </div>
            <div className="text">
              <div className="title">{item.icon}</div>
              <div>{item.text}</div>
            </div>
          </div>
        );
      })}
      <div className="row end">
        <div>
          <button type="button">Email</button>
        </div>
      </div>
    </div>
  );
}
