"use client";

import { useLanguage } from "./language-provider";

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="bg-violet px-5 py-8 text-ink">
      <div className="page-shell flex flex-col justify-between gap-4 text-xs md:flex-row">
        <p>{content.profile.links.email.replace("mailto:", "")}</p>
        <p>
          © 2026 {content.profile.name}. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
