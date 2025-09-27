import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  gradient?: "primary" | "secondary" | "accent";
}

export function StatsCard({ title, value, icon: Icon, trend, gradient = "primary" }: StatsCardProps) {
  const gradientClass = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    accent: "bg-gradient-accent"
  }[gradient];

  const shadowClass = {
    primary: "shadow-neon",
    secondary: "shadow-purple",
    accent: "shadow-green"
  }[gradient];

  return (
    <Card className={`border-border bg-card/50 backdrop-blur-sm hover:${shadowClass} transition-all duration-300 animate-scale-in group`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${gradientClass} animate-glow-pulse group-hover:animate-bounce-gentle`}>
          <Icon className="h-4 w-4 text-primary-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {trend && (
          <p className={`text-xs ${trend.value > 0 ? 'text-accent' : 'text-destructive'} animate-fade-in`}>
            {trend.value > 0 ? '+' : ''}{trend.value}% {trend.label}
          </p>
        )}
      </CardContent>
    </Card>
  );
}