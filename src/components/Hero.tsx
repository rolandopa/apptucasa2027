import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-up mb-6 flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-50 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-sky-500" />
          <span className="text-xs font-medium tracking-wide text-sky-700">
            Plataforma Operativa Territorial
          </span>
        </div>

        {/* Title */}
        <h1
          className="animate-fade-up max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '0.1s' }}
        >
          Plataforma Centralizada de
          <br />
          <span className="text-gradient">Gestión y Atención Social</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          style={{ animationDelay: '0.2s' }}
        >
          Ecosistema digital de herramientas, diagnóstico, seguimiento táctico y turnos
          operativos para el cuidado consciente en el territorio.
        </p>
      </div>
    </section>
  );
}
