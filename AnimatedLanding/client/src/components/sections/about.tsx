import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1627389955805-5bf2447e9a75')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
              About GTPS OG
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              GTPS OG is a custom Growtopia Private Server that brings you the best
              gaming experience. Our server features unique items, custom commands,
              active staff, and a friendly community. We strive to provide a fair
              and enjoyable environment for all players.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl backdrop-blur-sm bg-background/80">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
                    Why Choose GTPS OG?
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-foreground">
                  <p>
                    Welcome to GTPS OG, where your Growtopia adventure reaches new heights! Our private server offers an enhanced gaming experience with features you won't find anywhere else.
                  </p>
                  <h3 className="text-lg font-semibold text-primary">Unique Features:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Custom items and rare collectibles</li>
                    <li>Enhanced drop rates and special events</li>
                    <li>Active and helpful moderator team</li>
                    <li>Regular updates and new content</li>
                    <li>Community-driven features and suggestions</li>
                    <li>Fair economy and trading system</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-primary">Community Benefits:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Friendly and welcoming player base</li>
                    <li>Active Discord community</li>
                    <li>Regular events and competitions</li>
                    <li>Quick support response</li>
                  </ul>
                  <p className="italic">
                    Join thousands of players who have already discovered the magic of GTPS OG. Start your journey today!
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { count: "1000+", label: "Daily Players" },
              { count: "500+", label: "Custom Items" },
              { count: "24/7", label: "Server Uptime" },
              { count: "100%", label: "Fair Play" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card p-6 rounded-lg"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.count}
                </h3>
                <p className="text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-20 text-center text-sm text-muted-foreground">
        <p>GTPS OG is not affiliated with nor endorsed by Ubisoft Entertainment.</p>
      </div>
    </section>
  );
}