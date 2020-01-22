import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">

            <aside>
                <div className='asideTopBar'>
                    <div className='asideLogo'>
                        <img
                            src='https://www.financialexpress.com/wp-content/themes/vip/financialexpress/assets/images/fe-logo-with-read-to-lead.svg'/>
                    </div>
                    <div>
                        <img id='profile' alt="Pic"
                             src="https://keenthemes.com/keen/themes/keen/theme/demo2/dist/assets/media/users/300_21.jpg"/>
                    </div>
                </div>
                <div className='main-area'>
                    <ul>
                        <li>Profile</li>
                        <li  data-toggle="collapse"
                             data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Click to Expand
                        </li>
                        <div className="collapse" id="collapseExample">
                            <ul>
                                <li>dgfsdf</li>
                            </ul>
                        </div>
                        <li>Sections</li>
                        <li>NewsLetter</li>
                        <li>About</li>

                    </ul>
                </div>
            </aside>

            <section className="App-header">
                <header>
                    <div className='headerContainer'>
                        <form>
                            <input type='text' name='search' placeholder='search here'/>
                        </form>
                    </div>
                </header>
                <div className='container'>
                    <div className='graphContainer'>
                        <div className="card">
                            <div className="card-body">
                                <iframe className="lazy-loaded" data-lazy-type="iframe"
                                        data-src="https://data.indianexpress.com/iframes/fe-chart-2.html" width="100%"
                                        height="270"
                                        src="https://data.indianexpress.com/iframes/fe-chart-2.html"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <h2> List Intems</h2>
                    <div className='listContainer'>

                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default App;
