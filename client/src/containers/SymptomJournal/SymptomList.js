// Import React
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Style/Theme
const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#0e5f76',
  }),
  button: {
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#0e5f76',
    color: 'white',
  },
});

class SymptomList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.root}
        elevation={4}
        id={this.props.id}
        key={this.props.id}
      >
        <Typography component="p">
          <b>Symptom:</b> {this.props.type}
        </Typography>
        <Typography component="p">
          <b>Date:</b> {this.props.date}
        </Typography>
        <Typography component="p">
          <b>Time:</b> {this.props.time}
        </Typography>
        <Typography component="p">
          <b>More info:</b> {this.props.info}
        </Typography>
        <Button
          size="small"
          color="primary"
          variant="raised"
          className={classes.button}
          onClick={() => {
            this.props.deleteSymptom(this.props.id);
          }}
        >
          Remove
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(SymptomList);
