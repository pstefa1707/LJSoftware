import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { Panel } from '../index'

export default function Sequences({ state, emit }) {

    var sequences = state.data === null ? [] : state.data.current_sequence
    var current_executing = state.data === null ? null : state.data.sequence_executing
    if (sequences == undefined) {
        sequences = []
    }

    return (
        <Panel title="Sequences">
            <div style={{ maxHeight: 200, overflow: 'auto' }}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Command</TableCell>
                            <TableCell align="right">LabJack</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {current_executing &&
                            <TableRow style={{ background: 'linear-gradient(45deg, #70D478 30%, #94F690 90%)' }}>
                                <TableCell component="th" scope="row">{current_executing.header}</TableCell>
                                <TableCell align="right">{current_executing.data.name && current_executing.data.name}</TableCell>
                                <TableCell align="right">{current_executing.data.name ? current_executing.data.pin : current_executing.data}</TableCell>
                            </TableRow>}
                        {sequences.map((com) => (
                            <TableRow>
                                <TableCell component="th" scope="row">{com.header}</TableCell>
                                <TableCell align="right">{com.data.name === undefined ? "" : com.data.name}</TableCell>
                                <TableCell align="right">{com.data.name === undefined ? com.data : com.data.pin}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Panel>
    )
}
