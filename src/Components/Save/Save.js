import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      marginTop: '2rem'
    },
  }));
  
function Save(props) {
    const {home, id, name, description, change, isUpdate, save} = props;
    const classes = useStyles();

    return (
        <div>
          <TextField
          className={classes.root}
          disabled = {isUpdate}
          label="UserId"
          name = 'id'
          value = {id}
          onChange = {change}
          multiline
          />
          <TextField
          className={classes.root}
          label="Username"
          name='name'
          value = {name}
          onChange = {change}
          multiline
          />
          <TextField
          className={classes.root}
          label="User's desc"
          name = 'description'
          value = {description}
          onChange = {change}
          multiline
          />
          <Typography className={classes.root}>
            <Button onClick = {save} style= {{marginRight:"1rem"}} variant="contained" color="primary">Save</Button>
            <Button onClick = {home} variant="contained" color="secondary">Go back to homepage</Button>
          </Typography>
        </div>
    )
}

export default Save
