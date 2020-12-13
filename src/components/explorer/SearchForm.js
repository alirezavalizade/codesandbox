import { useMemo } from 'react';
import { useExplorer } from '../../contexts';

import { Box, Input, SearchIcon, MatchCaseIcon, Button } from "../ui";

const SearchForm = () => { 
  const { setQuery, sensitive, changeSensitive } = useExplorer();
  
  return useMemo(() => {
    return (
      <Box
        p={4}
        mb={4}
        borderBottom="1px solid"
        borderColor="border.colors.primary"
      >
          <Input
              name="query"
              type="text"
              autoComplete="off"
              placeholder="Search"
              prefix={
                <SearchIcon size={20} />
              }
              postfix={
                <Box cursor="pointer" color={sensitive ? 'layout.colors.primary' : 'layout.colors.secondary'} onClick={() => changeSensitive(!sensitive)}>
                  <MatchCaseIcon size={20} />
                </Box>
              }
              onChange={setQuery}
          />
          <Box
            pt={4}
          >
            <Button p={3} width="100%">
              Search
            </Button>
          </Box>
      </Box>
    );
  }, [setQuery, sensitive, changeSensitive]);
};

export default SearchForm;