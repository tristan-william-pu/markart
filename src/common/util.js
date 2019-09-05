const local = (lg) => {
  const key = 'market_local';
  if (lg) localStorage.setItem(key, lg);
  else lg = localStorage.getItem(key) || /zh/i.test(window.navigator.language) ? 'cn' : 'en';
  return lg;
}

export default {
  local
}