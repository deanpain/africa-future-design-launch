import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Building, Heart, UserPlus } from "lucide-react";

const givingOptions = [
  {
    title: "Grassroot Champion",
    subtitle: "NGOs / Nonprofits / Charities",
    description: "Get verified, receive online donations, and become a recognized Grassroots Champion on Give to Africa. Register now to connect with global donors who believe in local, community-led impact.",
    icon: Users,
    buttonText: "Register now",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Fiscal Sponsors",
    subtitle: "Government Agencies, Civil Society, CBOs, and Movements",
    description: "Need a trusted way to receive tax-deductible international donations for your work in Africa? Register now to unlock global giving—without the burden of registering abroad.",
    icon: Building,
    buttonText: "Register now",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Donors",
    subtitle: "Individual Supporters",
    description: "Give to vetted grassroots organizations creating real, measurable impact across Africa. Support with confidence and help fuel lasting change where it matters most.",
    icon: Heart,
    buttonText: "Explore",
    color: "from-rose-500 to-pink-600"
  },
  {
    title: "Become a Philanthropist",
    subtitle: "DAFs/ Corporate Giving/ Foundations",
    description: "Set up a family foundation or donor-advised fund (DAF) through Give to Africa and support causes close to your heart. Whether you're giving as a family or individual, we make it easy to create impact across Africa.",
    icon: UserPlus,
    buttonText: "Learn More",
    color: "from-amber-500 to-orange-600"
  }
];

const GivingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Easier giving. Greater good.
          </h2>
          <p className="text-xl text-muted-foreground">
            Built by a nonprofit for nonprofits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {givingOptions.map((option, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-10 group-hover:opacity-15 transition-opacity`} />
              
              <CardContent className="p-6 relative z-10 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {option.title}
                </h3>
                
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {option.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {option.description}
                </p>
                
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                >
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GivingSection;