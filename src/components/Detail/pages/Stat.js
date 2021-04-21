import { LinearProgress, Typography, Grid, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './style';

const CustomLinearProgress = withStyles((theme) => ({
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    colorSecondary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    barColorPrimary: {
        backgroundColor: '#6ab04c'
    },
    barColorSecondary: {
        backgroundColor: '#eb4d4b'
    }
}))(LinearProgress);

const Stat = ({...rest}) => {

    const classes = useStyles();

    const dataStat = [
        {label: 'HP', value: 45},
        {label: 'Attack', value: 60},
        {label: 'Defense', value: 48},
        {label: 'Sp. Atk', value: 65},
        {label: 'Sp. Def', value: 65},
        {label: 'Speed', value: 45}
    ]

    return (
        <div {...rest}>
            <>
                {dataStat.map((data, i) => (
                    <Grid key={i} container className="align-items-center">
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.label}>{data.label}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body2" className={classes.value}>{data.value}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLinearProgress variant="determinate" value={data.value} color={data.value > 50 ? 'primary' : 'secondary'} />
                        </Grid>
                    </Grid> 
                ))}
                <Typography variant="body1" style={{fontWeight: '600', marginTop: '16px'}}>Type Defenses</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet lorem ipsum</Typography>
            </>
        </div>
    )
}

export default Stat;