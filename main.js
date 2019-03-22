class Usuario {

    constructor(email,senha){
        this.email = email;
        this.senha = senha;
    }

   // isAdmin = () => { return this.admin ;}
   isAdmin = () =>  this.admin;

}
class Admin extends Usuario {

    constructor(email,senha){
        super(email,senha);
        this.admin = true;
    }
    
}

var user = new Usuario('evandroig@gmail.com','123');
var admin = new Admin('gab@objetivo.com.br','olo');
console.log(`user is admin: ${user.isAdmin()}`);
console.log(`admin is admin: ${admin.isAdmin()}`);