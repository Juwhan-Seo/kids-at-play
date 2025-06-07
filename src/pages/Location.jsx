import { useState, useEffect } from 'react';
import Seo from '../components/Seo';
import { useScrollAnimation, usePageAnimation } from '../hooks/useScrollAnimation';

const Location = () => {
  // 페이지 진입 애니메이션
  const isPageLoaded = usePageAnimation(100);
  
  // 스크롤 애니메이션 훅들
  const [heroRef, isHeroVisible] = useScrollAnimation();
  const [mapRef, isMapVisible] = useScrollAnimation();
  const [infoRef, isInfoVisible] = useScrollAnimation();

  const phoneNumbers = [
    { number: '054-275-0576', label: '센터 문의' },
    { number: '010-4802-3987', label: '직통 연락' },
    { number: '010-9898-4339', label: '추가 문의' }
  ];

  const address = "경상북도 포항시 남구 대이로 101 4층";
  const naverMapDirectionsUrl = "https://map.naver.com/p/directions/-/14398133.192932643,4303944.278195468,%ED%82%A4%EC%A6%88%EC%97%A3%ED%94%8C%EB%A0%88%EC%9D%B4,,/-/transit?c=15.00,0,0,0,dh";

  // 현재 운영 상태 확인
  const getCurrentStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
    const hour = now.getHours();
    
    // 일요일은 정기휴무
    if (day === 0) {
      return { isOpen: false, status: '정기휴무', nextOpen: '월요일 14:00' };
    }
    
    // 월~토 14:00-21:00
    if (hour >= 14 && hour < 21) {
      const minutesLeft = (21 - hour - 1) * 60 + (60 - now.getMinutes());
      return { 
        isOpen: true, 
        status: '운영 중', 
        closeTime: `${Math.floor(minutesLeft / 60)}시간 ${minutesLeft % 60}분 후 마감`
      };
    } else if (hour < 14) {
      const minutesUntilOpen = (14 - hour - 1) * 60 + (60 - now.getMinutes());
      return { 
        isOpen: false, 
        status: '운영 전', 
        nextOpen: `${Math.floor(minutesUntilOpen / 60)}시간 ${minutesUntilOpen % 60}분 후 오픈`
      };
    } else {
      // 21시 이후
      const tomorrow = day === 6 ? '월요일' : '내일';
      return { isOpen: false, status: '운영 종료', nextOpen: `${tomorrow} 14:00 오픈` };
    }
  };

  const [currentStatus, setCurrentStatus] = useState(getCurrentStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(getCurrentStatus());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(interval);
  }, []);

  const showNotification = (message) => {
    // 기존 알림이 있으면 제거
    const existingNotification = document.getElementById('copy-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // 새 알림 생성
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

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      showNotification('클립보드에 복사되었습니다!');
    } catch (err) {
      showNotification('복사에 실패했습니다.');
    }
  };

  const handlePhoneClick = (phoneNumber) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // 모바일에서는 전화 걸기
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // PC에서는 클립보드 복사
      navigator.clipboard.writeText(phoneNumber).then(() => {
        showNotification('전화번호가 클립보드에 복사되었습니다!');
      }).catch(() => {
        showNotification('복사에 실패했습니다.');
      });
    }
  };

  return (
    <>
      <Seo 
        title="오시는 길"
        description="Kids At Play 포항 유소년 체육센터의 위치와 연락처 정보를 확인하세요. 경상북도 포항시 남구 대이로 101 4층에 위치합니다."
        ogImage="/images/about_1.jpeg"
      />

      {/* 페이지 헤더 */}
      <section className={`pt-24 pb-12 bg-gradient-to-r from-primary-50 to-secondary-50 transform transition-all duration-1000 ease-out ${
        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-accent-900 mb-4 font-pretendard">
            오시는 길
          </h1>
          <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
            Kids At Play 유소년 체육센터에서 만나요!
          </p>
        </div>
      </section>

      {/* 지도 섹션 */}
      <section ref={mapRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto">
          <div 
            className={`max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${
              isMapVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.234567890123!2d129.3406311!3d36.0241456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAxJzI3LjAiTiAxMjnCsDIwJzI2LjMiRQ!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
                className="w-full h-80 sm:h-96"
                loading="lazy"
                title="Kids At Play 위치"
                allowFullScreen
              />
            </div>
            
            {/* 주소 & 길찾기 버튼 */}
            <div className="text-center mt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-accent-900 mb-4 font-pretendard">주소 정보</h2>
              <p className="text-lg sm:text-xl font-semibold text-primary-600 mb-6 font-pretendard">{address}</p>
              
              <div className="flex justify-center gap-4">
                <button
                  onClick={copyAddress}
                  className="group relative inline-flex items-center justify-center p-3 bg-accent-100 hover:bg-accent-200 text-accent-800 rounded-full transition-all duration-200"
                  title="주소 복사하기"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute bottom-full mb-2 px-3 py-1 bg-accent-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-pretendard">
                    주소 복사하기
                  </div>
                </button>
                
                <a
                  href={naverMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200"
                  title="네이버 지도 길찾기"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="absolute bottom-full mb-2 px-3 py-1 bg-accent-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-pretendard">
                    길찾기
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 정보 섹션 */}
      <section ref={infoRef} className="py-16 sm:py-20 bg-accent-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 운영시간 */}
            <div 
              className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-1000 ease-out ${
                isInfoVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 rounded-full">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-accent-900 font-pretendard">운영 시간</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${currentStatus.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`text-sm font-medium ${currentStatus.isOpen ? 'text-green-600' : 'text-red-600'} font-pretendard`}>
                      {currentStatus.status}
                    </span>
                    {!currentStatus.isOpen && currentStatus.nextOpen && (
                      <span className="text-sm text-accent-500 font-pretendard">• {currentStatus.nextOpen}</span>
                    )}
                    {currentStatus.isOpen && currentStatus.closeTime && (
                      <span className="text-sm text-accent-500 font-pretendard">• {currentStatus.closeTime}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {['월요일', '화요일', '수요일', '목요일', '금요일', '토요일'].map((day, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-accent-100">
                    <span className="font-medium text-accent-700 font-pretendard">{day}</span>
                    <span className="text-primary-600 font-semibold font-pretendard">14:00 - 21:00</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-accent-700 font-pretendard">일요일</span>
                  <span className="text-red-500 font-semibold font-pretendard">정기휴무</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-kids-yellow/20 rounded-lg">
                <p className="text-sm text-accent-700 font-pretendard">
                  💡 프로그램별로 시간이 다를 수 있으니 미리 연락 후 방문해 주세요!
                </p>
              </div>
            </div>

            {/* 연락처 & 찾아오는 길 통합 */}
            <div className="space-y-6">
              {/* 연락처 */}
              <div 
                className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-1000 ease-out delay-200 ${
                  isInfoVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary-100 rounded-full">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-accent-900 font-pretendard">연락처</h3>
                </div>
                
                <div className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <button
                      key={index}
                      onClick={() => handlePhoneClick(phone.number)}
                      className="w-full flex items-center justify-between p-4 bg-accent-50 hover:bg-primary-50 rounded-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-100 group-hover:bg-primary-200 rounded-full transition-colors duration-200">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-accent-900 font-pretendard">{phone.number}</div>
                          <div className="text-sm text-accent-500 font-pretendard">{phone.label}</div>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-accent-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* 찾아오는 길 안내 - 보완 */}
              <div 
                className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-1000 ease-out delay-300 ${
                  isInfoVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold text-accent-900 mb-4 flex items-center gap-2 font-pretendard">
                  <span>🚗</span> 찾아오는 길
                </h3>
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="space-y-3 text-sm text-accent-700 font-pretendard">
                    <div>
                      <p><strong className="text-primary-600">📍 위치:</strong> 영원빌딩 4층</p>
                      <p className="text-accent-500 text-xs mt-1">이동사거리에서 시청 방면으로 약 100m</p>
                    </div>
                    
                    <div>
                      <p><strong className="text-primary-600">🏪 랜드마크:</strong> 아임베이커(빵집) 건물</p>
                      <p className="text-accent-500 text-xs mt-1">1층에 아임베이커가 있는 영원빌딩 4층입니다</p>
                    </div>
                    
                    <div>
                      <p><strong className="text-primary-600">🅿️ 주차:</strong> 건물 뒤편 주차장 이용</p>
                      <p className="text-accent-500 text-xs mt-1">건물 뒤로 들어가는 입구에 주차장이 있습니다</p>
                    </div>
                    
                    <div>
                      <p><strong className="text-primary-600">🅿️ 만차 시:</strong> 주변 공영주차장 이용</p>
                      <p className="text-accent-500 text-xs mt-1">뒷쪽 라인으로 가시면 공영주차장이나 공원 근처 주차 가능</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-kids-blue/20 rounded-lg">
                    <p className="text-xs text-accent-700 font-pretendard">
                      💡 처음 방문하시는 경우 미리 연락주시면 더 자세한 안내를 도와드립니다!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
