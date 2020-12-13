import { useMemo } from "react";
import { useExplorer } from '../../contexts';
import useSearchEngine from './hooks/useSearchEngine';

import { Flex, Tree } from "../ui";
import Loading from './Loading';

const Body = ({ data, query, sensitive }) => {

  const { result } = useSearchEngine({
    modules: data.modules,
    directories: data.directories,
    query,
    sensitive
  });
  
  return (
    <Flex flex="1" px={4} as="section">
      <Tree data={result} forceExpand={!!query} highlightWord={query} caseSensitive={sensitive} />
    </Flex>
  );
};

const Result = () => {
  const { sandbox, query, sensitive } = useExplorer();

  return useMemo(() => {
    if (!sandbox) {
      return <Loading length={15} />;
    }
    return <Body data={sandbox} query={query} sensitive={sensitive} />;
  }, [sandbox, query, sensitive]);
};

export default Result;