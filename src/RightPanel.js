import React from 'react';
import './Panels.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxHeight: 450,
    overflow: 'scroll',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 70,
    width: 70,
    border: 2,
    borderColor: '#fff4dd',
    borderStyle: 'solid',
  },
  addSpacing: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  subtitleSpacing: {
    paddingTop: theme.spacing(1),
  },
  color: {
    color: '#fff4dd',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  addMargin: {
    marginLeft: 5,
  }
}));

export default function RightPanel(selectedCustomer){
  const classes = useStyles();

  const checkForCustomer = () => {
    const {customer} = selectedCustomer.selectedCustomer
    if (customer !== undefined){
      return (
        <CardContent>
          <CardContent className={classes.content}>
            <div className={classes.flex}>
              <div>
              <Avatar alt={customer.firstName} src={customer.avatar} className={classes.cover}/>
              </div>
              <div>
                <Typography component="h4" variant="h4" className={classes.addMargin}>
                  {customer.firstName + ' ' + customer.lastName}
                </Typography>
                <Typography variant="subtitle1" className={classes.addSpacing}>
                  ID: {customer.id}
                </Typography>
              </div>
            </div>

            <Divider variant="middle" />

            <Typography component="h5" variant="h5" className={classes.subtitleSpacing}>
              About
            </Typography>

            <div className={classes.addSpacing}>
              <Typography> DOB: {customer.dob} </Typography>
              <Typography> Phone: {customer.phone} </Typography>
              <Typography> Last Words: "{customer.catchPhrase}"  </Typography>
              <Typography> More Details: "{customer.lastWords}" </Typography>
            </div>

            <Divider variant="middle" />

            <Typography component="h5" variant="h5" className={classes.subtitleSpacing}>
              Address
            </Typography>
            <div className={classes.addSpacing}>
              <Typography> Street Address: {customer.address.street} </Typography>
              <Typography> City: {customer.address.city} </Typography>
              <Typography> State: {customer.address.state} </Typography>
              <Typography> Zip: {customer.address.zip} </Typography>
            </div>
            
            <Divider variant="middle" />

            <Typography vcomponent="h5" variant="h5" className={classes.subtitleSpacing}>
              Work
            </Typography>
            <div className={classes.addSpacing}>
              <Typography> Company: {customer.work.company} </Typography>
              <Typography> Title: {customer.jobTitle} </Typography>
              <Typography> Job Type: {customer.jobType} </Typography>
              <Typography> Description: {customer.jobDescriptor} </Typography>
              <Typography> Product: {customer.work.product} </Typography>
              <Typography> Price: ${customer.work.price} </Typography>
            </div>
          </CardContent>
        </CardContent>
      )
      } else { 
       return (
        <CardContent>
          <CardContent className={classes.content}>
            <Typography variant="h4"> Welcome </Typography>
            <Typography className={classes.addSpacing}> Please execute a clicky-clicky on a customer to the left to begin. </Typography>
          </CardContent>
        </CardContent>
      )
   }
  }
  return (
    <Card className={classes.card}>
      {checkForCustomer()}
    </Card>
  );
}
