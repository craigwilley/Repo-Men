const stats = [
    { id: 1, name: 'Minutes of learning in 2023', value: '5241' },
    { id: 2, name: 'Degrees', value: '2' },
    { id: 3, name: 'Kids', value: '3' },
]

export function Metrics() {
    return (
        <div className="bg-white dark:bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600 dark:text-zinc-200">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-zinc-200 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
