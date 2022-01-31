// -------------------------------   VEZBANJE   ---------------------------------------------------------
// Nova terminologija: snippet code - isecak koda, u ovom slucaju ce biti deo skripte zbog kratkih resenja.
// Napisati javascript snippet code koji :
// 1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
// 2. Od prosledjenjog niza brojeva ispisuje samo parne 
// 3. Racuna sumu prosledjenog niza
// 4. Ispisuje koliko ima brojeva vecih od prvog elementa niza

var niz =[];
var niz=[1,2,3,4,5,6,7]
brojac=0

//1
for (i=0; i<niz.length;i++)
console.log(niz[i]);

//2
for (i=0; i<niz.length;i++)
if(i%2) console.log(niz[i]);

//3
for(i=0;i<niz.length;i++)
suma+=niz[i];

//4
for(i=0; i<niz.length; i++)
if(niz[0]<niz[i])
brojac++

