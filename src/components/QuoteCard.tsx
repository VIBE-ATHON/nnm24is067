import { Card, CardContent } from '@/components/ui/card';
import { Quote as QuoteIcon, Sparkles } from 'lucide-react';
import { Quote } from '@/lib/quotes';

interface QuoteCardProps {
  quote: Quote;
  variant?: 'default' | 'minimal' | 'featured';
  className?: string;
}

export function QuoteCard({ quote, variant = 'default', className = '' }: QuoteCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-white/50 backdrop-blur-sm border-0 shadow-sm';
      case 'featured':
        return 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-purple-200/50 shadow-lg';
      default:
        return 'bg-white/80 backdrop-blur-sm border-0 shadow-md';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'learning': return 'text-blue-600';
      case 'success': return 'text-green-600';
      case 'mentorship': return 'text-purple-600';
      case 'innovation': return 'text-orange-600';
      case 'growth': return 'text-indigo-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className={`${getVariantStyles()} hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <QuoteIcon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <blockquote className="text-lg font-medium text-gray-800 italic leading-relaxed">
              "{quote.text}"
            </blockquote>
            <div className="flex items-center justify-between">
              <cite className="text-sm font-semibold text-gray-700">
                — {quote.author}
              </cite>
              <div className="flex items-center space-x-2">
                <Sparkles className={`w-4 h-4 ${getCategoryColor(quote.category)}`} />
                <span className={`text-xs font-medium capitalize ${getCategoryColor(quote.category)}`}>
                  {quote.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}