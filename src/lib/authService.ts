import bcrypt from 'bcrypt';
import usersDb from './userDB';

const saltRounds = 10; // Número de rondas de salting para bcrypt

interface User {
  _id?: string;
  email: string;
  passwordHash: string;
}

export const registerUser = async (email: string, password: string): Promise<User> => {
  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser: User = { email, passwordHash };

    return new Promise((resolve, reject) => {
      usersDb.insert(newUser, (err, doc) => {
        if (err) {
          if (err.errorType === 'uniqueViolated' && err.key === 'email') {
            return reject(new Error('El email ya está registrado.'));
          }
          return reject(err);
        }
        resolve(doc);
      });
    });
  } catch (error) {
    throw new Error(`Error al registrar usuario: ${error.message}`);
  }
};

export const loginUser = async (email: string, password: string): Promise<User | null> => {
  try {
    return new Promise((resolve, reject) => {
      usersDb.findOne({ email }, async (err, user: User | null) => {
        if (err) {
          return reject(err);
        }
        if (!user) {
          return resolve(null); // Usuario no encontrado
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        if (match) {
          // No devolver el passwordHash en el objeto de usuario
          const { passwordHash, ...userWithoutHash } = user;
          resolve(userWithoutHash as User);
        } else {
          resolve(null); // Contraseña incorrecta
        }
      });
    });
  } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
  }
};