import React, { useState } from 'react'

import { useDispatch } from "react-redux";

const NewTodoInput = () => {
	const dispatch = useDispatch();
	const [newTodo, setNewTodo] = useState();
	const handleChange = event => setNewTodo(event.target.value);
	const handleClick = () => {
		dispatch({
			type: 'ADD_TODO',
			payload: {
				label: newTodo,
				id: Math.ceil(Math.random() * 100),
			}
		});
	}
	return (
		<div>
			<input type='text' value={newTodo} onChange={handleChange} />
			<button onClick={handleClick}>Add Todo</button>
		</div>
	)
}

export default NewTodoInput;