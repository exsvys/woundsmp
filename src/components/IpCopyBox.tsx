import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function IpCopyBox({ ip }: { ip: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 rounded-sm border-2 border-border bg-card/80 px-5 py-4 backdrop-blur transition-all hover:border-primary hover:shadow-[0_0_30px_-5px_var(--primary)] sm:px-6"
      aria-label="Copy server IP"
    >
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        Server IP
      </span>
      <span className="font-mono text-base font-semibold text-foreground sm:text-lg">
        {ip}
      </span>
      <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-transform group-hover:scale-105">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </span>
      <span
        className={`absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-primary transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied!
      </span>
    </button>
  );
}
