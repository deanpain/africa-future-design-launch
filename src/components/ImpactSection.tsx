import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Droplets, Users, ArrowRight } from "lucide-react";
import educationImage from "@/assets/education-impact.jpg";
import womenImage from "@/assets/women-empowerment.jpg";
import waterImage from "@/assets/clean-water.jpg";

const ImpactSection = () => {
  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education & Skills",
      description: "Building schools, training teachers, and providing educational resources to unlock potential.",
      image: educationImage,
      stats: "2,500+ Students",
      color: "primary"
    },
    {
      icon: Users,
      title: "Women's Empowerment", 
      description: "Supporting women-led initiatives, microfinance, and leadership development programs.",
      image: womenImage,
      stats: "800+ Women",
      color: "secondary"
    },
    {
      icon: Droplets,
      title: "Clean Water & Health",
      description: "Installing wells, water systems, and health clinics to ensure basic human dignity.",
      image: waterImage,
      stats: "50+ Communities",
      color: "accent"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Our Impact</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Transforming</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Communities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every donation creates a ripple effect of positive change. See how your 
            generosity is building stronger, more resilient communities across Africa.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-0 bg-card-elevated animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`
                        ${area.color === 'primary' ? 'bg-primary/90 text-primary-foreground' : ''}
                        ${area.color === 'secondary' ? 'bg-secondary/90 text-secondary-foreground' : ''}
                        ${area.color === 'accent' ? 'bg-accent/90 text-accent-foreground' : ''}
                      `}
                    >
                      {area.stats}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <area.icon 
                      className={`w-6 h-6 mr-3 
                        ${area.color === 'primary' ? 'text-primary' : ''}
                        ${area.color === 'secondary' ? 'text-secondary' : ''}
                        ${area.color === 'accent' ? 'text-accent' : ''}
                      `} 
                    />
                    <h3 className="font-semibold text-lg text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto font-medium text-primary hover:text-primary-light group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Make a Difference?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of donors who are creating lasting change in African communities. 
              Every contribution, no matter the size, makes an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light shadow-medium"
              >
                Start Giving Today
              </Button>
              <Button variant="outline" size="lg">
                View All Causes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;