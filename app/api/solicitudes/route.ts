import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
	try {
		if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
			return NextResponse.json(
				{
					ok: false,
					error: 'Variables de entorno no configuradas. Revisa .env.local',
					configurado: false,
				},
				{ status: 500 }
			);
		}

		const { count, error } = await supabaseAdmin
			.from('solicitudes')
			.select('*', { count: 'exact', head: true });

		if (error) {
			return NextResponse.json(
				{
					ok: false,
					error: error.message,
					hint: '¿Ejecutaste la migración SQL en Supabase? Revisa supabase/migrations/',
				},
				{ status: 500 }
			);
		}

		return NextResponse.json({
			ok: true,
			mensaje: 'Conexión a Supabase exitosa',
			totalSolicitudes: count ?? 0,
		});
	} catch (err) {
		console.error('Error validando Supabase:', err);
		return NextResponse.json(
			{
				ok: false,
				error: err instanceof Error ? err.message : 'Error desconocido',
			},
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	try {
		if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
			return NextResponse.json(
				{ error: 'Supabase no está configurado' },
				{ status: 500 }
			);
		}

		const body = await request.json();
		const {
			nombres,
			apellidos,
			tipoDoc,
			numeroDoc,
			celular,
			email,
			provincia,
			montoCalculado,
			banco,
			categoria,
		} = body;

		if (!nombres || !apellidos || !tipoDoc || !numeroDoc || !celular || !email || !provincia) {
			return NextResponse.json(
				{ error: 'Faltan campos requeridos' },
				{ status: 400 }
			);
		}

		const { data, error } = await supabaseAdmin.from('solicitudes').insert({
			nombres: String(nombres).trim(),
			apellidos: String(apellidos).trim(),
			tipo_documento: String(tipoDoc).trim(),
			numero_documento: String(numeroDoc).trim(),
			celular: String(celular).trim(),
			email: String(email).trim().toLowerCase(),
			provincia: String(provincia).trim(),
			monto_solicitado: Number(montoCalculado) || 0,
			banco: String(banco || '').trim(),
			categoria_tarjeta: String(categoria || '').trim(),
		}).select('id').single();

		if (error) {
			console.error('Error Supabase:', error);
			return NextResponse.json(
				{ error: error.message },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true, id: data?.id });
	} catch (err) {
		console.error('Error en API solicitudes:', err);
		return NextResponse.json(
			{ error: 'Error al guardar la solicitud' },
			{ status: 500 }
		);
	}
}
