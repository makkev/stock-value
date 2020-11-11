export function getPageUrl(idx) {
  switch (idx) {
    case 0:
      return 'PE';
    case 1:
      return 'DCF';
    case 2:
      return 'ROE';
    default:
      return '/';
  }
}
