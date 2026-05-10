// ── Theme Switcher ──
const themes     = ['theme-dark', 'theme-light'];
const icons      = ['fa-moon', 'fa-sun'];
const iconStyles = ['fas', 'far'];
const titles     = ['Dark Mode', 'Light Mode'];

let currentTheme = parseInt(localStorage.getItem('themeIndex') || '0');
// Clamp to 0–1 in case a legacy value of 2 was stored
if (currentTheme > 1) currentTheme = 0;

function applyTheme(idx) {
    const body = document.body;
    body.classList.remove('theme-light', 'theme-auto');
    if (idx === 1) body.classList.add('theme-light');

    document.querySelectorAll('.theme-toggle i').forEach(icon => {
        icon.className = iconStyles[idx] + ' ' + icons[idx];
    });
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.title = titles[(idx + 1) % 2]; // tooltip shows the NEXT mode
    });
}

function cycleTheme() {
    currentTheme = (currentTheme + 1) % 2;
    localStorage.setItem('themeIndex', currentTheme);
    applyTheme(currentTheme);
}

document.getElementById('themeToggle').addEventListener('click', cycleTheme);

// Apply saved theme immediately on load
applyTheme(currentTheme);
