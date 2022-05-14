export class AppConstants {

    //metodo para setar a localização do servidor backend
    public static get baseServidor(): string{return "http://localhost:8080/"}

    //montar a URL de login 
    public static get baseLogin(): string{return this.baseServidor + "cursospringrestapi/login"}

    public static  get baseUrl(): string{return this.baseServidor + "cursospringrestapi/usuario/"}
}
