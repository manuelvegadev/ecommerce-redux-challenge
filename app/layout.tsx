import { Providers } from '@/lib/providers';
import { Nav } from './components/nav';
import './styles/globals.css';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className={'dark:bg-gray-950 antialiased'}>
          <section>
            <Nav />
            <main className={'w-full sm:w-3/4 py-5 px-2 mx-auto'}>
              {props.children}
            </main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
