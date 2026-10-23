export type ModuleTheme =
  | 'cyan'
  | 'sky'
  | 'emerald'
  | 'orange'
  | 'purple'
  | 'rose';

export interface PlatformModule {
  id: string;
  number: number;
  title: string;
  imageUrl: string;
  theme: ModuleTheme;
  link: string | null;
  status: 'Activo' | 'Próximamente';
}

export const modules: PlatformModule[] = [
  {
    id: 'base-de-datos',
    number: 1,
    title: 'Base de Datos',
    imageUrl: 'https://i.ibb.co/MQ94ncW/ca034418-904e-4b1a-98e4-1b75ebfc526a.jpg',
    theme: 'cyan',
    link: 'https://www.appsheet.com/start/d80a0973-f8ce-4217-95a2-d79d35feb44a',
    status: 'Activo',
  },
  {
    id: 'validacion',
    number: 2,
    title: 'Validación',
    imageUrl: 'https://i.ibb.co/F4Y77Vcp/c32daf85-5ef8-487e-96b6-b4e31b69aec2.jpg',
    theme: 'sky',
    link: 'https://validaciontucasa.netlify.app/',
    status: 'Activo',
  },
  {
    id: 'red',
    number: 3,
    title: 'RED: Registro, Evolución y Diagnóstico',
    imageUrl: 'https://i.ibb.co/cK5zTsK1/logo-RED.png',
    theme: 'emerald',
    link: 'https://www.appsheet.com/start/6759e221-2eac-4477-ad65-cf051a985dbf',
    status: 'Activo',
  },
  {
    id: 'matriz-casos',
    number: 4,
    title: 'Matriz de Casos y Emergencias Sociales',
    imageUrl: 'https://i.ibb.co/MQ94ncW/ca034418-904e-4b1a-98e4-1b75ebfc526a.jpg',
    theme: 'orange',
    link: 'https://www.appsheet.com/start/d606979e-5bc5-49dd-b646-8889d5b6fb11',
    status: 'Activo',
  },
  {
    id: 'cuadro-turnos',
    number: 5,
    title: 'Cuadro de Turnos Gestores',
    imageUrl: 'https://i.ibb.co/0pMfYGYt/6b03ed22-57ad-497a-891f-254a707e279a.jpg',
    theme: 'purple',
    link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSqmNPIFhiaf6sN6AEfjtYy39rtHdW9w4BIEBCtgcndy9j-KPRPNFnTNZru-9EfdLDqTGVYeoJZaDDS/pubhtml',
    status: 'Activo',
  },
  {
    id: 'mapa-tactico',
    number: 6,
    title: 'Mapa Táctico "Zonas de Cobertura"',
    imageUrl: 'https://i.ibb.co/35ZqJGWH/c05e7dc9-7ad9-4358-a769-192b71640f38.jpg',
    theme: 'sky',
    link: 'https://drive.google.com/file/d/1ZZ153xiWOMjFr4Z-HCPFHdYqXOFezPPN/view?usp=sharing',
    status: 'Activo',
  },
  {
    id: 'protocolos',
    number: 7,
    title: 'Protocolos y Modelos',
    imageUrl: 'https://i.ibb.co/bgQ17Q3X/fe0041b8-695d-407c-a189-1b16727ebff3.jpg',
    theme: 'rose',
    link: null,
    status: 'Próximamente',
  },
];

export const themeConfig: Record<
  ModuleTheme,
  {
    text: string;
    border: string;
    glowShadow: string;
    badge: string;
  }
> = {
  cyan: {
    text: 'text-cyan-600',
    border: 'border-cyan-500/20',
    glowShadow: 'glow-shadow-cyan',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-300/30',
  },
  sky: {
    text: 'text-sky-600',
    border: 'border-sky-500/20',
    glowShadow: 'glow-shadow-sky',
    badge: 'bg-sky-50 text-sky-700 border-sky-300/30',
  },
  emerald: {
    text: 'text-emerald-600',
    border: 'border-emerald-500/20',
    glowShadow: 'glow-shadow-emerald',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-300/30',
  },
  purple: {
    text: 'text-purple-600',
    border: 'border-purple-500/20',
    glowShadow: 'glow-shadow-purple',
    badge: 'bg-purple-50 text-purple-700 border-purple-300/30',
  },
  orange: {
    text: 'text-orange-600',
    border: 'border-orange-500/20',
    glowShadow: 'glow-shadow-orange',
    badge: 'bg-orange-50 text-orange-700 border-orange-300/30',
  },
  rose: {
    text: 'text-rose-600',
    border: 'border-rose-500/20',
    glowShadow: 'glow-shadow-rose',
    badge: 'bg-rose-50 text-rose-700 border-rose-300/30',
  },
};

export const logoUrl: string =
  'https://i.ibb.co/0pPMVd6W/1eaf0217-6c91-4128-bbff-5b2c8601173f.jpg';
