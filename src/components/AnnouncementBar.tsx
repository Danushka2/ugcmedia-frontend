import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[hsl(var(--announcement-bg))] text-[hsl(var(--announcement-foreground))] py-2.5 px-4 text-center text-sm flex items-center justify-center gap-3">
      <span className="opacity-90">Create your ad for $1</span>
      <a
        href="#"
        className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Try Now
        <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  );
};

export default AnnouncementBar;
