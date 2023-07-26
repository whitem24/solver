import { MessageSquare, ArrowRight, ImageIcon, VideoIcon, Music, Code } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const TOOLS = [
    {
      label: "Let's chat",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: 'bg-violet-500/10',
      href: "/chat"
    },
    {
      label: "Get your images",
      icon: ImageIcon,
      color: "text-pink-500",
      bgColor: 'bg-pink-500/10',
      href: "/image"
    },
    {
      label: "Get your videos",
      icon: VideoIcon,
      color: "text-orange-500",
      bgColor: 'bg-orange-500/10',
      href: "/chat"
    },
    {
      label: "Generate your music",
      icon: Music,
      color: "text-emerald-500",
      bgColor: 'bg-emerald-500/10',
      href: "/music"
    },
    {
      label: "Generate your code",
      icon: Code,
      color: "text-neutral-500",
      bgColor: 'bg-neutral-500/10',
      href: "/chat"
    },
  
  ]

  export const testimonials = [
    {
        name: "Joe",
        avatar: "J",
        title: "Software developer",
        description: "Great App!"
    },
    {
        name: "Antonio",
        avatar: "A",
        title: "Software developer",
        description: "Easy to use, very accurate results!"
    },
    {
      name: "Jose",
      avatar: "J",
      title: "Web designer",
      description: "Great experience using this App"
    },
    {
      name: "Louis",
      avatar: "L",
      title: "Software developer",
      description: "Easy to use"
    }
]