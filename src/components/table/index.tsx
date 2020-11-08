import React, { ReactChild } from 'react';
import { Key } from 'react';

export type Row<T> = { [K in keyof(T)]: any} & { key: Key }

export interface Column<T> {
    key: keyof T & Key;
    header: ReactChild;
    displayTransform?: (data: any) => ReactChild;
}

export interface TableProps<T> {
    rows: Row<T>[];
    columns: Column<T>[];
}

export function Table<T>(props: TableProps<T>): JSX.Element {

    return <table>
        <TableHeader columns={props.columns} />
        <tbody>
            { props.rows.map(row => <TableRow key={row.key} columns={props.columns} row={row}/>) }
        </tbody>
    </table>;
}

function TableHeader<T>(props: { columns: Column<T>[] }): JSX.Element {
    return (
        <thead>
            <tr>
                {props.columns.map(column => <th key={column.key}>{column.header}</th>)}
            </tr>
        </thead>
    );
}

interface TableCellProps<T> {
    column: Column<T>;
    row: Row<T>;
}

function TableCell<T>(props: TableCellProps<T>): JSX.Element {
    const contents = props.column.displayTransform ?
        props.column.displayTransform(props.row[props.column.key]) :
        props.row[props.column.key];

    return <td>{contents}</td>;
}

interface TableRowProps<T> {
    row: Row<T>;
    columns: Column<T>[];
}

function TableRow<T>(props: TableRowProps<T>): JSX.Element {
    return (
        <tr key={props.row.key}>
            { props.columns.map(col => <TableCell key={col.key} column={col} row={props.row}/>) }
        </tr>
    );
}