import React from 'react';
import { Route, Switch } from 'react-router';

import LayoutContainer from './layouts/default/layoutContainer';
import HomeContainer from './pages/home/homeContainer';
import DummyContainer from './pages/dummy/dummyContainer';
import NotFoundContainer from './pages/notFound/notFoundContainer';

// stylesheets
import './assets/styles.scss';
import './assets/fonts.scss';

function AppContainer() {
    return (
        <Switch>
            <Route path="/" exact={true} strict={true} render={() => <LayoutContainer><HomeContainer /></LayoutContainer>} />

            <Route path="/dummy/" exact={true} strict={true} render={() => <LayoutContainer><DummyContainer /></LayoutContainer>} />

            <Route render={() => <NotFoundContainer />} />
        </Switch>
    );
}

export {
    AppContainer as default,
};
