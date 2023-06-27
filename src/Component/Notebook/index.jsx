// import { TextField, Box } from '@mui/material';
import { useState } from 'react';
import { Input } from '../Input';
import { Result } from '../Result';
import { Button } from '../Button';
import { margin } from '@mui/system';
export const NoteBook = () => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [city, setCity] = useState('');

  // Add two button with:
  // 1. backgroundcolor: red, color: white, onClick: log event
  // 2. backgroundcolor: green, color: gray, onClick: log 'Button has been clicked'
  return (
    <>
      <Input
        lable={'first-name : '}
        type={'text'}
        id={'first-name'}
        name={'first-name'}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        lable={'last-name : '}
        type={'text'}
        id={'last-name'}
        name={'last-name'}
        value={family}
        onChange={(event) => setFamily(event.target.value)}
      />
      <Input
        lable={'city : '}
        type={'text'}
        id={'city'}
        name={'city'}
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <Result firstName={name} lastName={family} city={city} />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          backgroundColor={'red'}
          color={'white'}
          text={'log event'}
          onClick={(event) => console.log(event)}
        />
        <Button
          backgroundColor={'green'}
          color={'black'}
          text={'text'}
          onClick={() => console.log('Button has been clicked')}
        />
      </div>
    </>
  );
};
