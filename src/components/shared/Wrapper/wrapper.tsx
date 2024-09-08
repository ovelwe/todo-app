import React, { ReactNode, useState } from 'react';
import './wrapper.scss'
import { Form, TaskList } from '..';

interface Props {}

export const Wrapper: React.FC<Props> = () => {
   const [updateKey, setUpdateKey] = useState(0);

   const handleTaskAdded = () => {
    setUpdateKey(prevKey => prevKey + 1);
  };
  return (
    <div>
      <Form onTaskAdded={handleTaskAdded} />
      <TaskList key={updateKey} />
    </div>
  );
};