"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description: "For users to add and view FAQs",
  },
  {
    title: "Admin",
    href: "/admin",
    description: "For Admins to manage FAQs",
  },
];

const technologies = [
  {
    name: "React (Vite)",
    description:
      "A fast frontend framework for building user interfaces with modern JavaScript and TypeScript support.",
  },
  {
    name: "TypeScript",
    description:
      "A statically typed superset of JavaScript that enhances code quality and maintainability.",
  },
  {
    name: "MongoDB",
    description:
      "A NoSQL database that provides high scalability and flexibility for storing JSON-like documents.",
  },
  {
    name: "Node.js",
    description:
      "A runtime environment for executing JavaScript on the server side, enabling full-stack development.",
  },
  {
    name: "Express.js",
    description:
      "A minimalist and flexible Node.js framework for building APIs and web applications.",
  },
  {
    name: "Nginx",
    description:
      "A high-performance web server and reverse proxy for handling HTTP requests and improving application scalability.",
  },
  {
    name: "Redis",
    description:
      "An in-memory data store used for caching and real-time data processing to enhance performance.",
  },
  {
    name: "AWS EC2",
    description:
      "A cloud computing service that provides scalable virtual servers for deploying applications.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu className="mb-20 border-b border-black shadow-sm">
      <NavigationMenuList>
        <div className="flex flex-col md:flex-row items-center gap-20 justify-center">
          <NavigationMenuItem className="font-extrabold font-mono text-3xl">
            WYSIWYG FAQ FORUM
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              TechStack for Project
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {technologies.map((item, index) => (
                  <ListItem key={index} title={item.name}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>

        {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href}
          >
            <NavigationMenuItem>{component.description}</NavigationMenuItem>
          </ListItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
