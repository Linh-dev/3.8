function click2() {
    let node = document.getElementById('changed');
    if (node.style.justifyContent == 'space-between') {
        node.style.justifyContent = 'flex-start';
    } else {
        node.style.justifyContent = 'space-between';
    }
}

function click1() {
    document.getElementById("section2").style.display = "flex";
    document.getElementById("section1").style.display = "none";
}

let count = 0;

function displayContent() {
    let str = ["Thực ", "ra ", "không ", "có ", "gì ", "to ", "lớn ", "cả, ", "chỉ ", "đơn ", "giản ", "là ", "H ", "Ạ ", "N ", "H ", "P ", "H ", "Ú ", "C! ", ":D"];
    if (count < str.length) {
        document.getElementById("content").value += str[count];
        count++;
    } else {
        count = 0;
        document.getElementById("content").value = "";
    }

}


function keyupHandler(evt) {
    displayContent();
}