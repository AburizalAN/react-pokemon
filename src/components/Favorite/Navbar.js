import {AppBar, Toolbar, Container, IconButton} from '@material-ui/core';
import {KeyboardBackspace, List} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <AppBar position="fixed" className={classes.navbarWrapper} color="inherit">
                <Toolbar className={classes.navbar}>
                    <Container className={`${classes.container} ${classes.flex}`}>
                        <IconButton color="inherit" onClick={() => history.push('/')}><KeyboardBackspace /></IconButton>
                        <IconButton color="inherit"><List /></IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;