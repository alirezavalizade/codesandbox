import { ThemeProvider } from '../components/ui/ThemeProvider';

const Providers = ({ children }) => {

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default Providers;