import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Thayki - Capital de trabajo a partir de tu crédito',
	description: 'THAYLUS CONSULTING - Efectiviza tu tarjeta de crédito de forma rápida y segura',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className="min-h-screen bg-white text-gray-900">{children}</body>
		</html>
	);
}
