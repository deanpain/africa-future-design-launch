import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Shield } from "lucide-react";
import heroImage from "@/assets/hero-african-communities.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-earth opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                <Shield className="w-3 h-3 mr-1" />
                501(c)(3) Nonprofit
              </Badge>
              <Badge variant="outline">Tax Deductible</Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Trusted,</span>{" "}
                <span className="text-secondary">International</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Giving
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We connect generous donors with trusted local nonprofits across Africa. 
                Make cross-border giving <strong>easy, transparent, and impactful</strong> — 
                so communities can thrive on their own terms.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Direct impact to vetted African nonprofits",
                "100% tax-deductible donations",
                "Transparent funding and progress tracking"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light shadow-medium group"
              >
                Donate Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Explore Causes
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-accent hover:bg-accent/10"
              >
                Become a Sponsor
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Funded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">$2M+</div>
                <div className="text-sm text-muted-foreground">Impact Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">25</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="African communities thriving through education, clean water, and economic empowerment"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay with impact highlight */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Latest Impact
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Clean water access provided to 500+ families in Kenya this month
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;