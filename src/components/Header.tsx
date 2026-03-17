'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '/about', label: '회사소개' },
    { href: '/services', label: '사업분야' },
    { href: '/#문의하기', label: '문의하기' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://framerusercontent.com/images/KiHwgLVDgw6TM9fcVR1n7pYAw.png?scale-down-to=512"
            alt="MIR TECH"
            className="h-[30px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-hover text-[15px] font-medium transition-colors ${
                pathname === item.href ? 'text-[#18212d]' : 'text-[#9ca3af]'
              } hover:text-[#18212d]`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:010-7273-1937"
            className="bg-[#18212d] text-white text-[13px] px-6 py-2.5 rounded-full font-semibold hover:bg-[#2a3544] transition-all hover:shadow-lg hover:shadow-black/10"
          >
            010-7273-1937
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-5 h-[1.5px] bg-[#18212d] transition-all ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-[#18212d] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-[#18212d] transition-all ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.04] animate-fade-in">
          <div className="px-6 py-6 space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[16px] font-medium ${
                  pathname === item.href ? 'text-[#18212d]' : 'text-[#9ca3af]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:010-7273-1937"
              className="block bg-[#18212d] text-white text-[14px] px-6 py-3 rounded-full font-semibold text-center"
            >
              010-7273-1937
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
