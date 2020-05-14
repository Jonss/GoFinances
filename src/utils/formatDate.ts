const formatDate = (dt: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(dt));

export default formatDate;
