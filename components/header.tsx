"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="brand-logo brand-logo-desktop" href="/" aria-label="West Adelaide Legal home">
          <Image
            src="/branding/west-adelaide-legal-logo.svg"
            alt="West Adelaide Legal"
            width={314}
            height={77}
            priority
          />
        </Link>
        <Link className="brand-logo brand-logo-mobile" href="/" aria-label="West Adelaide Legal home">
          <Image
            src="/branding/west-adelaide-legal-mark.svg"
            alt=""
            width={72}
            height={72}
            priority
          />
          <span>West Adelaide Legal</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link is-active" : "nav-link"}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-gold header-cta" href="/contact#enquiry">
          <span>Free Initial Appointment</span>
          <ArrowRight aria-hidden="true" size={17} strokeWidth={1.7} />
        </Link>

        <button className="menu-button" type="button" onClick={openMenu} aria-label="Open navigation menu">
          <Menu aria-hidden="true" size={29} strokeWidth={1.6} />
        </button>
      </div>

      <dialog ref={dialogRef} className="mobile-dialog" aria-label="Mobile navigation">
        <div className="mobile-dialog-inner">
          <div className="mobile-dialog-head">
            <Image
              src="/branding/west-adelaide-legal-logo-dark.svg"
              alt="West Adelaide Legal"
              width={258}
              height={64}
            />
            <button type="button" onClick={closeMenu} aria-label="Close navigation menu">
              <X aria-hidden="true" size={28} strokeWidth={1.5} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} className="mobile-nav-link">
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button button-gold mobile-nav-cta" href="/contact#enquiry">
            Free Initial Appointment
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </dialog>
    </header>
  );
}
