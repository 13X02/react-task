const label = document.querySelector('.label');


console.log(label);
function add(){
    label.textContent = `${Number(label.textContent) + 1}`;
}
function remove(){
    label.textContent = `${Number(label.textContent) - 1}`;
}