import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 bg-slate-950 text-slate-100 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          Connecting Developers Globally
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Every Developer Has a Story. <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Share Yours with the World.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Discover journey breakdowns, side-project wins, and real-world career insights from developers across the globe.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center sm:w-auto">
          <Link
            href="/signup"
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:scale-[1.02]"
          >
            Start Your Story
          </Link>
          <Link
            href="/about"
            className="px-8 py-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            Explore Stories
          </Link>
        </div>

        {/* Highlights / Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Build in Public</h3>
            <p className="text-sm text-slate-400">
              Document your progression, share major milestones, and get feedback from peers.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
            <p className="text-sm text-slate-400">
              Connect with engineers, founders, and creators from over 100+ countries.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Get Inspired</h3>
            <p className="text-sm text-slate-400">
              Learn how developers solved tough technical challenges and launched successful apps.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}