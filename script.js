// LOGIN
function login(){

let password=document.getElementById("password").value;

if(password==="shopysta"){
window.location.href="home.html";
}else{
document.getElementById("error").innerText="Password salah";
}

}

// FORM KONTAK
function kirim(e){

e.preventDefault();

let nama=document.getElementById("nama").value;
let email=document.getElementById("email").value;

if(nama==="" || email===""){

document.getElementById("hasil").innerText="Isi semua data terlebih dahulu";
return;

}

document.getElementById("hasil").innerText=
"Pesan berhasil dikirim oleh "+nama+" ("+email+")";

}
