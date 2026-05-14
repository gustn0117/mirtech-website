export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[450px] overflow-hidden noise-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/BAp2JhqlKh8wIHM1cKFXQb0QYBM.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-[11px] text-white/40 tracking-[0.25em] uppercase mb-4 font-medium animate-fade-up">About Us</p>
          <h1 className="text-[44px] md:text-[52px] font-extrabold font-dm tracking-tight animate-fade-up-delay-1">회사소개</h1>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="text-[72px] text-[#E8731A]/20 font-serif leading-none mb-4">&ldquo;</div>
          <p className="text-[20px] md:text-[24px] font-noto leading-[1.7] text-[#18212d] font-light">
            미르테크(MIR TECH)는 용을 의미하는 미르처럼
            <br className="hidden md:block" />
            <strong className="font-bold">강인한 기술력</strong>과 <strong className="font-bold">유연한 대응력</strong>을 바탕으로
            <br className="hidden md:block" />
            성장해온 선박 유압 전문 기업입니다.
          </p>
        </div>
      </section>

      {/* Logo & Description */}
      <section className="pb-32 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          {/* MIR TECH Logo */}
          <div className="flex items-center justify-center mb-14">
            <img
              src="https://framerusercontent.com/images/KiHwgLVDgw6TM9fcVR1n7pYAw.png?scale-down-to=512"
              alt="MIR TECH"
              className="h-[45px] object-contain"
            />
          </div>

          <div className="section-divider mx-auto mb-14" />

          {/* Descriptions */}
          <div className="space-y-8 text-[#9ca3af] text-[15px] md:text-[16px] leading-[2] font-noto">
            <p>
              당사는 선박에 적용되는 유압 시스템 전반에 대한 설계, 제작, 수리 및 유지보수를 전문으로 하며,
              <br className="hidden md:block" />
              다년간의 현장 경험과 축적된 기술력을 통해 고객에게 최적의 솔루션을 제공하고 있습니다.
            </p>
            <p>
              미르테크는 선박 유압 장비 수리, 선박 배관 공사, 유압 배관 제작 및 설치, 각종 유압 시스템 점검 및 보수 등
              선박 운항에 필수적인 핵심 분야를 중심으로 사업을 수행하고 있습니다. 빠르고 정확한 대응, 안전을 최우선
              으로 하는 작업 프로세스를 통해 선주 및 조선·해양 관련 업체로부터 신뢰를 쌓아가고 있습니다.
            </p>
            <p>
              앞으로도 미르테크는 끊임없는 기술 개발과 품질 향상을 통해,
              <br className="hidden md:block" />
              선박 유압 분야에서 신뢰받는 파트너, 현장을 아는 기술 기업으로 지속 성장해 나가겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] text-[#9ca3af] tracking-[0.2em] uppercase mb-3 font-medium">Certificates</p>
            <h2 className="text-[32px] md:text-[36px] font-bold font-dm text-[#18212d] tracking-tight">인증서</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { src: 'https://framerusercontent.com/images/MjaeopjMzWHeJGTwys40JYZIccg.png?scale-down-to=1024', alt: '중소기업 확인서' },
              { src: 'https://framerusercontent.com/images/PoKsXjcR5cESHPsjxutFxJrNRW0.png?scale-down-to=1024', alt: '창업기업 확인서' },
              { src: '/factory-registration.jpeg', alt: '공장등록증명서' },
              { src: '/port-transport-registration.jpeg', alt: '항만운송관련사업등록증' },
            ].map((cert) => (
              <div key={cert.alt} className="rounded-2xl overflow-hidden bg-white shadow-lg shadow-black/[0.04] border border-black/[0.04] hover:shadow-xl hover:shadow-black/[0.06] transition-shadow duration-300">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
