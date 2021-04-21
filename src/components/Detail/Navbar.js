import {AppBar, Toolbar, Container, IconButton} from '@material-ui/core';
import {KeyboardBackspace, FavoriteBorder} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import useStyles from './styles';

const Navbar = ({detail, addFavorite}) => {
    //const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    //const {favorites} = useSelector(state => state);

    // const addFavorite = () => {
    //     dispatch({type: 'SET_FAVORITES', payload: detail})
    //     console.log(favorites);
    // }

    return (
        <>
            <AppBar position="fixed" className={classes.navbarWrapper} color="inherit">
                <Toolbar className={classes.navbar}>
                    <Container maxWidth="md" className={`${classes.container} ${classes.flex}`}>
                        <IconButton color="inherit" onClick={() => history.push('/')}><KeyboardBackspace /></IconButton>
                        <IconButton color="inherit" onClick={() => addFavorite(detail)}><FavoriteBorder /></IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;