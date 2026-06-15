import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-violet px-5 py-8 text-paper">
      <div className="page-shell flex flex-col justify-between gap-4 text-xs md:flex-row">
        <p>{profile.links.email.replace("mailto:", "")}</p>
        <p>© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
