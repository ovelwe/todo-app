import React, { ReactNode } from 'react';
import './taskList.scss'

interface Props {
  children: ReactNode
}

export const TaskList: React.FC<Props> = ({children}) => {
  return (
    <ul>
        {children}
    </ul>
  );
};
