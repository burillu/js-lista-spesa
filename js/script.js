
// let item = prompt('isnerisci');
let newItem='';
let itemArray= [];
// itemArray.push(item);
let count= 0;
while (newItem !== 'stop' && count<30){    
    newItem = prompt ('Inserisci nuovo oggetto nella lista della spesa, quando hai finito inserisci stop');
    if (newItem !== 'stop'){
        itemArray.push(newItem);    
    }
    count++;
    
}
console.log(count);
console.log(itemArray);
// console.log(item)