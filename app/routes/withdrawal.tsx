import type { Route } from "./+types/withdrawal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Montly Withdrawal Calculator" },
    { name: "description", content: "Welcome to montly savings calculator!" },
  ];
}

export default function Withdrawal() {
  return (
    <div className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-pulse" />

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-float animation-delay-1000 opacity-60" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-float animation-delay-2000 opacity-60" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-300 rounded-full animate-float animation-delay-3000 opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-float animation-delay-500 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-8">
        <div className="inline-block relative">
          {/* Animated glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg blur-xl opacity-0 group-hover:opacity-100 animate-pulse-ring" />

          {/* Animated border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-lg opacity-20 animate-rotate-border blur-sm" />

          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-fade-in leading-tight relative z-10">
            Coming Soon
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce animation-delay-100" />
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce animation-delay-200" />
          </div>
        </div>
        <p className="mt-8 text-xl text-zinc-600 animate-fade-in animation-delay-500 hover:text-zinc-800 transition-colors">
          The Withdrawal Calculator is being crafted with care
        </p>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          50% { transform: translateY(-40px) translateX(-10px); opacity: 0.4; }
          75% { transform: translateY(-20px) translateX(15px); opacity: 0.7; }
        }

        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-rotate-border {
          animation: rotate-border 8s linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
