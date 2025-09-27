import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Calendar,
  Clock,
  MapPin,
  User,
  Building2,
  CheckCircle,
  XCircle,
  AlertCircle,
  PlayCircle,
  Plus
} from "lucide-react";

const interviews = [
  {
    id: 1,
    studentName: "Alice Johnson",
    studentImage: "/api/placeholder/32/32",
    companyName: "TechCorp Solutions",
    position: "Frontend Developer",
    date: "2024-01-15",
    time: "14:00",
    duration: "60 mins",
    mode: "Video Call",
    stage: "Technical Round",
    status: "scheduled",
    interviewer: "Sarah Wilson",
    location: "Google Meet",
    round: 2,
    totalRounds: 3,
    notes: "Candidate has strong React background"
  },
  {
    id: 2,
    studentName: "Bob Smith",
    studentImage: "/api/placeholder/32/32", 
    companyName: "StartupXYZ",
    position: "Full Stack Developer",
    date: "2024-01-15",
    time: "16:30",
    duration: "45 mins",
    mode: "In-Person",
    stage: "HR Round",
    status: "in-progress",
    interviewer: "Michael Chen",
    location: "Campus Room 301",
    round: 1,
    totalRounds: 2,
    notes: "Strong technical skills, good communication"
  },
  {
    id: 3,
    studentName: "Carol Davis",
    studentImage: "/api/placeholder/32/32",
    companyName: "BigTech Inc",
    position: "Software Engineer",
    date: "2024-01-16",
    time: "10:00", 
    duration: "90 mins",
    mode: "Video Call",
    stage: "System Design",
    status: "scheduled",
    interviewer: "Jennifer Davis",
    location: "Zoom",
    round: 3,
    totalRounds: 4,
    notes: "Final round preparation required"
  },
  {
    id: 4,
    studentName: "David Brown",
    studentImage: "/api/placeholder/32/32",
    companyName: "Innovation Labs", 
    position: "Backend Developer",
    date: "2024-01-14",
    time: "11:00",
    duration: "60 mins",
    mode: "In-Person",
    stage: "Technical Round",
    status: "completed",
    interviewer: "Robert Kumar",
    location: "Innovation Labs Office",
    round: 2,
    totalRounds: 3,
    notes: "Excellent performance, recommended for next round"
  },
  {
    id: 5,
    studentName: "Emma Wilson",
    studentImage: "/api/placeholder/32/32",
    companyName: "DataTech Corp",
    position: "Data Scientist",
    date: "2024-01-13",
    time: "15:30",
    duration: "75 mins",
    mode: "Video Call",
    stage: "Final Round",
    status: "completed",
    interviewer: "Dr. Alex Singh",
    location: "Microsoft Teams",
    round: 3,
    totalRounds: 3,
    notes: "Strong candidate, awaiting final decision"
  }
];

