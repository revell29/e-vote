import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';

export function UserAvatar({ ...props }) {
  return (
    <Avatar {...props}>
      {props.user?.image ? (
        <AvatarImage alt='Picture' src={props.user.image} />
      ) : (
        <AvatarFallback>
          <span className='sr-only'>Dira</span>
          <Icons.user className='h-4 w-4' />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
