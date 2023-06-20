import { TextField, Box } from '@mui/material';
import { useState } from 'react';
import { Result } from '../Result';
export const NoteBook = () => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [city, setCity] = useState('');

  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        ,
        <TextField
          id="outlined-basic"
          label="family"
          variant="outlined"
          value={family}
          onChange={(event) => setFamily(event.target.value)}
        />
        ,
        <TextField
          id="outlined-basic"
          label="city"
          variant="outlined"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        ,
      </Box>

      <Result firstName={name} lastName={family} city={city} />
    </>
  );
};