export default function Interviews() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [scheduleInterviewOpen, setScheduleInterviewOpen] = useState(false);
  const [newInterview, setNewInterview] = useState({
    studentName: "",
    companyName: "",
    position: "",
    date: "",
    time: "",
    duration: "60",
    mode: "",
    interviewer: "",
    location: "",
    notes: ""
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-primary text-primary-foreground';
      case 'in-progress': return 'bg-secondary text-secondary-foreground';
      case 'completed': return 'bg-accent text-accent-foreground';
      case 'cancelled': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled': return <Clock className="h-4 w-4" />;
      case 'in-progress': return <PlayCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interview.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interview.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || interview.status === statusFilter;
    const matchesCompany = companyFilter === "all" || interview.companyName === companyFilter;
    
    return matchesSearch && matchesStatus && matchesCompany;
  });

  const handleScheduleInterview = () => {
    if (newInterview.studentName && newInterview.companyName && newInterview.date) {
      console.log("Scheduling interview:", newInterview);
      setScheduleInterviewOpen(false);
      setNewInterview({
        studentName: "",
        companyName: "",
        position: "",
        date: "",
        time: "",
        duration: "60",
        mode: "",
        interviewer: "",
        location: "",
        notes: ""
      });
    }
  };

  const todayInterviews = interviews.filter(interview => interview.date === "2024-01-15");

  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
            Interview Management
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Track and manage student interviews and schedules
          </p>
        </div>
        <Dialog open={scheduleInterviewOpen} onOpenChange={setScheduleInterviewOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:shadow-neon transition-all animate-glow-pulse">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Interview
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card border-border">
            <DialogHeader>
              <DialogTitle>Schedule New Interview</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    value={newInterview.studentName}
                    onChange={(e) => setNewInterview({...newInterview, studentName: e.target.value})}
                    placeholder="Enter student name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={newInterview.companyName}
                    onChange={(e) => setNewInterview({...newInterview, companyName: e.target.value})}
                    placeholder="Enter company name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={newInterview.position}
                    onChange={(e) => setNewInterview({...newInterview, position: e.target.value})}
                    placeholder="Enter position"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interviewer">Interviewer</Label>
                  <Input
                    id="interviewer"
                    value={newInterview.interviewer}
                    onChange={(e) => setNewInterview({...newInterview, interviewer: e.target.value})}
                    placeholder="Enter interviewer name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newInterview.date}
                    onChange={(e) => setNewInterview({...newInterview, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newInterview.time}
                    onChange={(e) => setNewInterview({...newInterview, time: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (mins)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newInterview.duration}
                    onChange={(e) => setNewInterview({...newInterview, duration: e.target.value})}
                    placeholder="60"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mode">Mode</Label>
                  <Select value={newInterview.mode} onValueChange={(value) => setNewInterview({...newInterview, mode: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Video Call">Video Call</SelectItem>
                      <SelectItem value="In-Person">In-Person</SelectItem>
                      <SelectItem value="Phone Call">Phone Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location/Link</Label>
                  <Input
                    id="location"
                    value={newInterview.location}
                    onChange={(e) => setNewInterview({...newInterview, location: e.target.value})}
                    placeholder="Enter location or meeting link"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={newInterview.notes}
                  onChange={(e) => setNewInterview({...newInterview, notes: e.target.value})}
                  placeholder="Enter any additional notes"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setScheduleInterviewOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleScheduleInterview} className="bg-gradient-primary">
                  Schedule Interview
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary animate-glow-pulse">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Today's Interviews</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-secondary animate-glow-pulse">
                <PlayCircle className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-accent animate-glow-pulse">
                <CheckCircle className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary animate-glow-pulse">
                <AlertCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground animate-bounce-gentle" />
              <Input
                placeholder="Search by student, company, or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={companyFilter} onValueChange={setCompanyFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                <SelectItem value="TechCorp Solutions">TechCorp Solutions</SelectItem>
                <SelectItem value="StartupXYZ">StartupXYZ</SelectItem>
                <SelectItem value="BigTech Inc">BigTech Inc</SelectItem>
                <SelectItem value="Innovation Labs">Innovation Labs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Today's Interviews Highlight */}
      <Card className="border-border bg-gradient-card backdrop-blur-sm animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary animate-bounce-gentle" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {todayInterviews.map((interview) => (
              <div
                key={interview.id}
                className="p-4 rounded-lg border border-border bg-card/50 hover:shadow-neon transition-all animate-fade-in"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={interview.studentImage} />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                        {interview.studentName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{interview.studentName}</p>
                      <p className="text-xs text-muted-foreground">{interview.companyName}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(interview.status)}>
                    {getStatusIcon(interview.status)}
                  </Badge>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{interview.time} ({interview.duration})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span>{interview.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Interviews List */}
      <div className="grid gap-4">
        {filteredInterviews.map((interview) => (
          <Card 
            key={interview.id}
            className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all duration-300 animate-scale-in group"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 animate-glow-pulse">
                    <AvatarImage src={interview.studentImage} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {interview.studentName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{interview.studentName}</h3>
                      <Badge variant="outline" className="text-xs">
                        Round {interview.round}/{interview.totalRounds}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{interview.companyName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{interview.position}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{interview.date} at {interview.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{interview.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <Badge className={`${getStatusColor(interview.status)} animate-glow-pulse`}>
                      {getStatusIcon(interview.status)}
                      <span className="ml-1">{interview.status}</span>
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{interview.stage}</p>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 group-hover:animate-bounce-gentle">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      <DropdownMenuItem onClick={() => console.log("Rescheduling interview", interview.id)}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Reschedule
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => console.log("Marking complete", interview.id)}>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mark Complete
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => console.log("Canceling interview", interview.id)}>
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              {interview.notes && (
                <div className="mt-4 p-3 rounded-lg bg-muted/20 animate-fade-in">
                  <p className="text-sm text-muted-foreground">
                    <strong>Notes:</strong> {interview.notes}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}