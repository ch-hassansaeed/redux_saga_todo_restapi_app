import React from "react";
import { useHistory } from "react-router-dom";
import {Card,ListGroup,Button } from 'react-bootstrap'

const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
  let history = useHistory();

  return (
    <div
      style={{
        margin: "10px",
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
                  <Card style={{ width: '18rem' }}>
          <Card.Header>{title}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> {`Completed: ${completed}`} </ListGroup.Item>
            <ListGroup.Item> <Button variant="secondary" onClick={() => history.push(`/todo/${id}`)}>View Detail</Button>{' '}</ListGroup.Item>
          </ListGroup>
          </Card>

      <h4>  </h4>
      <h6>  </h6>
    </div>
  );
};

export default TodoCard;
