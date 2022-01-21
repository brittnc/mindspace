import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    width: 500,
  },
  copyright: {
    marginTop: 10,
    backgroundColor: '#2b91bf',
    color: 'white',
  },
  footerContent: {
    backgroundColor: '#2b91bf',
    color: 'white',
  },
  button: {
    color: 'white',
    float: 'right',
    marginBottom: 60,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className="footer">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.footerContent}>
            MindSpace
          </Typography>
          <Typography component="p" className={classes.footerContent}>
            Created by Angela K, Britt C, Cody K, Hardik R, Mandeep S, Shem B
          </Typography>
          <Typography component="p" className={classes.copyright}>
            Copyright &copy; 2022
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

// Exporting the footer component with styling.
export default withStyles(styles)(Footer);
