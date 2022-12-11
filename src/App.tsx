import React,{useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import './App.css';

function App() {
  // eslint-disable-next-line 
  const [key, setKey] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKey(event.target.value);
    function getKeyByValue(object: { [x: string]: any; person1?: string; person2?: string; person3?: string; }, value: string) {
      return Object.keys(object).find(key => object[key] === value);
    }
    
    const map = {"person1": "John", "person2": "Jane", "person3": "Jack"};
    const answer = (getKeyByValue(map, event.target.value));
    if (answer === "person1") {
      setAnswer("person1");
    }
    else if (answer === "person2") {
      setAnswer("person2");
    }
    else if (answer === "person3") {
      setAnswer("person3");
    }
    else {
      setAnswer("Not Found");
    }
  }

  return (
    <div className="App">
      <h1>Search App</h1>
      <Form>
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
        <h1>Result</h1>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;


