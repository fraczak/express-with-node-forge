// using 'forge.min.js' from npm 'node-forge' package

// var keyPair = forge.pki.rsa.generateKeyPair( { bits: 1024 } );

var getKeyPair = () => {
  // generer et sauvegarder la clef privee en format PEM dans localStorage
  // si elle n'y est pas encore...
  var keyPair, pem = localStorage.getItem("pem");
  if (pem) {
    privateKey = forge.pki.privateKeyFromPem(pem);
    publicKey = forge.pki.setRsaPublicKey(privateKey.n, privateKey.e);
    keyPair = {privateKey, publicKey};
  } else {
    keyPair = forge.pki.rsa.generateKeyPair({bits: 1024});
    localStorage.setItem("pem",forge.pki.privateKeyToPem(keyPair.privateKey));
  };
  return keyPair;
};

var keyPair = getKeyPair();

document.getElementById( "encrypt" ).addEventListener( "click", event => {
  var msg = document.getElementById( "msg" ).value;
  try {
    document.querySelector( ".result" ).innerText =
      forge.util.encode64( keyPair.publicKey.encrypt( forge.util.encodeUtf8( msg )));
  } catch (err) {
    document.querySelector( ".result" ).innerText = err;
  };
});

document.getElementById( "decrypt" ).addEventListener( "click", event => {
  var msg = document.getElementById( "msg" ).value;
  try {
    document.querySelector( ".result" ).innerText =
      forge.util.decodeUtf8( keyPair.privateKey.decrypt( forge.util.decode64( msg )));
  } catch (err) {
    document.querySelector( ".result" ).innerText = err;
  };
});

