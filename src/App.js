import React, { useState } from "react";
import { Button, FormControl, InputLabel ,Input} from "@material-ui/core";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

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
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
