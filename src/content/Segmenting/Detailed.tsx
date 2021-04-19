import { Breadcrumbs, Button, Link, Typography } from '@material-ui/core';
import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection } from '../../components/templates/Wrappers';
import { Segment } from '../../globals/Types';


const segment: Segment = {
    name: "Investors Fredericiagade",
    size: 1000
}

export const DetailedSegmentingPage: React.FC = () => {
    return (
        <BodyWithTopBar>
            <CustomSection container column style={{marginTop: 10}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Link color="inherit" href="/segments">Segments</Link>
                    <Typography color="textPrimary">{segment.name}</Typography>
                </Breadcrumbs>
                <h1>{segment.name}</h1>
            </CustomSection>
        </BodyWithTopBar>
    )
}
