import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Play, 
  Pause,
  Award,
  Code,
  Palette,
  Camera,
  Music,
  BookOpen,
  Trophy,
  Star,
  ExternalLink
} from 'lucide-react';

interface Achievement {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  userCollege: string;
  userYear: number;
  title: string;
  description: string;
  category: string;
  type: 'image' | 'video' | 'project' | 'certification';
  mediaUrl?: string;
  projectUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  tags: string[];
  createdAt: Date;
}

const mockAchievements: Achievement[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Chen',
    userAvatar: '',
    userCollege: 'MIT',
    userYear: 3,
    title: 'Built a React Native Food Delivery App',
    description: 'Just completed my first full-stack mobile app with React Native, Node.js, and MongoDB. Features include real-time tracking, payment integration, and user reviews!',
    category: 'Mobile Development',
    type: 'project',
    projectUrl: 'https://github.com/sarah/food-app',
    likes: 127,
    comments: 23,
    shares: 15,
    isLiked: false,
    tags: ['React Native', 'Node.js', 'MongoDB', 'Mobile App'],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Alex Rodriguez',
    userAvatar: '',
    userCollege: 'Stanford',
    userYear: 2,
    title: 'AI Model Achieves 95% Accuracy',
    description: 'My machine learning model for predicting stock prices just hit 95% accuracy! Used TensorFlow and Python with 5 years of historical data.',
    category: 'Machine Learning',
    type: 'image',
    mediaUrl: '/assets/images/ml-chart.jpg',
    likes: 89,
    comments: 31,
    shares: 22,
    isLiked: true,
    tags: ['Python', 'TensorFlow', 'Machine Learning', 'AI'],
    createdAt: new Date('2024-01-14')
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Maya Patel',
    userAvatar: '',
    userCollege: 'UC Berkeley',
    userYear: 4,
    title: 'UI/UX Design for Mental Health App',
    description: 'Designed a complete user interface for a mental health support app. Focus on accessibility, calming colors, and intuitive navigation.',
    category: 'UI/UX Design',
    type: 'image',
    mediaUrl: '/assets/images/ui-design.jpg',
    likes: 156,
    comments: 42,
    shares: 28,
    isLiked: false,
    tags: ['Figma', 'UI Design', 'UX Research', 'Mental Health'],
    createdAt: new Date('2024-01-13')
  },
  {
    id: '4',
    userId: 'user4',
    userName: 'David Kim',
    userAvatar: '',
    userCollege: 'Carnegie Mellon',
    userYear: 3,
    title: 'Cybersecurity CTF Competition Winner',
    description: 'Won first place in the National Cybersecurity CTF! Solved 15 challenges in penetration testing, cryptography, and network security.',
    category: 'Cybersecurity',
    type: 'certification',
    likes: 203,
    comments: 67,
    shares: 45,
    isLiked: true,
    tags: ['Cybersecurity', 'CTF', 'Penetration Testing', 'Competition'],
    createdAt: new Date('2024-01-12')
  },
  {
    id: '5',
    userId: 'user5',
    userName: 'Emma Johnson',
    userAvatar: '',
    userCollege: 'Harvard',
    userYear: 1,
    title: 'Data Visualization Dashboard',
    description: 'Created an interactive dashboard analyzing climate change data using D3.js and React. Visualizes temperature trends over the past 100 years.',
    category: 'Data Science',
    type: 'project',
    projectUrl: 'https://climate-dashboard.vercel.app',
    likes: 94,
    comments: 18,
    shares: 12,
    isLiked: false,
    tags: ['D3.js', 'React', 'Data Visualization', 'Climate Data'],
    createdAt: new Date('2024-01-11')
  }
];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'mobile development':
    case 'web development':
      return <Code className="w-5 h-5" />;
    case 'ui/ux design':
      return <Palette className="w-5 h-5" />;
    case 'machine learning':
    case 'data science':
      return <Award className="w-5 h-5" />;
    case 'cybersecurity':
      return <Trophy className="w-5 h-5" />;
    case 'photography':
      return <Camera className="w-5 h-5" />;
    case 'music':
      return <Music className="w-5 h-5" />;
    default:
      return <BookOpen className="w-5 h-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'project':
      return 'bg-blue-500';
    case 'certification':
      return 'bg-green-500';
    case 'image':
      return 'bg-purple-500';
    case 'video':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export function AchievementsFeed() {
  const [achievements, setAchievements] = useState<Achievement[]>(mockAchievements);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleLike = (id: string) => {
    setAchievements(prev => prev.map(achievement => 
      achievement.id === id 
        ? { 
            ...achievement, 
            isLiked: !achievement.isLiked,
            likes: achievement.isLiked ? achievement.likes - 1 : achievement.likes + 1
          }
        : achievement
    ));
  };

  const handleShare = (achievement: Achievement) => {
    if (navigator.share) {
      navigator.share({
        title: achievement.title,
        text: achievement.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${achievement.title} - ${window.location.href}`);
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 ring-2 ring-white/20">
                  <AvatarImage src={achievement.userAvatar} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    {achievement.userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-white">{achievement.userName}</h3>
                    <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                      {achievement.userCollege}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <span>Year {achievement.userYear}</span>
                    <span>•</span>
                    <span>{formatTimeAgo(achievement.createdAt)}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={`${getTypeColor(achievement.type)} text-white border-0`}>
                  {achievement.type}
                </Badge>
                <div className="p-2 bg-white/10 rounded-lg">
                  {getCategoryIcon(achievement.category)}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
            </div>

            {/* Media Content */}
            {achievement.type === 'image' && achievement.mediaUrl && (
              <div className="relative rounded-xl overflow-hidden bg-gray-800">
                <img 
                  src={achievement.mediaUrl} 
                  alt={achievement.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23d1d5db" font-size="16"%3E${achievement.category}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            )}

            {achievement.type === 'video' && achievement.mediaUrl && (
              <div className="relative rounded-xl overflow-hidden bg-gray-800">
                <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Button
                    onClick={() => setPlayingVideo(playingVideo === achievement.id ? null : achievement.id)}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4"
                  >
                    {playingVideo === achievement.id ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </Button>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                  Video Demo
                </div>
              </div>
            )}

            {achievement.type === 'project' && achievement.projectUrl && (
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Project Repository</div>
                    <div className="text-gray-300 text-sm">View source code and documentation</div>
                  </div>
                  <Button
                    onClick={() => window.open(achievement.projectUrl, '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            )}

            {achievement.type === 'certification' && (
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-500 rounded-full">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Achievement Unlocked</div>
                    <div className="text-gray-300 text-sm">Certification earned through competition</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {achievement.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Interaction Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center space-x-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(achievement.id)}
                  className={`hover:bg-white/10 ${achievement.isLiked ? 'text-red-400' : 'text-gray-400'}`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${achievement.isLiked ? 'fill-current' : ''}`} />
                  {achievement.likes}
                </Button>
                
                <Button variant="ghost" size="sm" className="text-gray-400 hover:bg-white/10 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {achievement.comments}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare(achievement)}
                  className="text-gray-400 hover:bg-white/10 hover:text-white"
                >
                  <Share className="w-5 h-5 mr-2" />
                  {achievement.shares}
                </Button>
              </div>
              
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{achievement.category}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}