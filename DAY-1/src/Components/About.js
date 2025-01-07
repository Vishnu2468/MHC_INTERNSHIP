import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'Leading our vision and strategy',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Driving technical innovation',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mike Johnson',
      role: 'Design Lead',
      description: 'Creating beautiful experiences',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are passionate about creating innovative solutions that help businesses grow and succeed in the digital age.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To empower businesses with cutting-edge technology solutions that drive growth and innovation. We believe in creating sustainable, scalable solutions that make a real difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          We'd love to hear from you and discuss how we can help your business grow.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;