import { useState } from 'react';
import { Smartphone, Download } from 'lucide-react';
import { logoUrl } from '@/data/modules';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import APKGuideModal from '@/components/APKGuideModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isInstallable, isInstalled, install } = usePWAInstall();

  const handleInstallClick = () => {
    if (isInstallable) {
      install();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-sky-200/40 bg-white/80 backdrop-blur-2xl shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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

          {/* Install / APK button */}
          <div className="flex items-center gap-2">
            {!isInstalled && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50/80 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-sky-700 shadow-xs hover:bg-sky-100 hover:text-sky-800 hover:border-sky-300 transition-all cursor-pointer"
                title="Instalar en tu teléfono o generar archivo APK"
              >
                {isInstallable ? (
                  <>
                    <Download className="h-4 w-4 text-sky-600 animate-bounce" />
                    <span>Instalar App</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="h-4 w-4 text-sky-600" />
                    <span>App / APK</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      <APKGuideModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDirectInstall={install}
        isInstallable={isInstallable}
      />
    </>
  );
}
