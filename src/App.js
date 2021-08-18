import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Menu, PageBody } from './AppStyled'
import HomeScreen from './pages/HomeScreen';
import MenuItem from './components/MenuItem'
import ReactTooltip from 'react-tooltip';

export default () => {

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/home.png" link="/" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                </PageBody>
                <ReactTooltip id="tip" place="top" effect="solid" />
            </Container>
        </BrowserRouter>
    );
}