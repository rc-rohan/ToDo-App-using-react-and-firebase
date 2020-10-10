import { Modal, List, ListItem, ListItemText, Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #333",
        boxShodow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo({ task }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        // Update the todo here
        db.collection('todos').doc(task.id).set({
            todo:input
        },{merge:true})
        // merge:true prevents from overiding what things are already there in the colection list
        setOpen(false);
    };

    return (
        <>
            {/* Error happening here */}
            {/* Creating the Modal */}
            <Modal open={open} onClose={(e) => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Open</h1>
                    <input
                        type="text"
                        value={input}
                        placeholder={task.todo}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText
                        primary={task.todo}
                        secondary="Todo"
                    ></ListItemText>
                </ListItem>
                {/* Button for the Modal */}
                <button onClick={(e) => setOpen(true)}>Edit</button>
                <DeleteForeverIcon
                    onClick={(e) =>
                        db.collection("todos").doc(task.id).delete()
                    }
                />
            </List>
        </>
    );
}

export default Todo;
