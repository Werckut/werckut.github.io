let docs = document.getElementsByClassName('doc');

function writeDoc(id) {
    for (let i = 0; i < docs.length; i++) {
        let doc = docs.item(i);
        let selector = doc.classList.item(1);

        if (selector == id) {
            main.innerHTML = doc.innerHTML;
        }
    }
}