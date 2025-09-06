import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Home,
  Users,
  MessageCircle,
  Bell,
  Settings,
  Search,
  UserPlus,
  Calendar,
  Award,
  TrendingUp,
  Menu,
  LogOut,
  User,
  Star,
  Zap,
  Target,
  Brain,
  Crown,
  Sparkles
} from 'lucide-react';

interface MentorNavigationProps {
  className?: string;
}

export function MentorNavigation({ className = '' }: MentorNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [notifications] = useState(3);

  const mentorData = {
    name: 'Dr. Sarah Wilson',
    title: 'Senior Software Engineer',
    company: 'Google',
    avatar: '',
    rating: 4.9,
    totalStudents: 45,
    activeConnections: 12
  };

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      path: '/mentor-dashboard',
      color: 'from-blue-500 to-cyan-500',
      description: 'Overview and analytics'
    },
    {
      id: 'discover',
      label: 'Discover Students',
      icon: <Search className="w-5 h-5" />,
      path: '/mentor-discover',
      color: 'from-green-500 to-emerald-500',
      description: 'Browse talented students'
    },
    {
      id: 'connections',
      label: 'My Connections',
      icon: <Users className="w-5 h-5" />,
      path: '/mentor-connections',
      color: 'from-purple-500 to-pink-500',
      description: 'Connected students',
      badge: mentorData.activeConnections
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageCircle className="w-5 h-5" />,
      path: '/mentor-messages',
      color: 'from-indigo-500 to-purple-500',
      description: 'Student communications',
      badge: 5
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: <Calendar className="w-5 h-5" />,
      path: '/mentor-calendar',
      color: 'from-orange-500 to-red-500',
      description: 'Meetings & sessions'
    },
    {
      id: 'achievements',
      label: 'Student Progress',
      icon: <Award className="w-5 h-5" />,
      path: '/mentor-progress',
      color: 'from-yellow-500 to-orange-500',
      description: 'Track student growth'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={`bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/10 backdrop-blur-sm ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    TalentHub
                  </h1>
                  <p className="text-sm text-gray-400 font-medium">Mentor Portal</p>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className={`relative group h-12 px-4 transition-all duration-300 ${
                    isActive(item.path)
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`p-1 rounded-lg transition-all duration-300 ${
                      isActive(item.path) ? 'bg-white/20' : 'group-hover:bg-white/10'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge className="bg-red-500 text-white text-xs px-2 py-1 min-w-[20px] h-5">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {item.description}
                  </div>
                </Button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-300 hover:text-white hover:bg-white/10 h-12 w-12"
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 min-w-[18px] h-5">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Mentor Stats */}
              <div className="hidden xl:flex items-center space-x-4 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{mentorData.rating}</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">{mentorData.totalStudents}</span>
                </div>
              </div>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-12 w-12 rounded-full hover:bg-white/10">
                    <Avatar className="h-10 w-10 ring-2 ring-white/30">
                      <AvatarImage src={mentorData.avatar} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                        {mentorData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-1">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-slate-800/95 backdrop-blur-sm border-white/20" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={mentorData.avatar} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {mentorData.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-white">{mentorData.name}</p>
                          <p className="text-xs text-gray-400">{mentorData.title}</p>
                          <p className="text-xs text-gray-400">{mentorData.company}</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Rating: {mentorData.rating}/5.0</span>
                        <span>{mentorData.totalStudents} Students</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Account Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TalentHub
                </h1>
                <p className="text-xs text-gray-400">Mentor</p>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-white">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-80 bg-slate-900/95 backdrop-blur-sm border-white/20">
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-white">Mentor Navigation</SheetTitle>
                    <SheetDescription className="text-gray-400">
                      Access all mentor features and tools
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-8 space-y-4">
                    {/* Profile Section */}
                    <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={mentorData.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {mentorData.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-white">{mentorData.name}</p>
                        <p className="text-xs text-gray-400">{mentorData.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-400">{mentorData.rating}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-400">{mentorData.totalStudents} students</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Items */}
                    <div className="space-y-2">
                      {navigationItems.map((item) => (
                        <Button
                          key={item.id}
                          variant="ghost"
                          onClick={() => handleNavigation(item.path)}
                          className={`w-full justify-start h-12 transition-all duration-300 ${
                            isActive(item.path)
                              ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-3">
                              <div className={`p-1 rounded-lg ${
                                isActive(item.path) ? 'bg-white/20' : ''
                              }`}>
                                {item.icon}
                              </div>
                              <div className="text-left">
                                <div className="font-medium">{item.label}</div>
                                <div className="text-xs opacity-70">{item.description}</div>
                              </div>
                            </div>
                            {item.badge && (
                              <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>

                    {/* Settings & Logout */}
                    <div className="pt-4 border-t border-white/20 space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        <Settings className="mr-3 h-5 w-5" />
                        Settings
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <LogOut className="mr-3 h-5 w-5" />
                        Sign out
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}