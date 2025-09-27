import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Building2,
  Trophy,
  Target,
  Calendar,
  Filter
} from "lucide-react";

const analyticsData = {
  placementRate: 67.8,
  avgPackage: 18.5,
  totalPlacements: 334,
  topRecruiters: [
    { name: "TechCorp Solutions", placements: 45, avgPackage: 25 },
    { name: "BigTech Inc", placements: 38, avgPackage: 22 },
    { name: "StartupXYZ", placements: 32, avgPackage: 15 },
    { name: "Innovation Labs", placements: 28, avgPackage: 20 }
  ],
  departmentWise: [
    { department: "Computer Science", total: 180, placed: 135, rate: 75 },
    { department: "Information Technology", total: 150, placed: 98, rate: 65.3 },
    { department: "Electronics", total: 120, placed: 72, rate: 60 },
    { department: "Mechanical", total: 100, placed: 55, rate: 55 }
  ],
  monthlyTrends: [
    { month: "Aug", placements: 25, applications: 80 },
    { month: "Sep", placements: 42, applications: 120 },
    { month: "Oct", placements: 58, applications: 150 },
    { month: "Nov", placements: 67, applications: 180 },
    { month: "Dec", placements: 78, applications: 200 },
    { month: "Jan", placements: 64, applications: 160 }
  ]
};

export default function Analytics() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
            Placement Analytics
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Comprehensive insights and performance metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024-25</SelectItem>
              <SelectItem value="2023">2023-24</SelectItem>
              <SelectItem value="2022">2022-23</SelectItem>
            </SelectContent>
          </Select>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Information Technology">Information Technology</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Mechanical">Mechanical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Placement Rate</p>
                <p className="text-3xl font-bold text-foreground">{analyticsData.placementRate}%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">+5.2% from last year</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gradient-primary animate-glow-pulse">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Package</p>
                <p className="text-3xl font-bold text-foreground">{analyticsData.avgPackage} LPA</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">+12.3% from last year</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gradient-secondary animate-glow-pulse">
                <Target className="h-6 w-6 text-secondary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Placements</p>
                <p className="text-3xl font-bold text-foreground">{analyticsData.totalPlacements}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">+18 this month</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gradient-accent animate-glow-pulse">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Recruiters</p>
                <p className="text-3xl font-bold text-foreground">89</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">+8 new this month</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gradient-primary animate-glow-pulse">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department-wise Performance */}
      <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary animate-bounce-gentle" />
            Department-wise Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.departmentWise.map((dept, index) => (
              <div key={index} className="p-4 rounded-lg border border-border bg-muted/10 hover:shadow-neon/50 transition-all animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{dept.department}</h4>
                    <p className="text-sm text-muted-foreground">
                      {dept.placed} out of {dept.total} students placed
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${dept.rate >= 70 ? 'bg-accent' : dept.rate >= 60 ? 'bg-secondary' : 'bg-primary'} text-white animate-glow-pulse`}>
                      {dept.rate}% Success
                    </Badge>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-primary h-3 rounded-full transition-all duration-500 animate-fade-in"
                    style={{ width: `${dept.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Recruiters */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary animate-bounce-gentle" />
              Top Performing Recruiters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.topRecruiters.map((recruiter, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/10 hover:shadow-neon/50 transition-all animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${
                      index === 0 ? 'bg-gradient-primary' : 
                      index === 1 ? 'bg-gradient-secondary' : 
                      'bg-gradient-accent'
                    } flex items-center justify-center text-white font-bold animate-glow-pulse`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{recruiter.name}</p>
                      <p className="text-sm text-muted-foreground">{recruiter.placements} placements</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-accent">{recruiter.avgPackage} LPA</p>
                    <p className="text-xs text-muted-foreground">Avg Package</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary animate-bounce-gentle" />
              Monthly Placement Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.monthlyTrends.map((month, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/10 hover:shadow-neon/50 transition-all animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-primary rounded text-white text-sm font-bold flex items-center justify-center animate-glow-pulse">
                      {month.month}
                    </div>
                    <div>
                      <p className="font-medium">{month.placements} Placements</p>
                      <p className="text-sm text-muted-foreground">{month.applications} Applications</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`${month.placements > 60 ? 'bg-accent' : month.placements > 40 ? 'bg-secondary' : 'bg-primary'} text-white animate-glow-pulse`}>
                      {Math.round((month.placements / month.applications) * 100)}% Rate
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights and Recommendations */}
      <Card className="border-border bg-gradient-card backdrop-blur-sm animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary animate-bounce-gentle" />
            Key Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-accent">Performance Highlights</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 animate-fade-in">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Computer Science leads with 75% placement rate
                </li>
                <li className="flex items-center gap-2 animate-fade-in">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Average package increased by 12.3% YoY
                </li>
                <li className="flex items-center gap-2 animate-fade-in">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  TechCorp Solutions is top recruiting partner
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-secondary">Action Items</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 animate-fade-in">
                  <Target className="h-4 w-4 text-secondary" />
                  Focus on improving Mechanical dept. placements
                </li>
                <li className="flex items-center gap-2 animate-fade-in">
                  <Target className="h-4 w-4 text-secondary" />
                  Expand recruiter network in emerging sectors
                </li>
                <li className="flex items-center gap-2 animate-fade-in">
                  <Target className="h-4 w-4 text-secondary" />
                  Increase industry-specific skill training
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}