import { StatsCard } from "@/components/stats-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building2,
  Calendar,
  Trophy,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const recentInterviews = [
  { id: 1, student: "Alice Johnson", company: "TechCorp", date: "Today, 2:00 PM", status: "scheduled" },
  { id: 2, student: "Bob Smith", company: "StartupXYZ", date: "Today, 4:30 PM", status: "in-progress" },
  { id: 3, student: "Carol Davis", company: "BigTech Inc", date: "Tomorrow, 10:00 AM", status: "scheduled" },
  { id: 4, student: "David Brown", company: "Innovation Labs", date: "Tomorrow, 2:15 PM", status: "completed" },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
            Placement Dashboard
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Welcome back! Here's your placement overview.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="animate-glow-pulse">
            Academic Year 2024-25
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Students"
          value="1,247"
          icon={Users}
          trend={{ value: 12, label: "from last month" }}
          gradient="primary"
        />
        <StatsCard
          title="Active Recruiters"
          value="89"
          icon={Building2}
          trend={{ value: 8, label: "new this month" }}
          gradient="secondary"
        />
        <StatsCard
          title="Scheduled Interviews"
          value="156"
          icon={Calendar}
          trend={{ value: 24, label: "this week" }}
          gradient="accent"
        />
        <StatsCard
          title="Placements"
          value="334"
          icon={Trophy}
          trend={{ value: 18, label: "success rate" }}
          gradient="primary"
        />
      </div>

      {/* Recent Activity & Progress */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Interviews */}
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary animate-spin-slow" />
              Recent Interviews
            </CardTitle>
            <CardDescription>Upcoming and completed interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full animate-glow-pulse ${
                      interview.status === 'scheduled' ? 'bg-primary' :
                      interview.status === 'in-progress' ? 'bg-secondary' :
                      'bg-accent'
                    }`} />
                    <div>
                      <p className="font-medium">{interview.student}</p>
                      <p className="text-sm text-muted-foreground">{interview.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{interview.date}</p>
                    <Badge variant={
                      interview.status === 'scheduled' ? 'default' :
                      interview.status === 'in-progress' ? 'secondary' :
                      'outline'
                    } className="text-xs">
                      {interview.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Placement Progress */}
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary animate-bounce-gentle" />
              Placement Progress
            </CardTitle>
            <CardDescription>Current year targets and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Placements</span>
                  <span className="font-medium">334/500 (67%)</span>
                </div>
                <Progress value={67} className="h-3 animate-fade-in" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>High Package (&gt;10 LPA)</span>
                  <span className="font-medium">89/150 (59%)</span>
                </div>
                <Progress value={59} className="h-3 animate-fade-in" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Recruiter Satisfaction</span>
                  <span className="font-medium">4.7/5.0 (94%)</span>
                </div>
                <Progress value={94} className="h-3 animate-fade-in" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 animate-glow-pulse">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <div>
                    <p className="text-sm font-medium">Placed</p>
                    <p className="text-xs text-muted-foreground">334 students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 animate-glow-pulse">
                  <AlertCircle className="h-4 w-4 text-secondary" />
                  <div>
                    <p className="text-sm font-medium">In Process</p>
                    <p className="text-xs text-muted-foreground">166 students</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border bg-gradient-card backdrop-blur-sm animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary animate-bounce-gentle" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:shadow-neon transition-all animate-fade-in cursor-pointer">
              <Users className="h-8 w-8 text-primary animate-bounce-gentle" />
              <span className="text-sm font-medium">Add Student</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:shadow-neon transition-all animate-fade-in cursor-pointer">
              <Building2 className="h-8 w-8 text-secondary animate-bounce-gentle" />
              <span className="text-sm font-medium">Add Recruiter</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:shadow-neon transition-all animate-fade-in cursor-pointer">
              <Calendar className="h-8 w-8 text-accent animate-bounce-gentle" />
              <span className="text-sm font-medium">Schedule Interview</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:shadow-neon transition-all animate-fade-in cursor-pointer">
              <Trophy className="h-8 w-8 text-primary animate-bounce-gentle" />
              <span className="text-sm font-medium">Update Placement</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}