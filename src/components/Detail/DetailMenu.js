import { Container } from '@material-ui/core';
import { About, Evolution, Stat, Moves,} from './pages';
import { useState } from 'react';
import useStyles from './styles';

const DetailMenu = ({detail, eggGroups}) => {
    const classes = useStyles();
    const [isActive, setIsActive] = useState('about');

    const eggGroupsConv = eggGroups.map(item => item.name).join(', ');

    return (
        <Container maxWidth="sm" className={`${classes.container} ${classes.detailContainer}`} style={{backgroundColor: 'white'}}>
            <ul className={classes.detailMenu}>
                <li className={`${classes.detailMenuItem}`} style={{borderBottomColor: isActive === 'about' ? '#0c5ba5' : 'transparent' }} onClick={() => setIsActive('about')}>About</li>
                <li className={classes.detailMenuItem} style={{borderBottomColor: isActive === 'stat' ? '#0c5ba5' : 'transparent' }} onClick={() => setIsActive('stat')}>Base Stat</li>
                <li className={classes.detailMenuItem} style={{borderBottomColor: isActive === 'evolution' ? '#0c5ba5' : 'transparent' }} onClick={() => setIsActive('evolution')}>Evolution</li>
                <li className={classes.detailMenuItem} style={{borderBottomColor: isActive === 'moves' ? '#0c5ba5' : 'transparent' }} onClick={() => setIsActive('moves')}>Moves</li>
            </ul>
            <div className={classes.detailPage}>
                <About eggGroups={eggGroupsConv} detail={detail} style={{display: isActive === 'about' ? 'block' : 'none'}} />
                <Evolution style={{display: isActive === 'evolution' ? 'block' : 'none'}} />
                <Stat style={{display: isActive === 'stat' ? 'block' : 'none'}} />
                <Moves style={{display: isActive === 'moves' ? 'block' : 'none'}} />
            </div>
            <img src={detail.sprites.front_default} 
            className="d-block position-absolute" 
            style={{width: '200px', bottom: '50%', left: '50%', transform: 'translate(-50%, 20px)'}}/>
        </Container>
    )
}

export default DetailMenu;