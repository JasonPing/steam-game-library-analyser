import { useState } from 'react';
import { Input, Button } from '@mui/material';

import styles from './input-box.module.scss';

const InputBox = ({
  searchSteamId,
}: {
  searchSteamId: (searchSteamId: string) => void;
}) => {
  const [steamId, setSteamId] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // potentially need input validation
    // checkout whether is number, etc
    // we can also use third party lib to make life easier
    searchSteamId(steamId);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputBox}>
      <Input
        onChange={(e) => setSteamId(e.target.value)}
        placeholder="Steam ID"
        required
        className={styles.input}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
};

export { InputBox };
