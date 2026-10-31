import type { FooterLink, FooterLinkGroup, ImageAsset } from "../content";
import { Link } from "./Link";

type FooterProps = { image: ImageAsset; wordmark: ImageAsset; tagline: string; linkGroups: FooterLinkGroup[]; socials: readonly string[]; copyright: string; credit: string };

export function Footer({ image, wordmark, tagline, linkGroups, socials, copyright, credit }: FooterProps) {
  const renderLink = ({ label, href }: FooterLink) => href ? <Link key={label} href={href}>{label}</Link> : <span key={label} className="type-body-lg text-strong" aria-disabled="true">{label}</span>;
  return <footer className="site-footer"><div className="footer-container"><div className="footer-top"><div className="footer-intro"><img {...image} className="footer-image" /><p className="type-body-lg text-body">{tagline}</p></div>{linkGroups.map((group) => <div className="footer-group" key={group.title + group.links[0]?.label}><h2 className="type-label text-strong">{group.title}</h2>{group.links.map(renderLink)}</div>)}<div className="footer-socials">{socials.map((social) => <span key={social} className="type-body-lg text-strong" aria-disabled="true">{social.slice(0, 1)}</span>)}</div></div><img {...wordmark} className="footer-wordmark" /><div className="footer-bottom"><p className="type-caption text-body">{copyright}</p><p className="type-caption text-body">{credit}</p></div></div></footer>;
}
