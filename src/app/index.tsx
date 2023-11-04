import { Routing } from '../pages/Routing';
import { withProviders } from './providers/index';

const App = () => {
  return <Routing />;
};
const appWithProviders = withProviders(App);

export default appWithProviders;
