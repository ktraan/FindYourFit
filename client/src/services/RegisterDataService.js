import http from "../http-common";

class RegisterDataService {
    create(data) {
        return http.post("/register", data)
    }
}