import { ChevronLeft, FileText } from 'lucide-react';

const GuideView = ({ onBack }) => (
  <div className="p-6 pb-28">
    <header className="flex items-center gap-4 py-6">
      <button onClick={onBack} className="p-2 rounded-xl bg-white border border-slate-200">
        <ChevronLeft />
      </button>
      <h2 className="text-xl font-black text-slate-800">Direitos e Guia</h2>
    </header>

    <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
      <div className="inline-flex items-center gap-2 text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-semibold">
        <FileText size={14} /> Informativo
      </div>
      <h3 className="text-lg font-black text-slate-800">Resumo para consultas</h3>
      <p className="text-sm text-slate-600">
        Use o relatório médico para mostrar padrão de dor, fadiga e áreas afetadas. Isso ajuda no ajuste de tratamento junto ao profissional de saúde.
      </p>
    </section>
  </div>
);

export default GuideView;
