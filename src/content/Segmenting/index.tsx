import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomCard } from '../../components/molecules/Card';
import { CustomSection } from '../../components/templates/Wrappers';
import { CreateSegmentTable } from '../../components/molecules/CreateSegmentTable';
import { Segment } from '../../globals/Types';
import { ListSegments } from '../../components/molecules/ListSegments';
import { getData } from '../../placeholders/data';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';


export const SegmentingPage: React.FC = () => {

    const [segments, setSegments] = React.useState<Segment[]>([{name: 'First segment', size:220}])

    const createSegment = (name: string, size: number) => {
        setSegments((old) => [...old, ({ name: name, size: size })])
    }

    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Typography color="textPrimary">Segments</Typography>
                </Breadcrumbs>
            </CustomSection>
            <CustomSection container>
                <CustomCard style={{flexGrow: 3, width: 300}}>
                    <h3>Quick create notification</h3>
                    <ListSegments segments={segments}/>
                </CustomCard>
                <CustomCard style={{ flexGrow: 3 }}>
                    <CreateSegmentTable data={getData()} segmentAction={createSegment} />
                </CustomCard>
            </CustomSection>

        </BodyWithTopBar>
    )
}
