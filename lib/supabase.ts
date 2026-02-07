import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
	if (!_supabase) {
		const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
		if (!url || !key) {
			throw new Error(
				'Falta configurar Supabase. Crea .env.local con NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY'
			);
		}
		_supabase = createClient(url, key);
	}
	return _supabase;
}

function getSupabaseAdmin(): SupabaseClient {
	if (!_supabaseAdmin) {
		const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
		if (!url || !key) {
			throw new Error(
				'Falta configurar Supabase. Crea .env.local con NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY'
			);
		}
		_supabaseAdmin = createClient(url, key, {
			auth: { persistSession: false },
		});
	}
	return _supabaseAdmin;
}

export const supabase = new Proxy({} as SupabaseClient, {
	get(_, prop) {
		return getSupabase()[prop as keyof SupabaseClient];
	},
});

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
	get(_, prop) {
		return getSupabaseAdmin()[prop as keyof SupabaseClient];
	},
});
