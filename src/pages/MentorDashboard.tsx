import { useState } from 'react';
import { MentorNavigation } from '@/components/MentorNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Star,
  Trophy,
  Target,
  Zap,
  Code,
  Palette,
  Brain,
  Rocket,
  MessageCircle,
  Plus,
  Edit,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Crown,
  Medal,
  Flame,
  UserPlus,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  TrendingDown
} from 'lucide-react';

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const mentorData = {
    name: 'Dr. Sarah Wilson',
    title: 'Senior Software Engineer',
    company: 'Google',
    experience: '8+ years',
    expertise: ['React', 'Node.js', 'System Design', 'Leadership'],
    rating: 4.9,
    totalStudents: 45,
    activeConnections: 12,
    completedSessions: 127,
    responseTime: '< 2 hours',
    bio: 'Passionate about mentoring the next generation of developers. Specializing in full-stack development, system architecture, and career guidance.',
    stats: {
      totalMentored: 45,
      activeMentees: 12,
      completedGoals: 89,
      averageRating: 4.9,
      responseRate: 98,
      sessionHours: 156
    }
  };

  const recentStudents = [
    {
      name: 'Alex Johnson',
      college: 'Stanford University',
      year: 3,
      skills: ['React', 'Node.js'],
      progress: 85,
      lastActive: '2 hours ago',
      status: 'active',
      avatar: '',
      goal: 'Full-stack development mastery'
    },
    {
      name: 'Maya Patel',
      college: 'UC Berkeley',
      year: 2,
      skills: ['Python', 'Machine Learning'],
      progress: 70,
      lastActive: '1 day ago',
      status: 'active',
      avatar: '',
      goal: 'AI/ML career transition'
    },
    {
      name: 'David Chen',
      college: 'MIT',
      year: 4,
      skills: ['System Design', 'Go'],
      progress: 92,
      lastActive: '3 hours ago',
      status: 'completed',
      avatar: '',
      goal: 'Senior engineer preparation'
    },
    {
      name: 'Sophie Rodriguez',
      college: 'Carnegie Mellon',
      year: 1,
      skills: ['JavaScript', 'Web Development'],
      progress: 45,
      lastActive: '5 hours ago',
      status: 'active',
      avatar: '',
      goal: 'Frontend development basics'
    }
  ];

  const upcomingSessions = [
    {
      student: 'Alex Johnson',
      topic: 'React Performance Optimization',
      time: 'Today, 3:00 PM',
      duration: '60 min',
      type: 'Code Review'
    },
    {
      student: 'Maya Patel',
      topic: 'ML Model Deployment',
      time: 'Tomorrow, 10:00 AM',
      duration: '45 min',
      type: 'Technical Discussion'
    },
    {
      student: 'Sophie Rodriguez',
      topic: 'Career Path Planning',
      time: 'Friday, 2:00 PM',
      duration: '30 min',
      type: 'Career Guidance'
    }
  ];

  const achievements = [
    {
      title: 'Top Mentor 2024',
      description: 'Ranked in top 5% of mentors platform-wide',
      date: '2024-01-15',
      color: 'from-yellow-400 to-orange-500',
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: '100+ Sessions Completed',
      description: 'Successfully completed over 100 mentoring sessions',
      date: '2023-12-20',
      color: 'from-green-400 to-blue-500',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'Student Success Champion',
      description: '90% of mentees achieved their career goals',
      date: '2023-11-10',
      color: 'from-purple-400 to-pink-500',
      icon: <Medal className="w-6 h-6" />
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'from-green-500 to-emerald-500';
    if (progress >= 60) return 'from-blue-500 to-cyan-500';
    if (progress >= 40) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'completed': return 'bg-blue-500';
      case 'paused': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <MentorNavigation />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Avatar className="w-32 h-32 ring-4 ring-white/30 shadow-2xl">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-bold">
                      {mentorData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {mentorData.name}
                  </h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1">
                      {mentorData.title}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 px-3 py-1">
                      {mentorData.company}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-3 py-1">
                      {mentorData.experience}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
                    {mentorData.bio}
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{mentorData.stats.totalMentored}</div>
                      <div className="text-sm text-gray-300">Total Mentored</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{mentorData.stats.activeMentees}</div>
                      <div className="text-sm text-gray-300">Active Mentees</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{mentorData.stats.averageRating}</div>
                      <div className="text-sm text-gray-300">Avg Rating</div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{mentorData.stats.sessionHours}h</div>
                      <div className="text-sm text-gray-300">Session Hours</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              My Students
            </TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Sessions
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">
              Achievements
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { action: 'Completed session', item: 'React Performance with Alex', time: '2 hours ago', color: 'from-green-500 to-emerald-500' },
                      { action: 'New student connection', item: 'Sophie Rodriguez joined', time: '1 day ago', color: 'from-blue-500 to-purple-500' },
                      { action: 'Goal achieved', item: 'Maya completed ML project', time: '3 days ago', color: 'from-yellow-500 to-orange-500' },
                      { action: 'Session scheduled', item: 'Career guidance with David', time: '1 week ago', color: 'from-purple-500 to-pink-500' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                        <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center`}>
                          <Flame className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{activity.action}</div>
                          <div className="text-blue-300">{activity.item}</div>
                          <div className="text-gray-400 text-sm">{activity.time}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-white/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Find New Students
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Session
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>

                {/* Upcoming Sessions */}
                <Card className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm border-white/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Upcoming Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingSessions.slice(0, 3).map((session, index) => (
                      <div key={index} className="p-3 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-white text-sm">{session.student}</div>
                          <Badge className="bg-blue-500/20 text-blue-300 border-0 text-xs">
                            {session.duration}
                          </Badge>
                        </div>
                        <div className="text-gray-300 text-xs mb-1">{session.topic}</div>
                        <div className="text-gray-400 text-xs">{session.time}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My Students</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <UserPlus className="w-4 h-4 mr-2" />
                Find Students
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recentStudents.map((student, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="w-16 h-16 ring-2 ring-white/30">
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                          {student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{student.name}</h3>
                          <Badge className={`${getStatusColor(student.status)} text-white border-0`}>
                            {student.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="bg-blue-500/20 text-blue-300 border-0 text-xs">
                            {student.college}
                          </Badge>
                          <Badge className="bg-green-500/20 text-green-300 border-0 text-xs">
                            Year {student.year}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3">{student.goal}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {student.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} className="bg-purple-500/20 text-purple-300 border-0 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Progress</span>
                        <span className="text-white font-bold">{student.progress}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={student.progress} className="h-2 bg-white/20">
                          <div 
                            className={`h-full bg-gradient-to-r ${getProgressColor(student.progress)} rounded-full transition-all duration-1000`}
                            style={{ width: `${student.progress}%` }}
                          />
                        </Progress>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Last active: {student.lastActive}</span>
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Upcoming Sessions</h2>
              <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Session
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{session.topic}</h3>
                          <p className="text-gray-300">with {session.student}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{session.time}</span>
                            </div>
                            <Badge className="bg-green-500/20 text-green-300 border-0">
                              {session.duration}
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-300 border-0">
                              {session.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                          Reschedule
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                          Join Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My Achievements</h2>
              <div className="flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-4 py-2">
                  <Crown className="w-4 h-4 mr-2" />
                  Top Mentor
                </Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 mb-3 leading-relaxed">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            {new Date(achievement.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            <Medal className="w-4 h-4 mr-2" />
                            View Badge
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}