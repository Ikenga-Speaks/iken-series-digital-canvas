import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Calendar, Users, Code, Smartphone, Globe, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web App', 'Mobile App', 'Branding', 'E-commerce', 'Enterprise'];

  const projects = [
    {
      id: 1,
      title: 'Lagos State Revenue Portal',
      category: 'Web App',
      description: 'Complete tax payment and revenue management system for Lagos State government with real-time analytics and mobile responsiveness.',
      image: 'photo-1551434678-e076c223a692',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      client: 'Lagos State Government',
      duration: '8 months',
      team: '6 developers',
      year: '2024',
      features: [
        'Online tax payment system',
        'Real-time revenue analytics',
        'Mobile-responsive design',
        'Multi-language support',
        'Advanced security features'
      ],
      results: [
        '300% increase in online payments',
        '50% reduction in processing time',
        '99.9% system uptime',
        'Over 100,000 active users'
      ]
    },
    {
      id: 2,
      title: 'FarmConnect Mobile App',
      category: 'Mobile App',
      description: 'Agricultural marketplace connecting farmers directly with consumers across Nigeria, featuring real-time inventory and logistics tracking.',
      image: 'photo-1416879595882-3373a0480b5b',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      client: 'AgroTech Nigeria',
      duration: '6 months',
      team: '4 developers',
      year: '2023',
      features: [
        'Farmer-consumer marketplace',
        'Real-time inventory tracking',
        'Integrated payment system',
        'GPS-based logistics',
        'Multi-language interface'
      ],
      results: [
        '10,000+ downloads in first month',
        '500+ registered farmers',
        '40% increase in farmer income',
        '4.8/5 app store rating'
      ]
    },
    {
      id: 3,
      title: 'FirstBank Digital Banking',
      category: 'Enterprise',
      description: 'Modern digital banking platform with advanced security features, real-time transactions, and comprehensive account management.',
      image: 'photo-1556742049-0cfed4f6a45d',
      technologies: ['Angular', 'Java Spring', 'Oracle DB', 'Microservices'],
      client: 'First Bank of Nigeria',
      duration: '12 months',
      team: '10 developers',
      year: '2023',
      features: [
        'Secure online banking',
        'Real-time transactions',
        'Advanced fraud detection',
        'Multi-factor authentication',
        'Comprehensive reporting'
      ],
      results: [
        '2M+ active users',
        '99.99% transaction success rate',
        '60% reduction in processing costs',
        'Enhanced security compliance'
      ]
    },
    {
      id: 4,
      title: 'Jumia Seller Dashboard',
      category: 'E-commerce',
      description: 'Comprehensive seller management dashboard for Jumia Nigeria with inventory tracking, sales analytics, and order management.',
      image: 'photo-1472851294608-062f824d29cc',
      technologies: ['Vue.js', 'Python Django', 'MySQL', 'Redis'],
      client: 'Jumia Nigeria',
      duration: '5 months',
      team: '5 developers',
      year: '2022',
      features: [
        'Real-time inventory management',
        'Advanced sales analytics',
        'Order processing automation',
        'Performance dashboards',
        'Mobile optimization'
      ],
      results: [
        '25,000+ active sellers',
        '40% improvement in order processing',
        '30% increase in seller satisfaction',
        '20% boost in platform revenue'
      ]
    },
    {
      id: 5,
      title: 'TechHub Branding',
      category: 'Branding',
      description: 'Complete brand identity design for Nigeria\'s largest tech hub including logo, website, and marketing materials.',
      image: 'photo-1541698444083-023c97d3f4b6',
      technologies: ['Adobe Creative Suite', 'Figma', 'Web Design'],
      client: 'TechHub Nigeria',
      duration: '3 months',
      team: '3 designers',
      year: '2024',
      features: [
        'Brand identity development',
        'Logo and visual guidelines',
        'Website design and development',
        'Marketing collateral',
        'Social media branding'
      ],
      results: [
        '200% increase in brand recognition',
        '150% growth in social media following',
        '300% increase in website traffic',
        'Award-winning design recognition'
      ]
    },
    {
      id: 6,
      title: 'HealthCare Management System',
      category: 'Enterprise',
      description: 'Hospital management system with patient records, appointment scheduling, and telemedicine capabilities for multiple healthcare facilities.',
      image: 'photo-1576091160399-112ba8d25d1f',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      client: 'Nigerian Medical Association',
      duration: '10 months',
      team: '8 developers',
      year: '2023',
      features: [
        'Electronic health records',
        'Appointment scheduling',
        'Telemedicine integration',
        'Billing and insurance',
        'Analytics and reporting'
      ],
      results: [
        '50+ hospitals using the system',
        '100,000+ patient records managed',
        '70% reduction in administrative time',
        'Improved patient care quality'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Showcasing our successful digital transformations and innovative solutions 
            that have helped businesses across Nigeria thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5M+</div>
              <div className="text-muted-foreground">Users Reached</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Filter className="h-5 w-5 text-muted-foreground mt-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "gradient-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-elegant border-border hover:shadow-card transition-smooth">
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/${project.image}?fit=crop&w=800&h=400&q=80`}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">{project.year}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Project Info */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{project.client}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold mb-2">Results Achieved</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1 gradient-primary text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="/contact">Start Your Project</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;