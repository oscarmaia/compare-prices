import { useState, useMemo } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, { ...newItem, id: crypto.randomUUID() }]);
  };

  const handleRemoveItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center">
      <main className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <header className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 uppercase tracking-wide">
            Price Compare
          </h1>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-1">
            Find the best value for your money
          </p>
        </header>

        <div className="p-6 space-y-8">
          <section>
            <ItemForm onAdd={handleAddItem} />
          </section>

          <section>
            {items.length > 0 ? (
              <ItemList items={items} onRemove={handleRemoveItem} />
            ) : (
              <div className="text-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400">
                  Add items above to start comparing prices.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
