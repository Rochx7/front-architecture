import GlobalStyles from '@/components/GlobalStyles';
import Providers from '@/components/Providers';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['300', '400', '700', '800'],
  subsets: ['latin']
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
