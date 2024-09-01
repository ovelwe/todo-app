import React from 'react';
import './taskList.scss'
import { Todo } from '../../ui/index';

interface Props {
}

export const TaskList: React.FC<Props> = () => {
  return (
    <ul>
        <Todo />
        <Todo />
        <Todo />
    </ul>
  );
};