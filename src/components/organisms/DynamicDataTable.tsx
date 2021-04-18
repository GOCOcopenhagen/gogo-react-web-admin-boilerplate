import { IconButton } from '@material-ui/core'
import * as React from 'react'
import { CustomCard } from '../molecules/Card'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import { lightest, normallight, light, normal } from '../../globals/colors';

type DynamicDataTableProps = {
    style?: React.CSSProperties
}

const TH: React.FC = ({ children }) => {
    const [up, setUp] = React.useState(false)
    const handleClick = () => setUp(!up)
    return (
        <th style={{ textAlign: 'left', color: normal }}>{children}
            <IconButton onClick={handleClick}>
                <ArrowDownwardIcon style={{
                    transition: "transform 0.3s",
                    transform: up ? "rotate(0deg)" : "rotate(-180deg)"
                }} />
            </IconButton>
        </th>)
}


type Cell = string | number | string[]

type Row = Cell[]

type TableData = {
    head: string[]
    bodyRows: Row[]
}


const TableDataCell = styled.td<{ odd: boolean, hover: boolean }>`
    padding:0;
    cursor:pointer;
    background-color: ${(props) => (props.hover ? normallight : props.odd ? light : lightest)};

`
const TR: React.FC<{ row: Cell[], index: number }> = ({ row, index }) => {
    const [hover, setHover] = React.useState(false)

    return (
        <tr className="monospace" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {row.map((cell, cellIndex) =>
                <TableDataCell key={cellIndex} odd={index % 2 === 0} hover={hover}>
                    {cell.toString()}
                </TableDataCell>)}
        </tr>)
}


export const DynamicDataTable: React.FC<DynamicDataTableProps> = ({ style }) => {
    const tableData: TableData = {
        head: ['Company', 'Contact', 'Country'],
        bodyRows: [
            ['GOCO', 'Anton Tobias Jensen', 'Denmark'],
            ['GOCO', 'Amanda', 'Portugal']
        ]
    }

    return (
        <CustomCard style={style}>
            <h3>All users</h3>
            <table style={{ width: '100%', borderSpacing: 1, borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        {tableData.head.map((cell, headCellKey) => <TH key={headCellKey}>{cell}</TH>)}
                    </tr>
                </thead>
                <tbody>
                    {tableData.bodyRows.map((bodyRow, index) => <TR row={bodyRow} index={index} key={index} />)}
                </tbody>
            </table>
        </CustomCard>
    )
}
