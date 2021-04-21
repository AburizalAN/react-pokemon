import { useEffect, useState } from "react";
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import Navbar from './Navbar';
import DetailMenu from './DetailMenu';
import useStyles from './styles';

const Detail = ({match, addFavorite}) => {
    const id= match.params.id;
    const [detail, setDetail] = useState(null);
    const [color, setColor] = useState();
    const [eggGroups, setEggGroups] = useState();
    const classes = useStyles();
    

    const fetchDetail = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setDetail(res)
        })
        .catch(console.log)
    }

    const fetchColor = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setColor(res.color.name);
            setEggGroups(res.egg_groups);
        })
        .catch(console.log)
    }

    useEffect(() => {
        fetchDetail();
        fetchColor();
    },[])
    

    return (
        <>
            {detail && 
                <section className={classes[color]} style={{minWidth: '100%'}}>
                    <Navbar detail={detail} addFavorite={addFavorite} />
                    <div>
                        <Container maxWidth="sm" className={classes.container} style={{height: '50vh', paddingTop: '100px'}}>
                            <Typography variant="h4" className={classes.title}>{detail.name}</Typography>
                            <ul className={classes.types}>
                                {detail.types.map((type, i) => (
                                    <li className={classes.type} key={i}>
                                        <Paper className={classes.typeName} variant="outlined">{type.type.name}</Paper>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                        {detail && eggGroups && <DetailMenu detail={detail} eggGroups={eggGroups} />}
                    </div>
                </section>
            }
        </>
    )
}

export default Detail;