import { Activity, Sparkles, TrendingUp } from "lucide-react";
import { RevenueChartBlock } from "./blocks/revenue-chart-block";
import { StatsGrid } from "./blocks/stats-grid";
import { TeamGroups } from "./blocks/team-groups";
import { UsersTableBlock } from "./blocks/users-table-block";
import { EngagementChartsBlock } from "./blocks/engagement-charts-block";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function DashboardPage() {
  return (
    <div className="sales-ui-scope space-y-6">
      <Card className="nuxem-card-anim relative overflow-hidden border-[var(--theme-accent-soft)] bg-gradient-to-br from-[var(--theme-accent-bg)] via-white to-white p-6 dark:from-[var(--theme-accent-bg-dark)] dark:via-zinc-900 dark:to-zinc-900">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--theme-accent-ring)] blur-3xl" />
        <div className="absolute -bottom-14 left-1/3 h-32 w-32 rounded-full bg-[var(--theme-accent-soft)] blur-3xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-[var(--theme-accent-soft)] bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--theme-accent-deep)] dark:bg-zinc-900/70 dark:text-[var(--theme-accent-ink)]">
              <Sparkles size={12} />
              Sales control center
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Revenue momentum is strong this week
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
              Monitor conversion, team execution, and regional growth from one dynamic surface.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="primary" className="h-10 px-4">
              <TrendingUp size={15} className="mr-1.5" />
              View growth report
            </Button>
            <Button className="h-10 px-4">
              <Activity size={15} className="mr-1.5" />
              Open live feed
            </Button>
          </div>
        </div>
      </Card>
      <TeamGroups />
      <StatsGrid />
      <RevenueChartBlock />
      <EngagementChartsBlock />
      <UsersTableBlock />
    </div>
  );
}
