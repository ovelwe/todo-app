import React, { ReactNode } from 'react';
import './title.scss';

interface Props {
    children: ReactNode;
}

export const Title: React.FC<Props> = ({ children }) => {
  return (
    <h1>
        {children}
    </h1>
  );
};