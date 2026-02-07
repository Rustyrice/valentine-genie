import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import {
  getFirestore,
  addDoc,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDvWsD9hYZn3J5how_899O2mXFYrmgnAtA',
  authDomain: 'valentine-genie.firebaseapp.com',
  projectId: 'valentine-genie',
  storageBucket: 'valentine-genie.firebasestorage.app',
  messagingSenderId: '852393520001',
  appId: '1:852393520001:web:112fa3e906b10892ad5680',
  measurementId: 'G-21Z7JFJ136',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function saveWishesToDB({ wish1, wish2, wish3 }) {
  if (!wish1 || !wish2 || !wish3) {
    throw new Error('Invalid wishes data')
  }

  return addDoc(collection(db, 'valentine_wishes'), {
    wish1,
    wish2,
    wish3,
    createdAt: new Date(),
  })
}
