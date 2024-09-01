import React from 'react';
import './todo.scss'
import { Label } from '../Label/label';
import { Button } from '@merely-ui/react';
import { InputCustom } from '../InputCustom/inputCustom';

interface Props {
    className?: string;
}

export const Todo: React.FC<Props> = () => {
  return (
    <li>
        <InputCustom type="checkbox" id="todo-1" />
          <Label className='custom-checkbox' htmlFor="todo-1">
             <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="#68FF92"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.69325 17L0 8.94179L1.92331 6.92724L7.69325 12.9709L20.0767 0L22 2.01455L7.69325 17Z"
              />
            </svg>
          </Label>
          <Label className='todo-text' htmlFor="todo-1"> finish work </Label>
          <Button variant='clear' className='delete-button'>
            <svg
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="#0B0B0B"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.6875 28C3.82812 28 3.09271 27.6956 2.48125 27.0869C1.86979 26.4781 1.56354 25.7455 1.5625 24.8889V4.66667H0V1.55556H7.8125V0H17.1875V1.55556H25V4.66667H23.4375V24.8889C23.4375 25.7444 23.1318 26.4771 22.5203 27.0869C21.9089 27.6967 21.1729 28.001 20.3125 28H4.6875ZM20.3125 4.66667H4.6875V24.8889H20.3125V4.66667ZM7.8125 21.7778H10.9375V7.77778H7.8125V21.7778ZM14.0625 21.7778H17.1875V7.77778H14.0625V21.7778Z"
              />
            </svg>
          </Button>
    </li>
  );
};