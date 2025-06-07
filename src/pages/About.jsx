import { useState, useEffect } from 'react';
import Seo from '../components/Seo';
import { useScrollAnimation, useStaggeredAnimation, usePageAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 페이지 진입 애니메이션
  const isPageLoaded = usePageAnimation(100);

  const slides = [
    {
      image: "/images/about_1.jpeg",
      alt: "Kids At Play 시설 전경"
    },
    {
      image: "/images/about_2.jpeg", 
      alt: "아이들의 활동 모습"
    },
    {
      image: "/images/about_3.jpeg",
      alt: "체육 활동 장면"
    }
  ];

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "안전 최우선",
      description: "모든 장비와 시설은 안전 기준을 철저히 준수하며, 전문 관리로 아이들이 안심하고 활동할 수 있습니다."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "전문 강사진",
      description: "체육 교육 전문가들이 아이들의 발달 단계에 맞는 개별화된 지도를 제공합니다."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "체력 증진",
      description: "즐거운 놀이를 통해 자연스럽게 체력을 기르고 건강한 생활 습관을 형성합니다."
    }
  ];

  // 스크롤 애니메이션 훅들
  const [heroRef, isHeroVisible] = useScrollAnimation();
  const [philosophyRef, isPhilosophyVisible] = useScrollAnimation();
  const [setFeatureRef, visibleFeatures] = useStaggeredAnimation(features.length, 200);

  // 알림 표시 함수
  const showNotification = (message) => {
    const existingNotification = document.getElementById('copy-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.id = 'copy-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #14b8a6;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 9999;
      font-family: 'Pretendard', sans-serif;
      font-weight: 500;
    `;
    notification.classList.add('slide-in');

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.remove('slide-in');
      notification.classList.add('slide-out');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 2000);
  };

  const handlePhoneClick = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    
    if (isMobile) {
      window.location.href = 'tel:054-275-0576';
    } else {
      navigator.clipboard.writeText('054-275-0576').then(() => {
        showNotification('전화번호가 복사되었습니다!');
      }).catch(() => {
        showNotification('복사에 실패했습니다.');
      });
    }
  };

  return (
    <>
      <Seo 
        title="시설 소개"
        description="Kids At Play는 포항 지역 최고의 유소년 체육센터입니다. 안전한 환경에서 전문 강사와 함께하는 체계적인 프로그램을 제공합니다."
        ogImage="/images/about_1.jpeg"
      />

      {/* 페이지 헤더 */}
      <section className={`pt-24 pb-12 bg-gradient-to-r from-primary-50 to-secondary-50 transform transition-all duration-1000 ease-out ${
        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-accent-900 mb-4 font-pretendard">
            Kids At Play 소개
          </h1>
          <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
            포항 지역 최고의 유소년 체육센터에서 우리 아이들의 건강하고 즐거운 성장을 함께합니다.
          </p>
        </div>
      </section>

      {/* Hero Section with Scroll Animation */}
      <section ref={heroRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto">
          {/* Image Slider */}
          <div 
            className={`relative max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${
              isHeroVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide 
                      ? 'bg-primary-500' 
                      : 'bg-accent-300 hover:bg-primary-300'
                  }`}
                  aria-label={`슬라이드 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-accent-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-pretendard">
              Kids At Play만의 특별함
            </h2>
            <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
              아이들의 안전과 성장을 위해 최선을 다하는 우리만의 차별화된 서비스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => setFeatureRef(index, el)}
                className={`bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-700 ease-out ${
                  visibleFeatures[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-primary-500 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-accent-900 mb-4 font-pretendard">
                  {feature.title}
                </h3>
                <p className="text-accent-600 leading-relaxed font-pretendard">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto">
          <div 
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out ${
              isPhilosophyVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-900 mb-6 font-pretendard">
              우리의 교육 철학
            </h2>
            <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
              <p className="text-lg text-accent-700 leading-relaxed mb-6 font-pretendard">
                <strong className="text-primary-600">"놀이를 통한 성장"</strong>
              </p>
              <p className="text-base text-accent-600 leading-relaxed font-pretendard">
                아이들에게 체육 활동은 단순한 운동이 아닌 성장의 과정입니다. 
                우리는 즐거운 놀이를 통해 자연스럽게 체력을 기르고, 
                협동심과 리더십을 배우며, 자신감을 키워나가는 환경을 제공합니다.
                <br /><br />
                모든 프로그램은 아이들의 발달 단계를 고려하여 설계되었으며, 
                안전을 최우선으로 하는 전문 강사진과 함께 
                아이들이 건강하고 행복하게 성장할 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
