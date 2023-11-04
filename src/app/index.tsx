import Header from '../widgets/header/index';
import { Routing } from '../pages/Routing';
import { withProviders } from './providers/index';

const App = () => {
  return (
    <main>
      <Header />
      <Routing />
    </main>
  );
};

const appWithProviders = withProviders(App);

export default appWithProviders;
