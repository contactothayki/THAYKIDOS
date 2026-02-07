-- Tabla para guardar solicitudes del formulario de efectivización
CREATE TABLE IF NOT EXISTS public.solicitudes (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	nombres TEXT NOT NULL,
	apellidos TEXT NOT NULL,
	tipo_documento TEXT NOT NULL,
	numero_documento TEXT NOT NULL,
	celular TEXT NOT NULL,
	email TEXT NOT NULL,
	provincia TEXT NOT NULL,
	monto_solicitado DECIMAL(12, 2) NOT NULL,
	banco TEXT NOT NULL,
	categoria_tarjeta TEXT NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
-- La API usa service_role que bypassa RLS; anon no tiene acceso
ALTER TABLE public.solicitudes ENABLE ROW LEVEL SECURITY;

-- Índices para consultas frecuentes
CREATE INDEX idx_solicitudes_created_at ON public.solicitudes(created_at DESC);
CREATE INDEX idx_solicitudes_email ON public.solicitudes(email);
