// Importing React since we are using React.
import React, { Component } from "react";
import NavBar from "../../Components/AppBar";
import SymptomTextFields from "./SymptomForm";
import SymptomList from "./SymptomList";
import SymptomAPI from "../../utils/SymptomAPI";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import bgImg from "../../assets/images/space2.png";

// Import Sidebar component.
import Sidebar from "../../Components/Sidebar";

// Style/Theme
const styles = (theme) => ({
  button: {
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#007AC1",
    color: "white",
  },
  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundImage: { bgImg },
    padding: theme.spacing.unit * 3,
  },
});

class SymptomJournal extends Component {
  state = {
    symptomType: "",
    symptomDay: "",
    symptomTime: "",
    symptomInfo: "",
    symptoms: [],
    symptomTypeError: "",
    symptomDayError: "",
    symptomTimeError: "",
    symptomInfoError: "",
    formSuccessMessage: "",
  };

  componentDidMount() {
    this.loadSymptoms();
  }

  loadSymptoms = () => {
    SymptomAPI.getSymptoms()
      .then((res) =>
        this.setState({
          symptoms: res.data,
          symptomDay: "",
          symptomTime: "",
          symptomInfo: "",
        })
      )
      .catch((err) => console.log(err));
  };

  deleteSymptom = (id) => {
    SymptomAPI.deleteSymptom(id)
      .then((res) => this.loadSymptoms())
      .catch((err) => console.log(err));
  };

  handleSymptomTypeChange = (event) => {
    this.setState({
      symptomType: event.target.value,
      symptomTypeError: "",
      formSuccessMessage: "",
    });
  };

  handleSymptomDayChange = (event) => {
    this.setState({
      symptomDay: event.target.value,
      symptomDayError: "",
      formSuccessMessage: "",
    });
  };

  handleSymptomTimeChange = (event) => {
    this.setState({
      symptomTime: event.target.value,
      symptomTimeError: "",
      formSuccessMessage: "",
    });
  };

  handleSymptomInfoChange = (event) => {
    this.setState({
      symptomInfo: event.target.value,
      symptomInfoError: "",
      formSuccessMessage: "",
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.symptomType === "") {
      this.setState({
        symptomTypeError: "Select a symptom from the drop-down list.",
      });
    }

    if (this.state.symptomDay === "" || this.state.symptomDay === "mm/dd/yyy") {
      this.setState({
        symptomDayError:
          "Use the date picker to select the day when the symptom occurred.",
      });
    }

    if (this.state.symptomTime === "") {
      this.setState({
        symptomTimeError:
          "Use the time picker to select the time when the symptom occurred using the HH:MM AM/PM format.",
      });
    }

    if (this.state.symptomInfo === "") {
      this.setState({
        symptomInfoError:
          "Enter any additonal information about the symptom. If you don't have any other information, type N/A for this field.",
      });
    } else {
      SymptomAPI.saveSymptom({
        symptomType: this.state.symptomType,
        symptomDate: this.state.symptomDay,
        symptomTime: this.state.symptomTime,
        symptomInfo: this.state.symptomInfo,
      })
        .then((res) => this.loadSymptoms())
        .catch((err) => console.log(err));

      this.setState({
        formSuccessMessage: `${this.state.symptomType} from ${this.state.symptomDay} added successfully!`,
      });

      // Clear form
      document.getElementById("symptom-form").reset();
    }
  };

  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div className={classes.appFrame}>
        <Sidebar />
        <main className={classes.content}>
          <div style={{ padding: 70 }}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display1" align="left">
                  My symptom journal
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={6}>
                  <SymptomTextFields
                    handleFormSubmit={this.handleFormSubmit}
                    handleSymptomTypeChange={this.handleSymptomTypeChange}
                    handleSymptomDayChange={this.handleSymptomDayChange}
                    handleSymptomTimeChange={this.handleSymptomTimeChange}
                    handleSymptomInfoChange={this.handleSymptomInfoChange}
                    symptomTypeError={this.state.symptomTypeError}
                    symptomDayError={this.state.symptomDayError}
                    symptomTimeError={this.state.symptomTimeError}
                    symptomInfoError={this.state.symptomInfoError}
                    formSuccessMessage={this.state.formSuccessMessage}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  {this.state.symptoms.map((symptom) => {
                    return (
                      <SymptomList
                        id={symptom._id}
                        key={symptom._id}
                        type={symptom.symptomType}
                        date={symptom.symptomDate}
                        time={symptom.symptomTime}
                        info={symptom.symptomInfo}
                        deleteSymptom={this.deleteSymptom}
                      />
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          </div>
        </main>
      </div>,
    ];
  }
}

export default withStyles(styles)(SymptomJournal);
