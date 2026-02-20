import { ChevronLeft, MapPin } from 'lucide-react';

const HistoryView = ({ history, onBack }) => (
  <div className="p-6 pb-28">
    <header className="flex items-center gap-4 py-6">
      <button onClick={onBack} className="p-2 rounded-xl bg-white border border-slate-200">
        <ChevronLeft />
      </button>
      <h2 className="text-xl font-black text-slate-800">Histórico</h2>
    </header>

    <div className="space-y-4">
      {history.length === 0 && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 text-sm text-slate-500">
          Você ainda não possui registros. Faça seu primeiro check-in diário.
        </div>
      )}

      {history.map((entry) => (
        <article key={entry.id} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs uppercase font-bold text-indigo-600 mb-2">{entry.date}</p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-indigo-50 rounded-xl p-3 text-center">
              <p className="text-xs text-indigo-600 font-semibold">Dor</p>
              <p className="font-black text-indigo-900 text-lg">{entry.pain}/10</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-3 text-center">
              <p className="text-xs text-emerald-600 font-semibold">Fadiga</p>
              <p className="font-black text-emerald-900 text-lg">{entry.fatigue}/10</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {(entry.points || []).length > 0 ? (
              entry.points.map((point) => (
                <span key={`${entry.id}-${point}`} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold">
                  <MapPin size={12} /> {point}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-400">Sem áreas selecionadas</span>
            )}
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default HistoryView;
