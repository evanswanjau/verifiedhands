import React from "react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 overflow-hidden">
    <div className="aspect-video bg-gray-100 relative overflow-hidden">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
    </div>
  </div>
);

export default ServiceCard;
