const displayList = () => {
    const fruits = document.getElementById('fruits');
    const pElements = fruits.querySelectorAll('p');
    pElements.forEach(p => {
        p.parentNode.removeChild(p);
    });

    const ul = document.createElement('ul');
    const fragment = document.createDocumentFragment();
    const li1 = document.createElement('li');
    li1.textContent = "リンゴ";
    fragment.appendChild(li1);
    const li2 = document.createElement('li');
    li2.textContent = "イチゴ";
    fragment.appendChild(li2);
    const li3 = document.createElement('li');
    li3.textContent = "ブドウ";
    fragment.appendChild(li3);

    ul.appendChild(fragment);

    fruits.appendChild(ul);
}