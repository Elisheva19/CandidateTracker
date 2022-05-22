import React from 'react';
import {Link} from 'react-router-dom';
import { useCandidateCounts } from './CandidatesContext';
const Layout = (props) => {
    const {pendingCount, confirmedCount, refusedCount}= useCandidateCounts();
        return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">React Blog Site</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-light">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addcandidate' className="nav-link text-light">
                                       Add Candidate
                                    </Link>
                                </li>
                        
                            <li className="nav-item">
                                    <Link to='/pendingcandidates' className="nav-link text-light">
                                        Pending ({pendingCount})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link to= {`/confirmedcandidates/${true}`} className="nav-link text-light">
                                        Confirmed ({confirmedCount})
                                    </Link> */}
                                    <Link to= '/confirmedcandidates' className="nav-link text-light">
                                        Confirmed ({confirmedCount})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to= '/refusedcandidates' className="nav-link text-light">
                                    
                                        Refused ({refusedCount})
                                    </Link>
                                </li>
                                </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{ marginTop: 80 }}>
                {props.children}
            </div>

        </>
    )
}

export default Layout;