import Navigation from '@/components/Navigation';
import SuccessCarousel from '@/components/SuccessCarousel';
import BanksCarousel from '@/components/BanksCarousel';
import Calculator from '@/components/Calculator';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Chat from '@/components/Chat';

export default function Home() {
	return (
		<>
			<Navigation />
			<main className="pt-16">
				<section id="inicio" className="max-w-6xl mx-auto px-4 py-8">
					<SuccessCarousel />
				</section>
				<BanksCarousel />
				<Calculator />
				<HowItWorks />
				<section id="preguntas" className="py-12">
					<div className="max-w-4xl mx-auto px-4 text-center">
						<h2 className="text-2xl font-bold text-[#563256] mb-4">
							¿Tienes preguntas?
						</h2>
						<p className="text-gray-600 mb-6">
							Usa nuestro chat en la esquina inferior derecha para obtener respuestas instantáneas,
							o contáctanos por WhatsApp.
						</p>
					</div>
				</section>
				<Footer />
			</main>
			<WhatsAppButton />
			<Chat />
		</>
	);
}
