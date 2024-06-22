import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <div className="navbar__row">
      <ul className="navbar__row-list navbar-list">
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            Вы
            <div className="navbar-list__icon">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8.91176L4.60396 5.0042L0 1.09664L0.70297 0.5L6 5.0042L0.70297 9.5L0 8.91176Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </Link>
        </li>
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            <div className="navbar-list__icon">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="18" rx="5" fill="#fff" />
              </svg>
            </div>
            Мой канал
          </Link>
        </li>
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            <div className="navbar-list__icon">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.62879 0C5.0598 0 3.78788 1.20746 3.78788 2.69744V12.6H0.94697C0.423973 12.6 0 13.0042 0 13.4991V15.3C0 16.7912 1.27511 18 2.84091 18H14.2045C15.7733 18 17.0455 16.7944 17.0455 15.3045V5.4H19.8864C20.413 5.4 20.8333 4.99813 20.8333 4.5024V2.70439C20.8333 1.21111 19.5624 0 17.9924 0H6.62879ZM5.52083 16.2C5.6251 15.9193 5.68182 15.6172 5.68182 15.3026V2.69744C5.68182 2.20206 6.10528 1.8 6.62879 1.8C7.15002 1.8 7.57576 2.2043 7.57576 2.7V4.50094C7.57576 4.99748 7.99608 5.4 8.52273 5.4H15.1515V15.3045C15.1515 15.7991 14.7285 16.2 14.2045 16.2H5.52083ZM1.89394 14.4V15.3C1.89394 15.7957 2.31967 16.2 2.84091 16.2C3.36441 16.2 3.78788 15.7979 3.78788 15.3026V14.4H1.89394ZM9.4697 3.6V2.7C9.4697 2.38443 9.41259 2.0815 9.3077 1.8H17.9924C18.5153 1.8 18.9394 2.20414 18.9394 2.70439V3.6H9.4697Z"
                  fill="#fff"
                />
              </svg>
            </div>
            История
          </Link>
        </li>
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            <div className="navbar-list__icon">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.99509C0 0.893232 0.818072 0 1.81377 0H7.30762C7.81071 0 8.441 0.373886 8.71574 0.835667L10.0034 3H18.1781C19.1843 3 20 3.8934 20 4.99964V16.0004C20 17.1047 19.185 18 18.181 18H1.819C0.814396 18 0 17.1074 0 16.0049V1.99509Z"
                  fill="#fff"
                />
              </svg>
            </div>
            Плейлист
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
