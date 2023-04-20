import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';

import { IComment } from './type';

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.DBURL,
  projectId: process.env.projectId,
  storageBucket: process.env.authDomain,
  messagingSenderId: process.env.SenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);

class FireBase {
  private db;

  constructor() {
    this.db = getFirestore(app);
  }

  async addComent(comment: IComment) {
    const res = await addDoc(collection(this.db, 'comments'), comment);
    return res;
  }

  async getFirstPage() {
    const q = query(
      collection(this.db, 'comments'),
      orderBy('writedate', 'desc'),
      limit(10)
    );
    const snap = await getDocs(q);
    const docsArray = snap.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return docsArray;
  }

  async getMorePage(key: string) {
    const docRef = doc(this.db, `comments/${key}`);
    const lastDocs = await getDoc(docRef);
    const q = query(
      collection(this.db, 'comments'),
      orderBy('writedate', 'desc'),
      startAfter(lastDocs),
      limit(8)
    );
    const snap = await getDocs(q);
    const docsArray = snap.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return docsArray;
  }

  async deleteComment(key: string) {
    console.log(key);
    const docRef = doc(this.db, `comments/${key}`);
    const res = await deleteDoc(docRef);
    return res;
  }
}

const database = new FireBase();

export default database;
