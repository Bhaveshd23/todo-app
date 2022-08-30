import React, { useState } from "react";
import "./../styles/App.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");
	const [editTodo, setEditTodo] = useState(null);
	const [editText, setEditText] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (todo.length === 0) {
			alert("Enter a task to do!")
		}
		else {
			const newTodo = {
				id: new Date().getTime(),
				text: todo,
			};
			setTodos([...todos, newTodo]);
			setTodo("");
		}
	}

	function deleteTodo(id) {
		let updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	}

	function saveChanges(id) {
		if (editText.length === 0) {
			alert('Enter Something to save')
		}
		else {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === id) {
					todo.text = editText;
				}
				return todo;
			});
			setTodos(updatedTodos);
			setEditTodo(null);
			setEditText('');
		}
	}

	return (
		<div id="container">
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'skyblue' }}>
				<h1 style={{ fontSize: '40px' }}>Todo List</h1>
			</div>
			<form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<input id="task" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} style={{ margin: '0px 10px', height: '25px', fontSize: '23px' }} />
				<button style={{ color: 'skyblue', fontSize: '22px' }} type="submit" id="btn">Add Todo</button>
			</form>
			{todos.map((todo, index) => (
				<div className='list' key={todo.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px', fontSize: '23px' }}>
					<div>{index + 1}.</div>
					<div>
						{todo.id === editTodo ? (
							<input style={{ margin: '0px 10px', height: '25px', fontSize: '23px' }} type="text" onChange={(e) => setEditText(e.target.value)} />
						) : (
							<div style={{ width: '200px' }}>{todo.text}</div>
						)}
					</div>
					<div>
						{todo.id === editTodo ? (
							<button style={{ color: 'skyblue', margin: '0px 7px', fontSize: '20px' }} onClick={() => saveChanges(todo.id)}>Save task</button>
						) : (
							<button style={{ color: 'skyblue', margin: '0px 7px', fontSize: '20px' }} onClick={() => setEditTodo(todo.id)}>Edit</button>
						)}

						{todo.id === editTodo ? (
							<button style={{ color: 'skyblue', margin: '0px 7px', fontSize: '20px' }} onClick={() => deleteTodo(todo.id)}>Delete task</button>
						) : (
							<button style={{ color: 'skyblue', margin: '0px 7px', fontSize: '20px' }} onClick={() => deleteTodo(todo.id)}>Delete</button>
						)}
					</div>
				</div>
			))}
		</div>
	);
}


export default App;
