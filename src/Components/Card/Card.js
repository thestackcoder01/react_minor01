import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop:'1rem'
  },
  spaceToTop : {
    marginTop: '2rem' // 1 rem = 16px 
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Card(props) {
    const {name, description, delet, edit} = props;
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Accordion className = {classes.spaceToTop}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>{name}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                    <Typography>
                        {description}
                    </Typography>
                    </AccordionDetails>

                    <AccordionDetails>
                    <Typography align = 'right' className = {classes.root}>
                        <Button onClick={edit} color="primary">Edit</Button>
                        <Button onClick = {delet} color="secondary">Delete</Button>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>        
    )
}

export default Card
