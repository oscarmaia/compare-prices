import { useState } from 'react';

const UNITS = [
    { value: 'ml', label: 'Milliliters (ml)' },
    { value: 'l', label: 'Liters (L)' },
    { value: 'mg', label: 'Milligrams (mg)' },
    { value: 'g', label: 'Grams (g)' },
    { value: 'kg', label: 'Kilograms (kg)' },
    { value: 'unit', label: 'Pieces (unit)' },
];

export default function ItemForm({ onAdd }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('ml');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!price || !quantity) return;

        onAdd({
            name: name || `Item ${Math.floor(Math.random() * 1000)}`,
            price: parseFloat(price),
            quantity: parseFloat(quantity),
            unit
        });

        setName('');
        setPrice('');
        setQuantity('');
        // Keep unit the same for convenience
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Item Name (Optional)</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-slate-100"
                    placeholder="e.g. Brand A Milk"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label htmlFor="price" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Price ($)</label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        min="0"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-slate-100"
                        placeholder="0.00"
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Amount / Vol</label>
                    <input
                        id="quantity"
                        type="number"
                        step="0.01"
                        min="0"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-slate-100"
                        placeholder="e.g. 500"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="unit" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Unit of Measurement</label>
                <select
                    id="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-slate-100"
                >
                    {UNITS.map(u => (
                        <option key={u.value} value={u.value}>{u.label}</option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm active:scale-[0.98]"
            >
                Add Item
            </button>
        </form>
    );
}
