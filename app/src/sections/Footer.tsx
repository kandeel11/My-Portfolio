export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-charcoal py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-stellar">
              MK<span className="text-primary-teal">.</span>
            </span>
            <span className="text-sm text-muted-slate">
              Mohamed Khaled Mahmoud
            </span>
          </div>
          <span className="text-sm text-muted-slate">
            Full Stack .NET &amp; Angular Developer
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-charcoal mb-6" />

        {/* Row 2 */}
        <div className="text-center">
          <p className="text-xs font-mono text-muted-slate mb-1">
            &copy; 2026 Mohamed Khaled. Built with React &amp; Tailwind CSS.
          </p>
          <p className="text-xs text-muted-slate">
            All skills verified through production projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
