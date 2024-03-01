import clsx from 'clsx';

import { FormLabel } from '../ui/form';

type FieldLabel = {
  label: string;
  isRequired?: boolean;
  className?: string;
};

export default function FieldLabel({
  label,
  isRequired,
  className,
}: FieldLabel) {
  return (
    <FormLabel className={clsx('pr-2 text-[#45464E]', className)}>
      {label}
      {isRequired ? <span className='ml-1 text-[#DF4D4D]'>*</span> : null}
    </FormLabel>
  );
}
