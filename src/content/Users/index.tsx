import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection } from '../../components/templates/Wrappers';
import { getData } from '../../placeholders/data';
import { CreateSegmentTable } from '../../components/molecules/CreateSegmentTable';
import { CustomCard } from '../../components/molecules/Card';

export const NotificationCenterPage: React.FC = () => {

    return (
        <BodyWithTopBar>
            <CustomSection container>
                <CustomCard style={{ flexGrow: 1 }}>
                    <CreateSegmentTable data={getData()} segmentAction={() => { }} />
                </CustomCard>

            </CustomSection>
        </BodyWithTopBar>
    )
}
