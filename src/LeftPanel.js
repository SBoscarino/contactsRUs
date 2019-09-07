import React from 'react';
import './Panels.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    maxHeight: 300,
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function LeftPanel(data){
  const classes = useStyles();

  const createList = (data) => {
    console.log('data in left', data);
    if (data === undefined || data.length === 0 ){
      return (
        data.map((customer) => (
          <ListItem alignItems="flex-start" key={customer.id}>
            <ListItemAvatar>
              <Avatar alt={customer.firstName, customer.lastName} src={customer.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={customer.firstName, customer.lastName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {customer.catchPhrase}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        // <Divider variant="inset" component="li" />
        ))
      )}
      else {
        return null
      }
  }

  return (
    <List className={classes.root}>
      {createList(data)}
    </List>
  );
}