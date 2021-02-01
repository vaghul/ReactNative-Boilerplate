import endpoint from "../config/endpoint";
import client from "./client";

const userlogin = (userinfo) => {
        return client.post(endpoint.LOGIN, userinfo);
};

export default {
        userlogin,
};
