// using 'forge.min.js' from npm 'node-forge' package

var keyPair = forge.pki.rsa.generateKeyPair( { bits: 1024 } );

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

