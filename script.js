
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

var cursos = JSON.parse(localStorage.getItem('lista_cursos')) || [
    'Javascript',
    'JavaScriptES',
    'Nodejs',
    'React',
    'React Native'
];
function listaCursos(){
    listElement.innerHTML="";
    for( curso of cursos){
        var li = document.createElement('li');
        var text = document.createTextNode(curso);
        li.appendChild(text);
        listElement.appendChild(li); 

        var linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");
        var position = cursos.indexOf(curso);
        linkElement.setAttribute('onclick','deletaCurso('+ position +')');
        var textLink = document.createTextNode('Excluir');
        linkElement.appendChild(textLink);
        li.appendChild(linkElement);
    }
}

listaCursos();

function addCurso(){
    var novoCursoText = inputElement.value;
    cursos.push(novoCursoText);
    inputElement.value = "";
    listaCursos();
    saveToStorege();
}
btnElement.onclick = addCurso;

function deletaCurso(position){
    cursos.splice(position, 1);
    listaCursos();
    saveToStorege();
}

function saveToStorege(){
    localStorage.setItem('lista_cursos', JSON.stringify(cursos));
}