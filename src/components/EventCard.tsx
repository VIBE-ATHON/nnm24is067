import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, Trophy, ExternalLink, Globe } from 'lucide-react';
import { Event } from '@/lib/types';

interface EventCardProps {
  event: Event;
  onRegister?: () => void;
  showRegisterButton?: boolean;
}

export function EventCard({ event, onRegister, showRegisterButton = true }: EventCardProps) {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'competition': return 'bg-red-100 text-red-800';
      case 'hackathon': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'seminar': return 'bg-green-100 text-green-800';
      case 'conference': return 'bg-indigo-100 text-indigo-800';
      case 'networking': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const isUpcoming = event.startDate > new Date();
  const isRegistrationOpen = event.isRegistrationOpen && event.registrationDeadline > new Date();
  const daysUntilEvent = Math.ceil((event.startDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {event.imageUrl && (
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg relative overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getEventTypeColor(event.type)}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          </div>
          {isUpcoming && daysUntilEvent <= 7 && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-orange-100 text-orange-800">
                {daysUntilEvent === 0 ? 'Today' : `${daysUntilEvent} days left`}
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Organized by {event.organizer} • {event.college}
            </CardDescription>
          </div>
          {!event.imageUrl && (
            <Badge className={getEventTypeColor(event.type)}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-700">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(event.startDate)}
            {event.startDate.toDateString() !== event.endDate.toDateString() && 
              ` - ${formatDate(event.endDate)}`
            }
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            {event.isOnline ? (
              <>
                <Globe className="w-4 h-4 mr-2" />
                Online Event
              </>
            ) : (
              <>
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </>
            )}
          </div>
          
          {event.maxParticipants && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              {event.currentParticipants}/{event.maxParticipants} participants
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            Registration deadline: {formatDate(event.registrationDeadline)}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{event.category}</Badge>
          {event.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {event.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{event.tags.length - 3} more
            </Badge>
          )}
        </div>

        {event.prizes && event.prizes.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center text-sm font-medium text-gray-700">
              <Trophy className="w-4 h-4 mr-1" />
              Prizes
            </div>
            <div className="text-sm text-gray-600">
              {event.prizes.slice(0, 2).join(', ')}
              {event.prizes.length > 2 && '...'}
            </div>
          </div>
        )}

        {event.requirements.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Requirements</div>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {event.requirements.slice(0, 2).map((req, index) => (
                <li key={index}>{req}</li>
              ))}
              {event.requirements.length > 2 && (
                <li>+{event.requirements.length - 2} more requirements</li>
              )}
            </ul>
          </div>
        )}

        {showRegisterButton && (
          <div className="pt-4 border-t">
            {isRegistrationOpen ? (
              <div className="space-y-2">
                <Button 
                  onClick={onRegister} 
                  className="w-full"
                  disabled={event.maxParticipants ? event.currentParticipants >= event.maxParticipants : false}
                >
                  {event.maxParticipants && event.currentParticipants >= event.maxParticipants 
                    ? 'Event Full' 
                    : 'Register Now'
                  }
                </Button>
                {event.registrationUrl && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(event.registrationUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    External Registration
                  </Button>
                )}
              </div>
            ) : (
              <Button disabled className="w-full">
                Registration Closed
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}