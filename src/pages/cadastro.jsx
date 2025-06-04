import { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';
import { salvarUsuario } from '../service/servico-usuario';
const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples (campos obrigatórios)
    if (!formData.nome || !formData.email || !formData.telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    salvarUsuario(formData);
    setFormData({ nome: '', email: '', telefone: '' });
    alert('Novo Usuário cadastrado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Formulário de Cadastro
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
};

export default Cadastro;

