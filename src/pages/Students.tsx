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
  Download,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Award
} from "lucide-react";

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@college.edu",
    phone: "+1 234 567 8901",
    course: "Computer Science",
    year: "Final Year",
    cgpa: 8.9,
    location: "New York",
    skills: ["React", "Node.js", "Python", "Machine Learning"],
    status: "available",
    image: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@college.edu", 
    phone: "+1 234 567 8902",
    course: "Information Technology",
    year: "Final Year",
    cgpa: 8.5,
    location: "California",
    skills: ["Java", "Spring Boot", "MySQL", "AWS"],
    status: "placed",
    image: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@college.edu",
    phone: "+1 234 567 8903", 
    course: "Electronics",
    year: "Final Year",
    cgpa: 9.1,
    location: "Texas",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    status: "interviewing",
    image: "/api/placeholder/40/40"
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@college.edu",
    phone: "+1 234 567 8904",
    course: "Computer Science", 
    year: "Final Year",
    cgpa: 8.2,
    location: "Florida",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    status: "available",
    image: "/api/placeholder/40/40"
  }
];

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'placed': return 'bg-accent text-accent-foreground';
      case 'interviewing': return 'bg-secondary text-secondary-foreground';
      case 'available': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
            Student Management
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Manage student profiles and placement status
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-neon transition-all animate-glow-pulse">
          <GraduationCap className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-border bg-card/50 backdrop-blur-sm animate-scale-in">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground animate-bounce-gentle" />
              <Input
                placeholder="Search students by name, course, or skills..."
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

      {/* Students Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => (
          <Card 
            key={student.id}
            className="border-border bg-card/50 backdrop-blur-sm hover:shadow-neon transition-all duration-300 animate-scale-in group"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 animate-glow-pulse">
                    <AvatarImage src={student.image} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.course}</p>
                  </div>
                </div>
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
                          View Profile
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={student.image} />
                              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {student.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm">{student.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-sm">{student.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm">{student.location}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                <span className="text-sm">{student.course}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-primary" />
                                <span className="text-sm">CGPA: {student.cgpa}</span>
                              </div>
                              <Badge className={getStatusColor(student.status)}>
                                {student.status}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {student.skills.map((skill, index) => (
                                <Badge key={index} variant="outline" className="animate-glow-pulse">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">CGPA</span>
                  <span className="font-medium">{student.cgpa}/10.0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{student.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className={getStatusColor(student.status)}>
                    {student.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Top Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {student.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs animate-fade-in">
                        {skill}
                      </Badge>
                    ))}
                    {student.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{student.skills.length - 3}
                      </Badge>
                    )}
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