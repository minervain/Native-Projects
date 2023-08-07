import { useState, useEffect } from "react";
import axios from "axios";

const useFood = (url) => {
    const [categories, setCategories] = useState([]);
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setCategories(response.data.meals);
                setLoading(false);
            } catch (error) {
                console.error(error); // Hata nesnesini konsola yazdır
                setError(error);
                setLoading(false);
            }
        };
        
        

        fetchData();
    }, [url]);

    return { Error, categories, Loading };
};

export default useFood;
