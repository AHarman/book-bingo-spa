import { useReducer } from 'react';

type SortOrder = 'asc' | 'desc';

export interface SortState<T> {
    element: keyof(T);
    direction: SortOrder;
}

interface SortableProps<T> {
    items: T[];
    initialSort: SortState<T>;
    children: (items: T[], sort: SortState<T>, sortBy: (key: keyof(T)) => void) => JSX.Element;
}

function sortByProperty<T>(property: keyof(T)) {
    return (a: T, b: T): number => {
        if (a[property] > b[property])
            return 1;
        else if(b[property] < a[property])
            return -1;
        return 0;
    };
}

export function Sortable<T>(props: SortableProps<T>): JSX.Element {
    function sortReducer(state: SortState<T>, action: keyof(T)): SortState<T> {
        if (action === state.element)
            return { ...state, direction: state.direction === 'asc' ? 'desc' : 'asc' };

        return { ...state, element: action };
    }

    const [state, dispatch] = useReducer(sortReducer, props.initialSort);

    const sortedItems = props.items.sort(sortByProperty(state.element));
    if (state.direction === 'desc') {
        sortedItems.reverse();
    }
    return props.children(sortedItems, state, dispatch);
}