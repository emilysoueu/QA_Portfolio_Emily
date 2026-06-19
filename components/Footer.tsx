import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] text-faint sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pass" />
          build passing
        </span>
      </div>
    </footer>
  );
}
