import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'myDB.db' });

export const initDatabase = () => {
  db.transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
      )`,
      [],
      (tx, res) => {},
      (error) => {}
    );
  });
};

export const insertUser = (name, email, password) => {
  db.transaction((txn) => {
    txn.executeSql(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, password],
      (tx, res) => {},
      (error) => {}
    );
  });
};

export const getUsers = (callback) => {
  db.transaction((txn) => {
    txn.executeSql(
      `SELECT * FROM users`,
      [],
      (tx, res) => {
        const users = res.rows.raw();
        callback(users);
      },
      (error) => {}
    );
  });
};

export const deleteUser = (userId) => {
  db.transaction((txn) => {
    txn.executeSql(
      `DELETE FROM users WHERE id = ?`,
      [userId],
      (tx, res) => {},
      (error) => {}
    );
  });
};

export const clearAllUsers = (callback) => {
  db.transaction((txn) => {
    txn.executeSql(
      `DELETE FROM users`,
      [],
      (tx, res) => {
        callback();
      },
      (error) => {}
    );
  });
};
export const getUserNameByEmail = (email, callback) => {
  db.transaction((txn) => {
    txn.executeSql(
      `SELECT name FROM users WHERE email = ?`,
      [email],
      (tx, res) => {
        if (res.rows.length > 0) {
          const userName = res.rows.item(0).name;
          callback(userName);
        }
      },
      (error) => {
        console.error('Error fetching user name:', error);
      }
    );
  });
};
