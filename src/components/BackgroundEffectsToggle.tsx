import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackgroundEffectsToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('bg-effects');
    setEnabled(saved !== 'off');
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem('bg-effects', next ? 'on' : 'off');
    document.documentElement.dataset.bgEffects = next ? 'on' : 'off';
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable background effects' : 'Enable background effects'}
      title={enabled ? 'Disable background effects' : 'Enable background effects'}
      className={`text-muted-foreground hover:text-foreground inline-flex size-9 items-center justify-center rounded-md border border-border/60 bg-background transition-colors ${
        enabled ? '' : 'opacity-50'
      }`}
    >
      <Sparkles className="size-4" />
    </button>
  );
}
