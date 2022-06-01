
let father = document.querySelector('body');
let fatherMain = document.querySelector('main');
let fatherSection = document.querySelector('section');


newTag = document.createElement('h1');
newTag.innerText = 'Exercício 5.2';

father.appendChild(newTag);


newMain = document.createElement('main');
newMain.createAttribute = 'main-content';

father.appendChild(newMain)


newSection = document.createElement('section')
father.appendChild(newSection)
