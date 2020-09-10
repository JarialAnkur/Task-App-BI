import React from "react";
import { Form, Button } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";

const Front = () => {
  const [body, setBody] = useState({
    taskname: "",
    task_description: "",
    creator: "",
    duration: null,
  });
  const [state, setState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://task-api-bi.herokuapp.com/add", body).then((res) => {
      if (res.status === 200) {
        setState(true);
      }
    });
  };
  const handleChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  if (state) {
    return <Redirect exact push to={{pathname:'/alltask'}}/>
  } else {
    return (
      <div className="container" style={{ border:'2px solid #000000'}}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Add Task</title>
            </Helmet>
        <h1>Add Task</h1>
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="formBasicText">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              required
              name="taskname"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <textarea
              class="form-control"
              type="text"
              placeholder="Description"
              rows="3"
              required
              name="task_description"
              onChange={handleChange}
            />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name of Creator</Form.Label>
              <Form.Control
                type="text"
                placeholder="Who made this task?"
                required
                name="creator"
                onChange={handleChange}
              />
            </Form.Group >
          
          <Form.Group controlId="formBasicText"> 
            <Form.Label>Duration(in Minutes)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Duration of this task"
              name="duration"
              onChange={handleChange}
            ></Form.Control>
            <Form.Text className="text-muted">
              Ignore this field if you want your task to never get deleted
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

export default Front;
