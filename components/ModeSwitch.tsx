import type { Mode, ModeState } from "nefantaris";

const iconClasses = "size-5";

const SunIcon = () => (
    <svg
        aria-hidden="true"
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </svg>
);

const MoonIcon = () => (
    <svg
        aria-hidden="true"
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

const nextModeAfter = (modes: ModeState): Mode | undefined =>
    modes.available.find((mode) => mode !== modes.current);

type ModeSwitchProps = {
    modes: ModeState;
};

const ModeSwitch = ({ modes }: ModeSwitchProps) => {
    const next = nextModeAfter(modes);

    if (modes.available.length < 2 || next === undefined) {
        return null;
    }

    return (
        <button
            type="button"
            aria-label={`Switch to ${next} mode`}
            onClick={() => modes.set(next)}
            className="text-brand-muted hover:text-brand-text hover:bg-brand-surface inline-flex size-9 items-center justify-center rounded-md transition-colors duration-100"
        >
            {next === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ModeSwitch;
