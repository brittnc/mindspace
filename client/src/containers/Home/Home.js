// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Subhead, Link } from "rebass";
// Import UI components from material-ui-next.
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
// Importing icons/images
import report from "../../assets/images/medical_report.png";
import journal from "../../assets/images/journal.png";
import chart from "../../assets/images/chart2.png";
// Importing Navbar component.
import NavBar from "../../Components/AppBar";

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 50,
  },
  title: {
    color: "white",
  },
  heading: {
    fontSize: 35,
    color: "white",
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid
            container
            spacing={24}
            className={classes.root}
            justify="center"
          >
            <Typography
              variant="display1"
              align="center"
              className={classes.title}
            >
              What would you like to do today?
            </Typography>
          </Grid>
        </Grid>
        ,
        <div className="main-content-section">
          <Grid container spacing={24} className={classes.root}>
            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                My Health Log
              </Typography>
              <Subhead align="center">
                <Link href="/log">
                  <img src={report} alt="clipboard" />
                </Link>
              </Subhead>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                My Journal
              </Typography>
              <Subhead align="center">
                <Link href="/symptoms">
                  <img src={journal} alt="health journal" />
                </Link>
              </Subhead>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                Charts
              </Typography>
              <Subhead align="center">
                <Link href="/charts">
                  <img src={chart} alt="line graph" />
                </Link>
              </Subhead>
            </Grid>
          </Grid>
        </div>
        ,
      </div>,
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default withStyles(styles)(Home);
