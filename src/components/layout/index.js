import { Flex } from '../ui';
import Sidebar from './Sidebar';
import Resizer from './Resizer';
import Content from './Content';

const Layout = () => {

    return (
        <Flex flex="1" bg="layout.bg" color="layout.colors.primary">
            <Sidebar />
            <Resizer />
            <Content />
        </Flex>
    );
};

export default Layout;