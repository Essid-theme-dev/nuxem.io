"use client";

import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { stats } from "./dashboard-data";
import { Card } from "../ui/card";
import { CountUpValue, parseCountUpParts } from "../ui/count-up-value";

export function StatsGrid() {
  const icons = [DollarSign, Users, ShoppingCart, TrendingUp];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = icons[index] ?? TrendingUp;
        return (
          <Card key={stat.label} className="nuxem-chart-rise nuxem-kpi-card border-[var(--theme-accent-soft)]/40 p-5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--theme-accent-bg)] text-[var(--theme-accent-deep)] dark:bg-[var(--theme-accent-bg-dark)] dark:text-[var(--theme-accent-ink)]">
                <Icon size={16} />
              </span>
            </div>
            <AnimatedStatValue className="nuxem-kpi-value mt-3 text-3xl font-semibold tracking-tight" value={stat.value} />
            <p className="nuxem-pulse-ring mt-2 inline-flex rounded-full px-2.5 py-0.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {stat.change} this month
            </p>
          </Card>
        );
      })}
    </section>
  );
}

function AnimatedStatValue({ value, className }: { value: string; className: string }) {
  const parsed = parseCountUpParts(value);
  return (
    <CountUpValue
      value={parsed.value}
      prefix={parsed.prefix}
      suffix={parsed.suffix}
      decimals={parsed.decimals}
      durationMs={900}
      className={className}
    />
  );
}
