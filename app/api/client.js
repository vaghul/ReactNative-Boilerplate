import { create } from "apisauce";
import environment from "../config/environment";
import storeManager from "../utility/storeManager";

const apiClient = create({
        baseURL: environment.url,
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
