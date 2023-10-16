

let newItem = '';
let itemArray = [];

let count = 0;
while (newItem !== 'stop' && count < 30) {
    newItem = prompt('Inserisci nuovo oggetto nella lista della spesa, quando hai finito inserisci stop').toLowerCase();
    if (newItem !== 'stop') {
        itemArray.push(newItem);
    }
    count++;

}
console.log(count);
console.log(itemArray);


const unordList = document.querySelector('.list-group');


for (let i = 0; i < itemArray.length; i++) {
    const eachItem = itemArray[i];
    let itemList = document.createElement('li');
    itemList.className = 'list-group-item';
    itemList.innerHTML = eachItem;
    unordList.append(itemList);
    

}
console.log (unordList);
