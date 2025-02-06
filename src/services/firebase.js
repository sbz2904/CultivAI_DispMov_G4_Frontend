import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4edX_v2fPyrbWd3ytCN-XrTLRSeflf_U",
  authDomain: "cultivai-439c3.firebaseapp.com",
  databaseURL: "https://cultivai-439c3-default-rtdb.firebaseio.com",
  projectId: "cultivai-439c3",
  storageBucket: "cultivai-439c3.firebasestorage.app",
  messagingSenderId: "959150886572",
  appId: "1:959150886572:web:6fdd6ac209ca73416a1909"
  // El siguiente bloque de datos parece estar duplicado, lo he removido para evitar conflicto:
};

// Inicializar la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtener la referencia a la base de datos de Firestore
export const db = getFirestore(app);
