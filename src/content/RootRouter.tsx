import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContext } from '../globals/loadingContext'

import { IndexPage } from './Index'
import { SegmentingPage } from './Segmenting'
import { Loading } from '../components/molecules/Loading'
import { routes } from './RootRoutes'
import { NotificationCenterPage } from './Users'
import { DetailedSegmentingPage } from './Segmenting/Detailed'
import { SendNotificationPage } from './Segmenting/SendNotification'
import { DetailedNotificationPage } from './Segmenting/DetailedNotification'
import { UserInfo } from './Users/DetailedUser'

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
                        <SegmentingPage/>
                    </Route>
                    <Route exact path={routes[1].path+'/:segment'}>
                        <DetailedSegmentingPage/>
                    </Route>
                    <Route exact path={routes[1].path+'/:segment/new'}>
                        <SendNotificationPage/>
                    </Route>
                    <Route exact path={routes[1].path+'/:segment/:id'}>
                        <DetailedNotificationPage/>
                    </Route>
                    <Route exact path={routes[2].path}>
                        <NotificationCenterPage/>
                    </Route>
                    <Route exact path={routes[2].path+'/:userid'}>
                        <UserInfo/>
                    </Route>
                </Switch>
            </Router>

        </AppContext.Provider>
    )
}
