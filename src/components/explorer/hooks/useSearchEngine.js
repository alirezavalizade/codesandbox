import debounce from 'lodash.debounce';

import { useEffect, useState, useCallback } from 'react';

import SearchEngine from '../helpers/SearchEngine';

// singleton instace of search engine
let searchEngine;
const useSearchEngine = (options) => {
    const [result, setResult] = useState(() => []);

    const handleResult = useCallback(debounce(setResult, 200), [setResult]);
    
    useEffect(() => {
        if (!searchEngine) {
            searchEngine = new SearchEngine({
                ...options,
                onSuccess: handleResult,
            });
        } else {
            searchEngine.update(options);
        }
    }, [options.query, options.sensitive]);

    useEffect(() => {
        return () => {
            searchEngine.destroy();
        };
    }, []);

    return {
        result,
        setResult,
    };
};

export default useSearchEngine;