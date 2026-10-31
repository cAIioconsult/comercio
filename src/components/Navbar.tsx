import { useState } from "react";
import type { ImageAsset } from "../content";
import { Button } from "./Button";
import { Link } from "./Link";

type NavbarProps = { logo: ImageAsset; links: readonly string[]; mobileLinks: readonly string[]; primaryAction: string; mobileAction: string };

export function Navbar({ logo, links, mobileLinks, primaryAction, mobileAction }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const renderLink = (label: string) => {
    const href = { Home: "#home", About: "#about", Menu: "#menu", Gallery: "#gallery", faq: "#faq", Reservation: "#reservation" }[label as "Home" | "About" | "Menu" | "Gallery" | "faq" | "Reservation"];
    return href ? <Link key={label} href={href}>{label}</Link> : <span key={label} className="type-body-lg text-strong" aria-disabled="true">{label}</span>;
  };
  return <header className="navbar"><nav className="container flex items-center justify-between"><a href="#home" aria-label={logo.alt}><img {...logo} className="navbar-logo" /></a><div className="navbar-links">{links.map(renderLink)}</div><div className="navbar-action"><Button href="#menu">{primaryAction}</Button></div><button className="navbar-menu-button" type="button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span className={open ? "menu-line menu-line-top open" : "menu-line menu-line-top"} /><span className={open ? "menu-line menu-line-bottom open" : "menu-line menu-line-bottom"} /></button></nav>{open && <div className="mobile-menu">{mobileLinks.map(renderLink)}<Button href="#reservation">{mobileAction}</Button></div>}</header>;
}
