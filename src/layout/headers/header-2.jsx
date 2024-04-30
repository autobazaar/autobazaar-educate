import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchPopup from "../../components/common/popup-modal/search-popup";
import OffCanvas from "../../components/common/sidebar/off-canvas";
import useCartInfo from "../../hooks/use-cart-info";
import useSticky from "../../hooks/use-sticky";
import { wishlistItems } from "../../redux/features/wishlist-slice";
import MainMenu from "./component/main-menu";
import Cart from "./component/cart";

const HeaderTwo = ({ style_3, no_topBar = false }) => {
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wishlists = useSelector(wishlistItems);
  return (
    <>
      <header
        className={`edu-header header-style-${style_3 ? "3" : "2"} ${
          no_topBar ? "no-topbar" : ""
        }`}
        style={{ backgroundColor: "#1D1E4E" }}
      >
        {!no_topBar && (
          <div className="header-top-bar">
            <div className="container">
              <div className="header-top">
                <div className="header-top-left">
                  <ul className="header-info">
                    <li>
                      <a href="/">
                        <i className="icon-phone"></i>Call: 08828820306
                      </a>
                    </li>
                    <li>
                      <a href="/" rel="noreferrer" target="_blank">
                        <i className="icon-envelope"></i>Email:
                        info@AutoBazaar.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="header-top-right">
                  <ul className="header-info">
                    <li>
                      <Link href="/sign-in">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sign-in">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li className="header-btn">
                      <a
                        href="/course-details"
                        className={`edu-btn ${
                          style_3 ? "" : "btn-secondary"
                        } btn-medium text-dark `}
                        style={{ backgroundColor: "#ffa51f" }}
                      >
                        Get Started <i className="icon-4 text-dark"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="edu-sticky-placeholder"></div>

        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        className="logo-light"
                        src={
                          style_3
                            ? "/assets/images/logo/res-logo.png"
                            : "/assets/images/logo/res-logo.png"
                        }
                        alt="Corporate Logo"
                        width={200}
                      />
                      <img
                        className="logo-dark"
                        src={
                          style_3
                            ? "https://auto-bazaar-admin.vercel.app/_next/image?url=%2FImages%2Flogo%2Flogo.png&w=256&q=100"
                            : "https://auto-bazaar-admin.vercel.app/_next/image?url=%2FImages%2Flogo%2Flogo.png&w=256&q=100"
                        }
                        alt="Corporate Logo"
                        width={200}
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <MainMenu />
                </nav>
              </div>

              <div className="header-right">
                <ul className="header-action">
                  <li
                    className="icon search-icon"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <a style={{ cursor: "pointer" }} className="search-trigger">
                      <i className="icon-2"></i>
                    </a>
                  </li>

                  {no_topBar && (
                    <li className="header-btn">
                      <a href="#" className="edu-btn btn-medium">
                        Apply Now <i className="icon-4"></i>
                      </a>
                    </li>
                  )}

                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Search Popup  --> */}
        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderTwo;
