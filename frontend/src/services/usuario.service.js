import http from "../http-common";

class UsuarioDataService{
    create(data){
        return http.post("/usuarios", data);
    }

    getAll(){
        return http.get("/usuarios");
    }

    get(id) {
        return http.get(`/usuarios/${id}`);
    }

    delete(id){
        return http.delete(`/usuarios/${id}`);
    }

    update(id, data){
        return http.put(`/usuarios/${id}`, data);
    }
}

export default new UsuarioDataService();