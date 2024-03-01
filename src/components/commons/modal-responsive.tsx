import { XIcon } from 'lucide-react';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

export interface ModalResponsiveProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  openModal?: boolean;
  setOpenModal?: (open: boolean) => void;
  title?: string;
  classHeader?: string;
  isDisableOutside?: boolean;
}

export default function ModalResponsive({
  openModal,
  setOpenModal,
  title,
  children,
  className,
  classHeader,
  isDisableOutside,
}: ModalResponsiveProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!isDesktop) {
    return (
      <Drawer open={openModal} onOpenChange={setOpenModal}>
        <DrawerContent className='py-4'>
          <DrawerHeader className='flex items-center justify-between text-left'>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose>
              <XIcon className='h-4 w-4' />
            </DrawerClose>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent
        className={className || 'max-w-4xl'}
        onInteractOutside={
          isDisableOutside
            ? (e: React.MouseEvent) => e.preventDefault()
            : undefined
        }
      >
        <DialogHeader className={cn(classHeader)}>
          <DialogTitle className='text-xl'>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export function ModalResponsiveFooter({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (!isDesktop) {
    return <DrawerFooter {...props}>{children}</DrawerFooter>;
  }

  return <DialogFooter {...props}>{children}</DialogFooter>;
}
