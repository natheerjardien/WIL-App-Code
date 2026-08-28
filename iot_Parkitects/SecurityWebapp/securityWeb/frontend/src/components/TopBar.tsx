import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const TopBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  const toggleNotifications = () => {
    setShowNotifications((current) => !current);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile((current) => !current);
    setShowNotifications(false);
  };

  const navigate = useNavigate();
  return (
    <header className={`topbar ${darkMode ? "dark-mode" : ""}`}>

      {/* MOBILE BRAND */}
      <div className="mobile-brand">
        <span className="brand-mark">P</span>
        <strong>Parkitects</strong>
      </div>


      {/* SEARCH */}
      <label className="search-box">
        <i
          className="fa-solid fa-magnifying-glass"
          aria-hidden="true"
        ></i>

        <input
          type="search"
          placeholder="Search this view"
          autoComplete="off"
        />

        <kbd>⌘ K</kbd>
      </label>


      {/* TOPBAR ACTIONS */}
      <div className="topbar-actions">

        {/* DARK MODE */}
        <button
          className="icon-button theme-button"
          type="button"
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          onClick={toggleDarkMode}
        >
          <i
            className={
              darkMode
                ? "theme-icon fa-solid fa-sun"
                : "theme-icon fa-solid fa-moon"
            }
            aria-hidden="true"
          ></i>
        </button>


        {/* NOTIFICATIONS */}
        <div className="menu-wrap">

          <button
            className="icon-button notification-button"
            type="button"
            aria-label="Notifications"
            aria-expanded={showNotifications}
            onClick={toggleNotifications}
          >
            <i
              className="fa-solid fa-bell"
              aria-hidden="true"
            ></i>

            <span className="notification-dot"></span>
          </button>


          {/* NOTIFICATION DROPDOWN */}
          {showNotifications && (
            <div className="popover notification-popover">

              <div className="popover-heading">

                <div>
                  <strong>Notifications</strong>
                  <small>3 unread updates</small>
                </div>

                <button type="button"
                onClick={()=> navigate("/dashboard")}>
                  Mark all read
                </button>

              </div>


              <div className="notice-list">

                <button
                  className="notice is-unread"
                  type="button"
                >
                  <span className="notice-mark violet">
                    <i
                      className="fa-solid fa-square-parking"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <span>
                    <strong>Parking update</strong>
                    <small>
                      Section A is almost full · 8m
                    </small>
                  </span>
                </button>


                <button
                  className="notice is-unread"
                  type="button"
                >
                  <span className="notice-mark green">
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <span>
                    <strong>Parking availability</strong>
                    <small>
                      12 spaces became available · 1h
                    </small>
                  </span>
                </button>


                <button
                  className="notice is-unread"
                  type="button"
                >
                  <span className="notice-mark orange">
                    <i
                      className="fa-solid fa-ticket"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <span>
                    <strong>New parking ticket</strong>
                    <small>
                      A new violation was reported · 3h
                    </small>
                  </span>
                </button>

              </div>


              <button
                className="popover-footer"
                type="button"
                onClick={()=> navigate("/ticketsresponse")}
              >
                View notification center
              </button>

            </div>
          )}

        </div>


        {/* PROFILE */}
        <div className="menu-wrap desktop-profile">

          <button
            className="profile-button"
            type="button"
            aria-expanded={showProfile}
            onClick={toggleProfile}
          >
            <span className="avatar">
              SG
            </span>

            <span className="profile-name">
              Security
            </span>

            <i
              className="fa-solid fa-chevron-down"
              aria-hidden="true"
            ></i>
          </button>


          {/* PROFILE DROPDOWN */}
          {showProfile && (
            <div className="popover profile-popover">

              <div className="profile-summary">

                <span className="avatar large">
                  SG
                </span>

                <span>
                  <strong>Security</strong>
                  <small>security@parkitects.co.za</small>
                </span>

              </div>


              <button type="button"
              onClick={()=> navigate("/settings")}
              >
                Account settings
              </button>

              <button
                type="button"
                onClick={toggleDarkMode}
              >
                Appearance
              </button>

              <button type="button"
              onClick={()=> navigate("/login")}>
                Sign out
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
};

export default TopBar;
{/*References
 realCAiN. 2024. Updated* Dashboard for sales, ect / Admin Dashboard. (Version 2.0) [Source code] Available at: < https://codepen.io/realCaiN/pen/yLdEzwv > [Accessed 16 Aug. 2026]. 
               
 */}