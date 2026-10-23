import { Lock, ExternalLink } from 'lucide-react';
import type { PlatformModule } from '@/data/modules';
import { themeConfig } from '@/data/modules';

interface ModuleCardProps {
  module: PlatformModule;
  onPendingClick: (title: string) => void;
  index: number;
}

export default function ModuleCard({ module, onPendingClick, index }: ModuleCardProps) {
  const theme = themeConfig[module.theme];
  const isPending = module.link === null;

  const handleClick = (e: React.MouseEvent) => {
    if (isPending) {
      e.preventDefault();
      onPendingClick(module.title);
    }
  };

  return (
    <a
      href={isPending ? undefined : (module.link ?? undefined)}
      target={isPending ? undefined : '_blank'}
      rel={isPending ? undefined : 'noopener noreferrer'}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      title={module.title}
      className={`card-group animate-fade-up glass-card glass-reflection glass-card-hover ${theme.glowShadow} group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 h-64 sm:h-72 md:h-80 w-full cursor-pointer transition-all duration-300 hover:border-sky-400/50 shadow-md hover:shadow-2xl`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Image container occupying virtually the entire module */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-xs">
        <img
          src={module.imageUrl}
          alt={module.title}
          className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle floating link indicator on hover */}
        {!isPending && (
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-sky-600 shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 border border-sky-200/60">
            <ExternalLink className="h-4 w-4" />
          </div>
        )}

        {/* Pending state overlay with lock */}
        {isPending && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-[2px] transition-opacity">
            <div className="flex items-center gap-2 rounded-full bg-slate-900/85 px-4 py-2 text-xs font-semibold text-white shadow-lg border border-white/10">
              <Lock className="h-3.5 w-3.5 text-amber-300" />
              <span>Próximamente</span>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
