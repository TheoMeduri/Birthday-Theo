// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDdw0woXXrckhgqV6TjB0EwVpbjmitkK9o",
    authDomain: "birthday-theo.firebaseapp.com",
    projectId: "birthday-theo",
    storageBucket: "birthday-theo.firebasestorage.app",
    messagingSenderId: "591687533731",
    appId: "1:591687533731:web:0a49be235baf9fc5c5eb16"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Função de login
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('Usuário logado:', userCredential.user);
            window.location.href = "./home";
        })
        .catch(error => {
            console.error('Erro no login:', error.message);
            alert("Erro: " + error.message);
        });
});
