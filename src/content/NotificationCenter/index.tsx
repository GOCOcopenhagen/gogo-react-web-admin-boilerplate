import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomCard } from '../../components/molecules/Card';
import { DynamicDataTable, TableData } from '../../components/organisms/DynamicDataTable';
import { CustomSection, VerticalFlexDiv } from '../../components/templates/Wrappers';

const tableData: TableData = {
    head: ['Company', 'Contact', 'Country', 'Contract'],
    bodyRows: [
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],
        ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'], ['GOCO', 'Anton Tobias Jensen', 'Denmark', 'Employee'],

    ]
}
export const NotificationCenterPage: React.FC = () => {

    return (
        <BodyWithTopBar>
            <CustomSection container>
                <VerticalFlexDiv style={{ flexGrow: 1 }}>
                    <CustomCard>
                        <h3>Create new notification</h3>
                    </CustomCard>
                </VerticalFlexDiv>
                <DynamicDataTable title="Notifications" style={{ flexGrow: 1 }} tableData={tableData} />
            </CustomSection>

        </BodyWithTopBar>
    )
}
