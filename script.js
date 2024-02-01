//1. Funzione controlla due numeri interi e ritorna true se uno dei due è 50 o se la loro somma è 50
function esercizio1(a,b){
    if((a===50)||(b===50)||((a+b)===50)) return true
    else return false
}
//2. funzione che rimuova il carattere ad una specifica posizione di una stringa; passa tringa e posizione come parametri
//   e ritorna la stringa modificata
function esercizio2(tempVar,tempPosition){
    tempVar=tempVar.replace(tempVar[tempPosition],'');
    // semmai tempPosition-1 se voglio il quarto carattere
    return tempVar
}

//3. Funz controlla se due numeri siano compresi tra 40 e 60 o tra 70-100, ritorna true se rispecchia queste condizioni
function esercizio3(a,b){
    if((40<=a&&a<=60)||(70<=a&&a<=100)){
        if((40<=b&&b<=60)||(70<=b&&b<=100)) return true;
        else return false
    }else return false
}
//4. Funz accetta nomi citta e ritorna true se inizia con NEW o LOS
function esercizio4(city){
    city=city.toLowerCase();
    let wordOk=false;
    //controllo che inizi
    if((city[0]!=='n')&&(city[0]!=='l')) return wordOk;
    else{
        workOk=(city.includes('los'))||(city.includes('new'));
        return workOk;
    }
}
//5. Funzione somma tutti elementi array e ritorna risultato
function esercizio5(a){
    let sum=0;
    for (const iterator of a) {
       sum=sum+iterator;
    }
    return sum;
}
//6. Funz controllo array non contenga 1 - 3 e ritroni true o false
function esercizio6(array){
    let nonContiene=true;
    for (let index = 0; index < array.length; index++) {
        if(array[index]==1||array[index]==3) {
            nonContiene=false;
            break}
    }
    return nonContiene;
}

//7. Funz trovare tipo angolo in base ai gradi passati come parametro
//   <90 acuto, 90 retto, 90-180 ottuso 180 piatto
function esercizio7(angolo){
    if(angolo==0) return "nullo";
    else if(angolo<90) return "acuto";
    else if(angolo==90) return "retto";
    else if(angolo==180) return "piatto";
    else if(angolo>180) return "convesso";
    else return "ottuso";
}
//8. Funz crea acronimo partendo da una frase
function esercizio8(frase){
    let acronimo='';
    let parole=frase.split(' ');
    for (const parola of parole) {
      acronimo=acronimo.concat(parola[0]);
    }
    return acronimo;
}

// ************ EXTRA ******************

//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
function extra1(stringaTemp){
    let bench=[stringaTemp[0],0];
    let carattere='';
    let delta=0;
    let lunghezza=0;
    do{
        lunghezza=stringaTemp.length;
        carattere=stringaTemp[0];
        stringaTemp=stringaTemp.replaceAll(stringaTemp[0],'');
        delta=lunghezza-stringaTemp.length;
        if(bench[1]<delta){
            bench[0]=carattere;
            bench[1]=delta;
        }
    }while(stringaTemp!=='')
    // variabile con carattere e n di ripetizioni
    return bench;
}
//2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi 
//    e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.
function extra2(a,b){
    let anagrammi=true;
    for (const iterator of a) {
        if(!b.includes(iterator)){
            anagrammi=false;
            break;  
        }
        else{
            b=b.replace(iterator,'');
        }
    }
    return anagrammi;
}
//3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti
//    gli anagrammi corretti della parola data.
//    Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
function extra3(a,b){
    let risposta=[];
    for (let index = 0; index < b.length; index++) {
        if(extra2(a,b[index])){
            risposta=risposta.concat(b[index]);
        }    
    }
    return risposta;
}
//4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
function extra4(varString){
    let varTemp='';
    for (let index = (varString.length-1); index>=0; index--) {
        varTemp=varTemp.concat(varString[index]);     
    }
    return (varTemp==varString);
}
//5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
function extra5(numbVar){
    let varTemp=''+numbVar;
    let numb='';
    for (let index = (varTemp.length-1); index>=0; index--) {
        numb=numb.concat(varTemp[index]);     
    }
    return (parseInt(numb));
}
//6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata 
//    con il carattere “#” e avente X scalini.
function extra6(numbVar){
    let varString='#';
    while(numbVar>0){
        console.log(varString);
        varString=varString.concat('#');
        numbVar--;
    }
}
//7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
function extra7(stringVar){
    let varTemp='';
    for (let index = (stringVar.length-1); index>=0; index--) {
        varTemp=varTemp.concat(stringVar[index]);     
    }
    return varTemp;
}
//8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
function extra8(arrayTemp,y){
    let risposta=[];
    let i=0;
    let index=0;
    while(index<arrayTemp.length){
        risposta[i]=arrayTemp.slice(index,(index+y));
        i++;
        index=index+y;
    }
    return risposta;
}
//9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” 
//    create con il carattere “#” e avente X strati.
function extra9(numbVar){
    let varString='#';
    while(numbVar>0){
        console.log(varString);
        varString=varString.concat('##');
        numbVar--;
    }
}
//10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// function extra10(N){
//     let max=(N-1);
//     let numbVar=1;
//     let start=0;
//     let matriceTemp=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//     let prova=1;
//     while(prova<2){
//         for (let index = start; index<=max; index++) {
//           matriceTemp[start][index]=numbVar;
//           numbVar++;  
//         }
//         for (let index = (start+1); index<max; index++) {
//             matriceTemp[index][(max-1)]=numbVar;
//             numbVar++;  
//         }
//         max--;
//         for (let index = (max-1); index >=start; index--) {
//             matriceTemp[max][index]=numbVar;
//             numbVar++;  
//         }
        
//         for (let index = (max-1); index >start; index--) {
//             matriceTemp[index][start]=numbVar;
//             numbVar++;  
//         }
//         console.log(matriceTemp);
//         start++;
//         max--;
//         console.log(start,max);
        
//         prova++;
//     }
// }