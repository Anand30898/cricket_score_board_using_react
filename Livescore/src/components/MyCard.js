/*This is the card components of the APP*/
/*here are all the important libraries that are required*/
import { Button, CardActions, CardContent, Dialog, DialogActions, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core'
import React,{Fragment, useState} from 'react'
import Card from '@material-ui/core/Card';
import { getMatchDetails } from '../ApiSetup/Api';


const MyCard= ({match})=> {

const [detail,setdetail]=useState({});

const [open,setOpen]=useState(false);

const handleClick=(id)=>{
    getMatchDetails(id)
    .then((data)=>{console.log("Match Data:",data)
         setdetail(data);
         handleOpen();
         }).catch(error=>console.log(error));
}    

const getMatchCard=()=>{
    return (
        <Card style={{marginTop :10}}>
            <CardContent>
                <Grid container justify="center" alignItems="center" spacing={4}>
                    <Grid item>
                        <Typography variant="h5">{match['team-1']}</Typography> 
                    </Grid>
                    <Grid item>
                        <Typography><h1>VS</h1></Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{match['team-2']}</Typography>
                    </Grid>
                </Grid>           
            </CardContent>
            <CardActions>
                <Grid container justify="center" >
                    <Button variant="contained" color="secondary" onClick={()=>{handleClick(match.unique_id)}}>show details</Button>
                    <Button style={{margin:5}} variant="contained" color="primary">Start Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                </Grid>
            </CardActions>
        </Card>
        )
}    

const handleClose=()=>{
    setOpen(false);
}

const handleOpen=()=>{
    setOpen(true);
}

const getDialog =()=>( 
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
        <DialogContentText id="alert-diolog-description">
            <Typography>{detail.stat}</Typography>
            <Typography>
                Match <span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.matchStarted?"Started":"Still Not Started"}</span>
            </Typography>
            <Typography>
                Match Score <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{detail.score}</span>
            </Typography>
        </DialogContentText>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
        </DialogActions>
    </Dialog>
        )
    return<Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>;
        
    
};

export default MyCard
