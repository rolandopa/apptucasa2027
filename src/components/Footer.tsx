import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { modules } from '@/data/modules';

export default function Footer() {
  const activeModules = modules.filter((m) => m.link !== null);

  return (
    <footer className="relative mt-12 border-t border-sky-200/40 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left: Identity */}
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-slate-800">Tu CasApp</span>
            <span className="text-[11px] text-slate-500">Centro de Gestion y Plataforma Operativa</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Plataforma digital para el fortalecimiento territorial y atención humana
              integral.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-sky-500/70" />
              <span>Rionegro, Antioquia — Colombia</span>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600">
              Accesos Rápidos
            </h4>
            <ul className="mt-4 space-y-2.5">
              {activeModules.map((m) => (
                <li key={m.id}>
                  <a
                    href={m.link ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-sky-600"
                  >
                    <ExternalLink className="h-3 w-3 text-slate-300 transition-colors group-hover:text-sky-500" />
                    <span>{m.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Institutional */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600">
              Alianza Institucional
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Secretaría de Familia
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Pastoral Social Sonsón Rionegro
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Municipio de Rionegro
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <Mail className="h-3.5 w-3.5" />
              <span>contacto@tucasaap.gov.co</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-sky-200/40 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © 2026 Tu CasApp — Todos los derechos reservados
          </p>
          <p className="text-xs text-slate-300">
            Plataforma desarrollada para el cuidado consciente en el territorio
          </p>
        </div>
      </div>
    </footer>
  );
}
