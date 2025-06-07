import { useState } from 'react';
import Seo from '../components/Seo';
import { useStaggeredAnimation, usePageAnimation } from '../hooks/useScrollAnimation';

const Program = () => {
  // 페이지 진입 애니메이션
  const isPageLoaded = usePageAnimation(100);

  const [currentImages, setCurrentImages] = useState({
    infant: 0,
    school: 0,
    rope: 0,
    inline: 0,
    newsports: 0,
    ski: 0,
    rhythm: 0
  });

  const programs = [
    {
      id: 'infant',
      title: '유아체육',
      description: '만 3-5세 유아들을 위한 기초 운동 능력 발달 프로그램입니다.',
      features: [
        '기초 운동 능력 발달',
        '감각 운동 기능 향상', 
        '놀이를 통한 체력 증진'
      ],
      images: [
        {
          src: '/images/program_school_1.jpeg',
          alt: '유아체육 프로그램 활동 1'
        },
        {
          src: '/images/program_school_2.jpeg', 
          alt: '유아체육 프로그램 활동 2'
        },
        {
          src: '/images/program_school_3.jpeg',
          alt: '유아체육 프로그램 활동 3'
        }
      ]
    },
    {
      id: 'school',
      title: '학교체육',
      description: '초등학생을 위한 정규 교육과정과 연계된 체계적인 체육 활동 프로그램입니다.',
      features: [
        '기초체력 증진',
        '단체 협동심 발달', 
        '올바른 운동 습관 형성'
      ],
      images: [
        {
          src: '/images/program_school_1.jpeg',
          alt: '학교체육 프로그램 활동 1'
        },
        {
          src: '/images/program_school_2.jpeg', 
          alt: '학교체육 프로그램 활동 2'
        },
        {
          src: '/images/program_school_3.jpeg',
          alt: '학교체육 프로그램 활동 3'
        }
      ]
    },
    {
      id: 'rope',
      title: '음악줄넘기',
      description: '음악에 맞춰 즐겁게 줄넘기를 하며 리듬감과 지구력을 기르는 프로그램입니다.',
      features: [
        '리듬감 향상',
        '심폐지구력 강화',
        '집중력 및 순발력 개발'
      ],
      images: [
        {
          src: '/images/program_music_inline_1.jpeg',
          alt: '음악줄넘기 프로그램 활동 1'
        },
        {
          src: '/images/program_music_inline_2.jpeg',
          alt: '음악줄넘기 프로그램 활동 2'
        },
        {
          src: '/images/program_music_inline_3.jpeg',
          alt: '음악줄넘기 프로그램 활동 3'
        }
      ]
    },
    {
      id: 'inline',
      title: '인라인',
      description: '인라인 스케이팅을 통해 균형감각과 하체 근력을 기르는 프로그램입니다.',
      features: [
        '균형감각 향상',
        '하체 근력 강화',
        '자신감 및 도전정신 함양'
      ],
      images: [
        {
          src: '/images/program_music_inline_1.jpeg',
          alt: '인라인 프로그램 활동 1'
        },
        {
          src: '/images/program_music_inline_2.jpeg',
          alt: '인라인 프로그램 활동 2'
        },
        {
          src: '/images/program_music_inline_3.jpeg',
          alt: '인라인 프로그램 활동 3'
        }
      ]
    },
    {
      id: 'newsports',
      title: '뉴스포츠',
      description: '새로운 형태의 스포츠 활동을 통해 창의성과 운동 능력을 기르는 프로그램입니다.',
      features: [
        '새로운 스포츠 경험',
        '창의적 사고력 개발',
        '협동심 및 경쟁력 향상'
      ],
      images: [
        {
          src: '/images/program_newsports_ski_1.jpeg',
          alt: '뉴스포츠 프로그램 활동 1'
        },
        {
          src: '/images/program_newsports_ski_2.jpeg',
          alt: '뉴스포츠 프로그램 활동 2'
        },
        {
          src: '/images/program_newsports_ski_3.jpeg',
          alt: '뉴스포츠 프로그램 활동 3'
        }
      ]
    },
    {
      id: 'ski', 
      title: '스키캠프',
      description: '실내에서 즐기는 특별한 스키 체험으로 전신 운동과 도전 정신을 기르는 프로그램입니다.',
      features: [
        '전신 근력 강화',
        '균형감각 발달',
        '도전 정신 함양'
      ],
      images: [
        {
          src: '/images/program_newsports_ski_1.jpeg',
          alt: '스키캠프 프로그램 활동 1'
        },
        {
          src: '/images/program_newsports_ski_2.jpeg',
          alt: '스키캠프 프로그램 활동 2'
        },
        {
          src: '/images/program_newsports_ski_3.jpeg',
          alt: '스키캠프 프로그램 활동 3'
        }
      ]
    },
    {
      id: 'rhythm',
      title: '리듬트레이닝',
      description: '음악과 함께하는 리듬 운동으로 협응력과 표현력을 기르는 창의적인 프로그램입니다.',
      features: [
        '음악적 리듬감 향상',
        '전신 협응력 발달',
        '창의적 표현력 증진'
      ],
      images: [
        {
          src: '/images/program_rhythm_1.jpeg',
          alt: '리듬트레이닝 프로그램 활동 1'
        },
        {
          src: '/images/program_rhythm_2.jpeg',
          alt: '리듬트레이닝 프로그램 활동 2'
        },
        {
          src: '/images/program_rhythm_3.jpeg',
          alt: '리듬트레이닝 프로그램 활동 3'
        }
      ]
    }
  ];

  const [setProgramRef, visiblePrograms] = useStaggeredAnimation(programs.length, 120);

  const nextImage = (programId) => {
    setCurrentImages(prev => ({
      ...prev,
      [programId]: (prev[programId] + 1) % 3
    }));
  };

  const prevImage = (programId) => {
    setCurrentImages(prev => ({
      ...prev,
      [programId]: prev[programId] === 0 ? 2 : prev[programId] - 1
    }));
  };

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

  // 전화 클릭 핸들러
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
        title="프로그램"
        description="다양한 유소년 체육 프로그램을 만나보세요. 유아체육, 학교체육, 음악줄넘기, 인라인, 뉴스포츠, 스키캠프, 리듬트레이닝까지!"
      />
      
      {/* 페이지 헤더 */}
      <section className={`pt-24 pb-12 bg-gradient-to-r from-primary-50 to-secondary-50 transform transition-all duration-1000 ease-out ${
        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-accent-900 mb-4 font-pretendard">
            다양한 프로그램
          </h1>
          <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
            아이들의 성장 단계와 관심사에 맞춘 7가지 전문 프로그램을 만나보세요
          </p>
        </div>
      </section>

      {/* 프로그램 목록 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <div
                key={program.id}
                ref={(el) => setProgramRef(index, el)}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group transform ${
                  visiblePrograms[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* 이미지 슬라이더 */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-accent-100">
                  <img
                    src={program.images[currentImages[program.id]].src}
                    alt={program.images[currentImages[program.id]].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* 이미지 네비게이션 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => prevImage(program.id)}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                      aria-label="이전 이미지"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => nextImage(program.id)}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                      aria-label="다음 이미지"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* 이미지 인디케이터 */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {program.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImages(prev => ({ ...prev, [program.id]: imgIndex }))}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          currentImages[program.id] === imgIndex 
                            ? 'bg-white' 
                            : 'bg-white/50'
                        }`}
                        aria-label={`이미지 ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* 프로그램 정보 */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-accent-900 mb-3 font-pretendard">
                    {program.title}
                  </h3>
                  <p className="text-accent-600 mb-4 leading-relaxed font-pretendard">
                    {program.description}
                  </p>
                  
                  {/* 특징 목록 */}
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-accent-700 font-pretendard">
                        <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-6 font-pretendard">
            우리 아이에게 맞는 프로그램을 찾아보세요!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-pretendard">
            전문 강사진과 함께하는 안전하고 체계적인 프로그램으로 
            아이들의 건강한 성장을 도와드립니다.
          </p>
          <div className="flex flex-col xs:flex-row gap-4 justify-center items-center">
            <button
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-3 bg-white text-primary-600 hover:bg-accent-50 px-6 xs:px-8 py-3 xs:py-4 rounded-xl text-base xs:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-pretendard"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              054-275-0576
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
