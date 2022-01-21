import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

class HamburgerMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            // Hide the hamburger menu on small screens and up.
            <Hidden smUp>
                <div>
                    <IconButton
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick} raised size="large"
                    >
                        <i className="fas fa-bars"></i>
                    </IconButton>
                    <Menu
                        id="hamburger-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <a href="/home"><MenuItem onClick={this.handleClose}>Home</MenuItem></a>
                        <a href="/log"><MenuItem onClick={this.handleClose}>My health log</MenuItem></a>
                        <a href="/symptoms"><MenuItem onClick={this.handleClose}>My symptom journal</MenuItem></a>
                        <a href="/doctors"><MenuItem onClick={this.handleClose}>Doctors and clinics</MenuItem></a>
                        <a href="/charts" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Charts</MenuItem></a>
                    </Menu>
                </div>
            </Hidden>
        );
    }
}

//Exporting the HamburgerMenu component so that it can be rendered in the top navigation bar component.
export default HamburgerMenu;

