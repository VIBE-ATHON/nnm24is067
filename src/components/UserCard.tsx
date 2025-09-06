import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, GraduationCap, Briefcase, MessageCircle } from 'lucide-react';
import { User } from '@/lib/types';

interface UserCardProps {
  user: User;
  onMessage?: () => void;
  showMessageButton?: boolean;
}

export function UserCard({ user, onMessage, showMessageButton = false }: UserCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-lg">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl">{user.name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              {user.role === 'student' ? (
                <GraduationCap className="w-4 h-4 mr-1" />
              ) : (
                <Briefcase className="w-4 h-4 mr-1" />
              )}
              {user.role === 'student' ? `Year ${user.year}` : user.position}
            </CardDescription>
          </div>
          <Badge variant={user.role === 'student' ? 'default' : 'secondary'}>
            {user.role}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{user.bio}</p>
        
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          {user.college} • {user.department}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700">
            {user.role === 'student' ? 'Skills' : 'Specializations'}
          </div>
          <div className="flex flex-wrap gap-2">
            {user.specializations.slice(0, 4).map((spec) => (
              <Badge key={spec} variant="outline" className="text-xs">
                {spec}
              </Badge>
            ))}
            {user.specializations.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{user.specializations.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {showMessageButton && onMessage && (
          <Button onClick={onMessage} className="w-full" variant="outline">
            <MessageCircle className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        )}
      </CardContent>
    </Card>
  );
}