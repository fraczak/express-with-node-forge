// using variable 'forge' from 'forge.min.js'

var keyPair;

if (localStorage.getItem("pem")) {
  const privateKey = forge.pki.privateKeyFromPem(localStorage.getItem("pem"));
  const publicKey = forge.pki.setRsaPublicKey(privateKey.n, privateKey.e);
  keyPair = { privateKey, publicKey };
} else {
  keyPair = forge.pki.rsa.generateKeyPair({ bits: 1024 });
  localStorage.setItem("pem", forge.pki.privateKeyToPem(keyPair.privateKey));
}

const encrypt = (msg) =>
  forge.util.encode64(keyPair.publicKey.encrypt(forge.util.encodeUtf8(msg)));

const decrypt = (code) =>
  forge.util.decodeUtf8(keyPair.privateKey.decrypt(forge.util.decode64(code)));

document.getElementById("encrypt").addEventListener("click", (event) => {
  try {
    document.querySelector(".result").innerText = encrypt(
      document.getElementById("msg").value
    );
  } catch (err) {
    document.querySelector(".result").innerText = err;
  }
});

document.getElementById("decrypt").addEventListener("click", (event) => {
  try {
    document.querySelector(".result").innerText = decrypt(
      document.getElementById("msg").value
    );
  } catch (err) {
    document.querySelector(".result").innerText = err;
  }
});

//--------------------------------------------------------------

const printPublicKey = () =>
  forge.pki.publicKeyToPem(keyPair.publicKey);

const readPublicKey = (pem) =>
  forge.pki.publicKeyFromPem(pem);
