export function getPageUrl(idx) {
  switch (idx) {
    case 0:
      return '/PE';
    case 1:
      return '/watchlist';
    // case 2:
    //   return '/DCF';
    // case 3:
    //   return '/ROE';
    // case 4:
    //   return '/signin';
    default:
      return '/';
  }
}
