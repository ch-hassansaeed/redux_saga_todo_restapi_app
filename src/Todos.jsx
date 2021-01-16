import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/user";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const todos = useSelector((state) => state.user.user);
  console.log(todos);


  return (
    <>
          {todos ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {todos.slice(0, 50).map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
              )
                )}
            </div>
          ) : (
            <CircularProgress />
          )}
        </>
      );

  
}

export default App;
