//(rudderz243,2026)
import React from "react";
import { useNavigate } from "react-router-dom";
export const TicketResponsesPage: React.FC = () => {
    const navigate = useNavigate();
  return (
      <div className="app-shell">

    
    <div className="workspace">
    <section
      className="page is-active"
      aria-labelledby="ticketResponsesTitle"
    >
    
      {/* PAGE HEADING */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">Parking violations</p>

          <h1 id="ticketResponsesTitle">
            Ticket Responses
          </h1>

          <p>
            Review responses from drivers regarding issued parking tickets.
          </p>
        </div>

        <button className="button primary" type="button">
          View tickets
        </button>
      </div>

      {/* INBOX */}
      <div className="inbox panel">

        {/* CONVERSATION LIST */}
        <div className="conversation-list">

          {/* RESPONSE 1 */}
          <button
            className="conversation is-active searchable"
            type="button"
            data-search="thabo mokoena parking A01 ticket PT-1048 fixed"
          >
            <span className="mini-avatar purple">
              TM
            </span>

            <span>
              <strong>Thabo Mokoena</strong>

              <small>
                I have fixed the parking issue.
              </small>
            </span>

            <time>
              8m
            </time>
          </button>


          {/* RESPONSE 2 */}
          <button
            className="conversation searchable"
            type="button"
            data-search="lerato molefe parking B14 ticket PT-1047 resolved"
          >
            <span className="mini-avatar blue">
              LM
            </span>

            <span>
              <strong>Lerato Molefe</strong>

              <small>
                The issue has been resolved.
              </small>
            </span>

            <time>
              1h
            </time>
          </button>


          {/* RESPONSE 3 */}
          <button
            className="conversation searchable"
            type="button"
            data-search="jason naidoo parking C07 ticket PT-1046 fixed"
          >
            <span className="mini-avatar green">
              JN
            </span>

            <span>
              <strong>Jason Naidoo</strong>

              <small>
                I have corrected the violation.
              </small>
            </span>

            <time>
              3h
            </time>
          </button>


          {/* RESPONSE 4 */}
          <button
            className="conversation searchable"
            type="button"
            data-search="ayanda dlamini parking D22 ticket PT-1045 response"
          >
            <span className="mini-avatar orange">
              AD
            </span>

            <span>
              <strong>Ayanda Dlamini</strong>

              <small>
                I have fixed the issue.
              </small>
            </span>

            <time>
              Yesterday
            </time>
          </button>

        </div>


        {/* MESSAGE THREAD */}
        <div className="message-thread">

          {/* THREAD HEADER */}
          <div className="thread-heading">

            <span className="mini-avatar purple">
              TM
            </span>

            <span>
              <strong>
                Thabo Mokoena
              </strong>

              <small>
                Ticket #PT-1048 · Parking Bay A01
              </small>
            </span>

          </div>


          {/* THREAD BODY */}
          <div className="thread-body">

            {/* ORIGINAL TICKET */}
            <div className="bubble incoming">

              <strong>
                Parking ticket issued
              </strong>

              <br />

              Parking Bay A01

              <br />

              Vehicle parked in a restricted parking bay.

              <br />

              Ticket ID: #PT-1048

            </div>


            {/* DRIVER RESPONSE */}
            <div className="bubble incoming">

              I have fixed the parking issue.

            </div>


            {/* SECURITY RESPONSE */}
            <div className="bubble outgoing">

              Thank you. I will inspect the parking bay to
              confirm that the issue has been resolved.

            </div>

          </div>


          {/* SECURITY ACTIONS */}
          <div className="message-form">

            <button
              className="button secondary"
              type="button"
              onClick={()=> navigate("/tickets")}
            >
              Reject Response
            </button>

            <button
              className="button primary"
              type="button"
              onClick={()=> navigate("/tickets")}
            >
              Mark Ticket as Done
            </button>

          </div>

        </div>

      </div>
    </section>
    </div>
    </div>
  );
};

export default TicketResponsesPage;

{/*References
 realCAiN. 2024. Updated* Dashboard for sales, ect / Admin Dashboard. (Version 2.0) [Source code] Available at: < https://codepen.io/realCaiN/pen/yLdEzwv > [Accessed 16 Aug. 2026]. 
          rudderz243.2026. rudderz243/insy7314-library.  (Version 2.0) [Source code]. Available at: <https://github.com/rudderz243/insy7314-library> [Accessed 17 Aug. 2026].
           */}       
 