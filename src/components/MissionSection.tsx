import { Button } from "@/components/ui/button";
import { Globe, Heart, Users, ArrowRight } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">Since 2023</p>
              <h3 className="text-2xl font-bold text-muted-foreground">Making a difference</h3>
              <p className="text-primary font-medium">Our Mission</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Bridging Continents,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connecting Hearts
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connecting global donors with grassroots African organizations to create sustainable, 
              community-led solutions that transform lives and empower local communities across the continent.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold">Global Reach</h4>
                <p className="text-sm text-muted-foreground">Connecting continents through purpose</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold">Community Impact</h4>
                <p className="text-sm text-muted-foreground">Real change in local communities</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold">Grassroots Focus</h4>
                <p className="text-sm text-muted-foreground">Empowering local organizations</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Learn About Our Mission
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Impact Stories
              </Button>
            </div>
          </div>
          
          {/* Right side - Image/Visual element */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Building Bridges</h3>
                  <p className="text-muted-foreground">
                    Every donation creates a connection between hearts across continents
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;