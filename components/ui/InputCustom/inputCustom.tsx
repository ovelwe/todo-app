import React, { AllHTMLAttributes } from 'react';

interface Props extends AllHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const InputCustom: React.FC<Props> = ({ className,...props }) => {
  return (
    <input className={className} {...props}></input>
  );
};