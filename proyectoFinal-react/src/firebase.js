import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Credenciales de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_ID_PROYECTO",
  storageBucket: "TU_BUCKET.appspot.com",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }