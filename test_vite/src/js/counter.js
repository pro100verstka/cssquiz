export function initCounters() {
  const counters = document.querySelectorAll(".stat__number");

  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    const valueElement = counter.querySelector(".stat__value");

    let start = 0;
    const duration = 1500; // 1.5 секунды
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(progress * target);

      valueElement.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        valueElement.textContent = target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.6}
  );

  counters.forEach((counter) => observer.observe(counter));
}