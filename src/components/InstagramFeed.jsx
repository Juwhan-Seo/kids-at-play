// TODO: posts 배열의 3개 URL은 클라이언트가 보내주는 퍼가기 링크로 교체
//       자동 피드가 필요하면 LightWidget(프로 계정) 또는 Workers 프록시로 확장 예정

import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const InstagramFeed = () => {
  const posts = [
    "https://www.instagram.com/reel/DHTGjekS_I6/embed",
    "https://www.instagram.com/reel/DJi_SIpSuSY/embed", 
    "https://www.instagram.com/reel/DJYf2zcSHdK/embed"
  ];

  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [setPostRef, visiblePosts] = useStaggeredAnimation(posts.length, 200);

  return (
    <section className="py-16 sm:py-20 bg-accent-50">
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
            Instagram에서 만나는 생생한 활동 모습
          </h2>
          <p className="text-base sm:text-lg text-accent-600 max-w-2xl mx-auto font-pretendard">
            Kids At Play의 즐거운 순간들을 인스타그램에서 확인해보세요!
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-8">
          {posts.map((postUrl, index) => (
            <div 
              key={index} 
              ref={(el) => setPostRef(index, el)}
              className={`group relative transform transition-all duration-800 ease-out ${
                visiblePosts[index]
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-12 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl shadow-lg overflow-hidden bg-white border border-accent-200 hover:shadow-xl transition-shadow duration-200">
                {/* 실제 iframe */}
                <iframe
                  src={postUrl}
                  className="w-full h-80"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={`Instagram 게시물 ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/kids_at_play_pohang/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-kids-purple via-kids-pink to-secondary-500 hover:from-kids-purple/90 hover:via-kids-pink/90 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg font-pretendard"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
            </svg>
            <span>Instagram 팔로우하기</span>
          </a>
          
          <p className="mt-3 text-accent-500 text-sm font-pretendard">
            <span className="font-semibold text-primary-600">@kids_at_play_pohang</span>에서 더 많은 활동 사진을 확인하세요!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
