import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('xs')] : {
            paddingLeft: '28px',
            paddingRight: '28px'
        }
    },
    toolbar: theme.mixins.toolbar,
    navbarWrapper: {
        boxShadow: 'none',
        paddingTop: '20px'
    },
    navbar: {
        paddingLeft: 0,
        paddingRight: 0
    },
    title: {
        fontWeight: 700,
        marginBottom: '32px',
        color: '#484848',
        fontFamily: 'Segoe UI'
    },
    root: {
        width: '100%',
        height: '110px',
        padding: '16px',
        borderRadius: '20px',
        color: 'white',
        position: 'relative',
        zIndex: '1'
    },
    green : {
        backgroundColor: '#1abc9c'
    },
    brown: {
        backgroundColor: '#e15f41'
    },
    red: {
        backgroundColor: '#eb4d4b'
    },
    white: {
        backgroundColor: 'rgba(26, 26, 26, 0.6)'
    },
    blue: {
        backgroundColor: '#22a6b3'
    },
    yellow: {
        backgroundColor: '#f9ca24'
    },
    purple: {
        backgroundColor: '#be2edd'
    },
    name: {
        fontWeight: 700,
        marginBottom: '4px'
    },
    types: {
        padding: 0,
        margin: 0
    },
    type: {
        listStyle: 'none',
        marginBottom: '4px'
    },
    typeName: {
        fontSize: '9px',
        padding: '3px 9px',
        display: 'inline-block',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.12)'
    },
    preview: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '80px',
        zIndex: '-1'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))