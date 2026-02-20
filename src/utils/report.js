const safeDate = () => new Date().toLocaleDateString('pt-BR');

export const createReportText = (history) => {
  if (!history.length) {
    return 'Nenhum registro encontrado nos últimos dias.';
  }

  return history
    .map(
      (h) =>
        `Data: ${h.date} | Dor: ${h.pain}/10 | Fadiga: ${h.fatigue}/10 | Áreas: ${(h.points || []).join(', ') || 'Não informado'}`
    )
    .join('\n');
};

export const calculatePainAverage = (history) => {
  if (!history.length) return '0.0';
  const total = history.reduce((acc, item) => acc + Number(item.pain || 0), 0);
  return (total / history.length).toFixed(1);
};

export const downloadReport = (reportText) => {
  const blob = new Blob([`Relatório FibroFlow - ${safeDate()}\n\n${reportText}`], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `fibroflow-relatorio-${Date.now()}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};
