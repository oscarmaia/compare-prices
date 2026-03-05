import { TRASH_ICON } from './icons';

export default function ItemCard({ item, onRemove }) {
    const {
        id, name, price, quantity, unit,
        unitPrice, baseUnitLabel, isCheapest, diffPercentage
    } = item;

    return (
        <div className={`relative p-4 rounded-xl border transition-all ${isCheapest ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-500/50 shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>

            {/* Removed the absolute positioned BEST VALUE badge */}

            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className={`font-semibold ${isCheapest ? 'text-emerald-900 dark:text-emerald-100' : 'text-slate-800 dark:text-slate-100'}`}>
                            {name}
                        </h3>
                        {isCheapest && (
                            <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Best Value
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        ${price.toFixed(2)} for {quantity}{unit}
                    </p>
                </div>

                <button
                    onClick={() => onRemove(id)}
                    className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                    aria-label="Remove item"
                >
                    {TRASH_ICON}
                </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-end">
                <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">Unit Price</p>
                    <p className={`text-lg font-bold ${isCheapest ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        ${unitPrice.toFixed(2)} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ {baseUnitLabel}</span>
                    </p>
                </div>

                {diffPercentage > 0 && (
                    <div className="text-right">
                        <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-md">
                            +{diffPercentage.toFixed(1)}%
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
