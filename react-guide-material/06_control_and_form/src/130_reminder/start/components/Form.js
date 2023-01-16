import { useState } from 'react';

export const Form = ({todosListState}) => {
    const [todosListVal,setTodosListVals] = todosListState;
    const [input,setInput] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        const todo = {
            id: todosListVal[todosListVal.length-1].id + 1,
            content: input
        }
        setTodosListVals([...todosListVal,todo])
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
                <button>追加</button>
            </form>
        </div>
    )
};
