'use client'

interface Metric {
  value: string
  label: string
}

interface ImpactMetricsProps {
  metrics: Metric[]
}

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <div className="my-12 grid grid-cols-2 gap-8">
      {metrics.map((metric, index) => (
        <div key={index} className="space-y-2">
          <div className="text-4xl font-bold text-black dark:text-white">
            {metric.value}
          </div>
          <div className="text-base text-black dark:text-zinc-300">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  )
}
