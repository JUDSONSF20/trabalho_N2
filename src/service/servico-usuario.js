const STORAGE_KEY = 'usuarios';

export const getUsuarios = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const salvarUsuario = (usuario) => {
  const usuarios = getUsuarios();
  usuarios.push(usuario);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
};

export const limparUsuarios = () => {
  localStorage.removeItem(STORAGE_KEY);
};
