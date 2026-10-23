import { Building2, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (d: Date) =>
    d.toLocaleDateString('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <div className="w-full border-b border-sky-200/40 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-[11px] tracking-wide text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Building2 className="h-3.5 w-3.5 text-sky-500/70" />
          <span className="text-center sm:text-left">
            Alcaldía de Rionegro <span className="text-slate-300">|</span>{' '}
            Secretaría de Familia <span className="text-slate-300">|</span>{' '}
            Pastoral Social Sonsón Rionegro <span className="text-slate-300">|</span>{' '}
            Rionegro, Antioquia — Colombia
          </span>
        </div>
        <div className="hidden items-center gap-1.5 text-slate-400 sm:flex">
          <span className="capitalize">{formatDate(time)}</span>
          <ChevronRight className="h-3 w-3 text-slate-300" />
        </div>
      </div>
    </div>
  );
}
