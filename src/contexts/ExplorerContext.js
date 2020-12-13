import React, { useContext, useState, useEffect, useCallback } from 'react';

import { loadExample } from '../api/sandboxes';

const ExplorerContext = React.createContext({});

export const ExplorerProvider = ({ children }) => {
    const [sandbox, setSandbox] = useState(null);
    const [query, setQuery] = useState('');
    const [sensitive, changeSensitive] = useState(false);

    const load = useCallback(() => {
        loadExample()
            .then((response) => {
                setSandbox(response);
            });
    }, [setSandbox]);
    
    useEffect(() => {
        load();
    }, [load]);

    return (
        <ExplorerContext.Provider
          value={{
            sandbox,
            query,
            sensitive,

            setQuery,
            changeSensitive
          }}
        >
          {children}
        </ExplorerContext.Provider>
      );
};

export const useExplorer = () => useContext(ExplorerContext);