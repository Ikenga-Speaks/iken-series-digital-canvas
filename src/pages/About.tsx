import React from 'react';
import { Users, Target, Eye, Heart, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparent communication, honest practices, and reliable delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success and growth.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project, exceeding expectations consistently.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'IkenSeries Consult Ltd was established with a vision to transform ideas into reality.'
    },
    {
      year: '2020',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise-level software solution for a major Nigerian bank.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 15+ professionals and expanded our service offerings.'
    },
    {
      year: '2022',
      title: 'Digital Marketing Division',
      description: 'Launched our digital marketing services to provide comprehensive solutions.'
    },
    {
      year: '2023',
      title: 'Regional Growth',
      description: 'Expanded operations across West Africa with clients in Ghana, Benin, and Togo.'
    },
    {
      year: '2024',
      title: '150+ Projects',
      description: 'Celebrated milestone of 150+ successful projects and 50+ satisfied clients.'
    }
  ];

  const team = [
    {
      name: 'Ikenna Okafor',
      role: 'CEO & Founder',
      bio: 'Software engineer with 8+ years experience in full-stack development and business strategy.',
      image: 'photo-1507003211169-0a1dd7228f2d'
    },
    {
      name: 'Sarah Adebayo',
      role: 'CTO',
      bio: 'Tech leader specializing in cloud architecture and enterprise software solutions.',
      image: 'photo-1494790108755-2616b612b1'
    },
    {
      name: 'Michael Ugwu',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in React, Node.js, and mobile app development.',
      image: 'photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Blessing Okoro',
      role: 'Design Director',
      bio: 'Creative designer with a passion for user experience and brand identity design.',
      image: 'photo-1438761681033-6461ffad8d80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About IkenSeries</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We are a dynamic Nigerian technology company dedicated to transforming businesses 
            through innovative software solutions, digital marketing, and strategic consulting.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-elegant border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses across Africa with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We are committed to delivering exceptional value through 
                  custom software development, strategic digital marketing, and comprehensive IT consulting.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading technology consulting firm in West Africa, known for our innovative 
                  solutions, exceptional service delivery, and transformative impact on businesses. 
                  We envision a future where technology seamlessly integrates with business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From startup to industry leader - our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ml-12 lg:ml-0`}>
                    <Card className="shadow-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-5 w-5 text-primary mr-2" />
                          <span className="text-2xl font-bold text-primary">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The talented individuals behind IkenSeries success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-card border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <img
                    src={`https://images.unsplash.com/${member.image}?fit=crop&w=400&h=400&q=80`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Team Members</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;