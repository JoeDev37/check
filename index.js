
document.title = 'check the day';

const input = document.getElementById('input');
const btnSubmit = document.getElementById('btnSubmit');
const outPut = document.getElementById('outPut');
const someOutPut = document.getElementById('someOutPut');

let count = 0;

document.getElementById('btnSubmit').onclick = () => {
    if (input.value === '') {
        alert('say something first');
    } else if (input.value.toUpperCase() != 'ADD') {
        alert('type add');
    } else if (input.value.toUpperCase() === 'ADD') {
        count ++
        setUserData();
        let li = document.createElement('li');
        outPut.innerHTML = '✅' + `day ${count} completed!!!`;
        outPut.appendChild(li);
        setUserData();
    }
    input.value = '';
}

document.getElementById('removeTask').onclick = () => {
    count = 0;
    outPut.innerHTML = '';
    setUserData();
}

document.getElementById('removeOneTask').onclick = () => {
    let li = document.createElement('li');
    count --;
    if (count > 0 ) {
        outPut.innerHTML = '✅' + `day ${count} completed!!!`;
    } else if (count === 0) {
        outPut.innerHTML = 'Do something!';
    } else if (count < 0) {
        count = 0;
        outPut.innerHTML.display = 'none';
    }
    outPut.appendChild(li);
    setUserData();
}

function setUserData() {
    localStorage.setItem('data', outPut.innerHTML);
    localStorage.setItem('count', count);
}

function getUserData() {
    let getData = localStorage.getItem('data');
    let getCount = localStorage.getItem('count');
    
    if (getData !== null) {
        outPut.innerHTML = getData;
    }

    if (getCount !== null) {
        count = parseInt(getCount)
    }
}
getUserData();
