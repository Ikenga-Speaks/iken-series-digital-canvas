import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  Database, 
  Cloud, 
  ArrowRight, 
  CheckCircle,
  Globe,
  BarChart3,
  Shield,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';

const Services = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Software Development',
      subtitle: 'End-to-end web and mobile applications',
      price: 'From ₦500,000',
      features: [
        'Custom web application development',
        'RESTful API development and integration',
        'Database design and optimization',
        'Progressive Web Apps (PWA)',
        'Third-party service integrations',
        'Performance optimization',
        'Code review and testing',
        'Deployment and DevOps setup'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'],
      description: 'We build scalable, secure, and high-performance web applications using modern technologies. Our full-stack development covers everything from frontend user interfaces to backend APIs and database architecture.',
      deliverables: [
        'Complete source code with documentation',
        'User and admin dashboards',
        'Mobile-responsive design',
        'API documentation',
        'Testing suite',
        '3 months of free support'
      ]
    },
    {
      icon: Smartphone,
      title: 'Website & Mobile App Design',
      subtitle: 'User-centered design solutions',
      price: 'From ₦200,000',
      features: [
        'UI/UX design and prototyping',
        'Mobile app development (React Native)',
        'Responsive web design',
        'User research and testing',
        'Wireframing and mockups',
        'Design system creation',
        'Cross-platform compatibility',
        'App store deployment'
      ],
      technologies: ['Figma', 'React Native', 'Flutter', 'Adobe XD', 'Sketch'],
      description: 'Our design team creates intuitive and engaging user experiences for web and mobile platforms. We focus on user-centered design principles to ensure your applications are both beautiful and functional.',
      deliverables: [
        'Complete design system',
        'High-fidelity prototypes',
        'Mobile app (iOS & Android)',
        'Design guidelines',
        'User testing report',
        'App store submission'
      ]
    },
    {
      icon: Palette,
      title: 'Branding & Identity',
      subtitle: 'Complete brand transformation',
      price: 'From ₦150,000',
      features: [
        'Logo design and brand identity',
        'Brand guidelines and style guides',
        'Marketing collateral design',
        'Website branding integration',
        'Business card and stationery design',
        'Social media branding',
        'Brand strategy development',
        'Trademark registration assistance'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Canva Pro', 'Brand guidelines'],
      description: 'We help businesses establish a strong brand presence through comprehensive branding solutions. From logo design to complete brand identity systems, we create memorable brands that resonate with your target audience.',
      deliverables: [
        'Logo variations and formats',
        'Brand guidelines document',
        'Business stationery set',
        'Social media templates',
        'Website branding assets',
        'Marketing materials'
      ]
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      subtitle: 'Drive traffic and increase conversions',
      price: 'From ₦100,000/month',
      features: [
        'Search Engine Optimization (SEO)',
        'Google Ads and Facebook Ads management',
        'Social media marketing strategy',
        'Content marketing and blogging',
        'Email marketing campaigns',
        'Analytics and performance tracking',
        'Conversion rate optimization',
        'Local SEO for Nigerian businesses'
      ],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Business', 'Mailchimp', 'SEMrush'],
      description: 'Our digital marketing services help businesses increase their online visibility and reach their target audience effectively. We use data-driven strategies to maximize ROI and drive sustainable growth.',
      deliverables: [
        'SEO audit and strategy',
        'Monthly performance reports',
        'Ad campaign management',
        'Content calendar',
        'Social media growth',
        'Lead generation system'
      ]
    },
    {
      icon: Database,
      title: 'Custom ERP Systems',
      subtitle: 'Streamline business operations',
      price: 'From ₦1,000,000',
      features: [
        'Business process analysis',
        'Custom ERP development',
        'Inventory management systems',
        'Customer relationship management (CRM)',
        'Financial management modules',
        'Reporting and analytics',
        'User training and support',
        'System integration'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker', 'Redis'],
      description: 'We develop custom Enterprise Resource Planning (ERP) systems tailored to your specific business needs. Our solutions help streamline operations, improve efficiency, and provide valuable business insights.',
      deliverables: [
        'Complete ERP system',
        'User training sessions',
        'System documentation',
        'Data migration',
        'Performance monitoring',
        '6 months of support'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Integration & Hosting',
      subtitle: 'Scalable cloud solutions',
      price: 'From ₦75,000/month',
      features: [
        'Cloud infrastructure setup',
        'Application hosting and deployment',
        'Database management and backup',
        'SSL certificates and security',
        'CDN setup for fast loading',
        'Monitoring and maintenance',
        'Scalability planning',
        'Disaster recovery solutions'
      ],
      technologies: ['AWS', 'Google Cloud', 'DigitalOcean', 'Docker', 'Kubernetes', 'Nginx'],
      description: 'Our cloud services ensure your applications are secure, scalable, and always available. We handle the technical infrastructure so you can focus on growing your business.',
      deliverables: [
        'Cloud infrastructure setup',
        'Automated backup system',
        'Security configuration',
        'Performance monitoring',
        'Monthly reports',
        '24/7 support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business 
            and drive sustainable growth in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant border-border overflow-hidden">
                <CardHeader className="bg-accent/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.subtitle}</p>
                        <Badge variant="outline" className="mt-2">{service.price}</Badge>
                      </div>
                    </div>
                    <Collapsible open={openSections.includes(index)} onOpenChange={() => toggleSection(index)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline">
                          {openSections.includes(index) ? 'Show Less' : 'Learn More'}
                          <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${
                            openSections.includes(index) ? 'rotate-90' : ''
                          }`} />
                        </Button>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Settings className="h-5 w-5 text-primary mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Collapsible open={openSections.includes(index)} onOpenChange={() => toggleSection(index)}>
                    <CollapsibleContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Complete Feature List</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Deliverables</h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                <BarChart3 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <Button asChild className="gradient-primary text-white">
                          <Link to="/contact">Request Quote</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/projects">View Examples</Link>
                        </Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card border-border">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous testing and quality control processes ensure every project meets the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card border-border">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of the Nigerian market and business environment for targeted solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card border-border">
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive support and maintenance services to ensure your success long after launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;