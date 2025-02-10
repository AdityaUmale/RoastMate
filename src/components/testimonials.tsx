import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Made my bestie's day with a hilarious roast card! Perfectly captured our inside jokes and friendly banter. The mix of Hindi and English made it so relatable!",
      name: "Priya Shah",
      designation: "Roasted her best friend",
      src: "/v1.png",
    },
    {
      quote:
        "Created the perfect roast for my childhood friend! We've been roasting each other since school days, and this card nailed our friendship vibe - savage yet wholesome!",
      name: "Rahul Kapoor",
      designation: "Roasted his best friend since school",
      src: "/v2.png",
    },
    {
      quote:
        "Such a fun way to express love through humor! Made a roast card for my girlfriend, and she loved how it mixed teasing with sweet moments.",
      name: "Arjun Mehta",
      designation: "Roasted his girlfriend",
      src: "/v3.png",
    },
    {
      quote: "The Hinglish roasts are pure gold! Created one for my college roommate, and it perfectly captured our crazy friendship.",
      name: "Zara Khan",
      designation: "Roasted her roommate",
      src: "/v4.png",
    },
  ]
  return <AnimatedTestimonials testimonials={testimonials} />
}

