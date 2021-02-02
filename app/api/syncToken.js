import endpoint from "../config/endpoint";
import client from "./client";

const register = (pushToken) => client.post(endpoint.SYNCTOKEN, { token: pushToken });

export default {
        register,
};
