const pluOrminus = Math.random()< 0.5 ? -1 : 1;
let count = Math.floor(Math.random()*999*pluOrminus);
document.getElementById("label").innerHTML = count;
document.getElementById("minus").onclick = decrimentLabel;
document.getElementById("plus").onclick = incrimentLabel;

function decrimentLabel() {
    count--;
    document.getElementById("label").innerHTML = count;
}

function incrimentLabel() {
    count++;
    document.getElementById("label").innerHTML = count;
}