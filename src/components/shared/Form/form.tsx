import React from 'react';
import './form.scss'
import { Button, Input } from '@merely-ui/react';

export const Form: React.FC = () => {
  return (
    <form>
        <Input placeholder='write anything and hit enter to add' autoComplete='off' type='text' boxSizing='border-box' padding={25} width="100%"
        background="none" border="1px solid var(--primary)" borderRadius={30} color='var(--primary)' caretColor='var(--primary)' fontSize={24}
        fontWeight="regular" _placeholder={{
            color: '#7bd694',
            fontSize: '24px'
        }} _focus={{
            outline: 'none'
        }}
        _hover={{
            outlineColor: 'unset'
        }}/>
        <Button id='add-button' variant='clear' display='flex' alignItems='center' backgroundColor='var(--primary)' color='var(--secondary)' position='absolute' top={0} right={0}
        height="100%" padding="0 35px" borderRadius={30} cursor='pointer' fontWeight={800} textTransform='uppercase' fontSize={36}>ADD</Button>
    </form>
  );
};
