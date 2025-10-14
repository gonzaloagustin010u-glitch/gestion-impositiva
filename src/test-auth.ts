import { registerUser, loginUser } from './lib/authService';

const runTests = async () => {
  console.log('--- Iniciando pruebas de autenticación ---');

  // 1. Registrar un nuevo usuario
  try {
    console.log('\n--- Registrando usuario: test@example.com ---');
    const newUser = await registerUser('test@example.com', 'password123');
    console.log('Usuario registrado exitosamente:', newUser);
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
  }

  // 2. Intentar registrar el mismo usuario (debe fallar por email duplicado)
  try {
    console.log('\n--- Intentando registrar el mismo usuario de nuevo ---');
    await registerUser('test@example.com', 'anotherpassword');
    console.log('Error: Se registró el mismo usuario dos veces inesperadamente.');
  } catch (error) {
    console.log('Registro duplicado esperado:', error.message);
  }

  // 3. Iniciar sesión con credenciales correctas
  try {
    console.log('\n--- Iniciando sesión con test@example.com (credenciales correctas) ---');
    const user = await loginUser('test@example.com', 'password123');
    if (user) {
      console.log('Inicio de sesión exitoso:', user);
    } else {
      console.log('Error: Falló el inicio de sesión con credenciales correctas.');
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error.message);
  }

  // 4. Iniciar sesión con contraseña incorrecta
  try {
    console.log('\n--- Iniciando sesión con test@example.com (contraseña incorrecta) ---');
    const user = await loginUser('test@example.com', 'wrongpassword');
    if (user) {
      console.log('Error: Inicio de sesión exitoso con contraseña incorrecta.');
    } else {
      console.log('Inicio de sesión fallido esperado (contraseña incorrecta).');
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error.message);
  }

  // 5. Iniciar sesión con un usuario que no existe
  try {
    console.log('\n--- Iniciando sesión con usuario_no_existe@example.com ---');
    const user = await loginUser('usuario_no_existe@example.com', 'anypassword');
    if (user) {
      console.log('Error: Inicio de sesión exitoso con usuario inexistente.');
    } else {
      console.log('Inicio de sesión fallido esperado (usuario no existe).');
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error.message);
  }

  console.log('\n--- Pruebas de autenticación finalizadas ---');
};

runTests();