import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../movie/movie-card/MovieCard';
import './Main.css';
import { fetchPopularMovies } from '../../redux/moviesSlice';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    const searchResults = useSelector((state) => state.searchResults);
    const popularMovies = useSelector((state) => state.popularMovies);

    console.log(popularMovies);

    return (
        <div id="main">
            <div id="content">
                {searchResults.entities && searchResults.entities.length > 0 ? (
                    <div className="box">
                        <div className="head">
                            <h2>SEARCH RESULTS</h2>
                            <p className="text-right"><a href="#">See all</a></p>
                        </div>
                        <div className='movie-cards'>
                            {searchResults.entities.map((movie) => (
                                <MovieCard key={movie.id} movie={movie.node.entity} />
                            ))}
                        </div>
                    </div>

                ) : (
                    <div key="popular">
                        {popularMovies?.entities?.movies?.edges?.length > 0 ? (
                            <div className="box">
                                <div className="head">
                                    <h2>POPULAR MOVIES</h2>
                                    <p className="text-right"><a href="#">See all</a></p>
                                </div>
                                <div className='movie-cards'>
                                    {popularMovies?.entities?.movies?.edges?.map((movie) => (
                                        <MovieCard key={movie.id} movie={movie.node} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div>NO MOVIES FOUND</div>
                        )}

                        {popularMovies?.entities?.tv?.edges?.length > 0 ? (
                            <div className="box">
                                <div className="head">
                                    <h2>POPULAR TV SHOWS</h2>
                                    <p className="text-right"><a href="#">See all</a></p>
                                </div>

                                <div className='movie-cards'>
                                    {popularMovies?.entities?.tv?.edges?.map((movie) => (
                                        <MovieCard key={movie.id} movie={movie.node} />
                                    ))}
                                </div>
                            </div>
                        ) : (<div>NO TV SHOWS</div>)}
                    </div>
                )}
            </div>
            <div id='extras'>
                <div id="news">
                    <div className="head">
                        <h3>NEWS</h3>
                        <p className="text-right"><a href="#">See all</a></p>
                    </div>
                    <div className="content">
                        <p className="date">12.04.09</p>
                        <h4>Disney's A Christmas Carol</h4>
                        <p>&quot;Disney's A Christmas Carol,&quot; a multi-sensory thrill ride re-envisioned by Academy Award&reg;-winning filmmaker Robert Zemeckis, captures... </p>
                        <a href="#">Read more</a> </div>
                    <div className="content">
                        <p className="date">11.04.09</p>
                        <h4>Where the Wild Things Are</h4>
                        <p>Innovative director Spike Jonze collaborates with celebrated author Maurice Sendak to bring one of the most beloved books of all time to the big screen in &quot;Where the Wild Things Are,&quot;...</p>
                        <a href="#">Read more</a> </div>
                    <div className="content">
                        <p className="date">10.04.09</p>
                        <h4>The Box</h4>
                        <p>Norma and Arthur Lewis are a suburban couple with a young child who receive an anonymous gift bearing fatal and irrevocable consequences.</p>
                        <a href="#">Read more</a> </div>
                </div>
                <div id="coming">
                    <div className="head">
                        <h3>COMING SOON<strong>!</strong></h3>
                        <p className="text-right"><a href="#">See all</a></p>
                    </div>
                    <div className="content">
                        <h4>The Princess and the Frog </h4>
                        <a href="#"><img src="css/images/coming-soon1.jpg" alt="" /></a>
                        <p>Walt Disney Animation Studios presents the musical &quot;The Princess and the Frog,&quot; an animated comedy set in the great city of New Orleans...</p>
                        <a href="#">Read more</a> </div>
                    <div className="cl">&nbsp;</div>
                    <div className="content">
                        <h4>The Princess and the Frog </h4>
                        <a href="#"><img src="css/images/coming-soon2.jpg" alt="" /></a>
                        <p>Walt Disney Animation Studios presents the musical &quot;The Princess and the Frog,&quot; an animated comedy set in the great city of New Orleans...</p>
                        <a href="#">Read more</a> </div>
                </div>
            </div>
            <div className="cl">&nbsp;</div>
        </div>
    );
};

export default Main;