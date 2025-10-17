import { useRef, useState } from "react";

import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const newGifs = await getGifsByQuery(term);
        gifsCache.current[term] = newGifs;
        setGifs(newGifs);

    };

    const handleSearch = async (query: string = '') => {

        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        let alreadyExists = false;
        setPreviousTerms(prev => {
            if (prev.includes(query)) {
                alreadyExists = true;
                return prev;
            }
            return [query, ...prev].slice(0, 8)
        });

        const newGifs = await getGifsByQuery(query);
        gifsCache.current[query] = newGifs;
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
