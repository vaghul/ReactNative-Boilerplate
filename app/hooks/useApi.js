import { useState } from "react";

export default (ApiFunc) => {
        const [data, setdata] = useState([]);
        const [error, seterror] = useState(false);
        const [loading, setloading] = useState(false);

        const request = async (...args) => {
                setloading(true);
                const result = await ApiFunc(...args);
                setloading(false);
                seterror(!result.ok);
                setdata(result.data);
                return result;
        };

        return { data, error, loading, request };
};
