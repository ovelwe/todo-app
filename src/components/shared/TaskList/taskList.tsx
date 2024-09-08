import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';
import { ITodo } from '../../../interfaces/ITodo';
import './taskList.scss';
import { Todo } from '../../ui/Todo/todo';
import { Title } from '@merely-ui/react';

interface Props {}

export const TaskList: React.FC<Props> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
      try {
        const response = await api.get('/todos');
        setTodos(response.data || []);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setTodos([]);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchTodos();
  }, []);

      const handleUpdate = () => {
        fetchTodos();
    };

  if (loading) {
    return <Title>Loading...</Title>;
  }

  if (todos.length === 0) {
    return <Title>No tasks found.</Title>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <Todo task={todo.task} key={todo.id} id={todo.id} isCompleted={todo.isCompleted} onUpdate={handleUpdate}>
        </Todo>
      ))}
    </ul>
  );
};