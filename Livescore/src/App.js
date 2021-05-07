/*this is the main page of the app this will come in build when you run npx command*/
import './App.css';
import React ,{Fragment, useEffect,useState} from 'react';
import NavBar from "./components/NavBar";
import MyCard from "./components/MyCard";
import {getMatches} from "./ApiSetup/Api";
import {Grid} from '@material-ui/core'
function App() {
  const [matches,setMatches]=useState([]);


  useEffect(() => {
    getMatches().then((data)=> {setMatches(data.matches)
                   console.log(data.matches);}).catch();
  },[]);

  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to My Live Score App</h1>
      <Grid container>
        <Grid sm="3">      
        </Grid>
        <Grid sm="6">
          {
            matches.map((match) => (
              <Fragment key={match.unique_id}>
                {match.type == "Twenty20" ? (<MyCard key={match.unique_id} match={match} />):("") }
              </Fragment>
            ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
