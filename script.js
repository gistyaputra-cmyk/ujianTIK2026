// LOGIN
function login(){

let password=document.getElementById("password").value;

if(password==="smadw"){
window.location.href="home.html";
}else{
document.getElementById("error").innerText="Password salah";
}

}

// LOGOUT
function logout(){

window.location.href="index.html";

}

// BOOKING
function booking(gunung){

let pesan="Halo, saya ingin booking tiket pendakian "+gunung;

window.open(
"https://wa.me/6285708829924?text="+encodeURIComponent(pesan)
);

}
