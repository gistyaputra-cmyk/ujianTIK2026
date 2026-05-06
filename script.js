// LOGIN
function login(){
let p=document.getElementById("password").value;

if(p==="shopysta"){
window.location.href="home.html";
}else{
document.getElementById("error").innerText="Password salah";
}
}

// KONTAK
function kirim(e){
e.preventDefault();

let nama=document.getElementById("nama").value;
let email=document.getElementById("email").value;

if(nama==="" || email===""){
document.getElementById("hasil").innerText="Isi semua data dulu";
return;
}

document.getElementById("hasil").innerText=
"Pesan terkirim oleh "+nama+" ("+email+")";
}
