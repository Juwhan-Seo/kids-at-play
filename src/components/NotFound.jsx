import { Link } from 'react-router-dom';
import Seo from './Seo';

const NotFound = () => {
  return (
    <>
      <Seo 
        title="페이지를 찾을 수 없습니다"
        description="요청하신 페이지를 찾을 수 없습니다. Kids At Play 홈페이지에서 다른 페이지를 확인해보세요."
      />

      {/* Header Spacing */}
      <div className="pt-16"></div>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-[#9EE0D6] rounded-full mb-6">
              <svg className="w-16 h-16 text-[#56BBAA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.22 0-4.239-.895-5.708-2.343M15.01 6.5L19 3m0 0l2.5 2.5M19 3l2.5-2.5M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" />
              </svg>
            </div>
            
            {/* 404 Text */}
            <h1 className="text-6xl sm:text-7xl font-bold text-[#56BBAA] mb-4">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              요청하신 페이지가 존재하지 않거나 <br />
              이동되었을 수 있습니다.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 w-full bg-[#9EE0D6] hover:bg-[#56BBAA] text-gray-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              홈으로 돌아가기
            </Link>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/about"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#9EE0D6] text-[#56BBAA] hover:bg-[#9EE0D6] hover:text-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                소개 보기
              </Link>
              <Link
                to="/program"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#9EE0D6] text-[#56BBAA] hover:bg-[#9EE0D6] hover:text-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                프로그램 보기
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              도움이 필요하시면 언제든 연락해 주세요!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:054-275-0576"
                className="inline-flex items-center justify-center gap-2 text-[#56BBAA] hover:text-[#9EE0D6] font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                전화 문의
              </a>
              <a
                href="https://www.instagram.com/kids_at_play_pohang/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[#56BBAA] hover:text-[#9EE0D6] font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
