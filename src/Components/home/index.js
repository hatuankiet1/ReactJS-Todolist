import React, { Component, Fragment } from 'react';
import Menu from './../../Components/list/menu';


export default class home extends Component {
    render() {
        return (
            <Fragment>


                <div class="container">

                    <div class="row">
                        <div class="text-center">
                            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                                <header className="masthead mb-auto">
                                    <Menu />
                                </header>

                                <main role="main" className="inner cover">
                                    <h1 className="cover-heading">Home Page</h1>
                                    <img  src="https://media-cdn.tripadvisor.com/media/photo-s/07/01/11/99/shopping-pizza-iguatemi.jpg"  />
                                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                                    <p className="lead">
                                        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                                    </p>
                                </main>

                                <footer className="mastfoot mt-auto">
                                    <div className="inner">
                                        <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>

                </div>

            </Fragment>
        );
    }
}

