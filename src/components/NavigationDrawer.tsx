"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const dataMenu = [
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
]

interface DataMenu {
  name: string
  link: string
}

interface Props {
  dataMenu: DataMenu[]
  isLoggedIn?: boolean
}

export function NavigationDrawer({ dataMenu, isLoggedIn = false }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"ghost"}>
          <Menu></Menu>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-4 sm:px-0 mx-auto w-full max-w-sm overflow py-6">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-base">
              Home
            </a>
            {dataMenu.map((menu) => (
              <a key={menu.name} className={`text-base`} href={menu.link}>
                {menu.name}
              </a>
            ))}
            <a
              href="/register"
              className={`text-base ${isLoggedIn ? "hidden" : ""}`}
            >
              Register
            </a>
            <a
              href="/login"
              className={`text-base ${isLoggedIn ? "hidden" : ""}`}
            >
              Login
            </a>
            <a href="/" className={`text-base ${isLoggedIn ? "" : "hidden"}`}>
              Logout
            </a>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
