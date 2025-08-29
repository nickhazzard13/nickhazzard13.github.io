(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){ root.classList.toggle('dark', saved === 'dark'); }
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  }
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
  // Set active nav link based on current path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();