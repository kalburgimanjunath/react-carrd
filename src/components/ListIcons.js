import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';
export default function ListIcons({ icons, email }) {
  return (
    <div className="ListIcons">
      {icons &&
        icons.map((item) => {
          return (
            <div className="row">
              <div className="image">
                {/* <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100"
                className="image"
              /> */}
                {item && item.icon ? (
                  <FontAwesomeIcon icon={faCoffee} />
                ) : (
                  <FontAwesomeIcon icon={faCoffee} />
                )}
              </div>
              <div className="text">
                <div className="title">{item.title}</div>
                <div>{item.text}</div>
              </div>
            </div>
          );
        })}
      <div className="row end">
        <div>
          <a href={`emailto:${email}`}>
            <button type="button">
              <FontAwesomeIcon icon={faCoffee} />
              <span style={{ marginLeft: 10 }}>Email</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
