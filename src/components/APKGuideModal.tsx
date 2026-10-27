import { X, Smartphone, Download, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

interface APKGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDirectInstall?: () => void;
  isInstallable?: boolean;
}

export default function APKGuideModal({
  isOpen,
  onClose,
  onDirectInstall,
  isInstallable,
}: APKGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-up">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-sky-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-200">
            <Smartphone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              Instalar o Convertir en APK (Sin Publicidad)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Métodos 100% gratuitos, oficiales y limpios de anuncios
            </p>
          </div>
        </div>

        {/* Options List */}
        <div className="mt-6 space-y-4">
          {/* Method 1: Instant Chrome / Android Install (PWA) */}
          <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/50 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                  <ShieldCheck className="h-3.5 w-3.5" /> Recomendado — Más Rápido (Sin descargar APK)
                </span>
                <h4 className="mt-2 text-base font-bold text-slate-800">
                  1. Instalación Directa en Android / iPhone
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Esta web ya está programada como PWA (Progressive Web App). En Android (Google Chrome), abre la web, presiona los <strong>tres puntos (⋮)</strong> arriba a la derecha y selecciona <strong>«Instalar aplicación»</strong> o <strong>«Agregar a la pantalla principal»</strong>.
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Se instala en tu teléfono exactamente igual que una app descargada de Play Store, con su propio icono, pantalla completa y <strong>0% publicidad</strong>.
                </p>
              </div>
            </div>

            {isInstallable && onDirectInstall && (
              <button
                onClick={onDirectInstall}
                className="mt-3.5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
              >
                <Download className="h-4 w-4" />
                Instalar Ahora en este Dispositivo
              </button>
            )}
          </div>

          {/* Method 2: PWABuilder (Official Microsoft Tool to generate .APK) */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50/40 p-4 sm:p-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800">
              <Download className="h-3.5 w-3.5" /> Generar Archivo .APK Oficial
            </span>
            <h4 className="mt-2 text-base font-bold text-slate-800">
              2. Generar archivo .APK con PWABuilder (De Microsoft)
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>PWABuilder</strong> es un proyecto oficial de código abierto de Microsoft que convierte cualquier PWA en un paquete APK o AAB nativo para Android (Trusted Web Activity). No añade anuncios ni marcas de agua.
            </p>

            <ol className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 mt-0.5 shrink-0" />
                <span>Despliega o publica tu web (en tu hosting o dominio, ej. Vercel, Netlify).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 mt-0.5 shrink-0" />
                <span>Entra a <strong>pwabuilder.com</strong> y pega la dirección URL de tu web.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 mt-0.5 shrink-0" />
                <span>Haz clic en <strong>«Package for Stores»</strong> y selecciona <strong>Android</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 mt-0.5 shrink-0" />
                <span>Descarga el paquete que incluye el archivo <strong>.apk</strong> firmado listo para enviar o instalar por WhatsApp, Drive o memoria USB.</span>
              </li>
            </ol>

            <div className="mt-4">
              <a
                href="https://www.pwabuilder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition"
              >
                <span>Abrir PWABuilder.com</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Method 3: Google Bubblewrap CLI / Android Studio */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
              Para Desarrolladores
            </span>
            <h4 className="mt-2 text-base font-bold text-slate-800">
              3. Con Bubblewrap de Google o Capacitor
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Si tienes Node.js y Android Studio en tu computador, puedes usar la herramienta de Google ejecutando:
            </p>
            <div className="mt-2 rounded-lg bg-slate-800 p-2.5 text-[11px] sm:text-xs font-mono text-emerald-400">
              npm i -g @bubblewrap/cli &amp;&amp; bubblewrap init --manifest=URL/manifest.webmanifest
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Genera un APK limpio directamente desde la consola sin intermediarios.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-slate-700 transition"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
