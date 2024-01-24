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
  console.log('Post to the database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  
  console.log('Data saved to the database', result?.value);
};

export const getDb = async () => {
  // TODO: Add logic for a method that gets all the content from the database
  console.log('GET from the database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;

  console.log('result.value', result?.value);
  return result?.value;
};

initdb();
