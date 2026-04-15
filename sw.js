self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('fetch', e => {});
function registrar(){

let nombreInput = document.getElementById("nombre").value;
let emailInput = document.getElementById("emailR").value;
let passInput = document.getElementById("passR").value;
let tipoInput = document.getElementById("tipoUser").value;

auth.createUserWithEmailAndPassword(emailInput, passInput)
.then(res => {

  return db.collection("usuarios").doc(res.user.uid).set({
    nombre: nombreInput,
    tipo: tipoInput
  });

})
.then(() => {
  alert("Usuario creado correctamente 🔥");
  volverLogin();
})
.catch(error => {
  alert("Error: " + error.message);
});

}