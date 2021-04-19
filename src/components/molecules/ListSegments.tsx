import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react'
import SendIcon from '@material-ui/icons/Send';
import { Segment } from '../../globals/Types';



type ListSegmentsProps = {
  segments: Segment[],
}

export const ListSegments: React.FC<ListSegmentsProps> = ({ segments }) => {



  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align='right'>Size</TableCell>
          <TableCell align='right'>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {segments.map(({ name, size }) => (
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell align='right'>{size}</TableCell>
            <TableCell align='right'>
              <IconButton>
                <SendIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}