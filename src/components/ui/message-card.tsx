
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, ClockIcon, RepeatIcon } from 'lucide-react';
import { Button } from './button';

interface MessageCardProps {
  message: string;
  scheduledFor: Date;
  repeat?: string;
  className?: string;
  onDelete?: () => void;
}

export function MessageCard({ message, scheduledFor, repeat, className, onDelete }: MessageCardProps) {
  return (
    <div className={cn("bg-white dark:bg-gray-800 rounded-lg border border-border/30 p-4 hover:shadow-md transition-all", className)}>
      <p className="text-foreground mb-4 line-clamp-3">{message}</p>
      
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-3.5 w-3.5" />
          <span>{format(scheduledFor, 'PPP')}</span>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="h-3.5 w-3.5" />
          <span>{format(scheduledFor, 'p')}</span>
        </div>
        {repeat && (
          <div className="flex items-center gap-1">
            <RepeatIcon className="h-3.5 w-3.5" />
            <span>{repeat}</span>
          </div>
        )}
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button variant="ghost" size="sm">Edit</Button>
        {onDelete && (
          <Button variant="ghost" size="sm" className="text-destructive" onClick={onDelete}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
