import { useEffect, useRef, useState, type PropsWithChildren } from "react";

const copiedLabelDuration = 2000;

const iconClasses = "size-4 shrink-0";

const containerClasses = [
    "border-brand-border bg-brand-surface mt-6 flex items-center gap-2",
    "rounded-md border py-2 pr-2 pl-4",
].join(" ");

const commandClasses = [
    "min-w-0 grow overflow-x-auto font-mono text-sm leading-7",
    "[&_p]:mt-0 [&_p]:whitespace-pre",
    "[&_pre]:mt-0 [&_pre]:overflow-visible [&_pre]:rounded-none",
    "[&_pre]:border-0 [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:leading-7",
    "[&_code]:bg-transparent [&_code]:px-0 [&_code]:py-0 [&_code]:text-[1em]",
].join(" ");

const buttonClasses = [
    "text-brand-muted hover:text-brand-text hover:bg-brand-background",
    "inline-flex min-h-9 shrink-0 items-center gap-2 rounded-md px-3",
    "text-sm font-medium transition-colors duration-100",
].join(" ");

const ClipboardIcon = () => (
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
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    </svg>
);

const CheckIcon = () => (
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
        <path d="m5 13 4 4L19 7" />
    </svg>
);

const Command = ({ children }: PropsWithChildren) => {
    const commandRef = useRef<HTMLDivElement>(null);
    const [isCopied, setIsCopied] = useState(false);

    const copyCommand = async () => {
        const command = commandRef.current?.textContent?.trim();

        if (!command) {
            return;
        }

        try {
            await navigator.clipboard.writeText(command);
            setIsCopied(true);
        } catch {
            setIsCopied(false);
        }
    };

    useEffect(() => {
        if (!isCopied) {
            return;
        }

        const reset = setTimeout(() => setIsCopied(false), copiedLabelDuration);

        return () => clearTimeout(reset);
    }, [isCopied]);

    return (
        <div className={containerClasses}>
            <div ref={commandRef} className={commandClasses}>
                {children}
            </div>
            <button
                type="button"
                onClick={copyCommand}
                className={buttonClasses}
            >
                {isCopied ? <CheckIcon /> : <ClipboardIcon />}
                <span aria-live="polite">{isCopied ? "Copied" : "Copy"}</span>
            </button>
        </div>
    );
};

export default Command;
