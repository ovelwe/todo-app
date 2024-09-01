import React, { LabelHTMLAttributes, ReactNode } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement>{
    children: ReactNode
    className?: string
}

export const Label: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <label className={className} {...props}>
        {children}
    </label>
  );
};