import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "./Todo.css";
import db from "./firebase";

function Todo({ task }) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText
                    primary={task.todo}
                    secondary="Todo"
                ></ListItemText>
            </ListItem>
            <Button
                onClick={(e) => db.collection("todos").doc(task.id).delete()}
            >
                ❌ Delete Task
            </Button>
        </List>
    );
}

export default Todo;
