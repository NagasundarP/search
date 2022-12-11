import React,{useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import './App.css';

function App() {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<any>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(search);
    fetchData();
    data.filter((users: any) => {
      if (users.name.toLowerCase().includes(search.toLowerCase())) {
        console.log(users.name);
      }
    }
    )
  }
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchUsers();
      setData(dataFromServer);
    }
  }, []);
  
  const fetchData = async () => {
    const response = await fetch('http://localhost:3004/users');
    const data = await response.json();
}
  fetchData();
  return (
    <div className="App">
      <h1>Search App</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        <Form.Label>Search Box</Form.Label>
        <Form.Control type="text" placeholder="Enter item to search" onChange={handleChange} />
        <Form.Text className="text-muted">
          Search for an item
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <div>
        <h2>Results</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;
function fetchUsers() {
  throw new Error('Function not implemented.');
}

