import React from 'react';
import { MapPin, Clock, Users, Briefcase, Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Careers = () => {
  const openRoles = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create beautiful and intuitive user experiences for our clients\' digital products.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Drive digital marketing campaigns and help our clients grow their online presence.'
    }
  ];

  const benefits = [
    { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { icon: Clock, title: 'Flexible Hours', description: 'Work-life balance priority' },
    { icon: Users, title: 'Team Collaboration', description: 'Supportive work environment' },
    { icon: Star, title: 'Growth Opportunities', description: 'Continuous learning and development' }
  ];

  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Build the future of technology in Nigeria with IkenSeries. We're looking for passionate individuals to join our growing team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Join us in transforming ideas into reality</p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="shadow-card border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{role.department}</Badge>
                        <Badge variant="outline">{role.type}</Badge>
                        <Badge variant="outline">{role.experience}</Badge>
                      </div>
                    </div>
                    <Button className="gradient-primary text-white">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {role.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8">Send us your resume and let's start the conversation.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;