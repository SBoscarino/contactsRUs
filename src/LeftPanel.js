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
    maxHeight: 400,
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    border: 2,
    borderColor: '#fff4dd',
    borderStyle: 'solid',
  },
  inline: {
    display: 'inline',
  },
  divider: {
    border: 4,
    borderColor: '#fff4dd',
    borderStyle: 'solid',
  }
}));

export default function LeftPanel(onClick, data){
  const classes = useStyles();

  const createList = (data) => {
    let clickFunction = onClick.onClick
    let theData = data
    if (theData.data !== undefined || theData.length > 0){
      return (
        data.data.map((customer) => (
          <div key={customer.customer.id}>
            <ListItem alignItems="flex-start" onClick={event => clickFunction(customer)}>
              <ListItemAvatar>
                <Avatar alt={customer.customer.firstName} src={customer.customer.avatar} className={classes.divider} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                  <Typography
                    component="span"
                    variant="h6"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {customer.customer.firstName + ' ' + customer.customer.lastName}
                  </Typography>
                </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {customer.customer.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="middle" />
          </div>
        ))
      )}
      else {
        return null
      }
  }

  return (
    <List className={classes.root}>
      {createList(onClick, data)}
    </List>
  );
}