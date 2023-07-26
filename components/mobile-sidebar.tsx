'use client';
import { Button } from './ui/button';
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './sidebar';
import { useState, useEffect } from 'react';

interface MobileSidebarProps {
  apiLimitCount : number;
  isPro : boolean;
}

const MobileSidebar = ({apiLimitCount=0, isPro=false}:MobileSidebarProps) => {
    
  //Solving hydration problem
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
   setIsMounted(true);
  }, []);
 
  if (!isMounted) {
    return null;
  }

  /* if (isPro) {
    return null;
  } */
 
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant={"ghost"} size={"icon"} className='md:hidden'>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className='p-0'>
            <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar