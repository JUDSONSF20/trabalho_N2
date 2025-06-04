import { useEffect, useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box
} from '@mui/material';
import { getUsuarios, limparUsuarios } from '../service/servico-usuario';

const Lista = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const dados = getUsuarios();
    setUsuarios(dados);
  }, []);

  const handleLimpar = () => {
    const confirmacao = confirm('Tem certeza que deseja excluir todos os usuários?');
    if (confirmacao) {
      limparUsuarios();
      setUsuarios([]);
    }
  };

  return (
    <Paper sx={{ marginTop: 2, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>
          Usuários Cadastrados
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLimpar}>
          Limpar Todos
        </Button>
      </Box>

      {usuarios.length === 0 ? (
        <Typography>Nenhum usuário cadastrado.</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.telefone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
};

export default Lista;
