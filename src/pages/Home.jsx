import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import InstagramFeed from '../components/InstagramFeed';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const highlightRef = useRef(null);
  
  // Hero 섹션 애니메이션 상태
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [textPhase, setTextPhase] = useState(0);

  useEffect(() => {
    // 페이지 로드 후 즉시 배경 애니메이션 시작
    const bgTimer = setTimeout(() => setHeroLoaded(true), 50);
    
    // 텍스트 순차 애니메이션 (더 빠르게)
    const textTimers = [
      setTimeout(() => setTextPhase(1), 200),   // 첫 번째 줄
      setTimeout(() => setTextPhase(2), 350),   // 두 번째 줄  
      setTimeout(() => setTextPhase(3), 500),   // 세 번째 줄
      setTimeout(() => setTextPhase(4), 650),   // 부제목
      setTimeout(() => setTextPhase(5), 800),   // 버튼
    ];

    return () => {
      clearTimeout(bgTimer);
      textTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // GSAP 3D 애니메이션 효과
  useEffect(() => {
    if (textPhase >= 2 && highlightRef.current) {
      // 초기 상태 설정
      gsap.set(highlightRef.current, {
        transformOrigin: "center center",
        transformPerspective: 1000,
        rotationX: 15,
        z: -80,
        scale: 0.9,
        opacity: 0
      });

      // 0.3초 딜레이 후 3D 애니메이션 실행
      gsap.to(highlightRef.current, {
        duration: 1.2,
        delay: 0.3,
        rotationX: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out"
      });
    }
  }, [textPhase]);

  // 부드러운 스크롤 함수
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Seo 
        title="홈"
        description="포항 유소년 체육센터 Kids At Play에서 우리 아이들의 건강한 성장을 지원합니다. 전문 강사와 안전한 장비로 최고의 체육 교육을 제공합니다."
        ogImage="/images/about_1.jpeg"
      />
      
      {/* Hero Section with 3D Perspective */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-accent-900 via-accent-800 to-accent-900"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-all duration-1000 ease-out ${
            heroLoaded ? 'scale-100 opacity-20' : 'scale-110 opacity-0'
          }`}
          style={{ backgroundImage: 'url("/images/about_1.jpeg")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-900/80 via-accent-800/70 to-accent-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-pretendard">
            <div 
              className={`transform transition-all duration-500 ease-out ${
                textPhase >= 1 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
            >
              우리 아이들의
            </div>
            <div 
              className={`transform transition-all duration-500 ease-out ${
                textPhase >= 2 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <span 
                ref={highlightRef}
                className="inline-block bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent"
                style={{
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d'
                }}
              >
                건강한 성장
              </span>을
            </div>
            <div 
              className={`transform transition-all duration-500 ease-out ${
                textPhase >= 3 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
            >
              함께 만들어가요
            </div>
          </h1>
          <p 
            className={`text-lg xs:text-xl sm:text-2xl mb-8 text-accent-200 leading-relaxed transform transition-all duration-500 ease-out font-pretendard ${
              textPhase >= 4 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
            }`}
          >
            포항 최고의 유소년 체육센터에서 <br className="hidden xs:block" />
            전문 강사와 함께하는 특별한 경험
          </p>
          <div 
            className={`transform transition-all duration-500 ease-out ${
              textPhase >= 5 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-4 opacity-0 scale-98'
            }`}
          >
            <Link
              to="/program"
              className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-pretendard"
            >
              프로그램 둘러보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 스크롤 유도 요소 - Reporch 스타일 정확히 구현 */}
        <button
          onClick={scrollToAbout}
          className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 rounded-lg p-3 ${
            textPhase >= 5 ? 'translate-y-0 opacity-60 hover:opacity-90' : 'translate-y-4 opacity-0'
          }`}
          aria-label="아래 섹션으로 스크롤"
        >
          <div className="flex flex-col items-center gap-3 text-white/60">
            <span className="text-xs font-pretendard tracking-wide">아래로 스크롤</span>
            
            {/* Reporch 스타일 마우스 인디케이터 */}
            <div className="relative w-5 h-8 border-2 border-white/30 rounded-full flex justify-center bg-transparent">
              {/* 위에서 아래로 떨어지는 막대기 */}
              <div 
                className="w-0.5 h-2 bg-white/50 rounded-full mt-1 scroll-bounce"
              ></div>
            </div>
            
            {/* 아래쪽 화살표 */}
            <svg 
              className="w-4 h-4 text-white/40 arrow-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </button>
      </section>

      {/* About Section with Scroll Animation */}
      <section ref={aboutRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div 
              className={`space-y-6 transform transition-all duration-1000 ease-out ${
                isAboutVisible 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-12 opacity-0'
              }`}
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-900 leading-tight font-pretendard">
                Kids At Play와 함께 <br />
                <span className="text-primary-600">특별한 순간</span>을 만들어요
              </h2>
              <p className="text-base sm:text-lg text-accent-600 leading-relaxed font-pretendard">
                우리는 단순한 놀이 공간이 아닙니다. 아이들이 안전하고 즐겁게 
                신체 활동을 통해 자신감을 기르고, 건강한 습관을 만들어가는 
                특별한 공간입니다.
              </p>
              <p className="text-base sm:text-lg text-accent-600 leading-relaxed font-pretendard">
                전문 강사진과 체계적인 프로그램으로 우리 아이들의 
                신체 발달과 정서적 성장을 동시에 지원하며, 
                학부모님들께는 믿고 맡길 수 있는 안심 공간을 제공합니다.
              </p>
              <div className="flex flex-col xs:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 font-pretendard"
                >
                  더 자세히 알아보기
                </Link>
                <Link
                  to="/location"
                  className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 px-6 py-3 font-medium transition-colors duration-200 font-pretendard"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  오시는 길 확인하기
                </Link>
              </div>
            </div>
            <div 
              className={`relative transform transition-all duration-1000 ease-out delay-300 ${
                isAboutVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-12 opacity-0'
              }`}
            >
              <img 
                src="/images/about_2.jpeg" 
                alt="Kids At Play 활동 모습"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-primary-300 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-secondary-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />
    </>
  );
};

export default Home;
