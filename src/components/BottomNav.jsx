import { Activity, Heart, ShieldCheck } from 'lucide-react';

const itemClass = (active) =>
  `p-4 rounded-2xl transition ${active ? 'bg-indigo-600 text-white' : 'text-slate-400'}`;

const BottomNav = ({ view, setView }) => (
  <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white border border-slate-200 rounded-[40px] p-2 flex justify-around shadow-2xl">
    <button onClick={() => setView('home')} className={itemClass(view === 'home')} aria-label="Início">
      <Heart />
    </button>
    <button onClick={() => setView('history')} className={itemClass(view === 'history')} aria-label="Histórico">
      <Activity />
    </button>
    <button onClick={() => setView('guide')} className={itemClass(view === 'guide')} aria-label="Guia">
      <ShieldCheck />
    </button>
  </nav>
);

export default BottomNav;
