import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Calendar, MapPin, Trophy, Users } from 'lucide-react';
import { EventCard } from '@/components/EventCard';
import { Event, EVENT_TYPES, SKILL_CATEGORIES } from '@/lib/types';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTab, setSelectedTab] = useState<string>('upcoming');

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockEvents: Event[] = [
      {
        id: '1',
        title: 'Tech Innovation Hackathon 2024',
        description: 'A 48-hour hackathon focused on developing innovative solutions for real-world problems using cutting-edge technology.',
        type: 'hackathon',
        category: 'Programming',
        organizer: 'Tech University Computer Science Department',
        college: 'Tech University',
        location: 'Main Campus, Building A',
        isOnline: false,
        startDate: new Date('2024-10-15T09:00:00'),
        endDate: new Date('2024-10-17T18:00:00'),
        registrationDeadline: new Date('2024-10-10T23:59:59'),
        maxParticipants: 200,
        currentParticipants: 156,
        tags: ['React', 'Node.js', 'AI', 'Blockchain', 'IoT'],
        requirements: ['Basic programming knowledge', 'Laptop required', 'Team of 2-4 members'],
        prizes: ['$5000 First Prize', '$3000 Second Prize', '$1000 Third Prize', 'Internship opportunities'],
        registrationUrl: 'https://techhackathon2024.com/register',
        contactEmail: 'hackathon@techuniv.edu',
        imageUrl: '/api/placeholder/400/200',
        isRegistrationOpen: true,
        createdAt: new Date()
      },
      {
        id: '2',
        title: 'UI/UX Design Workshop',
        description: 'Learn the fundamentals of user interface and user experience design with hands-on projects and industry expert guidance.',
        type: 'workshop',
        category: 'Design',
        organizer: 'Design Club',
        college: 'Art Institute',
        location: 'Design Lab, Floor 3',
        isOnline: false,
        startDate: new Date('2024-10-20T14:00:00'),
        endDate: new Date('2024-10-20T17:00:00'),
        registrationDeadline: new Date('2024-10-18T23:59:59'),
        maxParticipants: 50,
        currentParticipants: 32,
        tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        requirements: ['Laptop with design software', 'Basic design interest'],
        contactEmail: 'design@artinstitute.edu',
        isRegistrationOpen: true,
        createdAt: new Date()
      },
      {
        id: '3',
        title: 'Data Science Competition',
        description: 'Analyze real-world datasets and build predictive models to solve business challenges. Open to all skill levels.',
        type: 'competition',
        category: 'Data Analysis',
        organizer: 'Data Science Society',
        college: 'Tech University',
        location: 'Online',
        isOnline: true,
        startDate: new Date('2024-11-01T00:00:00'),
        endDate: new Date('2024-11-30T23:59:59'),
        registrationDeadline: new Date('2024-10-25T23:59:59'),
        currentParticipants: 89,
        tags: ['Python', 'Machine Learning', 'Pandas', 'Visualization'],
        requirements: ['Python programming knowledge', 'Jupyter Notebook', 'Statistical understanding'],
        prizes: ['$2000 Winner', '$1000 Runner-up', 'Kaggle medals', 'Job referrals'],
        registrationUrl: 'https://datascicomp.com',
        contactEmail: 'datascience@techuniv.edu',
        isRegistrationOpen: true,
        createdAt: new Date()
      },
      {
        id: '4',
        title: 'Entrepreneurship Summit',
        description: 'Connect with successful entrepreneurs, investors, and fellow students. Learn about startup ecosystem and funding opportunities.',
        type: 'conference',
        category: 'Leadership',
        organizer: 'Entrepreneurship Cell',
        college: 'Business School',
        location: 'Grand Auditorium',
        isOnline: false,
        startDate: new Date('2024-11-15T09:00:00'),
        endDate: new Date('2024-11-15T18:00:00'),
        registrationDeadline: new Date('2024-11-10T23:59:59'),
        maxParticipants: 300,
        currentParticipants: 245,
        tags: ['Startup', 'Funding', 'Networking', 'Business Plan'],
        requirements: ['Student ID', 'Business interest'],
        contactEmail: 'ecell@businessschool.edu',
        isRegistrationOpen: true,
        createdAt: new Date()
      },
      {
        id: '5',
        title: 'Photography Contest: Campus Life',
        description: 'Capture the essence of campus life through your lens. Submit your best photographs showcasing student experiences.',
        type: 'competition',
        category: 'Photography',
        organizer: 'Photography Club',
        college: 'All Colleges',
        location: 'Online Submission',
        isOnline: true,
        startDate: new Date('2024-09-01T00:00:00'),
        endDate: new Date('2024-09-30T23:59:59'),
        registrationDeadline: new Date('2024-09-25T23:59:59'),
        currentParticipants: 127,
        tags: ['Photography', 'Campus', 'Student Life', 'Creative'],
        requirements: ['Original photographs only', 'High resolution images', 'Student enrollment'],
        prizes: ['Professional camera equipment', 'Photography workshop access', 'Exhibition opportunity'],
        contactEmail: 'photoclub@college.edu',
        isRegistrationOpen: false,
        createdAt: new Date()
      }
    ];

    setEvents(mockEvents);
    setFilteredEvents(mockEvents.filter(event => event.startDate > new Date()));
  }, []);

  useEffect(() => {
    let filtered = events;

    // Filter by tab (upcoming/past)
    if (selectedTab === 'upcoming') {
      filtered = filtered.filter(event => event.startDate > new Date());
    } else {
      filtered = filtered.filter(event => event.startDate <= new Date());
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    setFilteredEvents(filtered);
  }, [events, searchTerm, selectedType, selectedCategory, selectedTab]);

  const handleRegister = (event: Event) => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, '_blank');
    } else {
      alert(`Registration for "${event.title}" - Please contact: ${event.contactEmail}`);
    }
  };

  const upcomingEvents = events.filter(event => event.startDate > new Date());
  const pastEvents = events.filter(event => event.startDate <= new Date());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Events & Competitions</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {events.reduce((sum, event) => sum + event.currentParticipants, 0)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competitions</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {events.filter(e => e.type === 'competition').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Colleges</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(events.map(e => e.college)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events, organizers, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {EVENT_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Popular Event Types */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Popular Event Types</h3>
          <div className="flex flex-wrap gap-2">
            {EVENT_TYPES.map((type) => (
              <Badge
                key={type}
                variant={selectedType === type ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => setSelectedType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events ({upcomingEvents.length})</TabsTrigger>
            <TabsTrigger value="past">Past Events ({pastEvents.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-6">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-500 mb-4">No upcoming events found</div>
                <Button variant="outline" onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                  setSelectedCategory('all');
                }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onRegister={() => handleRegister(event)}
                    showRegisterButton={true}
                  />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-500 mb-4">No past events found</div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    showRegisterButton={false}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}