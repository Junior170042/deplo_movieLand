import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/carousel.css';
import { MovieCard } from './movieCard';
import { Movie } from '../types';

export default function MovieCarousel({ movies }: { movies: Movie[] }) {

    return (
        <div className="movie-carousel-container">
            <Swiper
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                effect="coverflow"
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                speed={800}
                grabCursor={true}
                className="movie-swiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        {({ isActive }) => (
                            <MovieCard movie={movie} isActive={isActive} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
