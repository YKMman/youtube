import React from "react";
import { Link } from "react-router-dom";

const SubscribesList = () => {
  return (
    <div className="navbar__row">
      <h2 className="navbar__row-title">Подписки</h2>

      <ul className="navbar__row-list navbar-list">
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            <div className="navbar-list__icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" rx="12.5" fill="white" />
              </svg>
            </div>
            Nostoro
            <div className="navbar-list__status navbar-list__status--stream"></div>
          </Link>
        </li>
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            <div className="navbar-list__icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" rx="12.5" fill="white" />
              </svg>
            </div>
            Don
            <div className="navbar-list__status navbar-list__status--newVideo"></div>
          </Link>
        </li>
        <li className="navbar-list__item">
          <Link to="#" className="navbar-list__link">
            <div className="navbar-list__icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" rx="12.5" fill="white" />
              </svg>
            </div>
            Hanson
            <div className="navbar-list__status navbar-list__status--newVideo"></div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubscribesList;
