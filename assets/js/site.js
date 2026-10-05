(() => {
  const controls = document.querySelector('.paper-filters');
  const papers = [...document.querySelectorAll('.paper')];
  const status = document.getElementById('filter-status');

  if (!controls || !papers.length) return;

  const buttons = [...controls.querySelectorAll('button[data-topic]')];
  controls.hidden = false;

  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-topic]');
    if (!button || !controls.contains(button)) return;

    const topic = button.dataset.topic;
    let visibleCount = 0;

    for (const paper of papers) {
      const topics = (paper.dataset.topics || '').split(/\s+/);
      paper.hidden = topic !== 'all' && !topics.includes(topic);
      if (!paper.hidden) visibleCount += 1;
    }

    for (const control of buttons) {
      control.setAttribute('aria-pressed', String(control === button));
    }

    if (status) {
      const countLabel = `${visibleCount} ${visibleCount === 1 ? 'publication' : 'publications'}`;
      status.textContent = topic === 'all'
        ? `Showing all ${countLabel}.`
        : `Showing ${countLabel} in ${button.textContent.trim()}.`;
    }
  });
})();
