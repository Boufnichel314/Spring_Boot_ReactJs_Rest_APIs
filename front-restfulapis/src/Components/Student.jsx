import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container,Paper } from '@mui/material';
import { useEffect } from 'react';

export default function Student() {
    const paperStyle={padding :20,height:'30vh',width:280, margin:"20px auto"}
    const [name, setName] = React.useState('');
    const [adress, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);
    const [id, setId] = React.useState('');


    const HandleClick=(e)=>{
        e.preventDefault()
        const student={name,adress}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      }).then(()=>{
        console.log("New Student added")
      })
    }

    //handeremove
    const HandleRemove=()=>{
        console.log(id)
        fetch("http://localhost:8080/student/delete/"+id,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        }).then(()=>{
            console.log("Student deleted")
        })
    }

    
    useEffect(()=>{
      fetch("http://localhost:8080/student")
      .then(res=>res.json())
      .then((result)=>{
        console.log(result)
        setStudents(result);
      }
    )
    },[])

  return (
    <Container>
       <Paper elevation={3} style={paperStyle}>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Add Student</h1>
      <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
      name='name'
        onChange={(e) => setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Student Adress" variant="standard" fullWidth
      name='addres'
        onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={HandleClick}>Ajouter</Button>
    

       </Paper>
       <Paper elevation={3} style={paperStyle}>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Remove Student</h1>
      <TextField id="standard-basic" label="Student id" variant="standard" fullWidth
      name='id'
        onChange={(e) => setId(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={HandleRemove}>Ajouter</Button>
       </Paper>
    </Container>
  );
}
