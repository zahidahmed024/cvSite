import React, { useState } from 'react';
import SortableItem from './SortableItem';

const SortableList = ({ items: initialItems }) => {
    const [items, setItems] = useState(initialItems);

    const onSortItems = (items) => {
        setItems(items);
    };

    const listItems = items.map((item, i) => (
        <SortableItem
            key={i}
            onSortItems={onSortItems}
            items={items}
            sortId={i}
        >
            {item}
        </SortableItem>
    ));

    return <ul className='sortable-list'>{listItems}</ul>;
};

export default SortableList;