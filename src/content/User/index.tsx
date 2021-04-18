import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomCard } from '../../components/molecules/Card';
import { CustomSection } from '../../components/molecules/Section';
import { DynamicDataTable } from '../../components/organisms/DynamicDataTable';


export const UserPage: React.FC = () => {

    return (
        <BodyWithTopBar>
            <CustomSection container>
                <CustomCard style={{ flexGrow: 1}}>
                    <h3>ANOTHER ONESSSS</h3>
                </CustomCard>
                <DynamicDataTable style={{ flexGrow: 5 }}/>
            </CustomSection>

        </BodyWithTopBar>
    )
}
