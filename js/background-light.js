// ── Light Blue Veil Background ──
(function () {
    const canvas = document.getElementById('lightveil-canvas');
    const ctx = canvas.getContext('2d');
    let W, H;

    const orbs = [
        { x: 0, y: 0, tx: 0, ty: 0, r: 320, color: [37,  99,  235], speed: 0.003,  phase: 0 },
        { x: 0, y: 0, tx: 0, ty: 0, r: 260, color: [96,  165, 250], speed: 0.004,  phase: 1 },
        { x: 0, y: 0, tx: 0, ty: 0, r: 290, color: [147, 197, 253], speed: 0.0035, phase: 2 },
        { x: 0, y: 0, tx: 0, ty: 0, r: 220, color: [29,  78,  216], speed: 0.005,  phase: 3 },
    ];

    const particles = [];

    function resize() {
        const dpr = Math.min(window.devicePixelRatio, 2);
        canvas.width  = window.innerWidth  * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        W = window.innerWidth;
        H = window.innerHeight;

        orbs.forEach(o => {
            if (o.x === 0 && o.y === 0) {
                o.x  = Math.random() * W;
                o.y  = Math.random() * H;
                o.tx = Math.random() * W;
                o.ty = Math.random() * H;
            }
        });

        if (particles.length === 0) {
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x:  Math.random() * W,
                    y:  Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r:  Math.random() * 3 + 1,
                    a:  Math.random() * 0.5 + 0.3,
                    ci: Math.floor(Math.random() * orbs.length),
                });
            }
        }
    }

    let t = 0;

    function draw() {
        if (!document.body.classList.contains('theme-light')) {
            requestAnimationFrame(draw);
            return;
        }

        ctx.clearRect(0, 0, W, H);

        orbs.forEach(o => {
            o.x += (o.tx - o.x) * o.speed;
            o.y += (o.ty - o.y) * o.speed;
            if (Math.hypot(o.tx - o.x, o.ty - o.y) < 10) {
                o.tx = Math.random() * W;
                o.ty = Math.random() * H;
            }
            const pulse     = 0.7 + 0.3 * Math.sin(t * 0.018 + o.phase);
            const [r, g, b] = o.color;
            const grad      = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * pulse);
            grad.addColorStop(0,   `rgba(${r},${g},${b},${0.18 * pulse})`);
            grad.addColorStop(0.5, `rgba(${r},${g},${b},${0.08 * pulse})`);
            grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
            ctx.beginPath();
            ctx.arc(o.x, o.y, o.r * pulse, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
        });

        particles.forEach(p => {
            const [r, g, b] = orbs[p.ci].color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${p.a})`;
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        });

        t++;
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
})();
