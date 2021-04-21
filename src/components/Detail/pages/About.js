import {Table, TableBody, TableCell, TableRow, TableContainer, Paper, Typography} from '@material-ui/core'

import useStyles from './style';

const About = ({eggGroups, detail, ...rest}) => {
    const classes = useStyles();
    const {species, weight, height, abilities} = detail;
    const ability = abilities.map(item => item.ability.name).join(', ');
    console.log(detail)

    const rows = [
        {name : 'Species', content: species.name},
        {name : 'Height', content: height},
        {name : 'Weight', content: weight},
        {name : 'Abilities', content: ability}
    ]

    const rows2 = [
        {name: 'Genders', content: 'female/male'},
        {name: 'Egg Groups', content: eggGroups},
        {name: 'Egg Cycle', content: 'Grass'}
    ]

    return (
        <div {...rest}>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                    <TableBody>
                        {
                            rows.map((data, i) => (
                                <TableRow key={i}>
                                    <TableCell className={classes.tableCell} style={{width: '30%'}} align="left">
                                        <Typography variant="body2" style={{color: '#777777'}}>
                                            {data.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableCell} style={{width: '70%'}} align="left" scope="row">{data.content}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h6" className={classes.title}>Breeding</Typography>

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                    <TableBody>
                        {
                            rows2.map((data, i) => (
                                <TableRow key={i}>
                                    <TableCell className={classes.tableCell} style={{width: '30%'}} align="left">
                                        <Typography variant="body2" style={{color: '#777777'}}>
                                            {data.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableCell} style={{width: '70%'}} align="left" scope="row">{data.content}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default About;