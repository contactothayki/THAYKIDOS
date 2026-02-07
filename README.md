# THAYKI - THAYLUS CONSULTING

Sitio web para efectivización de tarjetas de crédito. Capital de trabajo a partir de tu crédito.

## Stack

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Supabase (base de datos para solicitudes)

## Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com/dashboard)
2. Ejecuta el SQL de `supabase/migrations/20240205000000_create_solicitudes.sql` en el SQL Editor
3. Copia `.env.local.example` a `.env.local`
4. Obtén URL, anon key y service_role key en **Project Settings → API**
5. Completa las variables en `.env.local`

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Producción

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Next.js
3. Configura las variables de entorno en Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy automático en cada push

O con Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Estructura

- `app/` - Páginas y layout (App Router)
- `components/` - Componentes reutilizables
- `public/` - Assets estáticos
