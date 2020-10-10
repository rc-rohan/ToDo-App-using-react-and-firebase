import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // getting data from the firebase basically listener for the database
    useEffect(() => {
        // this code fires when the app loads
        db.collection("todos").onSnapshot((snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data()));
            setTodos(snapshot.docs.map((doc) => doc.data().task));
            //  here docs refers to the every single todo which we have in the firestore
            // here doc.data.().task : return object and then we convert it to the array using map method
        });
    }, []);

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <div className="App">
            <h1>Hello world </h1>
            <form>
                {/* Basically here we are getting the input from the input variable value and not directly */}
                <FormControl>
                    <InputLabel>✅Add Your ToDo</InputLabel>
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
