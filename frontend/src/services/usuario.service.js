import http from "../http-common";

class UsuarioDataService{
    create(data){
        return http.post("/cadastrar", data);
    }

    getAll(){
        return http.get("/lista")
    }

    delete(id){
        return http.delete(`/lista/${id}`);
    }

    update(id, data){
        return http.put(`/lista/${id}`, data);
    }
}

export default new UsuarioDataService();