import { ChevronLeft, Save } from 'lucide-react';
import { useState } from 'react';

const bodyPoints = ['Cabeça', 'Pescoço', 'Ombros', 'Costas', 'Lombar', 'Quadril', 'Pernas'];

const DailyCheckIn = ({ onBack, onSave }) => {
  const [pain, setPain] = useState(5);
  const [fatigue, setFatigue] = useState(5);
  const [points, setPoints] = useState([]);

  const togglePoint = (point) => {
    setPoints((prev) => (prev.includes(point) ? prev.filter((p) => p !== point) : [...prev, point]));
  };

  const handleSave = () => {
    onSave({
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      pain,
      fatigue,
      points
    });
    onBack();
  };

  return (
    <div className="p-6 pb-28">
      <header className="flex items-center gap-4 py-6">
        <button onClick={onBack} className="p-2 rounded-xl bg-white border border-slate-200">
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-black text-slate-800">Check-in Diário</h2>
      </header>

      <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-6">
        <label className="block text-sm font-semibold text-slate-700">Nível de dor: {pain}</label>
        <input type="range" min="0" max="10" value={pain} onChange={(e) => setPain(Number(e.target.value))} className="w-full" />

        <label className="block text-sm font-semibold text-slate-700">Fadiga: {fatigue}</label>
        <input type="range" min="0" max="10" value={fatigue} onChange={(e) => setFatigue(Number(e.target.value))} className="w-full" />

        <div>
          <p className="text-sm font-semibold text-slate-700 mb-3">Áreas afetadas</p>
          <div className="flex flex-wrap gap-2">
            {bodyPoints.map((point) => (
              <button
                key={point}
                onClick={() => togglePoint(point)}
                className={`px-3 py-2 rounded-xl text-sm border ${
                  points.includes(point)
                    ? 'bg-rose-100 text-rose-700 border-rose-200'
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                {point}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleSave} className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
          <Save size={18} /> Salvar check-in
        </button>
      </div>
    </div>
  );
};

export default DailyCheckIn;
