import { Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useStyles from './styles';

const PokemonList = ({pokemon, ...rest}) => {
    const classes = useStyles();
    const [color, setColor] = useState();

    const fetchColor = () => {
        fetch(pokemon.species.url)
        .then(res => res.json())
        .then(res => setColor(res.color.name))
        .catch(console.log)
    }

    useEffect(() => {
        fetchColor()
    },[])

    return (
        <>
            {
                <Grid component={Link} to={`/detail/${pokemon.name}`} item xs={6} sm={6} md={4} lg={3} {...rest} style={{display: 'flex'}}>
                    <Paper className={`${classes.root} ${classes[color]}`} elevation={0}>
                        <Typography variant='body1' className={classes.name}>{pokemon.name}</Typography>
                        <ul className={classes.types}>
                            {pokemon.types.map(type => (
                                <li className={classes.type} key={type.slot}>
                                    <Paper className={classes.typeName} variant="outlined">{type.type.name}</Paper>
                                </li>
                            ))}
                        </ul>
                        <img className={classes.preview} src={pokemon.sprites.front_default}></img>
                    </Paper>
                </Grid>
            }
        </>
    )
}

export default PokemonList;