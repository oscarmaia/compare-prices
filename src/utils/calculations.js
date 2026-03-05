// Normalizes the unit to a base standard (e.g., price per 100ml or 100g or 1 unit)
// We'll normalize to "price per 100 units" for liquids/solids, and "price per 1 unit" for pieces.

export function normalizeItem(item) {
    const { price, quantity, unit } = item;

    let standardQuantity = quantity;
    let baseUnitLabel = 'item';
    let category = 'count';

    // Convert everything to standard base units (Liters, Kilograms, Items)
    // This allows accurate comparison across different input scales
    switch (unit) {
        case 'ml':
            standardQuantity = quantity / 1000;
            baseUnitLabel = 'L';
            category = 'volume';
            break;
        case 'l':
            standardQuantity = quantity;
            baseUnitLabel = 'L';
            category = 'volume';
            break;
        case 'mg':
            standardQuantity = quantity / 1000000;
            baseUnitLabel = 'kg';
            category = 'weight';
            break;
        case 'g':
            standardQuantity = quantity / 1000;
            baseUnitLabel = 'kg';
            category = 'weight';
            break;
        case 'kg':
            standardQuantity = quantity;
            baseUnitLabel = 'kg';
            category = 'weight';
            break;
        case 'unit':
        default:
            standardQuantity = quantity;
            baseUnitLabel = 'item';
            category = 'count';
            break;
    }

    // Cost per base unit (e.g., $ per Liter or $ per kg)
    const unitPrice = price / standardQuantity;

    return {
        ...item,
        unitPrice,
        baseUnitLabel,
        category
    };
}

export function compareItems(items) {
    if (!items || items.length === 0) return [];

    const normalized = items.map(normalizeItem);

    return normalized.map(item => {
        // Find peers in the same category (e.g., only compare volume with volume)
        const peers = normalized.filter(i => i.category === item.category);

        // Find the minimum unit price within this item's category
        const minUnitPrice = Math.min(...peers.map(i => i.unitPrice));

        const isCheapest = item.unitPrice === minUnitPrice && peers.length > 1;

        let diffPercentage = 0;
        if (item.unitPrice > minUnitPrice && minUnitPrice > 0) {
            diffPercentage = ((item.unitPrice - minUnitPrice) / minUnitPrice) * 100;
        }

        return {
            ...item,
            isCheapest,
            diffPercentage
        };
    });
}
