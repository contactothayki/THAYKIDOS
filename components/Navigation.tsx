'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center">
						<span className="text-xl font-bold text-[#563256]">THAYKI</span>
						<span className="ml-2 text-sm text-[#645c9f] hidden sm:inline">
							THAYLUS CONSULTING
						</span>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="#inicio"
							className="text-[#563256] hover:text-[#645c9f] transition"
						>
							Inicio
						</Link>
						<Link
							href="#calculadora"
							className="text-[#563256] hover:text-[#645c9f] transition"
						>
							Calculadora
						</Link>
						<Link
							href="#como-funciona"
							className="text-[#563256] hover:text-[#645c9f] transition"
						>
							¿Cómo funciona?
						</Link>
						<Link
							href="#preguntas"
							className="text-[#563256] hover:text-[#645c9f] transition"
						>
							Preguntas
						</Link>
						<Link
							href="#contacto"
							className="text-[#563256] hover:text-[#645c9f] transition"
						>
							Contacto
						</Link>
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg text-[#563256] hover:bg-[#d7dad6]"
						aria-label="Menú"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{isOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{isOpen && (
					<div className="md:hidden py-4 space-y-2">
						<Link href="#inicio" className="block py-2 text-[#563256]" onClick={() => setIsOpen(false)}>
							Inicio
						</Link>
						<Link href="#calculadora" className="block py-2 text-[#563256]" onClick={() => setIsOpen(false)}>
							Calculadora
						</Link>
						<Link href="#como-funciona" className="block py-2 text-[#563256]" onClick={() => setIsOpen(false)}>
							¿Cómo funciona?
						</Link>
						<Link href="#preguntas" className="block py-2 text-[#563256]" onClick={() => setIsOpen(false)}>
							Preguntas
						</Link>
						<Link href="#contacto" className="block py-2 text-[#563256]" onClick={() => setIsOpen(false)}>
							Contacto
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
