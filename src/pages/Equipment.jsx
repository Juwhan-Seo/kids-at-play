import { useState } from 'react';
import Seo from '../components/Seo';
import { useScrollAnimation, useStaggeredAnimation, usePageAnimation } from '../hooks/useScrollAnimation';

const Equipment = () => {
  // 페이지 진입 애니메이션
  const isPageLoaded = usePageAnimation(100);

  const [selectedImage, setSelectedImage] = useState(null);

  const equipmentImages = [
    {
      id: 1,
      src: '/images/equipment_1.jpeg',
      alt: '체육 교구 1'
    },
    {
      id: 2,
      src: '/images/equipment_2.jpeg',
      alt: '체육 교구 2'
    },
    {
      id: 3,
      src: '/images/equipment_3.jpeg',
      alt: '체육 교구 3'
    },
    {
      id: 4,
      src: '/images/equipment_4.jpeg',
      alt: '체육 교구 4'
    },
    {
      id: 5,
      src: '/images/equipment_5.jpeg',
      alt: '체육 교구 5'
    },
    {
      id: 6,
      src: '/images/equipment_6.jpeg',
      alt: '체육 교구 6'
    },
    {
      id: 7,
      src: '/images/equipment_7.jpeg',
      alt: '체육 교구 7'
    },
    {
      id: 8,
      src: '/images/equipment_8.jpeg',
      alt: '체육 교구 8'
    },
    {
      id: 9,
      src: '/images/equipment_9.jpeg',
      alt: '체육 교구 9'
    },
    {
      id: 10,
      src: '/images/equipment_10.jpeg',
      alt: '체육 교구 10'
    },
    {
      id: 11,
      src: '/images/equipment_11.jpeg',
      alt: '체육 교구 11'
    },
    {
      id: 12,
      src: '/images/equipment_12.jpeg',
      alt: '체육 교구 12'
    }
  ];

  // 스크롤 애니메이션 훅들
  const [heroRef, isHeroVisible] = useScrollAnimation();
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [featuresRef, isFeaturesVisible] = useScrollAnimation();
  const [setImageRef, visibleImages] = useStaggeredAnimation(equipmentImages.length, 100);
  const [setFeatureRef, visibleFeatures] = useStaggeredAnimation(3, 200); // 3개 카드용 스태거 애니메이션

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <Seo 
        title="교구 현황"
        description="Kids At Play의 최신 체육 교구들을 확인해보세요. 안전하고 전문적인 교구로 아이들의 안전하고 즐거운 활동을 지원합니다."
        ogImage="/images/equipment_1.jpeg"
      />

      {/* 페이지 헤더 */}
      <section className={`pt-24 pb-12 bg-gradient-to-r from-primary-50 to-secondary-50 transform transition-all duration-1000 ease-out ${
        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-accent-900 mb-4 font-pretendard">
            교구 현황
          </h1>
          <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
            안전하고 현대적인 교구로 아이들의 즐겁고 효과적인 운동을 지원합니다.
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
              isTitleVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-pretendard">
              다양한 체육 교구
            </h2>
            <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
              모든 교구는 정기적으로 점검되며 안전 기준을 철저히 준수합니다. 
              이미지를 클릭하면 더 자세히 보실 수 있습니다.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {equipmentImages.map((image, index) => (
              <div 
                key={image.id}
                ref={(el) => setImageRef(index, el)}
                className={`break-inside-avoid cursor-pointer group transform transition-all duration-700 ease-out ${
                  visibleImages[index]
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform group-hover:scale-105">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="모달 닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 sm:py-20 bg-accent-50">
        <div className="container mx-auto">
          <div 
            className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
              isFeaturesVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-pretendard">
              교구 관리 <span className="text-primary-600">시스템</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              ref={(el) => setFeatureRef(0, el)}
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transform transition-all duration-1000 ease-out ${
                visibleFeatures[0]
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-primary-500 mb-6 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-accent-900 mb-4 font-pretendard">
                정기 안전 점검
              </h3>
              <p className="text-accent-600 leading-relaxed font-pretendard">
                모든 교구는 매일 사용 전 점검하며, 
                정기적인 전문 점검을 통해 안전성을 보장합니다.
              </p>
            </div>

            <div 
              ref={(el) => setFeatureRef(1, el)}
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transform transition-all duration-1000 ease-out ${
                visibleFeatures[1]
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-primary-500 mb-6 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-accent-900 mb-4 font-pretendard">
                최신 교구 도입
              </h3>
              <p className="text-accent-600 leading-relaxed font-pretendard">
                어린이 체육 교육에 최적화된 최신 교구를 
                지속적으로 도입하여 더 나은 환경을 제공합니다.
              </p>
            </div>

            <div 
              ref={(el) => setFeatureRef(2, el)}
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transform transition-all duration-1000 ease-out ${
                visibleFeatures[2]
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-primary-500 mb-6 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-accent-900 mb-4 font-pretendard">
                전문 관리 인력
              </h3>
              <p className="text-accent-600 leading-relaxed font-pretendard">
                체육 교구 전문가가 상주하여 교구의 관리와 
                아이들의 안전한 사용을 지도합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipment;
