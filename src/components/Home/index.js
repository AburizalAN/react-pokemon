import { useEffect, useState } from "react";
import { Container, Grid, Typography } from '@material-ui/core';

import PokemonList from './PokemonList';
import Navbar from './Navbar';

import useStyles from './styles';

const Home = () => {
    const [pokemons, setPokemons] = useState();
    console.log(pokemons);

    const classes = useStyles();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setPokemons(res.results)
        })
        .catch(console.log)
    }, [])
    return (
        <>
            <Navbar />
            <div className={classes.toolbar} />
            <div style={{padding: '48px 0'}}>
                <Container className={classes.container} fixed>
                    <Typography variant="h4" className={classes.title}>Pokedex</Typography>
                    <Grid container spacing={2}>
                    {pokemons && pokemons.map((pokemon, i) => (
                        <PokemonList pokemon={pokemon} key={i} />
                    ))}   
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Home;