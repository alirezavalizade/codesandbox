import { useTheme } from '../ui/ThemeProvider';

import { Flex, Box, Button } from '../ui';

const Content = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Flex flex="1" justifyContent="center" alignItems="center">
            <Box>
                <Button onClick={toggleTheme} py={3} px={9}>
                    {theme === 'dark' ? 'Go Light' : 'Go Dark'}
                </Button>
            </Box>
        </Flex>
    );
};

export default Content;