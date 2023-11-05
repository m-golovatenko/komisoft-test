import Header from '../widgets/header/index';
import { Routing } from '../pages/Routing';
import { withProviders } from './providers/index';
import Footer from '../widgets/footer';

const App = () => {
  return (
    <main>
      <Header />
      <Routing />
      <Footer />
    </main>
  );
};

const appWithProviders = withProviders(App);

export default appWithProviders;
