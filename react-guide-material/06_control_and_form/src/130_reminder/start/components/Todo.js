import List from './List';
import {Form} from './Form';
import { useState } from 'react';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const todosListState = useState(todosList);

  return (
    <>
      <h1>Reminder</h1>
      <List todosListState={todosListState}/>
      <Form todosListState={todosListState}/>
    </>
  )
};

export default Todo;
