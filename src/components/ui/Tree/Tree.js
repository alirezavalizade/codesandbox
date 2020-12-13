import { useEffect, useState } from 'react';

import Highlighter from 'react-highlight-words';

import { Box, Flex, RightArrowIcon, DownArrowIcon } from '../';

import Icon from './Icon';
import { RowWrapper, SubRow } from './elements'

const IF = ({ children, when, else: renamed }) => {
    if (when) {
      return children;
    }
    return renamed || null;
};
  
const Row = ({ data, forceExpand, highlightWord, caseSensitive }) => {
    const [show, setShow] = useState(forceExpand);
    const isTitle = typeof data === 'string';
    const hasItems = !isTitle && data.items && data.items.length > 0;
    const expand = !isTitle && hasItems && show;
    const isDirectory = !isTitle && !data.code;

    useEffect(() => {
        setShow(forceExpand);
    }, [data, forceExpand]);

    return (
        <RowWrapper
            minHeight="2rem"
            flex="1"
        >
            <Flex alignItems="center" cursor="pointer" onClick={() => setShow(!isTitle && !show)}>
                <Box size="15px" mr={3}>
                    <IF when={hasItems}>
                        {expand ? <DownArrowIcon size={15} /> : <RightArrowIcon  size={15}/>}
                    </IF>
                </Box>
                <Icon title={isTitle ? data : data.title} isDirectory={isDirectory} />
                <Box as="p" m="0" py={3} fontSize={3}>
                    <Highlighter
                        highlightClassName="mark"
                        searchWords={[highlightWord]}
                        autoEscape={true}
                        textToHighlight={isTitle ? data : data.title}
                        caseSensitive={caseSensitive}
                    />
                </Box>
            </Flex>
            <IF when={!isTitle}>
                <SubRow pl={3} active={expand}>
                    {expand && data.items.map(row => <Row key={row.id} data={row} forceExpand={forceExpand} highlightWord={highlightWord} caseSensitive={caseSensitive} />)}
                </SubRow>
            </IF>
        </RowWrapper>
    );
};

const Tree = ({ data, forceExpand, highlightWord, caseSensitive }) => {
    return (
        <Flex flexDirection="column" width="100%">
            {data.map(row => {
                return (
                    <Row key={row.id} data={row} forceExpand={forceExpand} highlightWord={highlightWord} caseSensitive={caseSensitive} />
                );
            })}
        </Flex>
    );
};

Tree.defaultProps = {
    data: [],
    forceExpand: false,
    highlightWord: '',
    caseSensitive: false,
};

export default Tree;
