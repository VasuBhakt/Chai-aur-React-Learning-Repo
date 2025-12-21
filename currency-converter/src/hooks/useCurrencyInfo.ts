import { useEffect, useState } from "react";
import { API_KEY } from "../secrets";

function useCurrencyInfo(currency: string) {
    const [data, setData] = useState<Record<string, number>>({});
    useEffect(() => {
        console.log("API CALLED for:", currency);
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates))
    }, [currency]);

    return data;
}

export default useCurrencyInfo;