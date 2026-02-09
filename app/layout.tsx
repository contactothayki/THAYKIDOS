import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Thayqui - Capital de trabajo a partir de tu crédito',
	description: 'THAYLUS CONSULTING - Efectiviza tu tarjeta de crédito de forma rápida y segura',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={`${plusJakarta.variable} min-h-screen bg-white text-gray-900`}>{children}</body>
		</html>
	);
}
