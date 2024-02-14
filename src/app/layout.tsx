import ThemeRegistry from '@/ThemeRegistry';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  	title: "Create Next App",
  	description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ThemeRegistry options={{ key: 'mui' }}>
				<Header />
				{children}
				</ThemeRegistry>
			</body>
		</html>
  	);
}
