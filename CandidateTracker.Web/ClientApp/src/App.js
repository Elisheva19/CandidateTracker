import React, {Component} from 'react';
import { Route } from 'react-router';
import { CandidatesContextComponent } from './CandidatesContext';
import Layout from './Layout';
import Home from './Pages/Home';
import PendingCandidates from './Pages/PendingCandidates';
import AddCandidate from './Pages/AddCadidate';
import ViewDetails from './Components/ViewDetails';
import ConfirmedCandidates from './Pages/ConfirmedCandidates';
import RefusedCandidates from './Pages/RefusedCandidates';




export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <CandidatesContextComponent>
      <Layout>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/confirmedcandidates/:typecandidate' component={ConfirmedCandidates}/> */}
        <Route exact path='/confirmedcandidates' component={ConfirmedCandidates}/>
        <Route exact path= '/pendingcandidates' component={PendingCandidates}/>
        <Route exact path= '/addcandidate' component={AddCandidate}/>
        <Route exact path='/viewdetails/:id' component={ViewDetails}/>
        <Route exact path='/refusedcandidates' component={RefusedCandidates}/>
      </Layout>
      </CandidatesContextComponent>
    );
  }
}




