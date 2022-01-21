import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

class SymptomTextFields extends React.Component {
  handleSymptomSelectChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    this.props.handleSymptomTypeChange(event);
  };

  state = {
    value: "",
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div>
        <Card className="root">
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add a symptom
            </Typography>
            <form noValidate autoComplete="off" id="symptom-form">
              <FormControl className="formControl" fullWidth>
                <InputLabel htmlFor="select-symptom">
                  <span>
                    Select symptom type
                    <Tooltip
                      title="Select a symptom from the drop-down list."
                      placement="top"
                    >
                      <IconButton>
                        {" "}
                        <i className="material-icons">help</i>
                      </IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="select-symptom"
                  select
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="textField"
                  value={this.state.value}
                  onChange={this.handleSymptomSelectChange}
                  SelectProps={{ name: "value" }}
                  margin="normal"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="Dizzy">Dizzy</MenuItem>
                  <MenuItem value="Shortness of breath">
                    Shortness of breath
                  </MenuItem>
                  <MenuItem value="Fainted">Fainted</MenuItem>
                  <MenuItem value="Swelling">Swelling</MenuItem>
                  <MenuItem value="Heart Fluttering">Heart Fluttering</MenuItem>
                  <MenuItem value="Fatigue">Fatigue</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <Typography className="formError" component="p">
                  {this.props.symptomTypeError}
                </Typography>
              </FormControl>

              <FormControl className="formControl" fullWidth>
                <InputLabel htmlFor="symptom-day">
                  <span>
                    Day symptom occurred
                    <Tooltip
                      title="Use the date picker to enter the day when the symptom occurred."
                      placement="top"
                    >
                      <IconButton>
                        {" "}
                        <i className="material-icons">help</i>
                      </IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="symptom-day"
                  type="date"
                  defaultValue="DD-MM-YYYY"
                  className="textField"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.date}
                  onChange={this.props.handleSymptomDayChange}
                />
                <Typography className="formError" component="p">
                  {this.props.symptomDayError}
                </Typography>
              </FormControl>

              <FormControl className="formControl" fullWidth>
                <InputLabel htmlFor="symptom-time">
                  <span>
                    Time symptom occurred (HH:MM AM/PM)
                    <Tooltip
                      title="Use the time picker to enter the time when the symptom occurred."
                      placement="top"
                    >
                      <IconButton>
                        {" "}
                        <i className="material-icons">help</i>
                      </IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="symptom-time"
                  type="time"
                  defaultValue=""
                  className="textField"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.time}
                  onChange={this.props.handleSymptomTimeChange}
                />
                <Typography className="formError" component="p">
                  {this.props.symptomTimeError}
                </Typography>
              </FormControl>

              <FormControl className="formControl" fullWidth>
                <InputLabel htmlFor="additional-symptom-info">
                  <span>
                    Additional information you want to share with your doctor
                    <Tooltip
                      title="Enter any additional notes to discuss with your doctor."
                      placement="top"
                    >
                      <IconButton>
                        {" "}
                        <i className="material-icons">help</i>
                      </IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="additional-symptom-info"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="textField"
                  multiline="true"
                  rows={3}
                  rowsMax={4}
                  value={this.props.info}
                  onChange={this.props.handleSymptomInfoChange}
                />
                <Typography className="formError" component="p">
                  {this.props.symptomInfoError}
                </Typography>
              </FormControl>

              <Button
                size="large"
                className="button"
                onClick={this.props.handleFormSubmit}
                color="primary"
                variant="raised"
              >
                Add symptom
              </Button>
              <Typography className="formSuccess" component="p">
                {this.props.formSuccessMessage}
              </Typography>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default SymptomTextFields;
