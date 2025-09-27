import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit,
  Building2,
  MapPin,
  Mail,
  Users,
  Briefcase,
  TrendingUp
} from "lucide-react";

const recruiters = [
  {
    id: 1,
    companyName: "TechCorp Solutions",
    contactPerson: "Sarah Wilson",
    email: "sarah.wilson@techcorp.com",
    phone: "+1 555 123 4567",
    location: "San Francisco, CA",
    industry: "Technology",
    companySize: "500-1000",
    activeJobs: 12,
    studentsHired: 45,
    avgPackage: "15 LPA",
    status: "active",
    logo: "/api/placeholder/40/40",
    description: "Leading technology solutions provider specializing in AI and cloud computing."
  },
  {
    id: 2,
    companyName: "StartupXYZ",
    contactPerson: "Michael Chen",
    email: "michael.chen@startupxyz.com",
    phone: "+1 555 234 5678", 
    location: "Austin, TX",
    industry: "Fintech",
    companySize: "50-100",
    activeJobs: 8,
    studentsHired: 23,
    avgPackage: "12 LPA",
    status: "active",
    logo: "/api/placeholder/40/40",
    description: "Innovative fintech startup revolutionizing digital payments and banking."
  },
  {
    id: 3,
    companyName: "BigTech Inc",
    contactPerson: "Jennifer Davis",
    email: "jennifer.davis@bigtech.com",
    phone: "+1 555 345 6789",
    location: "Seattle, WA", 
    industry: "Software",
    companySize: "10000+",
    activeJobs: 25,
    studentsHired: 120,
    avgPackage: "25 LPA",
    status: "premium",
    logo: "/api/placeholder/40/40",
    description: "Global technology leader in cloud services, AI, and enterprise software."
  },
  {
    id: 4,
    companyName: "Innovation Labs",
    contactPerson: "Robert Kumar",
    email: "robert.kumar@innovationlabs.com",
    phone: "+1 555 456 7890",
    location: "Boston, MA",
    industry: "Research",
    companySize: "100-500",
    activeJobs: 6,
    studentsHired: 18,
    avgPackage: "18 LPA",
    status: "new",
    logo: "/api/placeholder/40/40",
    description: "Cutting-edge research and development company focusing on emerging technologies."
  }
];

export default function Recruiters() {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'premium': return 'bg-gradient-primary text-primary-foreground';
      case 'active': return 'bg-accent text-accent-foreground';
      case 'new': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredRecruiters = recruiters.filter(recruiter =>
    recruiter.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recruiter.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recruiter.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
            Recruiter Management
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Manage partner companies and recruitment relationships
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-neon transition-all animate-glow-pulse">
          <Building2 className="mr-2 h-4 w-4" />
          Add Recruiter
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground animate-bounce-gentle" />
              <Input
                placeholder="Search by company name, industry, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="hover:shadow-neon transition-all">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary animate-glow-pulse">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-muted-foreground">Total Recruiters</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-secondary animate-glow-pulse">
                <Briefcase className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-accent animate-glow-pulse">
                <Users className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Students Hired</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary animate-glow-pulse">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">18.5</p>
                <p className="text-sm text-muted-foreground">Avg Package (LPA)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recruiters Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecruiters.map((recruiter) => (
          <Card 
            key={recruiter.id}
            className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all duration-300 animate-scale-in group"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 animate-glow-pulse">
                    <AvatarImage src={recruiter.logo} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {recruiter.companyName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{recruiter.companyName}</CardTitle>
                    <p className="text-sm text-muted-foreground">{recruiter.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(recruiter.status)}>
                    {recruiter.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 group-hover:animate-bounce-gentle">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-card border-border">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={recruiter.logo} />
                                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                                  {recruiter.companyName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="text-xl font-bold">{recruiter.companyName}</h3>
                                <p className="text-sm text-muted-foreground">{recruiter.industry}</p>
                              </div>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-6">
                            <p className="text-muted-foreground">{recruiter.description}</p>
                            
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h4 className="font-semibold">Contact Information</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-primary" />
                                    <span className="text-sm">{recruiter.contactPerson}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span className="text-sm">{recruiter.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="text-sm">{recruiter.location}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <h4 className="font-semibold">Company Stats</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="p-3 rounded-lg bg-muted/20">
                                    <p className="text-lg font-bold text-primary">{recruiter.activeJobs}</p>
                                    <p className="text-xs text-muted-foreground">Active Jobs</p>
                                  </div>
                                  <div className="p-3 rounded-lg bg-muted/20">
                                    <p className="text-lg font-bold text-accent">{recruiter.studentsHired}</p>
                                    <p className="text-xs text-muted-foreground">Students Hired</p>
                                  </div>
                                  <div className="p-3 rounded-lg bg-muted/20">
                                    <p className="text-lg font-bold text-secondary">{recruiter.avgPackage}</p>
                                    <p className="text-xs text-muted-foreground">Avg Package</p>
                                  </div>
                                  <div className="p-3 rounded-lg bg-muted/20">
                                    <p className="text-lg font-bold text-primary">{recruiter.companySize}</p>
                                    <p className="text-xs text-muted-foreground">Company Size</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Briefcase className="mr-2 h-4 w-4" />
                        View Jobs
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{recruiter.contactPerson}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{recruiter.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center p-2 rounded-lg bg-primary/10 animate-glow-pulse">
                    <p className="text-lg font-bold text-primary">{recruiter.activeJobs}</p>
                    <p className="text-xs text-muted-foreground">Jobs</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/10 animate-glow-pulse">
                    <p className="text-lg font-bold text-accent">{recruiter.studentsHired}</p>
                    <p className="text-xs text-muted-foreground">Hired</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-secondary/10 animate-glow-pulse">
                    <p className="text-lg font-bold text-secondary">{recruiter.avgPackage}</p>
                    <p className="text-xs text-muted-foreground">Avg</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}