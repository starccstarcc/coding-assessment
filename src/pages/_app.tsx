import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import 'tailwindcss/tailwind.css';
import '../../globals.css';
import '../App.scss';
import { AppWrapper } from '../components';

const App = ({ Component, pageProps }: AppProps) => (
  <AppWrapper>
    <Toaster />
    <Component {...pageProps} />
  </AppWrapper>
);

export default App;
