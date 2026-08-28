 {/* Material UI,2026*/}
 //(rudderz243,2026)
import React, { useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const TicketsPage: React.FC = () => {
     const [open, setOpen] = useState(false);
     const [activeTicket, setActiveTicket] = useState<string | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="page is-active" aria-labelledby="ticketsTitle">

     
      <div className="page-heading">
        <div>
          <p className="eyebrow">Parking management</p>

          <h1 id="ticketsTitle">Tickets</h1>

          <p>
            View and manage parking tickets issued across campus.
          </p>
        </div>

        <button className="button primary" type="button"
        onClick={handleClickOpen}>
          Issue ticket
        </button>
      </div>

     
      <div className="project-grid">

        {/* TICKET 1 */}
        <article
          className="project-card searchable"
          data-search="parking ticket A01 car parked skew"
        >
          <div className="project-card-top">
            <span className="project-icon violet">
              <i
                className="fa-solid fa-ticket"
                aria-hidden="true"
              ></i>
            </span>

     <div className="ticket-menu">
  <button
    type="button"
    aria-label="More options"
    onClick={() =>
      setActiveTicket(
        activeTicket === "PT-1048" ? null : "PT-1048"
      )
    }
  >
    <i
      className="fa-solid fa-ellipsis"
      aria-hidden="true"
    ></i>
  </button>

  {activeTicket === "PT-1048" && (
    <div className="ticket-actions">
      <button type="button" className="approve">
        Approve
      </button>

      <button type="button" className="reject">
        Reject
      </button>
    </div>
  )}
</div>
</div>
          <span className="status pending">
            Waiting for Approval
          </span>

          <h2>Parking Bay A01</h2>

          <p>
            Vehicle parked skew.
          </p>

          <div className="project-meta">
            <span>
              <small>Ticket ID</small>
              <strong>#PT-1048</strong>
            </span>

            <span>
              <small>Issued</small>
              <strong>10:42 AM</strong>
            </span>
          </div>

          <div className="project-footer">
            <div className="avatar-stack">
              <i>SG</i>
            </div>

            <strong>5 Aug 2026</strong>
          </div>

          <div className="progress-track">
            <span style={{ width: "0%" }}></span>
          </div>
        </article>


        {/* TICKET 2 */}
        <article
          className="project-card searchable"
          data-search="parking ticket B14 lecturer moved"
        >
          <div className="project-card-top">
            <span className="project-icon green">
              <i
                className="fa-solid fa-ticket"
                aria-hidden="true"
              ></i>
            </span>

            <button type="button" aria-label="More options">
              <i
                className="fa-solid fa-ellipsis"
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <span className="status review">
            Notified
          </span>

          <h2>Parking Bay B14</h2>

          <p>
             Vehicle parked in a restricted parking bay.
          </p>

          <div className="project-meta">
            <span>
              <small>Ticket ID</small>
              <strong>#PT-1047</strong>
            </span>

            <span>
              <small>Issued</small>
              <strong>09:15 AM</strong>
            </span>
          </div>

          <div className="project-footer">
            <div className="avatar-stack">
              <i>SG</i>
            </div>

            <strong>5 Aug 2026</strong>
          </div>

          <div className="progress-track">
            <span style={{ width: "50%" }}></span>
          </div>
        </article>


        {/* TICKET 3 */}
        <article
          className="project-card searchable"
          data-search="parking ticket C07  vehicle lights are on"
        >
          <div className="project-card-top">
            <span className="project-icon green">
              <i
                className="fa-solid fa-ticket"
                aria-hidden="true"
              ></i>
            </span>

            <button type="button" aria-label="More options">
              <i
                className="fa-solid fa-ellipsis"
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <span className="status review">
            Under review
          </span>
        

          <h2>Parking Bay C07</h2>

          <p>
           Vehicle lights are on
          </p>
          <p>
          <span className="status review">Description:</span> They have been flashing for the past hour!
          </p>

          <div className="project-meta">
            <span>
              <small>Ticket ID</small>
              <strong>#PT-1046</strong>
            </span>

            <span>
              <small>Issued</small>
              <strong>08:32 AM</strong>
            </span>
          </div>

          <div className="project-footer">
            <div className="avatar-stack">
              <i>SG</i>
            </div>

            <strong>5 Aug 2026</strong>
          </div>

          <div className="progress-track">
            <span style={{ width: "60%" }}></span>
          </div>
        </article>


        {/* TICKET 4 */}
        <article
          className="project-card searchable"
          data-search="vehicle not fully in bay "
        >
          <div className="project-card-top">
            <span className="project-icon blue">
              <i
                className="fa-solid fa-ticket"
                aria-hidden="true"
              ></i>
            </span>

            <button type="button" aria-label="More options">
              <i
                className="fa-solid fa-ellipsis"
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <span className="status success">
            Resolved
          </span>

          <h2>Parking Bay D22</h2>

          <p>
           Vehicle is too far out of the bay
          </p>

          <div className="project-meta">
            <span>
              <small>Ticket ID</small>
              <strong>#PT-1045</strong>
            </span>

            <span>
              <small>Issued</small>
              <strong>1:35pm</strong>
            </span>
          </div>

          <div className="project-footer">
            <div className="avatar-stack">
              <i>SG</i>
            </div>

            <strong>5 Aug 2026</strong>
          </div>

          <div className="progress-track">
            <span style={{ width: "100%" }}></span>
          </div>
        </article>

      </div>
      {/* Material UI,2026*/}
      <Dialog
  open={open}
  onClose={handleClose}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>
    Create Ticket
  </DialogTitle>

  <DialogContent>

    {/* PARKING BAY */}
   <FormControl fullWidth margin="normal">
  <FormLabel sx={{ mb: 1 }}>
    Parking Bay
  </FormLabel>

  <NativeSelect
    defaultValue=""
    inputProps={{
      name: "parkingBay",
      id: "parking-bay-select",
    }}
  >
    <option value="" disabled>
      Select a parking bay
    </option>

    <option value="A01">A01</option>
    <option value="A02">A02</option>
    <option value="A03">A03</option>

    <option value="B01">B01</option>
    <option value="B04">B04</option>
    <option value="B07">B07</option>
    <option value="B14">B14</option>

    <option value="C02">C02</option>
    <option value="C07">C07</option>

    <option value="D01">D01</option>
    <option value="D05">D05</option>
    <option value="D22">D22</option>
  </NativeSelect>
</FormControl>


    {/* VIOLATION */}
    <FormControl margin="dense">
      <FormLabel id="violation-label">
        Violation
      </FormLabel>

      <RadioGroup
        aria-labelledby="violation-label"
        name="violation"
      >
        <FormControlLabel
          value="Restricted parking"
          control={<Radio />}
          label="Restricted parking"
        />

        <FormControlLabel
          value="Incorrect bay"
          control={<Radio />}
          label="Incorrect bay"
        />

        <FormControlLabel
          value="Vehicle outside bay"
          control={<Radio />}
          label="Vehicle outside bay"
        />

        <FormControlLabel
          value="Other"
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>


    {/* DESCRIPTION */}
    <TextField
      margin="dense"
      id="description"
      name="description"
      label="Description (optional)"
      multiline
      rows={4}
      fullWidth
      placeholder="Add any additional information about the violation..."
    />


    {/* IMAGE UPLOAD */}
    <Button
      component="label"
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ mt: 2 }}
    >
      Upload image (optional)

      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        onChange={(event) => {
          console.log(event.target.files);
        }}
      />
    </Button>

  </DialogContent>


  <DialogActions>

    <Button
     className="login-button"
            type="button" onClick={handleClose}>
      Cancel
    </Button>

    <Button
     className="login-button"
            type="button"
      variant="contained"
      onClick={handleClose}
    >
      Issue Ticket
    </Button>

  </DialogActions>

</Dialog>
      
    </section>
  );
};

export default TicketsPage;


  {/*References
           realCAiN. 2024. Updated* Dashboard for sales, ect / Admin Dashboard. (Version 2.0) [Source code] Available at: < https://codepen.io/realCaiN/pen/yLdEzwv > [Accessed 16 Aug. 2026]. 
            Material UI.2026.Dialog. (Version 2.0) [Source code] . Available at: < https://mui.com/material-ui/react-dialog/#scrolling-long-content> [Accessed 12 Aug. 2026]. 
  rudderz243.2026. rudderz243/insy7314-library.  (Version 2.0) [Source code]. Available at: <https://github.com/rudderz243/insy7314-library> [Accessed 17 Aug. 2026].
           */}
 