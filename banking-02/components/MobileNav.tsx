'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
  
const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
          <Sheet>
            <SheetTrigger>
                <Image 
                  src="/icons/hamberger.svg"
                  width={30}
                  height={30}
                  alt='menu'
                  className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-white">
            <Link href="/"
             className='cursor-pointer flex items-center items-center gap-1 gap-2'>
               <Image
                src="/icons/logo.svg"
                 width={34}
                 height={34}
                 alt='Horizon logo'
                />
                <h1 className='sidebar-logo text-26 font-ibm-plex-serif font-bold text-black-1'>
                   Horizon 
                </h1>
             </Link>
              <div className="mobile-nav-sheet">
                 <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-16 text-white">

                            {sidebarLinks.map((item =>
                        {  
                            const isActive = pathname === item.route|| pathname.startsWith(`${item.route}/`)
                            return (
                                <SheetClose asChild>
                                     <Link href={item.route} 
                                key={item.label}
                                className={cn('sidebar-link',{ 'bg-bank-gradient': isActive} )}>

                                   
                                        <Image 
                                            src={item.imgURL}
                                            alt={item.label}
                                            width={20}
                                            height={20}
                                            className={cn({'brightness-[3] invert-0': isActive })}
                                        />
                                    <p className={cn('text-16 font-semibold text-black-2', { '!text-white': isActive })}>
                                    {item.label}
                                    </p>
                                </Link>
                                </SheetClose>
                            )
                        }
                    ))}

                    </nav>
                 </SheetClose>
              </div>

             
            </SheetContent>
            </Sheet>
    </section>
  )
}

export default MobileNav