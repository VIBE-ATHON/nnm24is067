import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trophy, Medal, Award, TrendingUp, Star, Crown } from 'lucide-react';
import { User, Skill, SKILL_CATEGORIES } from '@/lib/types';

interface RankedStudent {
  user: User;
  skills: Skill[];
  totalScore: number;
  categoryScore: number;
  rank: number;
  achievements: number;
  projects: number;
  level: string;
}

export default function Rankings() {
  const [rankedStudents, setRankedStudents] = useState<RankedStudent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredRankings, setFilteredRankings] = useState<RankedStudent[]>([]);

  useEffect(() => {
    // Mock data for rankings
    const mockUsers: User[] = [
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@college.edu',
        role: 'student',
        bio: 'Full-stack developer with passion for React',
        college: 'Tech University',
        department: 'Computer Science',
        year: 3,
        specializations: ['React', 'Node.js', 'TypeScript'],
        createdAt: new Date()
      },
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@college.edu',
        role: 'student',
        bio: 'Data science enthusiast',
        college: 'Tech University',
        department: 'Data Science',
        year: 2,
        specializations: ['Python', 'Machine Learning', 'Data Analysis'],
        createdAt: new Date()
      },
      {
        id: '3',
        name: 'Carol Davis',
        email: 'carol@college.edu',
        role: 'student',
        bio: 'Creative designer and artist',
        college: 'Art Institute',
        department: 'Digital Arts',
        year: 4,
        specializations: ['Graphic Design', 'Photography'],
        createdAt: new Date()
      },
      {
        id: '4',
        name: 'David Wilson',
        email: 'david@college.edu',
        role: 'student',
        bio: 'Mobile app developer',
        college: 'Tech University',
        department: 'Computer Science',
        year: 3,
        specializations: ['React Native', 'Flutter', 'iOS'],
        createdAt: new Date()
      },
      {
        id: '5',
        name: 'Emma Brown',
        email: 'emma@college.edu',
        role: 'student',
        bio: 'Web developer and UX designer',
        college: 'Design College',
        department: 'Web Design',
        year: 2,
        specializations: ['HTML/CSS', 'JavaScript', 'UX Design'],
        createdAt: new Date()
      }
    ];

    const mockSkills: { [key: string]: Skill[] } = {
      '1': [
        {
          id: 's1',
          userId: '1',
          title: 'Advanced React Development',
          category: 'Programming',
          description: 'Expert-level React with hooks and state management',
          level: 'Expert',
          tags: ['React', 'Redux', 'TypeScript'],
          workSamples: [
            { id: 'w1', title: 'E-commerce App', description: 'Full-stack e-commerce', type: 'project' },
            { id: 'w2', title: 'Dashboard UI', description: 'Admin dashboard', type: 'project' }
          ],
          achievements: [
            { id: 'a1', title: 'Hackathon Winner', description: 'First place', date: new Date(), type: 'competition' },
            { id: 'a2', title: 'React Certification', description: 'Advanced cert', date: new Date(), type: 'certification' }
          ],
          createdAt: new Date()
        }
      ],
      '2': [
        {
          id: 's2',
          userId: '2',
          title: 'Machine Learning Specialist',
          category: 'Data Analysis',
          description: 'Advanced ML algorithms and data processing',
          level: 'Advanced',
          tags: ['Python', 'TensorFlow', 'Scikit-learn'],
          workSamples: [
            { id: 'w3', title: 'Prediction Model', description: 'Stock price predictor', type: 'project' }
          ],
          achievements: [
            { id: 'a3', title: 'Research Paper', description: 'Published ML research', date: new Date(), type: 'recognition' }
          ],
          createdAt: new Date()
        }
      ],
      '3': [
        {
          id: 's3',
          userId: '3',
          title: 'Brand Identity Expert',
          category: 'Design',
          description: 'Professional brand design and visual identity',
          level: 'Expert',
          tags: ['Adobe Creative Suite', 'Branding', 'Logo Design'],
          workSamples: [
            { id: 'w4', title: 'Brand Package', description: 'Complete brand identity', type: 'portfolio' },
            { id: 'w5', title: 'Logo Collection', description: '50+ logo designs', type: 'portfolio' }
          ],
          achievements: [
            { id: 'a4', title: 'Design Award', description: 'Best student design', date: new Date(), type: 'award' },
            { id: 'a5', title: 'Client Project', description: 'Real client work', date: new Date(), type: 'recognition' }
          ],
          createdAt: new Date()
        }
      ],
      '4': [
        {
          id: 's4',
          userId: '4',
          title: 'Mobile App Development',
          category: 'Programming',
          description: 'Cross-platform mobile applications',
          level: 'Advanced',
          tags: ['React Native', 'Flutter', 'Firebase'],
          workSamples: [
            { id: 'w6', title: 'Fitness App', description: 'Health tracking app', type: 'project' }
          ],
          achievements: [
            { id: 'a6', title: 'App Store Featured', description: 'Featured app', date: new Date(), type: 'recognition' }
          ],
          createdAt: new Date()
        }
      ],
      '5': [
        {
          id: 's5',
          userId: '5',
          title: 'Frontend Development',
          category: 'Programming',
          description: 'Modern web development with focus on UX',
          level: 'Intermediate',
          tags: ['JavaScript', 'CSS', 'Vue.js'],
          workSamples: [
            { id: 'w7', title: 'Portfolio Site', description: 'Personal portfolio', type: 'project' }
          ],
          achievements: [
            { id: 'a7', title: 'Internship', description: 'Tech company internship', date: new Date(), type: 'recognition' }
          ],
          createdAt: new Date()
        }
      ]
    };

    // Calculate rankings
    const calculateScore = (user: User, skills: Skill[]) => {
      let score = 0;
      
      skills.forEach(skill => {
        // Level scoring
        const levelScores = { 'Beginner': 10, 'Intermediate': 25, 'Advanced': 50, 'Expert': 100 };
        score += levelScores[skill.level as keyof typeof levelScores] || 0;
        
        // Achievement scoring
        score += skill.achievements.length * 20;
        
        // Work sample scoring
        score += skill.workSamples.length * 15;
        
        // Tag diversity bonus
        score += skill.tags.length * 5;
      });
      
      return score;
    };

    const rankings: RankedStudent[] = mockUsers.map(user => {
      const userSkills = mockSkills[user.id] || [];
      const totalScore = calculateScore(user, userSkills);
      const achievements = userSkills.reduce((acc, skill) => acc + skill.achievements.length, 0);
      const projects = userSkills.reduce((acc, skill) => acc + skill.workSamples.length, 0);
      const highestLevel = userSkills.length > 0 ? 
        userSkills.reduce((highest, skill) => {
          const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
          return levels.indexOf(skill.level) > levels.indexOf(highest) ? skill.level : highest;
        }, 'Beginner') : 'Beginner';

      return {
        user,
        skills: userSkills,
        totalScore,
        categoryScore: totalScore,
        rank: 0,
        achievements,
        projects,
        level: highestLevel
      };
    }).sort((a, b) => b.totalScore - a.totalScore)
      .map((student, index) => ({ ...student, rank: index + 1 }));

    setRankedStudents(rankings);
    setFilteredRankings(rankings);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredRankings(rankedStudents);
    } else {
      const filtered = rankedStudents.filter(student =>
        student.skills.some(skill => skill.category === selectedCategory)
      ).map((student, index) => ({ ...student, rank: index + 1 }));
      setFilteredRankings(filtered);
    }
  }, [selectedCategory, rankedStudents]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <Trophy className="w-5 h-5 text-gray-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-amber-400 to-amber-600';
      default: return 'bg-gradient-to-r from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h1 className="text-2xl font-bold text-gray-900">Student Rankings</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Top Performers</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {filteredRankings.slice(0, 3).map((student, index) => (
              <Card key={student.user.id} className={`relative overflow-hidden ${index === 0 ? 'md:order-2 transform md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
                <div className={`absolute top-0 left-0 right-0 h-2 ${getRankColor(student.rank)}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(student.rank)}
                  </div>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={student.user.avatar} />
                    <AvatarFallback className="text-2xl">{student.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{student.user.name}</CardTitle>
                  <CardDescription>{student.user.department} • Year {student.user.year}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="text-3xl font-bold text-blue-600">{student.totalScore}</div>
                  <div className="text-sm text-gray-600">Total Score</div>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div>
                      <div className="font-semibold">{student.achievements}</div>
                      <div className="text-gray-600">Achievements</div>
                    </div>
                    <div>
                      <div className="font-semibold">{student.projects}</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                  </div>
                  <Badge className={`${student.level === 'Expert' ? 'bg-red-100 text-red-800' : 
                    student.level === 'Advanced' ? 'bg-purple-100 text-purple-800' :
                    student.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'}`}>
                    {student.level} Level
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Complete Rankings</h3>
            <div className="flex items-center space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {SKILL_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Rankings Table */}
        <Card>
          <CardContent className="p-0">
            <div className="space-y-0">
              {filteredRankings.map((student, index) => (
                <div key={student.user.id} className={`flex items-center p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${index < 3 ? 'bg-gradient-to-r from-blue-50 to-transparent' : ''}`}>
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                      {index < 3 ? getRankIcon(student.rank) : (
                        <span className="font-bold text-lg">#{student.rank}</span>
                      )}
                    </div>
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={student.user.avatar} />
                      <AvatarFallback>{student.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{student.user.name}</h4>
                      <p className="text-gray-600">{student.user.department} • {student.user.college}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {student.user.specializations.slice(0, 3).map((spec) => (
                          <Badge key={spec} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-2xl font-bold text-blue-600">{student.totalScore}</div>
                    <div className="text-sm text-gray-600">Score</div>
                    <div className="flex space-x-4 text-sm">
                      <div>
                        <span className="font-medium">{student.achievements}</span>
                        <span className="text-gray-500 ml-1">achievements</span>
                      </div>
                      <div>
                        <span className="font-medium">{student.projects}</span>
                        <span className="text-gray-500 ml-1">projects</span>
                      </div>
                    </div>
                    <Badge className={`${student.level === 'Expert' ? 'bg-red-100 text-red-800' : 
                      student.level === 'Advanced' ? 'bg-purple-100 text-purple-800' :
                      student.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'}`}>
                      {student.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ranking Explanation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              How Rankings Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Scoring System</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Expert Level: 100 points</li>
                  <li>• Advanced Level: 50 points</li>
                  <li>• Intermediate Level: 25 points</li>
                  <li>• Beginner Level: 10 points</li>
                  <li>• Each Achievement: +20 points</li>
                  <li>• Each Work Sample: +15 points</li>
                  <li>• Each Skill Tag: +5 points</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Categories</h4>
                <p className="text-sm text-gray-600">
                  Rankings can be filtered by skill categories to see top performers in specific areas. 
                  The overall ranking considers all skills and achievements across all categories.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}