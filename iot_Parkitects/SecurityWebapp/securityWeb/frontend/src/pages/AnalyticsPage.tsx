//(rudderz243,2026)
import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

interface ParkingHistory {
  bay: string;
  user: string;
  userType: string;
  timeIn: string;
  timeOut: string;
  duration: string;
  status: string;
}

const rows: ParkingHistory[] = [
  {
    bay: "A01",
    user: "Student #1024",
    userType: "Student",
    timeIn: "08:02 AM",
    timeOut: "08:47 AM",
    duration: "45 min",
    status: "Completed",
  },
  {
    bay: "A01",
    user: "Student #1842",
    userType: "Student",
    timeIn: "09:03 AM",
    timeOut: "10:21 AM",
    duration: "1h 18m",
    status: "Completed",
  },
  {
    bay: "A02",
    user: "Lecturer #018",
    userType: "Lecturer",
    timeIn: "08:15 AM",
    timeOut: "12:10 PM",
    duration: "3h 55m",
    status: "Completed",
  },
  {
    bay: "A03",
    user: "Student #0931",
    userType: "Student",
    timeIn: "08:31 AM",
    timeOut: "09:42 AM",
    duration: "1h 11m",
    status: "Completed",
  },
  {
    bay: "B01",
    user: "Student #3312",
    userType: "Student",
    timeIn: "08:45 AM",
    timeOut: "10:12 AM",
    duration: "1h 27m",
    status: "Completed",
  },
  {
    bay: "B04",
    user: "Visitor #042",
    userType: "Visitor",
    timeIn: "09:10 AM",
    timeOut: "09:55 AM",
    duration: "45 min",
    status: "Completed",
  },
  {
    bay: "B07",
    user: "Student #2214",
    userType: "Student",
    timeIn: "09:22 AM",
    timeOut: "—",
    duration: "Active",
    status: "Parked",
  },
  {
    bay: "C02",
    user: "Lecturer #031",
    userType: "Lecturer",
    timeIn: "07:54 AM",
    timeOut: "01:05 PM",
    duration: "5h 11m",
    status: "Completed",
  },
  {
    bay: "C07",
    user: "Student #1187",
    userType: "Student",
    timeIn: "10:14 AM",
    timeOut: "11:03 AM",
    duration: "49 min",
    status: "Completed",
  },
  {
    bay: "D01",
    user: "Student #4421",
    userType: "Student",
    timeIn: "10:32 AM",
    timeOut: "—",
    duration: "Active",
    status: "Parked",
  },
  {
    bay: "D05",
    user: "Visitor #019",
    userType: "Visitor",
    timeIn: "11:02 AM",
    timeOut: "12:15 PM",
    duration: "1h 13m",
    status: "Completed",
  },
  {
    bay: "D22",
    user: "Student #3021",
    userType: "Student",
    timeIn: "11:25 AM",
    timeOut: "12:40 PM",
    duration: "1h 15m",
    status: "Completed",
  },
];

