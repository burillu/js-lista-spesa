
// let item = prompt('isnerisci');
let newItem='';
let itemArray= [];
// itemArray.push(item);
let count= 0;
while (newItem !== 'stop' || count === 10){    
    newItem = prompt ('Inserisci nuovo oggetto nella lista della spesa, quando hai finito inserisci stop');
    itemArray.push(newItem);
    console.log(itemArray);
    console.log(count);
    count++;
    
}
console.log(count);
console.log(itemArray);
// console.log(item)