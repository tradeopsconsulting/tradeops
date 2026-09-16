import { footer } from "@/content/copy";
import { BOOK_HREF, BOOK_LABEL } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-16">
      <div className="mx-auto grid max-w-[1240px] gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
        <div>
          <img
            src="/tradeops-mark-white.png"
            alt="TradeOps"
            width={261}
            height={268}
            className="h-10 w-auto"
          />
          <p className="mt-6 max-w-[36ch] text-[0.875rem] leading-relaxed text-white/52">
            {footer.brand}
          </p>
          <a
            href={footer.phone.href}
            className="mt-5 inline-block text-[0.875rem] text-white/70 hover:text-white"
          >
            {footer.phone.display}
          </a>
        </div>
        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="t-label text-[0.75rem] text-white/85">{column.title}</h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.8125rem] text-white/52 transition-colors hover:text-white motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav aria-label="Contact">
          <h2 className="t-label text-[0.75rem] text-white/85">Contact</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={BOOK_HREF}
                className="text-[0.8125rem] text-white/52 transition-colors hover:text-white motion-reduce:transition-none"
              >
                {BOOK_LABEL}
              </a>
            </li>
            <li>
              <a
                href={footer.phone.href}
                className="text-[0.8125rem] whitespace-nowrap text-white/52 transition-colors hover:text-white motion-reduce:transition-none"
              >
                {footer.phone.display}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-14 max-w-[1240px] border-t border-white/8 pt-7">
        <p className="text-[0.75rem] text-white/52">{footer.brand}</p>
      </div>
    </footer>
  );
}
