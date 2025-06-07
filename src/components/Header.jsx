import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '시설 소개' },
    { path: '/program', label: '프로그램' },
    { path: '/equipment', label: '교구 현황' },
    { path: '/location', label: '오시는 길' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center">
            <img 
              src="/kids_at_play_logo.svg" 
              alt="Kids At Play 로고" 
              className="h-8 xs:h-10 w-auto"
              loading="lazy"
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative font-pretendard ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-accent-700 hover:text-primary-600'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-accent-700 hover:text-primary-600 hover:bg-accent-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-label="메뉴 열기"
          >
            <span className="sr-only">메인 메뉴</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-accent-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-pretendard ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-accent-700 hover:text-primary-600 hover:bg-accent-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
