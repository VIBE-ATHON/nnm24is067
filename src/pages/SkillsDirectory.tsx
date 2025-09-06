import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Users, Award } from 'lucide-react';
import { SkillCard } from '@/components/SkillCard';
import { Skill, User, SKILL_CATEGORIES } from '@/lib/types';

export default function SkillsDirectory() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@college.edu',
        role: 'student',
        bio: 'Passionate web developer and UI/UX enthusiast',
        college: 'Tech University',
        department: 'Computer Science',
        year: 3,
        specializations: ['React', 'Node.js', 'UI/UX Design'],
        createdAt: new Date()
      },
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@college.edu',
        role: 'student',
        bio: 'Data science student with machine learning focus',
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
        bio: 'Creative designer and digital artist',
        college: 'Art Institute',
        department: 'Digital Arts',
        year: 4,
        specializations: ['Graphic Design', 'Photography', 'Video Editing'],
        createdAt: new Date()
      }
    ];

    const mockSkills: Skill[] = [
      {
        id: '1',
        userId: '1',
        title: 'Full-Stack Web Development',
        category: 'Programming',
        description: 'Building modern web applications with React and Node.js',
        level: 'Advanced',
        tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
        workSamples: [
          {
            id: '1',
            title: 'E-commerce Platform',
            description: 'Full-featured online store',
            url: 'https://github.com/alice/ecommerce',
            type: 'project'
          }
        ],
        achievements: [
          {
            id: '1',
            title: 'Hackathon Winner',
            description: 'First place in college hackathon',
            date: new Date('2024-01-15'),
            type: 'competition'
          }
        ],
        createdAt: new Date()
      },
      {
        id: '2',
        userId: '2',
        title: 'Machine Learning & Data Analysis',
        category: 'Data Analysis',
        description: 'Predictive modeling and data visualization',
        level: 'Intermediate',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        workSamples: [
          {
            id: '2',
            title: 'Stock Price Predictor',
            description: 'ML model for stock prediction',
            url: 'https://github.com/bob/stock-predictor',
            type: 'project'
          }
        ],
        achievements: [
          {
            id: '2',
            title: 'Research Publication',
            description: 'Published paper on ML applications',
            date: new Date('2024-02-20'),
            type: 'recognition'
          }
        ],
        createdAt: new Date()
      },
      {
        id: '3',
        userId: '3',
        title: 'Brand Identity Design',
        category: 'Design',
        description: 'Creating compelling visual identities for brands',
        level: 'Expert',
        tags: ['Adobe Creative Suite', 'Branding', 'Logo Design', 'Typography'],
        workSamples: [
          {
            id: '3',
            title: 'Startup Brand Package',
            description: 'Complete brand identity for tech startup',
            type: 'portfolio'
          }
        ],
        achievements: [
          {
            id: '3',
            title: 'Design Award',
            description: 'Best Student Design Award',
            date: new Date('2024-03-10'),
            type: 'award'
          }
        ],
        createdAt: new Date()
      }
    ];

    setUsers(mockUsers);
    setSkills(mockSkills);
    setFilteredSkills(mockSkills);
  }, []);

  useEffect(() => {
    let filtered = skills;

    if (searchTerm) {
      filtered = filtered.filter(skill =>
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(skill => skill.category === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(skill => skill.level === selectedLevel);
    }

    setFilteredSkills(filtered);
  }, [skills, searchTerm, selectedCategory, selectedLevel]);

  const handleConnect = (skill: Skill) => {
    alert(`Connection request sent to ${users.find(u => u.id === skill.userId)?.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Skills Directory</h1>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Skills</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{skills.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.role === 'student').length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Filter className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{SKILL_CATEGORIES.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search skills, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
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
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES.slice(0, 8).map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {filteredSkills.length} Skills Found
            </h3>
          </div>
          
          {filteredSkills.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">No skills found matching your criteria</div>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill) => {
                const user = users.find(u => u.id === skill.userId);
                return user ? (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    user={user}
                    onConnect={() => handleConnect(skill)}
                    showConnectButton={true}
                  />
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}