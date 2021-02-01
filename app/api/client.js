import { create } from "apisauce";
import storeManager from "../utility/storeManager";

const apiClient = create({
        baseURL: "http://192.168.2.16:9000/api/",
});

apiClient.addAsyncRequestTransform(async (request) => {
        let token = await storeManager.getSecureData("token");
        if (request.method === "GET") {
                request.params.test = "XXX"; // request params GET
        } else if (request.method === "POST") {
                request.data.test = "XXX"; // request params POST
        }
        if (token) {
                request.headers["x-auth-token"] = token; //default headers for auth
        } else {
                return;
        }
});

export default apiClient;
