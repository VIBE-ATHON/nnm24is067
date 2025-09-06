import { PageLayout } from '@/components/PageLayout';
import { AchievementsFeed } from '@/components/AchievementsFeed';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Filter,
  Search,
  Plus,
  Sparkles
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AchievementsFeedPage() {
  const categories = [
    'All Categories',
    'Web Development',
    'Mobile Development',
    'Machine Learning',
    'UI/UX Design',
    'Data Science',
    'Cybersecurity',
    'Photography',
    'Music',
    'Writing'
  ];

  const trendingTags = [
    'React', 'Python', 'AI', 'Design', 'JavaScript', 'Machine Learning',
    'Node.js', 'Figma', 'TensorFlow', 'Mobile App'
  ];

  return (
    <PageLayout className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Student Achievements
                </h1>
                <p className="text-sm text-gray-600">Discover amazing projects and skills from talented students</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Share Achievement
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search achievements, skills, or students..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Achievement Feed */}
            <AchievementsFeed />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Now */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="mr-2 mb-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 cursor-pointer"
                  >
                    #{tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Award className="w-5 h-5 mr-2 text-green-400" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Sarah Chen', achievements: 12, college: 'MIT' },
                  { name: 'Alex Rodriguez', achievements: 9, college: 'Stanford' },
                  { name: 'Maya Patel', achievements: 8, college: 'UC Berkeley' },
                  { name: 'David Kim', achievements: 7, college: 'Carnegie Mellon' }
                ].map((user, index) => (
                  <div key={user.name} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{user.name}</div>
                      <div className="text-xs text-gray-400">{user.college}</div>
                    </div>
                    <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                      {user.achievements}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Stats */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">New Achievements</span>
                  <span className="text-white font-bold">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Active Students</span>
                  <span className="text-white font-bold">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Likes</span>
                  <span className="text-white font-bold">3,567</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">New Connections</span>
                  <span className="text-white font-bold">89</span>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  Popular Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Web Development', count: 156 },
                  { name: 'Machine Learning', count: 89 },
                  { name: 'UI/UX Design', count: 67 },
                  { name: 'Mobile Development', count: 45 },
                  { name: 'Data Science', count: 34 }
                ].map((category) => (
                  <div key={category.name} className="flex justify-between items-center">
                    <span className="text-gray-300">{category.name}</span>
                    <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}