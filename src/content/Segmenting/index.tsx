import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomCard } from '../../components/molecules/Card';
import { CustomSection } from '../../components/templates/Wrappers';
import { CreateSegmentTable } from '../../components/molecules/CreateSegmentTable';
import { Segment } from '../../globals/Types';
import { ListSegments } from '../../components/molecules/ListSegments';


function getRandomInt() {
    return Math.floor(Math.random() * 20);
}

const investments = ['Thorsager-1', 'Thorsager-2', 'Fredericiagade', 'Sorø-1', 'Sorø-2']

function getRandomInvestmentList() {
    var i = getRandomInt()
    var list: string[] = []
    while (i <5) {
        const investment = investments[i]
        if (!list.includes(investment)) list.push(investment)
        i = getRandomInt()
    }
    list.sort((a, b) => ('' + a).localeCompare(b))
    return list
}

const bigData: object[] = [];
for (let i = 0; i < 1000; i++) {
    const d = {
        id: i + 1,
        name: "Name" + i,
        status: getRandomInt()<10?'Confirmed':'Pending',
        gorups: getRandomInvestmentList().toString()
    };
    bigData.push(d);
}

export const SegmentingPage: React.FC = () => {

    const [segments, setSegments] = React.useState<Segment[]>([{name: 'First segment', size:220}])

    const createSegment = (name: string, size: number) => {
        setSegments((old) => [...old, ({ name: name, size: size })])
    }

    return (
        <BodyWithTopBar>
            <CustomSection container>
                <CustomCard style={{flexGrow: 3, width: 300}}>
                    <h3>Your segments</h3>
                    <ListSegments segments={segments}/>
                </CustomCard>
                <CustomCard style={{ flexGrow: 3 }}>
                    <CreateSegmentTable data={bigData} segmentAction={createSegment} />
                </CustomCard>
            </CustomSection>

        </BodyWithTopBar>
    )
}
