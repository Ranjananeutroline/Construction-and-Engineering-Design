import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import "./popForm.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const initialValues = {
    name: "",
    email: "",
    org: "",
    location: "",
    country_code:"",
    phone:"",
    assign:"",
    desc:"",
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
      errors.name = "name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be longer than 2 letters";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    return errors;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        // className="fixedButton"
      >
        get a Quote
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit}  >
      <form>  
        <DialogTitle className="popup_header"> Get a quote</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
                <TextField
            autoFocus
            // margin="dense"
            id="name"
            label="Name"
            type="text"
            name="name"
            fullWidth
            variant="outlined"
            autoComplete="off"
            value={formValues.name}
            onChange={handleChange}
            className="dialog_name"
          />{" "}
          {/* <ErrorMessage component ="div" name={field.fullName} className="error" /> */}
          <p style={{ color: "red", margin: "0", fontSize: ".8rem" }}>
            {formErrors.name}
          </p>
          <TextField
            autoFocus
            // margin="dense"
            name="email"
            id="email"
            label="Email: "
            type="email"
            fullWidth
            variant="outlined"
            autoComplete="off"
            value={formValues.email}
            onChange={handleChange}
            className="dialog_email"

          />{" "}
          <p style={{ color: "red", margin: "0", fontSize: ".8rem" }}>
            {formErrors.email}
          </p>
          <div className="tel">
            <TextField
              id="outlined-basic"
              label="Your organization"
              variant="outlined"
              name="org"
              value={formValues.org}
              onChange={handleChange}
              className="dialog_org"
            />
            <TextField
              id="outlined-basic"
              label="your location"
              variant="outlined"
              name="location"
              value={formValues.location}
              onChange={handleChange}
              className="dialog_location"
            />
          </div>
          <div className="tel">
            <FormControl sx={{ my: 1, width: 180 }} className="dialog_country_code">
              <InputLabel id="demo-simple-select-helper-label">
                your country code
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                label="Country code"
                value={formValues.country_code}
                name="country_code"
                onChange={handleChange}
                // onChange={handleChange}
              >
                <MenuItem value={"+977"}>Nepal (+977)</MenuItem>
                <MenuItem value={"+91"}>India(+91)</MenuItem>
                <MenuItem value={"+1"}>USA(+1)</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
            <TextField
              sx={{ my: 1, maxWidth: 235 }}
              id="outlined-basic"
              label="phone"
              variant="outlined"
              type="number"
              className="dialog_phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <FormControl fullWidth sx={{ mb: 1 }}    className="dialog_assign">
            <InputLabel id="demo-simple-select-label" variant="outlined">
              Select an Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select outline-basic"
              // value={age}
              label="  Select an Option"
              value={formValues.assign}
              onChange={handleChange}
              // onChange={handleChange}
            >
              <MenuItem value={"ios"}>IOS App Development</MenuItem>
              <MenuItem value={"andriod"}>Andriod App development</MenuItem>
              <MenuItem value={"web"}>Web development</MenuItem>
              <MenuItem value={"qa"}>Software Testing & Quality Assurance</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Write something you want to talk about"
            multiline
            rows={4}
            fullWidth
            autoComplete="off"
            className="dialog_desc"
            value={formValues.desc}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">
            Submit
          </Button>
         
 
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
