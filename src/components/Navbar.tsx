import { NavLink } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import ModeToggle from './ModeToggle'
import LOGO from '@/assets/logo.png'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

function Navbar() {
  return (
    <>
      <header className="flex justify-between py-10">
        <NavLink to={'/'} aria-label="RustBlog" className="flex items-center">
          <div className="mr-3 w-16">
            <img src={LOGO} alt="logo" />
          </div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            RustBlog
          </div>
        </NavLink>
        <div className="flex  items-center gap-1 ">
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <NavLink to={'/blog'}>Blog</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <NavLink to={'/tags'}>Tags</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <NavLink to={'/projects'}>Projects</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <NavLink to={'/about'}>About</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button className="ml-1 sm:hidden" variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent side={'right'}>
              <NavigationMenu className=" mx-auto mt-16">
                <NavigationMenuList className="flex flex-col  gap-10 ">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <SheetClose asChild>
                        <NavLink to={'/blog'}>Blog</NavLink>
                      </SheetClose>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <SheetClose asChild>
                        <NavLink to={'/tags'}>Tags</NavLink>
                      </SheetClose>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <SheetClose asChild>
                        <NavLink to={'/projects'}>Projects</NavLink>
                      </SheetClose>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <SheetClose asChild>
                        <NavLink to={'/about'}>About</NavLink>
                      </SheetClose>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}

export default Navbar
