import { jsPDF } from 'jspdf';

export const exportJSON = (filename, data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const exportPDF = (title, lines = []) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(title, 14, 20);
  doc.setFontSize(11);
  lines.forEach((line, index) => doc.text(`- ${line}`, 14, 35 + index * 8));
  doc.save(`${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};
