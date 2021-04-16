import * as React from 'react'
import {FixedLoading} from '../atoms/FixedLoading'

export const Loading: React.FC = () => {
    const [dots, setDots] = React.useState(0)

    React.useEffect(()=>{setInterval(()=>setDots(dots+1), 1000)})

    return (
        <FixedLoading>
            <p>Loading {dots}</p>
        </FixedLoading>
    )
}
