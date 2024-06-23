import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux_slices/store";
import {genreActions} from "../redux_slices/genreSlice";
import {Link, Outlet} from "react-router-dom";

const GenresPage = () => {


    let dispatch = useAppDispatch();
    const genres = useAppSelector((state) => state.genreSlice.genres);
    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, []);

    // const [
    //     { id: actionId, name: actionName },
    //     { id: adventureId, name: adventureName },
    //     { id: animationId, name: animationName },
    //     { id: comedyId, name: comedyName },
    //     { id: crimeId, name: crimeName },
    //     { id: documentaryId, name: documentaryName },
    //     { id: dramaId, name: dramaName },
    //     { id: familyId, name: familyName },
    //     { id: fantasyId, name: fantasyName },
    //     { id: historyId, name: historyName },
    //     { id: horrorId, name: horrorName },
    //     { id: musicId, name: musicName },
    //     { id: mysteryId, name: mysteryName },
    //     { id: romanceId, name: romanceName },
    //     { id: scienceFictionId, name: scienceFictionName },
    //     { id: tvMovieId, name: tvMovieName },
    //     { id: thrillerId, name: thrillerName },
    //     { id: warId, name: warName },
    //     { id: westernId, name: westernName }
    // ] = genres;


    return (
        <div className={'genresPageWrap'}>
            <div className={'genresListWrap'}>
                <ul>
                    {genres.map(genre => (
                        <li key={genre.id} className={'genresLi'}>
                            <Link to={`/genres/${genre.id}`}>
                                Genre img here: {genre.name}
                            </Link>

                        </li>
                    ))}
                </ul>
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${actionId}`}>*/}
                {/*            Genre icon: {actionName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${adventureId}`}>*/}
                {/*            Genre icon: {adventureName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${animationId}`}>*/}
                {/*            Genre icon: {animationName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${comedyId}`}>*/}
                {/*             Genre icon: {comedyName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${crimeId}`}>*/}
                {/*             Genre icon: {crimeName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${documentaryId}`}>*/}
                {/*            Genre icon: {documentaryName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${dramaId}`}>*/}
                {/*            Genre icon: {dramaName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${familyId}`}>*/}
                {/*             Genre icon: {familyName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${fantasyId}`}>*/}
                {/*             Genre icon: {fantasyName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${historyId}`}>*/}
                {/*            Genre icon: {historyName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${horrorId}`}>*/}
                {/*             Genre icon: {horrorName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${musicId}`}>*/}
                {/*            Genre icon: {musicName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${mysteryId}`}>*/}
                {/*           Genre icon: {mysteryName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${romanceId}`}>*/}
                {/*             Genre icon: {romanceName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${scienceFictionId}`}>*/}
                {/*             Genre icon: {scienceFictionName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${tvMovieId}`}>*/}
                {/*           Genre icon: {tvMovieName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${thrillerId}`}>*/}
                {/*             Genre icon: {thrillerName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${warId}`}>*/}
                {/*             Genre icon: {warName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={`/genres/${westernId}`}>*/}
                {/*             Genre icon: {westernName}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>

            <Outlet/>

        </div>
    );
};

export default GenresPage;