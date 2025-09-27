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
  Eye, 
  Edit, 
  Download,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Award,
  Plus
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
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCourse, setFilterCourse] = useState("all");
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    year: "",
    cgpa: "",
    location: "",
    skills: ""
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'placed': return 'bg-accent text-accent-foreground';
      case 'interviewing': return 'bg-secondary text-secondary-foreground';
      case 'available': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = filterStatus === "all" || student.status === filterStatus;
    const matchesCourse = filterCourse === "all" || student.course === filterCourse;
    
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.email && newStudent.course) {
      console.log("Adding student:", newStudent);
      setAddStudentOpen(false);
      setNewStudent({
        name: "",
        email: "",
        phone: "",
        course: "",
        year: "",
        cgpa: "",
        location: "",
        skills: ""
      });
    }
  };

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
        <Dialog open={addStudentOpen} onOpenChange={setAddStudentOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:shadow-neon transition-all animate-glow-pulse">
              <Plus className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card border-border">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    placeholder="Enter student name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select value={newStudent.course} onValueChange={(value) => setNewStudent({...newStudent, course: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Information Technology">Information Technology</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Mechanical">Mechanical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select value={newStudent.year} onValueChange={(value) => setNewStudent({...newStudent, year: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Final Year">Final Year</SelectItem>
                      <SelectItem value="Pre-Final Year">Pre-Final Year</SelectItem>
                      <SelectItem value="Third Year">Third Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cgpa">CGPA</Label>
                  <Input
                    id="cgpa"
                    type="number"
                    step="0.1"
                    max="10"
                    value={newStudent.cgpa}
                    onChange={(e) => setNewStudent({...newStudent, cgpa: e.target.value})}
                    placeholder="Enter CGPA"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newStudent.location}
                    onChange={(e) => setNewStudent({...newStudent, location: e.target.value})}
                    placeholder="Enter location"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills (comma separated)</Label>
                <Textarea
                  id="skills"
                  value={newStudent.skills}
                  onChange={(e) => setNewStudent({...newStudent, skills: e.target.value})}
                  placeholder="Enter skills separated by commas"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setAddStudentOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddStudent} className="bg-gradient-primary">
                  Add Student
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="placed">Placed</SelectItem>
                <SelectItem value="interviewing">Interviewing</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCourse} onValueChange={setFilterCourse}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Information Technology">Information Technology</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Mechanical">Mechanical</SelectItem>
              </SelectContent>
            </Select>
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