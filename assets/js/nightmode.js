//New code for night mode added 2026/07/02
document.addEventListener('DOMConetntLoaded', () => {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
console.log("theme:", root.getAttribute('data-theme'));
console.log('data-theme after init:', root.getAttribute('data-theme'));

  function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light';
  }

if (btn){
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
  // Initialize on load
  setTheme(getInitialTheme());
});
