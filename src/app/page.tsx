import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] overflow-hidden noise-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg scale-105"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/ldUnp7Hlm2WEZBomo6pvVgawA.png?scale-down-to=2048')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <img
            src="https://framerusercontent.com/images/Bt2q8aGeb73js1AFcCxRcZpq0.png?scale-down-to=1024"
            alt="MIR TECH"
            className="w-[520px] max-w-[85vw] h-auto mb-10 animate-scale-in drop-shadow-2xl"
          />
          <p className="text-[24px] md:text-[34px] font-noto font-bold text-white/95 tracking-tight animate-fade-up-delay-1">
            선박 유압의 핵심을 책임지는 현장 기술 파트너
          </p>
          <div className="animate-fade-up-delay-3 mt-16">
            <Link
              href="/#문의하기"
              className="inline-flex items-center gap-2 border border-white/30 text-white/90 px-8 py-3 rounded-full text-[14px] font-medium hover:bg-white hover:text-[#18212d] transition-all duration-300"
            >
              문의하기
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-up-delay-3">
          <div className="w-[1px] h-[50px] bg-gradient-to-b from-transparent to-white/40 mx-auto" />
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-32 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block border border-[#d9d9d9] rounded-full px-5 py-1.5 mb-8">
            <span className="text-[11px] text-[#9ca3af] tracking-[0.15em] font-medium uppercase">미르테크</span>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-extrabold font-dm mb-10 text-[#18212d] tracking-tight leading-none">
            MIR TECH
          </h2>
          <div className="section-divider mx-auto mb-10" />
          <p className="text-[#9ca3af] leading-[1.6] text-[18px] md:text-[20px] font-noto font-light">
            미르테크는 용(미르)처럼 강인한 기술력과 유연한 대응력을
            <br className="hidden md:block" />
            바탕으로 선박 유압 시스템 전반을 전문적으로 수행하는 기업입니다.
          </p>
          <p className="text-[#d9d9d9] mt-12 text-[14px] font-noto tracking-wide">사업자등록번호 : 544-05-02162</p>
        </div>
      </section>

      {/* Three Columns */}
      <section className="bg-[#18212d] py-28 px-6 noise-overlay">
        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              title: '회사소개',
              sub: 'ABOUT US',
              desc: '선박 유압 분야에서 현장 경험과 기술력을 바탕으로 성장해온 전문 기업입니다. 신뢰와 안전을 최우선 가치로 고객과 함께합니다.',
              href: '/about',
            },
            {
              title: '사업분야',
              sub: 'OUR SERVICES',
              desc: '선박 유압 시스템 설계, 제작, 수리 및 배관 공사를 전문으로 수행합니다. 운항에 필수적인 핵심 유압 분야를 책임집니다.',
              href: '/services',
            },
            {
              title: '문의하기',
              sub: 'CONTACT',
              desc: '선박 유압 관련 상담과 견적 문의를 빠르게 도와드립니다. 현장 상황에 맞는 최적의 해결책을 제안합니다.',
              href: '/#문의하기',
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`p-10 md:p-12 ${i < 2 ? 'md:border-r md:border-white/[0.08]' : ''}`}
            >
              <p className="text-[11px] text-white/30 tracking-[0.2em] uppercase mb-3 font-medium">{item.sub}</p>
              <h3 className="text-white text-[22px] font-bold font-noto mb-5">
                {item.title}
              </h3>
              <p className="text-white/40 text-[14px] leading-[1.8] font-noto mb-8">
                {item.desc}
              </p>
              <Link href={item.href} className="group inline-flex items-center gap-2 text-white/60 text-[13px] font-medium hover:text-mir-orange transition-colors">
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How to get in touch */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left side */}
          <div>
            <p className="text-[11px] text-[#9ca3af] tracking-[0.2em] uppercase mb-6 font-medium">Get in touch</p>
            <h2 className="text-[44px] md:text-[52px] font-dm font-bold leading-[1.05] mb-6 tracking-tight">
              <span className="text-[#18212d]">How to </span>
              <span className="text-[#d9d9d9]">get in</span>
              <br />
              <span className="text-[#d9d9d9]">touch with us</span>
            </h2>
            <p className="text-[#9ca3af] text-[17px] font-noto">
              궁금한 점이 있으시면 언제든 편하게 문의주세요!
            </p>

            {/* Google Map */}
            <div className="mt-10 rounded-2xl overflow-hidden h-[360px] shadow-lg shadow-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.2!2d129.06!3d35.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z67aA7IKw6rSR7Jet7IucIOyYgeuPhOq1rCDtlbTslpHroZwxNzbrsoTquLggNQ!5e0!3m2!1sko!2skr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right side - Contact cards */}
          <div className="flex flex-col gap-4 lg:pt-16">
            {[
              { icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 7 10-7"/></svg>
              ), title: 'E-mail', value: 'mir1937@naver.com' },
              { icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              ), title: 'Tel', value: '051-405-1937, 010-7273-1937' },
              { icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/></svg>
              ), title: 'Fax', value: '051-415-1937' },
              { icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ), title: 'Location', value: '부산광역시 영도구 해양로176번길 5 미르테크 공장 B동' },
            ].map((item) => (
              <div key={item.title} className="contact-card group border border-black/[0.06] rounded-2xl p-6 flex items-start gap-5 bg-white">
                <div className="w-11 h-11 rounded-xl bg-[#f5f5f5] flex items-center justify-center text-[#9ca3af] group-hover:bg-mir-orange/10 group-hover:text-mir-orange transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] tracking-[-0.02em] mb-1 text-[#18212d]">{item.title}</h3>
                  <p className="text-[#9ca3af] text-[15px]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="문의하기" className="py-28 px-6 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] text-[#9ca3af] tracking-[0.2em] uppercase mb-3 font-medium">Contact</p>
            <h2 className="text-[36px] font-dm font-bold text-[#18212d] tracking-tight">문의하기</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-14 max-w-[860px] mx-auto shadow-xl shadow-black/[0.03] border border-black/[0.04]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">이름</label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">이메일</label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">연락처</label>
                <input
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">문의사항</label>
                <textarea
                  placeholder="문의사항을 입력하세요"
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] resize-y focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#18212d] text-white px-10 py-3.5 rounded-full text-[14px] font-semibold hover:bg-[#2a3544] transition-all hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#18212d] py-20 px-6 noise-overlay">
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <img
                src="https://framerusercontent.com/images/KiHwgLVDgw6TM9fcVR1n7pYAw.png?scale-down-to=512"
                alt="MIR TECH"
                className="h-[28px] mb-6 object-contain brightness-0 invert opacity-80"
              />
              <p className="text-white/30 text-[14px] leading-[1.8] font-noto">
                선박 유압 분야에서 신뢰받는 파트너,
                <br />
                현장을 아는 기술 기업 미르테크
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white/50 text-[11px] tracking-[0.15em] uppercase font-semibold mb-5">연락처</h4>
              <div className="space-y-3 text-white/40 text-[14px]">
                <p>051-405-1937</p>
                <p>010-7273-1937</p>
                <p>mir1937@naver.com</p>
              </div>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-white/50 text-[11px] tracking-[0.15em] uppercase font-semibold mb-5">주소</h4>
              <p className="text-white/40 text-[14px] leading-[1.8]">
                부산광역시 영도구
                <br />
                해양로176번길 5
                <br />
                미르테크 공장 B동
              </p>
            </div>
          </div>
          <div className="border-t border-white/[0.06] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-[12px]">
              &copy; 2025 미르테크 MIR TECH. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['회사소개', '사업분야', '문의하기'].map((label) => (
                <span key={label} className="text-white/20 text-[12px] hover:text-white/40 transition-colors cursor-pointer">{label}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
