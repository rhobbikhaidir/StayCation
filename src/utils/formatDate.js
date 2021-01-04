export default p => {
  const d = new Date(p);
  const kosong = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  const dtf = new Intl.DateTimeFormat('en', kosong);
  const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

  return `${mo} ${da}`;
  // return date;
};
