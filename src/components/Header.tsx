import { logoUrl } from '@/data/modules';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-200/40 bg-white/80 backdrop-blur-2xl shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Tu CasApp"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover shadow-sm border border-sky-200/50"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-800">
              Tu CasApp
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              Centro de Gestión y Plataforma Operativa
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
