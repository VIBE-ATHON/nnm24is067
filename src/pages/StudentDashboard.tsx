import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
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
  Users,
  MessageCircle,
  Plus,
  Edit,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Crown,
  Medal,
  Flame
} from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const studentData = {
    name: 'Alex Johnson',
    college: 'Stanford University',
    year: 3,
    major: 'Computer Science',
    gpa: 3.8,
    profileImage: '',
    bio: 'Passionate full-stack developer with a focus on React and Node.js. Always eager to learn new technologies and contribute to innovative projects.',
    skills: [
      { name: 'React', level: 90, category: 'Frontend', color: 'from-blue-500 to-cyan-500', icon: <Code className="w-4 h-4" /> },
      { name: 'Node.js', level: 85, category: 'Backend', color: 'from-green-500 to-emerald-500', icon: <Zap className="w-4 h-4" /> },
      { name: 'Python', level: 80, category: 'Programming', color: 'from-yellow-500 to-orange-500', icon: <Brain className="w-4 h-4" /> },
      { name: 'UI/UX Design', level: 75, category: 'Design', color: 'from-purple-500 to-pink-500', icon: <Palette className="w-4 h-4" /> },
      { name: 'Machine Learning', level: 70, category: 'AI', color: 'from-indigo-500 to-purple-500', icon: <Rocket className="w-4 h-4" /> },
      { name: 'MongoDB', level: 65, category: 'Database', color: 'from-teal-500 to-green-500', icon: <Target className="w-4 h-4" /> }
    ],
    achievements: [
      { 
        title: 'Hackathon Winner', 
        description: 'First place in Stanford AI Hackathon 2024',
        date: '2024-01-15',
        type: 'competition',
        color: 'from-yellow-400 to-orange-500',
        icon: <Trophy className="w-6 h-6" />
      },
      { 
        title: 'Open Source Contributor', 
        description: 'Contributed to 5+ major open source projects',
        date: '2024-01-10',
        type: 'contribution',
        color: 'from-green-400 to-blue-500',
        icon: <Code className="w-6 h-6" />
      },
      { 
        title: 'Dean\'s List', 
        description: 'Academic excellence recognition',
        date: '2023-12-20',
        type: 'academic',
        color: 'from-purple-400 to-pink-500',
        icon: <Crown className="w-6 h-6" />
      },
      { 
        title: 'Mentor of the Month', 
        description: 'Helped 10+ junior students with coding',
        date: '2023-12-01',
        type: 'mentorship',
        color: 'from-blue-400 to-indigo-500',
        icon: <Users className="w-6 h-6" />
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Full-stack web application with React, Node.js, and MongoDB',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        status: 'Completed',
        color: 'from-blue-500 to-purple-600'
      },
      {
        title: 'AI Chat Assistant',
        description: 'Machine learning powered chatbot using Python and TensorFlow',
        technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
        status: 'In Progress',
        color: 'from-green-500 to-teal-600'
      },
      {
        title: 'Mobile Task Manager',
        description: 'Cross-platform mobile app built with React Native',
        technologies: ['React Native', 'Firebase', 'Redux'],
        status: 'Planning',
        color: 'from-purple-500 to-pink-600'
      }
    ],
    stats: {
      totalProjects: 12,
      skillsLearned: 25,
      mentorConnections: 8,
      achievementPoints: 2450
    }
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 80) return 'text-green-400';
    if (level >= 60) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Planning': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <PageLayout className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
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
                    <AvatarImage src={studentData.profileImage} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-bold">
                      {studentData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {studentData.name}
                  </h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1">
                      {studentData.college}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 px-3 py-1">
                      Year {studentData.year} • {studentData.major}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-3 py-1">
                      GPA: {studentData.gpa}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
                    {studentData.bio}
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{studentData.stats.totalProjects}</div>
                      <div className="text-sm text-gray-300">Projects</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{studentData.stats.skillsLearned}</div>
                      <div className="text-sm text-gray-300">Skills</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{studentData.stats.mentorConnections}</div>
                      <div className="text-sm text-gray-300">Mentors</div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{studentData.stats.achievementPoints}</div>
                      <div className="text-sm text-gray-300">Points</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Public Profile
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
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Projects
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
                      { action: 'Completed project', item: 'E-commerce Platform', time: '2 hours ago', color: 'from-green-500 to-emerald-500' },
                      { action: 'Earned achievement', item: 'Hackathon Winner', time: '1 day ago', color: 'from-yellow-500 to-orange-500' },
                      { action: 'Updated skill', item: 'React proficiency to 90%', time: '3 days ago', color: 'from-blue-500 to-purple-500' },
                      { action: 'Connected with mentor', item: 'Dr. Sarah Wilson', time: '1 week ago', color: 'from-purple-500 to-pink-500' }
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
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Project
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Learn New Skill
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
                      <Users className="w-4 h-4 mr-2" />
                      Find Mentor
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Discussion
                    </Button>
                  </CardContent>
                </Card>

                {/* Skill Progress Summary */}
                <Card className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm border-white/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Top Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {studentData.skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className={`p-1 bg-gradient-to-r ${skill.color} rounded`}>
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className={`font-bold ${getSkillLevelColor(skill.level)}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-white/20">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </Progress>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My Skills</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentData.skills.map((skill, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <Badge className="bg-white/20 text-white border-0">
                        {skill.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Proficiency</span>
                        <span className={`font-bold text-lg ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-3 bg-white/20">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </Progress>
                        <div className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full animate-pulse opacity-30`} 
                             style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My Projects</h2>
              <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentData.projects.map((project, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-xl">
                  <CardContent className="p-6">
                    <div className={`h-32 bg-gradient-to-r ${project.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-white/20 text-white border-0 hover:bg-white/30 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
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
                  <Trophy className="w-4 h-4 mr-2" />
                  {studentData.stats.achievementPoints} Points
                </Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {studentData.achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                          <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0`}>
                            {achievement.type}
                          </Badge>
                        </div>
                        
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
                            View Certificate
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
    </PageLayout>
  );
}