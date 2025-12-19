export const openDoc = (name: string) => {
  window.open(`/documents/${name}.pdf`, '_blank')
}