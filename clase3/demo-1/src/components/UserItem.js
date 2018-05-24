import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Something" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <small>@{props.username}</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <i className="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="retweet">
                <span className="icon is-small">
                  <i className="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="like">
                <span className="icon is-small">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  )
}

UserItem.propTypes = {
  name: PropTypes.number,
}

export default UserItem