import React from 'react';
import ItemCard from './ItemCard';
import { compareItems } from '../utils/calculations';

export default function ItemList({ items, onRemove }) {
    const evaluatedItems = compareItems(items);

    // Optional: sort items so the cheapest is at the top, or keep them in insertion order.
    // Insertion order is usually less confusing as things don't jump around, but cheapest at top is cool too.
    // Let's keep insertion order and just highlight the cheapest.

    return (
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 pb-4 -mr-2">
            {evaluatedItems.map((item) => (
                <ItemCard
                    key={item.id}
                    item={item}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}
