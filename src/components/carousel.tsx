import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/carousel.css';
import { MovieCard } from './movieCard';
import { Movie } from '../types';

export default function MovieCarousel({ movies }: { movies: Movie[] }) {

    return (
        <div className="movie-carousel-container">
            <Swiper
                modules={[Autoplay, EffectCube, Navigation, Pagination]}
                effect="cube"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                loop
                speed={1000}
                grabCursor
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
