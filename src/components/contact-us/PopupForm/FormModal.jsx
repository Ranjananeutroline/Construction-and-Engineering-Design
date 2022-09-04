import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
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
  const names = [
    "IOS App Development",
    "Andriod App development",
    "Web development",
    "Software Testing & Quality Assurance",
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 350,
      },
    },
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [workAssign, setWorkAssign] = React.useState([]);
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

  const handleWorkChange = (event) => {
    const {
      target: { value },
    } = event;
    setWorkAssign(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
            <p style={{ color: "red", fontSize: ".8rem", margin: "-0.4rem 0" }}>
              {formErrors.name}
            </p>
            <TextField
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
            <p style={{ color: "red", margin: "-0.4rem 0", fontSize: ".8rem" }}>
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
            {/* <FormControl
              fullWidth
              sx={{ mb: 1 }}
              className="dialog_assign"
              size="small"
            >
              <InputLabel id="demo-multiple-checkbox-label" variant="outlined">
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
            </FormControl> */}
            <FormControl
              sx={{ m: 1, width: 300 }}
              className="dialog_assign"
              size="small"
            >
              <InputLabel id="demo-multiple-checkbox-label" variant="outlined">Select an Option</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                name="assign"
                id="demo-multiple-checkbox"
                multiple
                variant="outlined"
                label="Select an Option"
                value={workAssign}
                onChange={handleWorkChange}
                input={<OutlinedInput label="Select an Option" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={workAssign.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
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
            <div
              style={{
                display: "flex",
                paddingLeft: "6px",
                marginTop: "0px",
              }}
            >
              <input
                type="checkbox"
                id="agree"
                style={{ marginleft: "7px" }}
                name="agree"
                value="Terms"
              />
              <label
                htmlFor="agree"
                style={{ fontSize: "12px", padding: "8px" }}
              >
                I agree to the Terms of Service and Privacy Policy.
              </label>
            </div>
            <div
              className="row recaptcha_contact"
              style={{
                display: "flex",
                paddingLeft: "18px",
                paddingTop: "2px",
              }}
            >
              <div
                className="col-sm-5 p-2"
                style={{
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.10)",
                  width: "70%",
                }}
              >
                <input
                  type="checkbox"
                  id="recaptcha"
                  name="recaptcha"
                  value="Condition"
                />
                <label
                  htmlFor="recaptcha"
                  style={{ fontSize: "12px", padding: "5px" }}
                >
                  I'm not a robot
                </label>
                <div
                  style={{
                    float: "right",
                    paddingRight: "14px",
                    textAlign: "start",
                    display: "flex",
                  }}
                >
                  <img
                    className="rounded-circle"
                    src="image/recaptcha_image.jpg"
                    height="35px"
                    width="38px"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer bsPrefix="modal-footer">
            <Button className="dialog_cancel" onClick={handleClose}>
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
