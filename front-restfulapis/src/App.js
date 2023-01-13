import * as React from 'react';
import './App.css';
function App() {
      //regroup the data recieved from the form in a single object
      const data = {
        name: document.querySelector('input[name="name"]').value,
        address: document.querySelector('input[name="address"]').value
      }
      //make the HandleSubmit function async
      const HandleSubmit = async (e) => {
        e.preventDefault();
        //make the fetch request to the backend
        const response = await fetch('http://localhost:8080/student/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        //get the response from the backend
        const body = await response.json();
        //check if the response is successful
        if (response.status !== 200) {
          throw Error(body.message)
        }
        return body;
      }

  return (
    <div className="App">
      <div className='form-container'>
      <form className='form'>
              <div className="input_label">
              <label>Student Name</label>
              <input type="text" name="name" />
              </div>
              <div className="input_label">
              <label>Student Address</label>
              <input type="text" name="address" />
              </div>
              <input type="submit" value="Add Student"  onClick={HandleSubmit} />
      </form>
      </div>
    </div>

  );
}
export default App;
