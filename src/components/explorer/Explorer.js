import { Flex, ScrollKit } from "../ui";

import SearchForm from './SearchForm';
import Result from './Result';

import { ExplorerProvider } from '../../contexts';

const Explorer = () => {
  
  return (
      <Flex flex="1" flexDirection="column" as="section" overflow="hidden">
          <ExplorerProvider>
              <SearchForm />
              <ScrollKit mode="thin">
                <Result />
              </ScrollKit>
          </ExplorerProvider>
      </Flex>
  );
};

export default Explorer;