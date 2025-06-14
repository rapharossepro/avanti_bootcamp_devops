
// Importa os módulos Firebase (se estiver usando via CDN, manter o script no HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// 🔐 Configuração segura do Firebase (exemplo genérico)
const firebaseConfig = {
  apiKey: "AIzaSyD4-FALSA-CHAVE-GENERICA-PARA-EXEMPLO123",
  authDomain: "seu-projeto-exemplo.firebaseapp.com",
  databaseURL: "https://seu-projeto-exemplo-default-rtdb.firebaseio.com",
  projectId: "seu-projeto-exemplo",
  storageBucket: "seu-projeto-exemplo.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:abcdefgh123456"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Captura os dados do formulário
const form = document.getElementById("form-hack");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form["name"].value;
  const email = form["email"].value;
  const whatsapp = form["whatsapp"].value;

  const userData = { name, email, whatsapp };
  const usersRef = ref(db, "users");
  const newUserRef = push(usersRef);

  set(newUserRef, userData)
    .then(() => {
      alert("Dados enviados com sucesso!");
      form.reset();
    })
    .catch((error) => {
      console.error("Erro ao enviar dados:", error);
    });
});
