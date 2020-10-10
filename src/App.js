import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // getting data from the firebase basically listener for the database
    useEffect(() => {
        // this code fires when the app loads
        db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
                // onSnapshot i basically a type of the listener here
                setTodos(snapshot.docs.map((doc) => ({id: doc.id,todo:doc.data().todo})));
                //  here docs refers to the every single todo which we have in the firestore
                // here doc.data.().task : return object and then we convert it to the array using map method
            });
    }, []);

    const addTodo = (e) => {
        e.preventDefault();

        db.collection("todos").add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        // Now as soon as we add the iput the db takes the new snapshot and then update the db in the firesotre

        /*
        timestamp: firebase.firestore.FieldValue.serverTimestamp();
           this line means that we are adding the firebase server inorder to sort the todos in last added first in stack
           And we can add it from anywhere and the sync in the server willl be present as we are usiing here the firebase timmestamp
        */

        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <div className="App">
            <h1>Hello world </h1>
            <form>
                {/* Basically here we are getting the input from the input variable value and not directly */}
                <FormControl>
                    <InputLabel>
                        <span role="img">✅</span>Add Your ToDo
                    </InputLabel>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </FormControl>
                <Button
                    disabled={!input}
                    type="submit"
                    onClick={addTodo}
                    variant="contained"
                    color="primary"
                >
                    Add Todo
                </Button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <Todo task={todo} />
                ))}
            </ul>
        </div>
    );
}

export default App;
