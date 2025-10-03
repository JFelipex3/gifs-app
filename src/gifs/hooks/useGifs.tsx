import { useState } from "react";

import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
    
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = async (term: string) => {
        const newGifs = await getGifsByQuery(term);
        setGifs(newGifs);
    };

    const handleSearch = async (query: string = '') => {

        query = query.trim().toLowerCase();

        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0, 7));

        const newGifs = await getGifsByQuery(query);
        setGifs(newGifs);

    };

    return {
        //Properties
        gifs,
        previousTerms,

        //Methods or Actions
        handleSearch,
        handleTermClicked
    }
}
