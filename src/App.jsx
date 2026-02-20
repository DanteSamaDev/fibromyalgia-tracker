import { useEffect, useMemo, useState } from 'react';
import { Activity, Calendar, Download, PlusCircle } from 'lucide-react';
import BottomNav from './components/BottomNav';
import HistoryView from './pages/HistoryView';
import GuideView from './pages/GuideView';
import DailyCheckIn from './pages/DailyCheckIn';
import { loadHistory, saveHistory } from './services/storage';
import { calculatePainAverage, createReportText, downloadReport } from './utils/report';

const App = () => {
  const [view, setView] = useState('home');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const avgPain = useMemo(() => calculatePainAverage(history), [history]);

  const addEntry = (entry) => {
    const next = [entry, ...history].slice(0, 30);
    setHistory(next);
    saveHistory(next);
  };

  const generateReport = async () => {
    const reportText = createReportText(history);

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Relatório FibroFlow', text: reportText });
      } catch {
        // fallback para download/clipboard
      }
    }

    downloadReport(reportText);

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(reportText);
    }

    alert('Relatório gerado e copiado para a área de transferência.');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-50 font-sans pb-24">
      {view === 'home' && (
        <div className="p-6">
          <header className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-black text-indigo-600">
              FibroFlow <span className="text-xs bg-indigo-100 px-2 py-1 rounded-md ml-1">PRO</span>
            </h1>
            <div className="w-10 h-10 bg-slate-200 rounded-full" />
          </header>

          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 mb-6">
            <h2 className="font-bold text-slate-800 text-lg mb-2">Relatório Médico</h2>
            <p className="text-slate-500 text-sm mb-4">Exporte seus dados dos últimos 30 dias para sua próxima consulta.</p>
            <button
              onClick={generateReport}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              <Download size={18} /> Gerar relatório / Compartilhar
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-50 p-6 rounded-[32px] border border-indigo-100">
              <Activity className="text-indigo-600 mb-2" />
              <p className="text-xs text-indigo-600 font-bold uppercase">Média de Dor</p>
              <p className="text-2xl font-black text-indigo-900">{avgPain}</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-[32px] border border-emerald-100">
              <Calendar className="text-emerald-600 mb-2" />
              <p className="text-xs text-emerald-600 font-bold uppercase">Registros</p>
              <p className="text-2xl font-black text-emerald-900">{history.length}</p>
            </div>
          </div>

          <button
            onClick={() => setView('track')}
            className="w-full bg-indigo-600 text-white p-6 rounded-[32px] font-bold shadow-xl shadow-indigo-100 flex items-center justify-between"
          >
            <span>Fazer check-in diário</span>
            <PlusCircle />
          </button>
        </div>
      )}

      {view === 'track' && <DailyCheckIn onBack={() => setView('home')} onSave={addEntry} />}
      {view === 'history' && <HistoryView history={history} onBack={() => setView('home')} />}
      {view === 'guide' && <GuideView onBack={() => setView('home')} />}

      <BottomNav view={view} setView={setView} />
    </div>
  );
};

export default App;
