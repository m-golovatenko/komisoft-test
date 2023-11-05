import Header from '../widgets/header/index';
import { Routing } from '../pages/Routing';
import { withProviders } from './providers/index';
import Footer from '../widgets/footer';

const App = () => {
  return (
    <main className="flex flex-col justify-between h-full">
      <Header />
      <Routing />
      <Footer />
    </main>
  );
};

const appWithProviders = withProviders(App);

export default appWithProviders;
