import { Flex, Skeleton } from "../ui";

const Loading = ({ length }) => {
  return (
    <Flex flex="1" flexDirection="column" pl={3}>
      {Array.from({ length }, (_, i) => <Skeleton key={i} width="100%" height="30px" bg="border.colors.secondary" borderRadius="3px" mb={4} />)}
    </Flex>
  );
};

export default Loading;