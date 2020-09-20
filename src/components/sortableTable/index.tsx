import React from 'react';
import { Sortable, SortState } from '../sortable';
import { Column, Row, Table, TableProps } from '../table';

interface SortableTableProps<T> extends TableProps<T> {
    initialSort: SortState<Row<T>>;
}

export function SortableTable<T>(props: SortableTableProps<T>): JSX.Element {

    return <Sortable initialSort={props.initialSort} items={props.rows}>
        {
            (items: Row<T>[], sort: SortState<Row<T>>): JSX.Element => (
                <Table
                    rows={items}
                    columns={
                        props.columns.map(col => ({
                            key: col.key,
                            header: <SortableColumn col={col} sort={sort}/>
                        }))
                    }/>
            )
        }
    </Sortable>;
}

function SortableColumn<T>(props: { col: Column<T>; sort: SortState<Row<T>> }): JSX.Element {
    let sortIndicator = null;

    if (props.sort.element === props.col.key) {
        sortIndicator = <span className='sortIndicator'>{props.sort.direction === 'asc' ? '▲' : '▼'}</span>;
    }

    // className={props.isSortOrder ? 'isSortOrder' : undefined}>
    return (
        <div>
            {props.col.header}
            {sortIndicator}
        </div>
    );
}