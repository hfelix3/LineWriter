import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  // TODO: Add logic to a method that accepts some content and adds it to the database

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);
};

export const getDb = async () => {
  // TODO: Add logic for a method that gets all the content from the database

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
