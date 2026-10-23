import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModulesGrid from '@/components/ModulesGrid';
import Footer from '@/components/Footer';
import ToastContainer, { useToast } from '@/components/Toast';

function App() {
  const { toasts, addToast, dismissToast } = useToast();

  const handlePendingClick = (title: string) => {
    addToast(
      'Módulo en proceso de vinculación',
      `"${title}" estará próximamente disponible.`
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#f0f5fa] via-[#e8f1f8] to-[#f0f5fa]" />
      <div className="fixed inset-0 -z-10 bg-grid-overlay" />
      {/* Ambient glows */}
      <div className="animate-float-slow fixed -left-20 top-20 -z-10 h-96 w-96 rounded-full glow-sky blur-3xl" />
      <div className="animate-float-slower fixed right-0 top-40 -z-10 h-80 w-80 rounded-full glow-cyan blur-3xl" />
      <div className="animate-float-slow fixed left-1/3 bottom-40 -z-10 h-72 w-72 rounded-full glow-emerald blur-3xl" />
      <div className="animate-float-slower fixed -right-10 bottom-10 -z-10 h-64 w-64 rounded-full glow-purple blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">
          <Hero />
          <ModulesGrid onPendingClick={handlePendingClick} />
        </main>
        <Footer />
      </div>

      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
