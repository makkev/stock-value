export function getPageUrl(idx) {
  switch (idx) {
    case 0:
      return 'watchlist';
    case 1:
      return 'PE';
    case 2:
      return 'DCF';
    case 3:
      return 'ROE';
    default:
      return '/';
  }
}
