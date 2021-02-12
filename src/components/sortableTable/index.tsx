import { Sortable, SortState } from '../sortable';
import { Column, Row, Table, TableProps } from '../table';

export interface SortableColumn<T> extends Column<T> {
    isSortable: boolean;
}
interface SortableTableProps<T> extends TableProps<T> {
    initialSort: SortState<T>;
    columns: SortableColumn<T>[];
}

export function SortableTable<T>(props: SortableTableProps<T>): JSX.Element {

    return <Sortable initialSort={props.initialSort} items={props.rows}>
        {
            (items: Row<T>[], sort: SortState<Row<T>>, updateSort: (key: keyof T) => void): JSX.Element => (
                <Table
                    rows={items}
                    columns={
                        props.columns.map(col => ({
                            ...col,
                            header: <SortableColumnHeader col={col} sort={sort} updateSort={updateSort}/>
                        }))
                    }/>
            )
        }
    </Sortable>;
}

interface SortableColumnHeaderProps<T> {
    col: SortableColumn<T>;
    sort: SortState<Row<T>>;
    updateSort: (key: any) => void;
}

function SortableColumnHeader<T>(props: SortableColumnHeaderProps<T>): JSX.Element {
    const isSortOrder = props.sort.element === props.col.key
    const sortIndicator = isSortOrder ?
        <span className='sortIndicator'>{props.sort.direction === 'asc' ? '▲' : '▼'}</span> :
        null;

    if (props.col.isSortable) {
        return (
            <button
                className={ isSortOrder ? '' : 'not-sort-order' }
                onClick={(): void => props.updateSort(props.col.key)}>
                {props.col.header}
                {sortIndicator}
            </button>
        );
    }

    return <div>{props.col.header}</div>;
}