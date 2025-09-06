import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Skill, User } from '@/lib/types';

interface SkillCardProps {
  skill: Skill;
  user: User;
  onConnect?: () => void;
  showConnectButton?: boolean;
}

export function SkillCard({ skill, user, onConnect, showConnectButton = false }: SkillCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{skill.title}</CardTitle>
              <CardDescription>{user.name} • {user.department}</CardDescription>
            </div>
          </div>
          <Badge className={getLevelColor(skill.level)}>
            {skill.level}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{skill.description}</p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{skill.category}</Badge>
          {skill.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {skill.tags.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{skill.tags.length - 2} more
            </Badge>
          )}
        </div>

        {skill.achievements.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center text-sm font-medium text-gray-700">
              <Award className="w-4 h-4 mr-1" />
              Recent Achievements
            </div>
            {skill.achievements.slice(0, 2).map((achievement) => (
              <div key={achievement.id} className="text-sm text-gray-600 flex items-center">
                <Calendar className="w-3 h-3 mr-2" />
                {achievement.title}
              </div>
            ))}
          </div>
        )}

        {skill.workSamples.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Work Samples</div>
            <div className="flex space-x-2">
              {skill.workSamples.slice(0, 3).map((sample) => (
                <Button
                  key={sample.id}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => sample.url && window.open(sample.url, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {sample.title}
                </Button>
              ))}
            </div>
          </div>
        )}

        {showConnectButton && onConnect && (
          <Button onClick={onConnect} className="w-full">
            Connect with {user.name}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}