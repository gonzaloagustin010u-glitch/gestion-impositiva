import Datastore from 'nedb';
import path from 'path';

const usersDb = new Datastore({
  filename: path.join(process.cwd(), 'data', 'users.db'),
  autoload: true,
});

// Asegurarse de que el campo 'email' sea único
usersDb.ensureIndex({ fieldName: 'email', unique: true }, (err) => {
  if (err) {
    console.error('Error al asegurar el índice para email:', err);
  }
});

export default usersDb;