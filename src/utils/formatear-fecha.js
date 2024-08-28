export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("es-ES", options);
  return formattedDate;
}
