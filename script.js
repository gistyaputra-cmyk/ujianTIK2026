// LOGIN
function login(){
let u=document.getElementById("username")?.value.trim();
let p=document.getElementById("password")?.value.trim();

if(u==="admin" && p==="1234"){
window.location.href="home.html";
}else{
document.getElementById("error").innerText="Username / Password salah";
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
"Data diterima: "+nama+" ("+email+")";
}
