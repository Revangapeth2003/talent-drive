import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Calendar, 
  BarChart3, 
  Settings,
  GraduationCap,
  Building2,
  UserCheck,
  Trophy
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

// Different navigation items based on user role
const roleBasedNavigation = {
  admin: [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Students", url: "/students", icon: GraduationCap },
    { title: "Recruiters", url: "/recruiters", icon: Building2 },
    { title: "Interviews", url: "/interviews", icon: Calendar },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "Placements", url: "/placements", icon: Trophy },
  ],
  placement_officer: [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Students", url: "/students", icon: GraduationCap },
    { title: "Recruiters", url: "/recruiters", icon: Building2 },
    { title: "Interviews", url: "/interviews", icon: Calendar },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "Placements", url: "/placements", icon: Trophy },
  ],
  recruiter: [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Job Postings", url: "/job-postings", icon: Briefcase },
    { title: "Candidates", url: "/candidates", icon: Users },
    { title: "Interviews", url: "/interviews", icon: Calendar },
    { title: "Analytics", url: "/recruiter-analytics", icon: BarChart3 },
  ],
  student: [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "My Profile", url: "/profile", icon: UserCheck },
    { title: "Job Opportunities", url: "/jobs", icon: Briefcase },
    { title: "My Interviews", url: "/my-interviews", icon: Calendar },
    { title: "Placement Status", url: "/placement-status", icon: Trophy },
  ]
};

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // For demo purposes, we'll use admin role. In a real app, this would come from auth context
  const [userRole] = useState<keyof typeof roleBasedNavigation>("admin");
  const items = roleBasedNavigation[userRole];

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-foreground font-medium shadow-neon" 
      : "hover:bg-muted/50 transition-all duration-300 hover:shadow-neon/50";

  return (
    <Sidebar
      className={`${isCollapsed ? "w-14" : "w-60"} border-r border-border bg-gradient-dark transition-all duration-300`}
    >
      <SidebarContent className="bg-transparent">
        <SidebarGroup className="animate-fade-in">
          <SidebarGroupLabel className={`text-primary font-bold ${isCollapsed ? "hidden" : ""}`}>
           Settlo PlacementCRM
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="h-5 w-5 animate-bounce-gentle" />
                      {!isCollapsed && (
                        <span className="font-medium animate-slide-in">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
