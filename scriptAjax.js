
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function buscaUsuario(usuario){
    axios.get('https://api.github.com/users/'+usuario+'',{
        crossDomain: true 
    })
    .then(function(response){
        if(famous(response.data.followers)){
            addUser('Famoso'); 
        }
        else{
            addUser('Pastel');
        }
    })
    .catch(function(error){
        console.warn(error);
    });
}

function famous(followers){
    if(followers >= 2){
        return true;
    }
    return false;
}

function addUser(retorno){
    var li = document.createElement('li');
    var textLI = document.createTextNode(inputElement.value+' - '+retorno);
    li.appendChild(textLI);
    listElement.appendChild(li);
} 

btnElement.setAttribute('onclick','buscaUsuario(inputElement.value)');

