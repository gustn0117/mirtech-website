const services = [
  {
    num: '01',
    title: '선박 유압 장비 수리',
    description:
      '선박에 적용되는 각종 유압 장비의 이상 여부를 정밀하게 진단하고, 펌프·밸브·실린더 등 주요 장비의 성능 회복을 위한 수리 및 보수 작업을 수행합니다. 현장 경험을 바탕으로 원인을 정확히 파악하여 재발을 최소화합니다.',
    image: 'https://framerusercontent.com/images/d5rGADiOruN3txWxZL6s8h6yJU.png',
  },
  {
    num: '02',
    title: '선박 배관 공사',
    description:
      '선박 내부 유압 및 배관 라인의 신설·교체·보강 공사를 전문적으로 수행합니다. 운항 환경과 구조를 고려한 시공으로 안정성과 내구성을 확보합니다.',
    image: 'https://framerusercontent.com/images/wqZCv4Il3RXkw8Gw3vl3ANmB4o.png',
  },
  {
    num: '03',
    title: '유압 배관 제작 및 설치',
    description:
      '현장 조건에 맞춘 유압 배관을 직접 제작하여 정확하게 설치합니다. 제작부터 설치, 테스트까지 일괄 수행하여 작업 효율과 품질을 동시에 만족시킵니다.',
    image: 'https://framerusercontent.com/images/goAwKayRi9zRXn8syYwau0aD6Sk.png',
  },
  {
    num: '04',
    title: '유압 시스템 점검 및 보수',
    description:
      '유압 시스템 전반에 대한 점검을 통해 누유, 압력 저하, 성능 이상 여부를 확인합니다. 예방 정비와 보수 작업을 통해 운항 중 발생할 수 있는 위험 요소를 사전에 차단합니다.',
    image: 'https://framerusercontent.com/images/uep5Jqjlb0TRP9I51cnqBfkrdGI.png',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[450px] overflow-hidden noise-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/j1XlCSXwArqtUKiwNp8gT0wUQ.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-[11px] text-white/40 tracking-[0.25em] uppercase mb-4 font-medium animate-fade-up">Our Services</p>
          <h1 className="text-[44px] md:text-[52px] font-extrabold font-dm tracking-tight animate-fade-up-delay-1">사업분야</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-24 items-start">
            {/* Left - Title */}
            <div className="lg:sticky lg:top-[100px]">
              <p className="text-[11px] text-[#9ca3af] tracking-[0.2em] uppercase mb-4 font-medium">Services</p>
              <h2 className="text-[36px] md:text-[42px] font-bold font-dm mb-6 text-[#18212d] tracking-tight leading-tight">
                사업 분야
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-[#9ca3af] text-[15px] leading-[1.8] font-noto">
                미르테크는 선박 운항에 필수적인 유압과 배관 핵심 분야를 중심으로, 현장 중심의 정확한 진단과 안전한 작업을 통해 신뢰받는 서비스를 제공합니다.
              </p>
            </div>

            {/* Right - Service cards */}
            <div className="space-y-24">
              {services.map((service) => (
                <div key={service.num} className="group">
                  <div className="rounded-2xl overflow-hidden mb-7 aspect-[4/3] shadow-lg shadow-black/[0.06]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover service-img"
                    />
                  </div>
                  <div className="flex items-start gap-5">
                    <span className="text-[13px] font-dm font-bold text-mir-orange mt-1.5">{service.num}</span>
                    <div>
                      <h3 className="text-[22px] font-bold font-noto mb-3 text-[#18212d] tracking-[-0.02em]">{service.title}</h3>
                      <p className="text-[#9ca3af] text-[15px] leading-[1.8] font-noto">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
