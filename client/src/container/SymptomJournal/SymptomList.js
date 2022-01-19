import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';



class SymptomList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4} id={this.props.id} key={this.props.id}>
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
        <Button size="small" color="primary" variant="raised" className={classes.button} onClick={() => { this.props.deleteSymptom(this.props.id); }}>Remove</Button>
      </Paper>
    );
  }
}

export default (SymptomList);
