import React, { ReactNode } from 'react';
import './wrapper.scss'

interface Props {
    children: ReactNode
}

export const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  );
};