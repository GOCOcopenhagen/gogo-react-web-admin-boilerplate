import * as React from 'react';
import { CustomCard } from '../molecules/Card';

type Props = {
    ActivityData: any
}


export const ActivityList: React.FC<Props> = ({ ActivityData }) => {

    console.log(ActivityData)

    return (
        <div >
            {ActivityData.map((item: any, key: number) => (
                <div>
                    <h3 key={key} style={{marginLeft: 0}}>{item.date}</h3>
                    {item.activities.map((subItem: any, subKey: number) => (
                        <CustomCard style={{marginLeft: 0, paddingLeft: 15}} key={subKey}>
                            <h5 style={{ marginBottom: 0}}>{subItem.header}</h5>
                            <p style={{ marginTop: 2, marginRight: 20}}>{subItem.mainText}</p>
                            <p style={{fontSize: 10, marginTop: 2}}>{subItem.specificDate}</p>
                        </CustomCard>
                    ))
                    }
                </div>
            ))}
        </div>
    )
}
