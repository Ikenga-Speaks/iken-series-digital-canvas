import React from 'react';
import { ArrowRight, Code, Megaphone, Palette, Cloud, Star, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack web and mobile applications built with modern technologies.'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and digital advertising strategies.'
    },
    {
      icon: Palette,
      title: 'Branding & Identity',
      description: 'Complete brand identity design and corporate visual solutions.'
    },
    {
      icon: Cloud,
      title: 'IT Consulting',
      description: 'Technology strategy and infrastructure consulting services.'
    }
  ];

  const testimonials = [
    {
      name: 'Adebayo Ogundimu',
      role: 'CEO, TechStart Nigeria',
      content: 'IkenSeries transformed our business with their exceptional software development. Our productivity increased by 300%.',
      rating: 5
    },
    {
      name: 'Fatima Mohammed',
      role: 'Marketing Director, GreenTech',
      content: 'Their digital marketing strategies helped us reach new markets across West Africa. Outstanding results!',
      rating: 5
    },
    {
      name: 'Chinedu Okwu',
      role: 'Founder, EduApp Solutions',
      content: 'Professional, reliable, and innovative. IkenSeries delivered beyond our expectations.',
      rating: 5
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transforming Ideas
                <span className="block text-primary-accent">Into Reality</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We specialize in full-stack software development, digital marketing, 
                and custom technology solutions that drive business growth across Nigeria and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="IkenSeries Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we provide comprehensive technology solutions 
              tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth border-border shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-smooth">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary text-white">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose IkenSeries?</h2>
              <div className="space-y-4">
                {[
                  'Expert team with 5+ years of experience',
                  'Custom solutions tailored to your business',
                  'Proven track record with 150+ successful projects',
                  '24/7 customer support and maintenance',
                  'Competitive pricing and transparent billing',
                  'Latest technologies and best practices'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-card rounded-lg p-8 shadow-elegant border border-border">
                <div className="flex items-center space-x-4 mb-6">
                  <Users className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Professional Team</h3>
                    <p className="text-muted-foreground">Experienced developers and designers</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">2.5x</div>
                    <div className="text-sm text-muted-foreground">Average ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tech insights, industry trends, 
            and updates on our services.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white text-black border-white"
            />
            <Button className="bg-white text-primary hover:bg-white/90 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;