/* Animated wireframe wave background for the hero.
   Draws each line three times (warm, cool, white) with a small
   horizontal offset to mimic chromatic aberration. */
(function () {
  const canvas = document.getElementById('waves');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w, h, dpr, rows, t = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rows = Math.floor(h / 16);
  }
  window.addEventListener('resize', resize);
  resize();

  function surface(x, y, time) {
    return (
      Math.sin(x * 0.0035 + y * 0.012 + time * 0.45) * 26 +
      Math.sin(x * 0.009 - y * 0.006 + time * 0.3) * 16 +
      Math.sin(x * 0.0016 + y * 0.003 - time * 0.18) * 38
    );
  }

  function drawLine(row, time, color, dx, alphaScale) {
    const baseY = row * 16 + 8;
    ctx.beginPath();
    let peak = 0;
    for (let x = -10; x <= w + 10; x += 7) {
      const d = surface(x, baseY, time);
      peak = Math.max(peak, d);
      const y = baseY - d;
      if (x === -10) ctx.moveTo(x + dx, y);
      else ctx.lineTo(x + dx, y);
    }
    const bright = Math.min(1, 0.18 + (peak / 80));
    ctx.strokeStyle = color;
    ctx.globalAlpha = bright * alphaScale;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;

    /* faint dot grid */
    ctx.fillStyle = 'rgba(233, 230, 227, 0.10)';
    for (let gx = 30; gx < w; gx += 90) {
      for (let gy = 30; gy < h; gy += 90) {
        ctx.fillRect(gx, gy, 1.5, 1.5);
      }
    }

    for (let r = 0; r < rows; r++) {
      drawLine(r, t, 'rgba(224, 138, 109, 0.5)', -1.4, 0.5);
      drawLine(r, t, 'rgba(111, 201, 216, 0.5)', 1.4, 0.5);
      drawLine(r, t, 'rgba(233, 230, 227, 0.9)', 0, 1);
    }

    if (!reduceMotion) {
      t += 0.012;
      requestAnimationFrame(frame);
    }
  }
  frame();
})();
