//(rudderz243,2026)
import React, { useState, useEffect } from "react";
import parkingMap from "../assets/parking-map.svg";
import ParkingLayout from "../components/ParkingLayout.tsx";
import type { Book } from "../models/book.ts";
import { useNavigate } from "react-router-dom";
import {
  getBooks,
  getBook,
  replaceBook,
  updateBook,
  createBook,
  deleteBook,
} from "../services/api.ts";
import { replace } from "react-router-dom";

export const BookPage: React.FC = () => {
  // create a book array to hold all the books
  const [books, setBooks] = useState<Book[]>([]);
  const [editingID, setEditingID] = useState<string | null>(null);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  // local variables to store information from the textboxes
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [genre, setGenre] = useState<"Fiction" | "Non-Fiction" | "Textbook">(
    "Fiction",
  );

  // create a helper function to use our API service and update the book array
  const loadBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch {
      setBooks([]);
    }
  };

  // useEffect runs every time a component updates on the page
  // this includes the page loading, a button being pressed, or anything else that updates
  // the current state of the page
  useEffect(() => {
    loadBooks();
  }, []);

  // helper function to reset the input/editing form
  const resetForm = () => {
    setEditingID(null);
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPublishedYear("");
    setGenre("Fiction");
  };

  // create a method to handle the form submission (creation of a new book)
  const handleSubmit = async (e: React.FormEvent) => {
    // this prevents the form from submitting as soon as the page loads
    // we do not want blank books in the database
    e.preventDefault();

    const bookData: Book = {
      title,
      author,
      isbn,
      publishedYear: publishedYear ? Number(publishedYear) : undefined,
      genre,
    };

    // also need to be able to handle editing/updating/replacing a book
    if (editingID) {
      // if a book has been selected to be replaced, we replace that book
      await replaceBook(bookData, editingID);
    } else {
      // otherwise, we simply create a new book if we are not editing
      await createBook(bookData);
    }
    // reset the form for the next submission
    resetForm();
    // and fetch the updated array of books
    loadBooks();
  };

  // patch updates an exiting book
  const handlePatch = async () => {
    // check whether a book has actually been selected to edit
    if (!editingID) return;
    // based on what has changed, pass through the appropriate values to the function
    await updateBook(
      {
        title,
        author,
        isbn,
        publishedYear: publishedYear ? Number(publishedYear) : undefined,
        genre,
      },
      editingID,
    );
    // once editing is complete, clear the form for the next submission
    resetForm();
    // and reload the book array to have the updated information
    loadBooks();
  };

  const handleDelete = async (id: string) => {
    // call teh delete function from our API helper file
    await deleteBook(id);
    // clear the currently selected book, so the user can select a new one
    if (editingBook?._id === id) setEditingBook(null);
    // reload books list
    loadBooks();
  };

  // this helper method loads in book information for a book we want to edit/delete
  const handleInspect = async (id: string) => {
    const data = await getBook(id);
    setEditingBook(data);
  };
  const [selectedBay, setSelectedBay] = useState<string | null>(null);
  const navigate = useNavigate();
  // where return starts = the actual HTML/display area
  return (

  //(realCain,2024)
    <section
      className="page is-active"
      data-page-panel="dashboard"
      aria-labelledby="dashboardTitle"
    >

      {/* PAGE HEADING */}
      <div className="page-heading">

        <div>

          <p className="eyebrow">
            Campus parking
          </p>

          <h1 id="dashboardTitle">
            Good morning
          </h1>

          <p>
            Here's a clear look at what's happening across campus parking.
          </p>

        </div>

        <div className="heading-actions">

          <button
            className="button secondary"
            type="button"
            onClick={() => navigate("/tickets")}
          >
            View tickets
          </button>

          <button
            className="button primary"
            type="button"
          >
            Parking map
          </button>

        </div>

      </div>


      {/* STAT CARDS */}
      <div className="stat-list">

        <article
          className="stat-card searchable"
          data-search="parking bays total spaces"
        >

          <div className="stat-top">

            <span className="stat-icon violet">
              <i
                className="fa-solid fa-square-parking"
                aria-hidden="true"
              ></i>
            </span>

          </div>

          <p>Total parking bays</p>

          <strong className="stat-value">
            14
          </strong>

          <small>
            Campus parking capacity
          </small>

        </article>


        <article
          className="stat-card searchable"
          data-search="occupied parking spaces"
        >

          <div className="stat-top">

            <span className="stat-icon blue">
              <i
                className="fa-solid fa-car"
                aria-hidden="true"
              ></i>
            </span>

          </div>

          <p>Currently occupied</p>

          <strong className="stat-value">
            6
          </strong>

          <small>
            Live occupancy
          </small>

        </article>


        <article
          className="stat-card searchable"
          data-search="available parking spaces"
        >

          <div className="stat-top">

            <span className="stat-icon green">
              <i
                className="fa-solid fa-circle-check"
                aria-hidden="true"
              ></i>
            </span>

          </div>

          <p>Available spaces</p>

          <strong className="stat-value">
            8
          </strong>

          <small>
            Spaces currently available
          </small>

        </article>


        <article
          className="stat-card searchable"
          data-search="tickets parking complaints"
        >

          <div className="stat-top">

            <span className="stat-icon orange">
              <i
                className="fa-solid fa-ticket"
                aria-hidden="true"
              ></i>
            </span>

          </div>

          <p>Tickets today</p>

          <strong className="stat-value">
            0
          </strong>

          <small>
            Parking issues reported today
          </small>

        </article>

      </div>


      <div className="dashboard-row">

        {/* MAP */}
        <article
          className="panel performance-panel searchable"
          data-search="parking map campus parking bays"
        >

          <div className="panel-heading">

            <div>

              <p className="panel-kicker">
                Live updates
              </p>

              <h2>
                Parking map
              </h2>

            </div>

            <div className="range-control">
              <button
                type="button"
                className="is-active"
              >
                Live
              </button>
            </div>

          </div>


          <div className="chart-summary">

            <strong>
              Campus parking
            </strong>

            <span>
              <i></i>
              Live availability
            </span>

          </div>



          <div
            className="chart-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "500px",
            }}
          >

            {/*  <img
                  src={parkingMap}
                  alt="Campus parking map"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "contain",
                  }}
                /> */}
            <ParkingLayout
              onBayClick={(bayId) => setSelectedBay(bayId)}
            />

          </div>

        </article>


        {/* PARKING OVERVIEW */}
        <article
          className="panel conversion-panel searchable"
          data-search="parking overview availability occupancy"
        >

          <div className="panel-heading">

            <div>

              <p className="panel-kicker">
                Availability
              </p>

              <h2>
                Parking overview
              </h2>

            </div>

          </div>


          <div className="donut-wrap">

            <div
              className="donut"
              role="img"
              aria-label="43 percent of parking bays occupied"
            >

              <span>

                <strong>
                  43%
                </strong>

                <small>
                  Occupied
                </small>

              </span>

            </div>

          </div>


          <ul className="channel-list">

            <li>
              <span>
                <i className="violet-dot"></i>
                Total bays
              </span>

              <strong>
                14
              </strong>
            </li>

            <li>
              <span>
                <i className="blue-dot"></i>
                Occupied
              </span>

              <strong>
                6
              </strong>
            </li>

            <li>
              <span>
                <i className="green-dot"></i>
                Available
              </span>

              <strong>
                8
              </strong>
            </li>

          </ul>

        </article>

      </div>

      <div className="dashboard-row lower-row">

        {/* PARKING BAY */}
        <article
          className="panel activity-panel searchable"
          data-search="parking bay selected bay information"
        >

          <div className="panel-heading">

            <div>

              <p className="panel-kicker">
                Parking selection
              </p>

              <h2>
                Parking bay
              </h2>

            </div>

            <button
              className="text-button"
              type="button"
              onClick={() => setSelectedBay(null)}
            >
              Clear
            </button>

          </div>


          <div className="table-wrap">

            {selectedBay ? (

              <div>

                <p>
                  Selected parking bay
                </p>

                <h2>
                  {selectedBay}
                </h2>

                <p>
                  <span className="status success">
                    Sensor Status: Online

                  </span>
                </p>

                <span className="status pending">
                  Occupied by:  ST10266906

                </span>


                <p>
                  <span className="status pending">
                    Since: 8:00am

                  </span>
                </p>

              </div>

            ) : (

              <div>

                <p>
                  Select a parking bay on the map to view its information.
                </p>

                <span className="status pending">
                  No bay selected
                </span>

              </div>

            )}

          </div>

        </article>
        {/* LIVE PARKING ACTIVITY */}
        <article
          className="panel team-panel searchable"
          data-search="parking activity live updates"
        >

          <div className="panel-heading">

            <div>

              <p className="panel-kicker">
                Live updates
              </p>

              <h2>
                Parking activity
              </h2>

            </div>

            <span className="team-score">
              Live
            </span>

          </div>


          <div className="goal-list">

            <div>

              <span>

                <strong>
                  Available spaces
                </strong>

                <small>
                  8 of 14 spaces available
                </small>

              </span>

              <span className="goal-bar">
                <i style={{ width: "57%" }}></i>
              </span>

            </div>


            <div>

              <span>

                <strong>
                  Occupied spaces
                </strong>

                <small>
                  6 of 14 spaces occupied
                </small>

              </span>

              <span className="goal-bar">
                <i style={{ width: "43%" }}></i>
              </span>

            </div>


            <div>

              <span>

                <strong>
                  Parking status
                </strong>

                <small>
                  Sensors reporting normally
                </small>

              </span>

              <span className="goal-bar">
                <i style={{ width: "100%" }}></i>
              </span>

            </div>

          </div>


          <button
            className="button soft full-button"
            type="button"
          >
            View parking details
          </button>

        </article>

      </div>

    </section>


  );
};

{/*References
           realCAiN. 2024. Updated* Dashboard for sales, ect / Admin Dashboard. (Version 2.0) [Source code] Available at: < https://codepen.io/realCaiN/pen/yLdEzwv > [Accessed 16 Aug. 2026]. 
               rudderz243.2026. rudderz243/insy7314-library.  (Version 2.0) [Source code]. Available at: <https://github.com/rudderz243/insy7314-library> [Accessed 17 Aug. 2026].
           */}  
