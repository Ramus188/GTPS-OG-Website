import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { Link } from "wouter";

interface PlatformDialogProps {
  trigger: React.ReactNode;
}

export function PlatformDialog({ trigger }: PlatformDialogProps) {
  const platforms = [
    {
      name: "Windows",
      icon: <FontAwesomeIcon icon={faWindows} className="w-8 h-8" />,
      href: "/tutorial/windows"
    },
    {
      name: "macOS",
      icon: <FontAwesomeIcon icon={faApple} className="w-8 h-8" />,
      href: "/tutorial/macos"
    },
    {
      name: "Android",
      icon: <FontAwesomeIcon icon={faAndroid} className="w-8 h-8" />,
      href: "/tutorial/android"
    },
    {
      name: "iOS",
      icon: <FontAwesomeIcon icon={faApple} className="w-8 h-8" />,
      href: "/tutorial/ios"
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl backdrop-blur-sm bg-background/80">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
            Choose Your Platform
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              target="_blank"
            >
              <Button
                variant="outline"
                className="w-full h-32 flex flex-col items-center justify-center gap-4 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {platform.icon}
                <span className="text-lg">{platform.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}