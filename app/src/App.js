import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';

const classes = {
  paper: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}


function App() {
  const [generated_name, setName] = useState('');
  const [names, setNames] = useState([]);

  //componentDidMount
  useEffect(() => {
    setNames(['Zohar','Shadi','Ali','Nataliya','Miras','Anita','Or','Kfir','Liron','Vadim','Dotan','Gil']);
  }, []);

  function generate_random_name(){
    if(names.length === 0){
      setName('No more names to generate');
      return;
    }
    var name = names[Math.floor(Math.random() * names.length)];
    setName(name);
    remove_elem(names,name);
  }

  function remove_elem(list,elem){
    for( var i = 0; i < list.length; i++){ 
      if ( list[i] === elem) {
          list.splice(i, 1);
          setNames(list) 
      }
    }
  }

  return (
    <div className="App">
      <Container component="main" maxWidth="xs" style={{ backgroundColor: 'white', borderRadius: 5}}>
        <div style={classes.paper}> 
          <h3>Click <i>Generate</i> to generate a random team member name</h3>
          <Button variant="contained" color="primary" onClick={generate_random_name}>
            Generate
          </Button>
          <h3>{generated_name}</h3>
          <br/>
        </div>
      </Container>
    </div>
  );
}

export default App;
