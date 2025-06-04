import { useState } from 'react';
import { Container, Tabs, Tab, Box, Paper } from '@mui/material';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';

function App() {
  const [tab, setTab] = useState(0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 5,
      }}
    >
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 600, padding: 3 }}>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          centered
        >
          <Tab label="Cadastro de Usuário" />
          <Tab label="Usuários Cadastrados" />
        </Tabs>

        <Box sx={{ marginTop: 2 }}>
          {tab === 0 && <Cadastro />}
          {tab === 1 && <Lista />}
        </Box>
      </Paper>
    </Box>
  );
}

export default App;


