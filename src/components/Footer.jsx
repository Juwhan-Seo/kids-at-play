const Footer = () => {
  const phoneNumbers = [
    '054-275-0576',
    '010-4802-3987',
    '010-9898-4339'
  ];

  return (
    <footer className="bg-accent-100 py-12">
      <div className="container mx-auto">
        <div className="text-center">
          {/* 로고 */}
          <div className="mb-8">
            <img 
              src="/kids_at_play_logo.svg" 
              alt="Kids At Play 로고" 
              className="h-10 xs:h-12 w-auto mx-auto"
              loading="lazy"
            />
          </div>

          {/* 전화번호 */}
          <div className="mb-8">
            <h3 className="text-lg xs:text-xl font-bold text-accent-800 mb-6 font-pretendard">문의 전화</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-accent-200"
                >
                  <div className="p-2 bg-primary-400 hover:bg-primary-600 rounded-full transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="font-bold text-accent-800 hover:text-primary-600 transition-colors duration-200 font-pretendard">
                    {phone}
                  </span>
                  <span className="text-sm text-accent-500 font-pretendard">
                    {index === 0 ? '센터 문의' : index === 1 ? '직통 연락' : '추가 문의'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* 인스타그램 CTA */}
          <div className="mb-8">
            <a
              href="https://www.instagram.com/kids_at_play_pohang/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-kids-purple via-kids-pink to-secondary-500 hover:from-kids-purple/90 hover:via-kids-pink/90 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg font-pretendard"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
              </svg>
              <span>Instagram에서 더 보기</span>
            </a>
            
            <p className="mt-3 text-accent-600 font-pretendard">
              <span className="font-semibold text-primary-600">@kids_at_play_pohang</span>에서 실시간 소식을 확인하세요!
            </p>
          </div>

          {/* 저작권 */}
          <div className="pt-6 border-t border-accent-300">
            <p className="text-accent-600 leading-relaxed font-pretendard">
              © 2024 <span className="font-bold text-primary-600">Kids At Play</span>
              <br />
              포항 유소년 체육센터. All rights reserved.
            </p>
            <p className="text-accent-500 text-sm mt-2 font-pretendard">
              우리 아이들의 건강한 성장을 위한 전문 체육 교육 공간
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
