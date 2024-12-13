function loadingStart() {
    setTimeout(() => {
        window.location.href = './routes/signup';
    }, 3000);
}

function closeModal() {
    const modalRoom = document.getElementById('room');

    modalRoom.style.right = "-100%";

    const modalQRCode = document.getElementById('qrcode');

    modalQRCode.style.right = "-100%"

    const modalBag = document.getElementById('bag');
    modalBag.style.right = "-100%"

    const modalDocs = document.getElementById('docs');
    modalDocs.style.right = "-100%"

    const modalChecklist = document.getElementById('checklist');
    modalChecklist.style.right = "-100%"
}

function openRooms() {
    const modalRoom = document.getElementById('room');

    modalRoom.style.right = "0px";
}

function gerarQRCode() {
    const randomText = Math.random().toString(36).substring(2, 15) + Date.now();
    localStorage.setItem("qrcodeText", randomText); // Salva o texto localmente

    // Gera o QR Code
    const qrContainer = document.getElementById("qrCode");
    qrContainer.innerHTML = ""; // Limpa o container
    new QRCode(qrContainer, {
      text: randomText,
      width: 200,
      height: 200,
      colorDark: "#ffc65d",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });

    // Estiliza o canvas (opcional)
    const qrCanvas = qrContainer.getElementsByTagName("canvas")[0];
    if (qrCanvas) {
      qrCanvas.style.borderRadius = "8px";
      qrCanvas.style.overflow = "hidden";
    }
  }

  gerarQRCode()

function openQRCode() {
    const modalQRCode = document.getElementById('qrcode');

    modalQRCode.style.right = "0"

}

function openBag() {
    const modalBag = document.getElementById('bag');
    modalBag.style.right = "0"
}

function openDocs() {
    const modalDocs = document.getElementById('docs');
    modalDocs.style.right = "0"
}

function openChecklist() {
    const modalChecklist = document.getElementById('checklist');
    modalChecklist.style.right = "0"
}

function room1() {
    const room1 = document.querySelector('.room1');

    room1.style.right = "0px"
}

function room2() {
    const room2 = document.querySelector('.room2');

    room2.style.right = "0px"
}

function room3() {
    const room3 = document.querySelector('.room3');

    room3.style.right = "0px"
}

function room4() {
    const room4 = document.querySelector('.room4');

    room4.style.right = "0px"
}

const closeModalRoom = document.getElementById('closeModalRoom');
const closeModalRoom2 = document.getElementById('closeModalRoom2');
const closeModalRoom3 = document.getElementById('closeModalRoom3');
const closeModalRoom4 = document.getElementById('closeModalRoom4');

closeModalRoom.addEventListener('click', () => {
    const room1 = document.querySelector('.room1');

    room1.style.right = "-100%";
})

closeModalRoom2.addEventListener('click', () => {
    const room2 = document.querySelector('.room2');

    room2.style.right = "-100%";
})

closeModalRoom3.addEventListener('click', () => {
    const room3 = document.querySelector('.room3');

    room3.style.right = "-100%";
})

closeModalRoom4.addEventListener('click', () => {
    const room4 = document.querySelector('.room4');

    room4.style.right = "-100%";
})

// const checklistItems = [
//     "Documento de identidade",
//     "Roupas de Banho (3 trocas)",
//     "Protetor Solar",
//     "Toalha de banho",
//     "Toalha de Piscina",
//     "Óculos de Sol",
//     "Boné de praia",
//     "Camisetas (4x)",
//     "Shorts (4x)",
//     "Calça (2x)",
//     "Carregador de Celular",
// ];

// const checklistContainer = document.getElementById('checklist-items');

// checklistItems.forEach(item => {
//     const checklistItem = document.createElement('div');
//     checklistItem.classList.add('checklist-item');

//     const label = document.createElement('label');
//     label.textContent = item;

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';

//     checklistItem.appendChild(checkbox);
//     checklistItem.appendChild(label);

//     checklistContainer.appendChild(checklistItem);
// });

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


// A partir do UID do usuário (recuperado após o login)
const user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        const uid = user.uid;

        const db = firebase.firestore();
        db.collection("users").doc(uid).get() // Resgata o documento do usuário
        .then((doc) => {
            if (doc.exists) {
                const userName = doc.data().name;
                const userSpan = document.querySelector('.nome');
                userSpan.innerHTML = userName;
            } else {
                console.log("Usuário não encontrado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar dados do usuário:", error);
        });
    } else {
        console.log("Nenhum usuário autenticado.");
    }
});
