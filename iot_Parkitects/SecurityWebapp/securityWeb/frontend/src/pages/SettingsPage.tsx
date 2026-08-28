//(rudderz243,2026)
import React, { useState } from "react";

export const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("General");

  const [notifications, setNotifications] = useState({
    ticketUpdates: true,
    parkingAlerts: true,
    systemAlerts: true,
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    compactTables: false,
  });

  const handleSave = () => {
    
    alert("Settings saved successfully.");
  };

  return (
    <section
      className="page is-active"
      aria-labelledby="settingsTitle"
    >

      {/* PAGE HEADING */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">System preferences</p>

          <h1 id="settingsTitle">
            Settings
          </h1>

          <p>
            Manage your account, notifications, and parking system preferences.
          </p>
        </div>

        <button
          className="button primary"
          type="button"
          onClick={handleSave}
        >
          Save changes
        </button>
      </div>

      <div className="settings-layout">

        <nav
          className="settings-nav"
          aria-label="Settings sections"
        >
          {[
            "General",
            "Notifications",
            "System",
          ].map((section) => (
            <button
              key={section}
              type="button"
              className={
                activeSection === section
                  ? "is-active"
                  : ""
              }
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </nav>


        {/* SETTINGS CONTENT */}
        <div className="settings-content">

          {/* GENERAL */}
          {activeSection === "General" && (
            <>
              <article className="panel setting-group searchable">
                <h2>
                  Account details
                </h2>

                <p>
                  Manage the information associated with your Parkitects
                  security account.
                </p>

                <div className="form-row">

                  <label>
                    Full name

                    <input
                      type="text"
                      defaultValue="Security Guard"
                    />
                  </label>

                  <label>
                    Email address

                    <input
                      type="email"
                      defaultValue="security@parkitects.co.za"
                    />
                  </label>

                </div>
              </article>


              <article className="panel setting-group searchable">
                <h2>
                  Appearance
                </h2>

                <p>
                  Choose how the Parkitects dashboard appears.
                </p>

                <div className="setting-line">

                  <span>
                    <strong>
                      Dark theme
                    </strong>

                    <small>
                      Use a darker interface in low-light environments.
                    </small>
                  </span>

                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={preferences.darkMode}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          darkMode: e.target.checked,
                        })
                      }
                    />

                    <span></span>
                  </label>

                </div>


                <div className="setting-line">

                  <span>
                    <strong>
                      Compact tables
                    </strong>

                    <small>
                      Display more parking records in tables.
                    </small>
                  </span>

                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={preferences.compactTables}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          compactTables: e.target.checked,
                        })
                      }
                    />

                    <span></span>
                  </label>

                </div>

              </article>
            </>
          )}


          {/* NOTIFICATIONS */}
          {activeSection === "Notifications" && (
            <article className="panel setting-group searchable">

              <h2>
                Notifications
              </h2>

              <p>
                Choose which parking system events security staff are
                notified about.
              </p>


              <div className="setting-line">

                <span>
                  <strong>
                    Ticket updates
                  </strong>

                  <small>
                    Receive notifications when a ticket is created,
                    disputed, or resolved.
                  </small>
                </span>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications.ticketUpdates}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        ticketUpdates: e.target.checked,
                      })
                    }
                  />

                  <span></span>
                </label>

              </div>


              <div className="setting-line">

                <span>
                  <strong>
                    Parking alerts
                  </strong>

                  <small>
                    Receive alerts about parking capacity and bay
                    availability.
                  </small>
                </span>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications.parkingAlerts}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        parkingAlerts: e.target.checked,
                      })
                    }
                  />

                  <span></span>
                </label>

              </div>


              <div className="setting-line">

                <span>
                  <strong>
                    System alerts
                  </strong>

                  <small>
                    Receive important system and sensor notifications.
                  </small>
                </span>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications.systemAlerts}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        systemAlerts: e.target.checked,
                      })
                    }
                  />

                  <span></span>
                </label>

              </div>

            </article>
          )}


          {/* SYSTEM */}
          {activeSection === "System" && (
            <>
              <article className="panel setting-group searchable">

                <h2>
                  Parking system
                </h2>

                <p>
                  Information about the Parkitects parking monitoring
                  system.
                </p>

                <div className="setting-line">

                  <span>
                    <strong>
                      Parking sensors
                    </strong>

                    <small>
                      Monitor the connection status of parking bay sensors.
                    </small>
                  </span>

                  <span className="status success">
                    Connected
                  </span>

                </div>


                <div className="setting-line">

                  <span>
                    <strong>
                      System status
                    </strong>

                    <small>
                      Current Parkitects system availability.
                    </small>
                  </span>

                  <span className="status success">
                    Operational
                  </span>

                </div>

              </article>


              <article className="panel setting-group searchable">

                <h2>
                  Data management
                </h2>

                <p>
                  Manage historical parking and ticket information.
                </p>

                <button
                  className="button secondary"
                  type="button"
                >
                  Export parking data
                </button>

              </article>
            </>
          )}

        </div>

      </div>

    </section>
  );
};

export default SettingsPage;
{/*References
           realCAiN. 2024. Updated* Dashboard for sales, ect / Admin Dashboard. (Version 2.0) [Source code] Available at: < https://codepen.io/realCaiN/pen/yLdEzwv > [Accessed 16 Aug. 2026].        
  rudderz243.2026. rudderz243/insy7314-library.  (Version 2.0) [Source code]. Available at: <https://github.com/rudderz243/insy7314-library> [Accessed 17 Aug. 2026].
           */}
       