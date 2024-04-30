const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`edu-search-popup ${isSearchOpen ? "open" : ""}`}>
      <div className="content-wrap">
        <div className="site-logo">
          <img
            className="logo-light"
            src="/assets/images/logo/res-logo.png"
            alt="logo"
            width={200}
          />
          <img
            className="logo-dark"
            src="https://auto-bazaar-admin.vercel.app/_next/image?url=%2FImages%2Flogo%2Flogo.png&w=256&q=100"
            alt="logo"
            width={200}
          />
        </div>
        <div className="close-button" onClick={() => setIsSearchOpen(false)}>
          <button className="close-trigger">
            <i className="icon-73"></i>
          </button>
        </div>
        <div className="inner">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="AutoBazaar-search-popup-field"
              placeholder="Search Here..."
            />
            <button className="submit-button">
              <i className="icon-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
