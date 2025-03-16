import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BounceCardProps {
  children: React.ReactNode;
  className?: string;
}

export function BounceCard({ children, className }: BounceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "bg-card border rounded-lg shadow-lg transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
