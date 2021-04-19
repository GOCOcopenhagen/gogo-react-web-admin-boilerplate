import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomCard } from '../../components/molecules/Card';
import { CustomSection } from '../../components/templates/Wrappers';
import { SegmentTable } from '../../components/molecules/CreateSegmentTable';


function getRandomInt() {
    return Math.floor(Math.random() * 6);
}

const investments = ['Thorsager-1', 'Thorsager-2', 'Fredericiagade', 'Sorø-1', 'Sorø-2']

function getRandomInvestmentList() {
    var i = getRandomInt()
    var list: string[] = []
    while (i !== 5) {
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
        surname: "Surname" + Math.round(i / 10),
        isMarried: i % 2 ? true : false,
        birthDate: new Date(1987, 1, 1).toISOString(),
        gorups: getRandomInvestmentList().toString()
    };
    bigData.push(d);
}

export const SegmentingPage: React.FC = () => {

    const [segments, setSegments] = React.useState<{ name: string, size: number }[]>([])

    const createSegment = (name: string, size: number) => {
        setSegments((old) => [...old, ({ name: name, size: size })])
    }

    return (
        <BodyWithTopBar>
            <CustomSection container>
                <CustomCard>
                    <h3>Your segments</h3>
                    {segments.map(({ name, size }) => (
                        <div>
                            <p>Name: {name} size: {size}</p>
                        </div>
                    ))}
                </CustomCard>
                <CustomCard style={{ flexGrow: 3 }}>
                    <SegmentTable data={bigData} segmentAction={createSegment} />
                </CustomCard>
            </CustomSection>

        </BodyWithTopBar>
    )
}
