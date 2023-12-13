import React from 'react'
import { sortable } from 'react-sortable'

const SortableItem = (props) => {
    return (
        <li {...props}>
            {props.children}
        </li>
    )
}

export default sortable(SortableItem)