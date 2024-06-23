// import "./SearchStyles.scss";

const Search = () => {
  return (
    <div className="test">
      <div className="search">
        <form className="search__form">
          <div className="search__form-container">
            <div className="search__form-input">
              <input type="text" placeholder="Поиск" />
            </div>

            <button className="search__form-clean">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.72122 9L18 17.2788L17.2788 18L9 9.72122L0.721219 18L0 17.2788L8.27878 9L0.010158 0.721219L0.731377 0L9 8.27878L17.2788 0L18 0.721219L9.72122 9Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
        <button className="search__form-send">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.298 17.3839L14.718 13.8039L14.717 13.8029C17.3069 10.4663 16.8568 5.69121 13.689 2.89741C10.5212 0.103612 5.72729 0.253842 2.74063 3.24051C-0.246036 6.22717 -0.396266 11.0211 2.39753 14.1889C5.19133 17.3567 9.96646 17.8068 13.303 15.2169L16.883 18.7969C17.1339 19.057 17.5056 19.1615 17.8553 19.0702C18.205 18.979 18.4782 18.7061 18.57 18.3566C18.6617 18.007 18.5578 17.6351 18.298 17.3839ZM13.5941 11.8979C12.5223 13.7543 10.5416 14.8979 8.39798 14.8979C5.08427 14.8979 2.39798 12.2116 2.39798 8.89786C2.39798 5.58415 5.08427 2.89786 8.39798 2.89786C10.5416 2.89786 12.5223 4.04145 13.5941 5.89786C14.6659 7.75427 14.6659 10.0415 13.5941 11.8979Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Search;
