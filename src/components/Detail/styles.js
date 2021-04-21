import { makeStyles } from '@material-ui/core/styles';
import { BorderBottom } from '@material-ui/icons';

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('xs')] : {
            paddingLeft: '28px',
            paddingRight: '28px'
        }
    },
    detailContainer: {
        [theme.breakpoints.up('sm')] : {
            padding: '40px 60px',    
        },
        backgroundColor: 'white',
        padding: '40px 30px',
        borderRadius: '50px 50px 0 0',
        minHeight: '50vh',
    },
    toolbar: theme.mixins.toolbar,
    navbarWrapper: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        paddingTop: '20px'
    },
    navbar: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    title: {
        fontWeight: 700,
        marginBottom: '32px',
        color: 'white',
        fontFamily: 'Segoe UI'
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
    types: {
        padding: 0,
        margin: 0
    },
    type: {
        listStyle: 'none',
        display: 'inline-block',
        marginBottom: '10px',
        marginRight: '10px',
    },
    typeName: {
        padding: '5px 10px',
        display: 'inline-block',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.12)'
    },
    preview: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '120px',
        zIndex: '-1'
    },
    detailMenu: {
        fontSize: '14px',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '0.5px solid #dddddd'
    },
    detailMenuItem: {
        listStyle: 'none',
        color: '#484848',
        fontWeight: '600',
        padding: '16px 0',
        borderBottom: '1px solid transparent',
        cursor: 'pointer'
    },
    detailPage: {
        fontSize: '14px',
        marginTop: '24px',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    active: {
        borderBottom: '0.5px solid #0c5ba5'
    }
}))