import Main from '@/components/Main';
import { GlobalProvider } from '@/context/globalContext';

export default function Home() {
  return (
    <GlobalProvider>
      <main className="h-screen min-h-screen">
        <Main />
      </main>
    </GlobalProvider>
  );
}
