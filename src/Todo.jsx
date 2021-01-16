import React, { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import {Card,ListGroup,Button } from 'react-bootstrap'

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();
  let history = useHistory();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};

 

  return (
    <div>
      {todoDetails ? (
          <Card style={{ width: '18rem' }}>
          <Card.Header>Task Detail</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> {`Todo id: ${todoId}`} </ListGroup.Item>
            <ListGroup.Item> {`Todo userId: ${userId}`} </ListGroup.Item>
            <ListGroup.Item> {`Todo title: ${title}`} </ListGroup.Item>
            <ListGroup.Item> {`Todo completed: ${completed}`}</ListGroup.Item>
            <ListGroup.Item> <Button variant="primary" onClick={() => history.push(`/`)}>Back</Button>{' '}</ListGroup.Item>
          </ListGroup>
          </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
