import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, Clock } from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedService?: string;
  services: { title: string }[];
}

const BookingModal = ({
  isOpen,
  onOpenChange,
  selectedService,
  services,
}: BookingModalProps) => {
  const [service, setService] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedService) setService(selectedService);
  }, [selectedService, isOpen]);

  const handleSubmit = async () => {
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !service ||
      !location ||
      !description ||
      !preferredDate
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          service,
          location,
          description,
          preferredDate,
        }),
      });
      if (!res.ok) throw new Error("Failed to send booking");
      toast.success("Your booking request has been sent successfully!");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setDescription("");
      setPreferredDate("");
      setService("");
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast.error(
        "There was an error sending your booking. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full h-full rounded-none overflow-y-scroll md:h-auto md:min-w-[65%] md:rounded-2xl p-0 border-none">
        <div className="grid lg:grid-cols-2">
          {/* Form Section */}
          <div className="space-y-4 p-8">
            <h1 className="font-bold text-3xl mb-2">Book a Service</h1>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll connect you with the right
              professional
            </p>
            {/* Name Fields Row */}
            <div className="flex flex-col md:grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input
                  placeholder="John"
                  className="p-3 rounded-lg mt-1"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input
                  placeholder="Doe"
                  className="p-3 rounded-lg mt-1"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Contact Info Row */}
            <div className="flex flex-col md:grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="0700 123 456"
                  className="p-3 rounded-lg mt-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="p-3 rounded-lg mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Service Selection - Full Width */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Type</label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {services.map((s) => (
                    <SelectItem key={s.title} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input
                placeholder="Enter your location"
                className="p-3 rounded-lg mt-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Description</label>
              <Textarea
                placeholder="Describe what you need help with"
                className="h-24 p-3 rounded-lg mt-1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Date</label>
              <Input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Sending..." : "Book Now"}
            </Button>
          </div>

          {/* Right Section */}
          <div
            className="hidden lg:block relative rounded-r-2xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Verified</span>
                  </div>
                  <p className="text-sm text-white/90">
                    All professionals are thoroughly vetted and verified
                  </p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Quick Response</span>
                  </div>
                  <p className="text-sm text-white/90">
                    Get connected with professionals within minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
