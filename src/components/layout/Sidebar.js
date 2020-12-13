import { Flex, Box } from "../ui";

import Explorer from '../explorer/Explorer';

const Header = () => {
  return (
    <Flex
      alignItems="center"
      minHeight="2.5rem"
      px={4}
      borderBottom="1px solid"
      borderColor="border.colors.primary"
      as="header"
    >
      <Box as="p" m="0" fontSize={3}>
        Search
      </Box>
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <Flex width="309px" flexDirection="column">
      <Header />
      <Explorer />
    </Flex>
  );
};

export default Sidebar;
