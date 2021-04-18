import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContext } from '../globals/loadingContext'

import { IndexPage } from './Index'
import { UserPage } from './User'
import { Loading } from '../components/molecules/Loading'
import { routes } from './RootRoutes'



export default function RootRouter() {
    const [loading, constollLoading] = React.useState<Boolean>(false);

    const setLoading = (state: boolean) => {
        constollLoading(state)
        return 0;
    }

    return (
        <AppContext.Provider value={setLoading}>
            {loading && <Loading />}
            <Router>
                <Switch>
                    <Route exact path={routes[0].path}>
                        <IndexPage />
                    </Route>
                    <Route exact path={routes[1].path}>
                        <UserPage/>
                    </Route>
                </Switch>
            </Router>

        </AppContext.Provider>
    )
}
