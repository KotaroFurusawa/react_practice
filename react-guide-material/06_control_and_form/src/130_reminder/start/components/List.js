
const List = ({todosListState}) => {
    const [todosListVal,setTodosListVals] = todosListState;
    const deleteItem = (id) => {
        const newTodos = todosListVal.filter(todo => todo.id !== id);
        setTodosListVals(newTodos);
    }
    return (
        <>
            {todosListVal.map((todo)=>(
                <div key={todo.id}>
                    <button onClick={() => deleteItem(todo.id)}>完了</button>
                    <span>{todo.content}</span>
                </div>
            ))}
        </>
    )
}

export default List;