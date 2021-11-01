import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {Header,Auth,Registration,SideBar,GenresCategories,SearchMovies,PopularMovies,GenresMovies,MovieDetail,ShowFavorite} from "./../Pages"
const ApiRouter = (credentials) => {

   if (credentials) {
        return (
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <div className={"row justify-content-around mt-3"}>
                    <div className="col-3">
                        <SideBar credentials={credentials}/>
                    </div>
                    <div className="col-9">
                        <Route path="/movie_detail/:id" exact render={MovieDetail}/>
                        <Route path='/random_movie/:id' exact render={MovieDetail}/>
                        <Route path='/genres' exact render={GenresCategories}/>
                        <Route path='/genre/:page/:id' exact render={GenresMovies}/>
                        <Route path='/search/:page/:id' exact render={SearchMovies}/>
                        <Route path='/popular/:page' exact render={PopularMovies}/>
                        <Route path='/favorite' exact render={ShowFavorite}/>
                        <Redirect to="/popular/1"/>
                    </div>
                </div>
                </div>
            </BrowserRouter>
        )
    } else {
        //else restricted list of routes
        return (
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <div className={"row justify-content-around mt-3"}>
                    <div className="col-3 left-bar">
                        <SideBar credentials={credentials}/>
                    </div>
                    <div className="col-9 right-bar">
                        <Switch>
                            <Route path='/popular/:page' exact render={PopularMovies}/>
                            <Route path='/favorite' exact render={ShowFavorite}/>
                            <Route path="/movie_detail/:id" exact render={MovieDetail}/>
                            <Route path='/random_movie/:id' exact render={MovieDetail}/>
                            <Route path='/genres' exact render={GenresCategories}/>
                            <Route path='/genre/:page/:id' exact render={GenresMovies}/>
                            <Route path='/search/:page/:id' exact render={SearchMovies}/>
                            <Route path='/authentication' exact render={Auth}/>
                            <Route path="/registration" exact render={Registration}/>
                            <Redirect to="/popular/1"/>
                        </Switch>
                    </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default ApiRouter;
/*
<Route path='/genres' exact render={DisplayGenresCategories}/>


                            <Redirect to="/popular/1"/>

                            <Route path='/random_movie/:id' exact render={MovieById}/>
                        <Route path='/favorite/:page' exact render={FavoriteItemsList}/>
                        <Route path="/movie_detail/:id" exact render={getMovieById}/>


                                               <Route path='/genre/:page/:id' exact render={GenresItemsList}/>
                            <Route path='/popular/:page' exact render={PopularItemList}/>
                            <Route path='/search/:page/:id' exact render={SearchItemList}/>

                                                    <Route path='/genres' exact render={DisplayGenresCategories}/>

                        <Route path='/genre/:page/:id' exact render={GenresItemsList}/>
                        <Route path='/popular/:page' exact render={PopularItemList}/>
                        <Route path='/search/:page/:id' exact render={SearchItemList}/>

*/
