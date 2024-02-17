import ThemeRegistry from '@/ThemeRegistry';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/redux/Provider';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  	title: "Bandage"
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  	return (
		<html lang="en">
			<head>
				<meta name="description" content="Ecommerce assessment for Next Basket" />
			</head>
			<body className={montserrat.className}>
				<Providers>
					<ThemeRegistry options={{ key: 'mui' }}>
						<Header />
						{children}
						<Footer />
					</ThemeRegistry>
				</Providers>
			</body>
		</html>
  	);
}
