import type { PlatformModule } from '@/data/modules';
import { modules } from '@/data/modules';
import ModuleCard from './ModuleCard';

interface ModulesGridProps {
  onPendingClick: (title: string) => void;
}

export default function ModulesGrid({ onPendingClick }: ModulesGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-sky-200/50 pb-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Módulos Operativos
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-500">
            Haz clic en cualquier módulo para abrir directamente la plataforma correspondiente.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-700 border border-sky-200/60 self-start sm:self-auto shadow-xs">
          {modules.length} módulos disponibles
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {modules.map((module: PlatformModule, i: number) => (
          <ModuleCard
            key={module.id}
            module={module}
            onPendingClick={onPendingClick}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
