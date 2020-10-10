import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'

function Todo({task}) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={task} secondary="Todo"></ListItemText>
            </ListItem>
        </List>
    );
}

export default Todo
