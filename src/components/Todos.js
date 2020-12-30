import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch();
	const handleClick = id => dispatch({
		type: 'DELETE_TODO',
		payload: id,
	});
	if (!todos || !todos.length) return <p>No existing todos.</p>
	return (
		<div>
			<ul>
				{todos.map(todo => 
						<li>
							{todo.label} - 
							<button onClick={() => handleClick(todo.id)}>Delete Todo</button>
						</li>
					)
				}
			</ul>
		</div>
	)
}

export default Todos;