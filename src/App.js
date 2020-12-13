import GlobalProviders from "./contexts/Providers";

import Layout from "./components/layout";

const App = () => {
  return (
    <GlobalProviders>
      <Layout />
    </GlobalProviders>
  );
};

export default App;
