import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import {Helmet} from "react-helmet";

class List extends Component {
  state = {
    Tasks: [],
    add: false,
  };

  componentDidMount() {
    axios.get("https://task-api-bi.herokuapp.com/list").then((res) => {
      const Tasks = res.data.Tasks;
      console.log(Tasks.length);
      for (let i = 0; i < Tasks.length; i++) {
        if (Tasks[i].duration == null) {
          Tasks[i].duration = "Permanent";
        }
      }
      this.setState({ Tasks });
      console.log(Tasks);
    });
  }

  render() {
    return (
      <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>All Task</title>
            </Helmet>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Duration(minutes)</th>
              <th>Title</th>
              <th>Description</th>
              <th>Creator</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Tasks.map((Task) => (
              <tr>
                <td>{Task.duration}</td>
                <td>{Task.taskname}</td>
                <td>{Task.task_description}</td>
                <td>{Task.creator}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default List;
