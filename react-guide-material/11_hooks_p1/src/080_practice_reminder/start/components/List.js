import Item from "./Item";

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todos.map(todo => <Item todo={todo} complete={complete} key={todo.id}/>)}
        </div>
    );
}

export default List;