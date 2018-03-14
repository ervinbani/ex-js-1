var listamail=["email1", "email2", "email3", "email4"];

var emailutente = prompt("Inserisci la tua email:");

var count=0;

for (var i = 0; i < listamail.length; i++) {

   if (emailutente ==listamail[i]) {
     count++;
   }
}
   if (count==1) {
     document.writeln('Ok, la tue email e stata verificata, puoi accedere!!');

   }
  else {
    document.writeln('Mi disp, la tue email non e stata verificata, NON puoi accedere!!');
}
