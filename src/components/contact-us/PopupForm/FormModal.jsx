import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AiOutlineUpload } from "react-icons/ai";
import "./popForm.css";
import { TextField } from "@mui/material";

export default function FormModal() {
  const [show, setShow] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    org: "",
    location: "",
    country_code: "",
    phone: "",
    assign: "",
    desc: "",
    upload_file: "",
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    // setFormValues(initialValues)
  };
  React.useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 2) {
      errors.name = "Name must be longer than 2 letters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    return errors;
  };

  const handleClickOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="success"
        className="fixedButton"
      >
        Get a Quote
      </Button>

      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        onSubmit={handleSubmit}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <form>
          <Modal.Header closeButton className="header-modal">
            <Modal.Title id="example-custom-modal-styling-title">
              <h3>Get a quote</h3>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <span className="fillupform">Please fill up the form</span>
            <TextField
              autoFocus
              id="name"
              label="Name"
              size="small"
              type="text"
              margin="normal"
              name="name"
              fullWidth
              variant="outlined"
              autoComplete="off"
              value={formValues.name}
              onChange={handleChange}
              className="dialog_name"
            />{" "}
            {/* <ErrorMessage component ="div" name={field.fullName} className="error" /> */}
            <p style={{ color: "red", fontSize: ".8rem", margin:"-0.5rem 0" }}>
              {formErrors.name}
            </p>
            <TextField
              autoFocus
              // margin="dense"
              name="email"
              id="email"
              label="Email: "
              type="email"
              size="small"
              fullWidth
              autoComplete="off"
              variant="outlined"
              value={formValues.email}
              onChange={handleChange}
              className="dialog_email"
            />{" "}
            <p style={{ color: "red", margin: "-0.5rem 0", fontSize: ".8rem" }}>
              {formErrors.email}
            </p>
            <div className="tel">
              <TextField
                id="outlined-basic"
                label="Your organization"
                variant="outlined"
                name="org"
                size="small"
                value={formValues.org}
                autoComplete="off"
                onChange={handleChange}
                className="dialog_org"
              />
              <TextField
                id="outlined-basic"
                label="Your Location"
                variant="outlined"
                name="location"
                size="small"
                autoComplete="off"
                value={formValues.location}
                onChange={handleChange}
                className="dialog_location"
              />
            </div>
            <div className="tel">
             
              <TextField
                id="outlined-basic"
                label="Nepal +977"
                variant="outlined"
                name="country_code"
                size="small"
                value={formValues.country_code}
                autoComplete="off"
                onChange={handleChange}
                className="dialog_country_code"
              />
             
              <TextField
                sx={{ my: 1 }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                type="number"
                name="phone"
                size="small"
                className="dialog_phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </div>
            <FormControl fullWidth sx={{ mb: 1 }} className="dialog_assign" size="small">
              <InputLabel id="demo-simple-select-label" variant="outlined">
                Select an Option
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select outline-basic"
                // value={age}
                name="assign"
                label="Select an Option"
                value={formValues.assign}
                onChange={handleChange}
                
                // onChange={handleChange}
              >
                <MenuItem value={"ios"}>IOS App Development</MenuItem>
                <MenuItem value={"andriod"}>Andriod App development</MenuItem>
                <MenuItem value={"web"}>Web development</MenuItem>
                <MenuItem value={"qa"}>
                  Software Testing & Quality Assurance
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="Write something you want to talk about"
              multiline
              rows={3}
              fullWidth
              name="desc"
              autoComplete="off"
              className="dialog_desc"
              value={formValues.desc}
              size="small"
              onChange={handleChange}
            />
            <label htmlFor="upload_file">
              <input
                style={{ display: "none" }}
                id="upload_file"
                name="upload_file"
                type="file"
                // value={formValues.upload_file}
                value={""}
                onChange={handleChange}
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
              />
              <Button
              color="success"
                variant="contained"
                component="span"
                className="file_button"
              >
                <AiOutlineUpload className="uploadIcon" />
              </Button>
              <small style={{ color: "#b1a40d" }}>Upload file </small>
            </label>
          </Modal.Body>
          <Modal.Footer bsPrefix="modal-footer">
            <Button
              className="dialog_cancel"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="dialog_submit"
              type="submit"
              // onClick={handleSubmit}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