export const AnalyticsPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: unknown,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section
      className="page is-active"
      aria-labelledby="analyticsTitle"
    >

      {/* PAGE HEADING */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Parking intelligence
          </p>

          <h1 id="analyticsTitle">
            Analytics
          </h1>

          <p>
            Monitor parking activity, violations, and historical
            parking records across campus.
          </p>
        </div>

        <button
          className="button primary"
          type="button"
        >
          Download Report
        </button>
      </div>


      {/* INSIGHT CARDS */}
      <div className="insight-strip">

        <article
          className="searchable"
          data-search="tickets issued parking violations"
        >
          <span>
            Tickets issued
          </span>

          <strong>
            42
          </strong>

          <small className="change up">
            ↑ 12.4%
          </small>
        </article>


        <article
          className="searchable"
          data-search="tickets resolved completed"
        >
          <span>
            Tickets resolved
          </span>

          <strong>
            31
          </strong>

          <small className="change up">
            ↑ 8.7%
          </small>
        </article>


        <article
          className="searchable"
          data-search="ticket resolution time"
        >
          <span>
            Avg. resolution time
          </span>

          <strong>
            2.4 hrs
          </strong>

          <small className="change down">
            ↓ 14.2%
          </small>
        </article>

      </div>


      {/* ANALYTICS SECTION */}
      <div className="analytics-layout">

        {/* TICKET CHART */}
        <article
          className="panel searchable"
          data-search="parking violations tickets issued days"
        >
          <div className="panel-heading">

            <div>
              <p className="panel-kicker">
                Violations
              </p>

              <h2>
                Parking tickets
              </h2>
            </div>

            <span className="status success">
              This week
            </span>

          </div>


          <div
            className="bar-chart"
            aria-label="Parking tickets issued throughout the week"
          >
            <span style={{ height: "45%" }}>
              <i>Mon</i>
            </span>

            <span style={{ height: "62%" }}>
              <i>Tue</i>
            </span>

            <span style={{ height: "54%" }}>
              <i>Wed</i>
            </span>

            <span style={{ height: "76%" }}>
              <i>Thu</i>
            </span>

            <span style={{ height: "92%" }}>
              <i>Fri</i>
            </span>

            <span style={{ height: "68%" }}>
              <i>Sat</i>
            </span>

            <span style={{ height: "58%" }}>
              <i>Sun</i>
            </span>
          </div>

        </article>


        {/* VIOLATION BREAKDOWN */}
        <article
          className="panel searchable"
          data-search="violation breakdown restricted parking overstayed incorrect bay"
        >

          <div className="panel-heading">

            <div>
              <p className="panel-kicker">
                Violation types
              </p>

              <h2>
                Violation breakdown
              </h2>
            </div>

          </div>


          <div className="region-list">

            <div>
              <span>
                <i>RP</i>
                Restricted parking
              </span>

              <strong>
                42%
              </strong>
            </div>

            <div>
              <span>
                <i>OT</i>
                Overstayed parking
              </span>

              <strong>
                27%
              </strong>
            </div>

            <div>
              <span>
                <i>IB</i>
                Incorrect bay
              </span>

              <strong>
                18%
              </strong>
            </div>

            <div>
              <span>
                <i>OT</i>
                Other
              </span>

              <strong>
                13%
              </strong>
            </div>

          </div>

        </article>

      </div>


      {/* PARKING HISTORY */}
      <div className="parking-history panel">

        <div className="panel-heading">

          <div>
            <p className="panel-kicker">
              Historical records
            </p>

            <h2>
              Parking History
            </h2>
          </div>

          <button
            className="text-button"
            type="button"
          >
            View all
          </button>

        </div>


        {/* parking data table (Material UI,2026) */}
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            boxShadow: "none",
            background: "transparent",
          }}
        >

          <TableContainer
            sx={{
              maxHeight: 440,
            }}
          >

            <Table
              stickyHeader
              aria-label="parking history table"
            >

              <TableHead>

                <TableRow>

                  <TableCell>
                    Parking Bay
                  </TableCell>

                  <TableCell>
                    User
                  </TableCell>

                  <TableCell>
                    User Type
                  </TableCell>

                  <TableCell>
                    Time In
                  </TableCell>

                  <TableCell>
                    Time Out
                  </TableCell>

                  <TableCell>
                    Duration
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>

                </TableRow>

              </TableHead>


              <TableBody>

                {rows
                  .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                  .map((row) => (

                    <TableRow
                      hover
                      key={`${row.bay}-${row.user}-${row.timeIn}`}
                    >

                      <TableCell>
                        <strong>
                          {row.bay}
                        </strong>
                      </TableCell>

                      <TableCell>
                        {row.user}
                      </TableCell>

                      <TableCell>
                        {row.userType}
                      </TableCell>

                      <TableCell>
                        {row.timeIn}
                      </TableCell>

                      <TableCell>
                        {row.timeOut}
                      </TableCell>

                      <TableCell>
                        {row.duration}
                      </TableCell>

                      <TableCell>
                        <span
                          className={
                            row.status === "Parked"
                              ? "status pending"
                              : "status success"
                          }
                        >
                          {row.status}
                        </span>
                      </TableCell>

                    </TableRow>

                  ))}

              </TableBody>

            </Table>

          </TableContainer>


          <TablePagination
            rowsPerPageOptions={[
              10,
              25,
              100,
            ]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={
              handleChangeRowsPerPage
            }
          />

        </Paper>

      </div>

    </section>
  );
};

export default AnalyticsPage;

{/*References
        Material UI.2026. Table. (Version 2.0) [Source code] . Available at: <https://mui.com/material-ui/react-table/ > [Accessed 12 Aug. 2026]. 
    realCAiN. 2024. Updated* Dashboard for sales, ect / Admin Dashboard. (Version 2.0) [Source code] Available at: < https://codepen.io/realCaiN/pen/yLdEzwv > [Accessed 16 Aug. 2026].        
        rudderz243.2026. rudderz243/insy7314-library.  (Version 2.0) [Source code]. Available at: <https://github.com/rudderz243/insy7314-library> [Accessed 17 Aug. 2026].
           */}