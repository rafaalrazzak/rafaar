import { Moon, Sun, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setShowMenu(false);
  };

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ] as const;

  const currentIcon = themes.find((t) => t.value === theme)?.icon || Monitor;
  const Icon = currentIcon;

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent"
        aria-label="Change theme"
      >
        <Icon className="size-4" />
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 top-12 z-50 w-40 rounded-lg border border-border bg-background p-1 shadow-lg">
            <div className="space-y-0.5">
              {themes.map((t) => {
                const ThemeIcon = t.icon;
                return (
                  <button
                    key={t.value}
                    onClick={() => changeTheme(t.value)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                      theme === t.value ? 'bg-accent font-medium' : ''
                    }`}
                  >
                    <ThemeIcon className="size-4" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
