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
    let wordOk='false';
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
    let nonContiene='true'
    for (let index = 0; index < array.length; index++) {
        if(array[index]==1||array[index]==3) {
            nonContiene='false';
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