export const openPdf = (name: string) => {
  window.open(`/documents/${name}.pdf`, '_blank')
}

export const openDocx = (name: string, customName?: string) => {
  const fileName = customName || name;
  const link = document.createElement('a');
  link.href = `/documents/${name}.docx`;
  link.download = `${fileName}.docx`; // Кастомное имя
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}