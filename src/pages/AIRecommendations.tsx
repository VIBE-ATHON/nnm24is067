import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Sparkles, 
  ExternalLink, 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  TrendingUp,
  Star,
  Brain
} from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { IndustryLeader, Platform, LearningPath, SKILL_CATEGORIES } from '@/lib/types';

export default function AIRecommendations() {
  const [selectedSkill, setSelectedSkill] = useState<string>('Programming');
  const [searchTerm, setSearchTerm] = useState('');
  const [leaders, setLeaders] = useState<IndustryLeader[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mock AI-powered recommendations
    const mockLeaders: IndustryLeader[] = [
      {
        id: '1',
        name: 'Dan Abramov',
        title: 'Software Engineer',
        company: 'Meta (Facebook)',
        expertise: ['React', 'JavaScript', 'Redux', 'Open Source'],
        bio: 'Co-creator of Redux and Create React App. Currently working on React at Meta.',
        achievements: [
          'Co-created Redux state management library',
          'Created Create React App',
          'React core team member',
          '500K+ Twitter followers'
        ],
        socialLinks: {
          twitter: 'https://twitter.com/dan_abramov',
          github: 'https://github.com/gaearon',
          linkedin: 'https://linkedin.com/in/dan-abramov'
        },
        category: 'Programming',
        experience: 12,
        isVerified: true,
        followers: 500000,
        matchScore: 95
      },
      {
        id: '2',
        name: 'Kent C. Dodds',
        title: 'Software Engineer & Educator',
        company: 'Independent',
        expertise: ['React', 'Testing', 'JavaScript', 'Teaching'],
        bio: 'Full stack JavaScript engineer and teacher focused on making the web more accessible.',
        achievements: [
          'Created Testing Library',
          'Epic React course creator',
          'Microsoft MVP',
          'Conference speaker'
        ],
        socialLinks: {
          twitter: 'https://twitter.com/kentcdodds',
          website: 'https://kentcdodds.com',
          github: 'https://github.com/kentcdodds'
        },
        category: 'Programming',
        experience: 15,
        isVerified: true,
        followers: 300000,
        matchScore: 92
      }
    ];

    const mockPlatforms: Platform[] = [
      {
        id: '1',
        name: 'GitHub',
        description: 'World\'s largest code hosting platform for version control and collaboration',
        category: 'Programming',
        url: 'https://github.com',
        type: 'portfolio',
        tags: ['Open Source', 'Version Control', 'Collaboration', 'Portfolio'],
        isPopular: true,
        userCount: 100000000
      },
      {
        id: '2',
        name: 'Stack Overflow',
        description: 'Q&A platform for programmers and developers',
        category: 'Programming',
        url: 'https://stackoverflow.com',
        type: 'community',
        tags: ['Q&A', 'Problem Solving', 'Community', 'Learning'],
        isPopular: true,
        userCount: 50000000
      }
    ];

    const mockLearningPaths: LearningPath[] = [
      {
        id: '1',
        title: 'Full-Stack React Developer',
        description: 'Master React ecosystem from basics to advanced concepts',
        category: 'Programming',
        difficulty: 'Intermediate',
        estimatedTime: '6 months',
        steps: [
          'Learn JavaScript fundamentals',
          'Master React basics and hooks',
          'State management with Redux/Context',
          'Testing with Jest and React Testing Library'
        ],
        resources: [
          'React Official Documentation',
          'Epic React by Kent C. Dodds'
        ],
        outcomes: [
          'Build complex React applications',
          'Implement state management solutions'
        ]
      }
    ];

    setLeaders(mockLeaders);
    setPlatforms(mockPlatforms);
    setLearningPaths(mockLearningPaths);
  }, []);

  const handleGenerateRecommendations = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const filteredLeaders = leaders.filter(leader =>
    leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leader.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <PageLayout className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* AI Search Section */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              Find Industry Leaders & Platforms
            </CardTitle>
            <CardDescription className="text-base">
              Discover successful professionals, learning platforms, and career paths in your skill areas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger className="h-12 border-2 hover:border-purple-300 focus:border-purple-500 transition-colors">
                  <SelectValue placeholder="Select your skill area" />
                </SelectTrigger>
                <SelectContent>
                  {SKILL_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category} className="hover:bg-purple-50">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative">
                <Search className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search specific skills or names..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors"
                />
              </div>
              <Button 
                onClick={handleGenerateRecommendations}
                disabled={isLoading}
                className="h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 mr-2" />
                    Get AI Recommendations
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Tabs */}
        <Tabs defaultValue="leaders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm p-1 rounded-xl shadow-sm">
            <TabsTrigger value="leaders" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-200">
              Industry Leaders
            </TabsTrigger>
            <TabsTrigger value="platforms" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-200">
              Platforms
            </TabsTrigger>
            <TabsTrigger value="paths" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-200">
              Learning Paths
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaders" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLeaders.map((leader) => (
                <Card key={leader.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="relative overflow-hidden">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-16 h-16 ring-4 ring-gradient-to-r ring-purple-200">
                          <AvatarImage src={leader.avatar} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg">
                            {leader.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            {leader.name}
                            {leader.isVerified && (
                              <div className="ml-2 p-1 bg-blue-500 rounded-full">
                                <Star className="w-3 h-3 text-white fill-current" />
                              </div>
                            )}
                          </CardTitle>
                          <CardDescription className="font-medium">{leader.title}</CardDescription>
                          <p className="text-sm text-purple-600 font-semibold">{leader.company}</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0">
                        {leader.matchScore}% Match
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 line-clamp-3">{leader.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {leader.followers?.toLocaleString()} followers
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {leader.experience} years exp
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      {leader.socialLinks.linkedin && (
                        <Button size="sm" variant="outline" className="flex-1 hover:bg-blue-50 hover:border-blue-300">
                          <Linkedin className="w-4 h-4 mr-1 text-blue-600" />
                          LinkedIn
                        </Button>
                      )}
                      {leader.socialLinks.twitter && (
                        <Button size="sm" variant="outline" className="flex-1 hover:bg-sky-50 hover:border-sky-300">
                          <Twitter className="w-4 h-4 mr-1 text-sky-600" />
                          Twitter
                        </Button>
                      )}
                      {leader.socialLinks.github && (
                        <Button size="sm" variant="outline" className="flex-1 hover:bg-gray-50 hover:border-gray-300">
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="platforms" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <Card key={platform.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center">
                        <Globe className="w-6 h-6 mr-2 text-blue-600" />
                        {platform.name}
                      </CardTitle>
                      {platform.isPopular && (
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {platform.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="hover:bg-blue-50 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {platform.userCount && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {platform.userCount.toLocaleString()} users
                      </div>
                    )}

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Platform
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="paths" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center">
                        <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                        {path.title}
                      </CardTitle>
                      <Badge className={`border-0 ${
                        path.difficulty === 'Expert' ? 'bg-gradient-to-r from-red-400 to-pink-500' :
                        path.difficulty === 'Advanced' ? 'bg-gradient-to-r from-purple-400 to-indigo-500' :
                        path.difficulty === 'Intermediate' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                        'bg-gradient-to-r from-green-400 to-emerald-500'
                      } text-white`}>
                        {path.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Duration: {path.estimatedTime}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Learning Steps:</h4>
                      <ul className="space-y-2">
                        {path.steps.slice(0, 4).map((step, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                              {index + 1}
                            </div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Start Learning Path
                    </Button>
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