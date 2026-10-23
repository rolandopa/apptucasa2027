import { LayoutGrid, Map, Clock } from 'lucide-react';

const stats = [
  {
    icon: LayoutGrid,
    label: 'Módulos Activos',
    value: '7',
    color: 'text-sky-600',
    glow: 'shadow-sky-500/10',
    bg: 'bg-sky-50',
    border: 'border-sky-200/50',
  },
  {
    icon: Map,
    label: 'Cobertura Territorial',
    value: '100%',
    color: 'text-emerald-600',
    glow: 'shadow-emerald-500/10',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200/50',
  },
  {
    icon: Clock,
    label: 'Atención',
    value: '24/7',
    color: 'text-orange-600',
    glow: 'shadow-orange-500/10',
    bg: 'bg-orange-50',
    border: 'border-orange-200/50',
  },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="animate-fade-up glass-card glass-reflection relative flex items-center gap-4 overflow-hidden rounded-2xl p-5"
            style={{ animationDelay: `${0.4 + i * 0.1}s` }}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl border ${stat.border} ${stat.bg} shadow-lg ${stat.glow}`}
            >
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-slate-500">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
