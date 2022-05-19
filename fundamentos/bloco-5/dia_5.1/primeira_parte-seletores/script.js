//Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

const paragraph = document.getElementById("page-title").innerText = 'O grande Gastby';

//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById("second-paragraph").innerText = 'interinstellar';
//Por fim, recupere o subtítulo e altere-o também.
document.getElementById('subtitle').innerText = "Segundo melhor filme"

//Adicione uma classe igual para os dois parágrafos.
document.getElementsByClassName("exercicio")[0].innerText = 'O grande Gatsby é o melhor'

//Altere algum estilo do primeiro deles.

document.getElementsByClassName('exercicio')[0].style = 'border: solid red'