import { TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    tableContainer: {
        boxShadow: 'none'
    },
    tableCell: {
        border: 'none',
        padding: '0 0 8px 0'
    },
    title: {
        marginBottom: '12px',
        marginTop: '12px',
        fontWeight: '600',
        color: '#484848'
    },
    label: {
        color: '#777777',
        marginBottom: '12px'
    },
    value: {
        fontWeight: 600,
    }
}))