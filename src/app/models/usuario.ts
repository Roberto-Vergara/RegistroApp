export class Usuario {

    public email:String;
    public password:String;


    constructor(email:String,password:String){
        this.email=email;
        this.password=password;
    }

    public setUsuario(email:String,password:String):void{
        this.email=email;
        this.password=password;
    }

    public llenarUsuariosValidos():Usuario[]{
        const lista=[];
        lista.push(new Usuario('avalenzuela@duocuc.cl','qwer'));
        lista.push(new Usuario('atorres@duocuc.cl','1234'));
        lista.push(new Usuario('cfuentes@duocuc.cl','asdf'));
        return lista;
    }

    public validarUsuario(usuario:Usuario):boolean{
        let pivot:boolean=false;
        this.llenarUsuariosValidos().forEach(ele => {
            if(ele.email==usuario.email && ele.password==usuario.password){
                pivot=true;
            }
        });
        return pivot;
    }

    
    
}
