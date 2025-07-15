import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

interface Contact {
  badgeText: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapSrc: string;
}

interface ContactSectionProps {
  contact: Contact;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });
      if (!res.ok) throw new Error("Failed to send enquiry");
      toast.success("Your enquiry has been sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error(
        "There was an error sending your enquiry. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
            {contact.badgeText}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {contact.title}
          </h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form Card */}
          <Card className="p-8 rounded-2xl bg-white shadow-lg border-none">
            <h3 className="text-2xl font-bold text-gray-800">
              Send us a message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+254 700 123 456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Map & Contact Info */}
          <div className="relative h-full">
            {/* Map Container */}
            <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src={contact.mapSrc}
                width="100%"
                height="100%"
                className="absolute inset-0 rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info Card */}
            <Card className="absolute bottom-6 left-6 right-6 max-w-md p-6 bg-white/95 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{contact.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="text-gray-600 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <p className="text-gray-600">{contact.hours}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
