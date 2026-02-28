import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type LeadFormVariant = "full" | "compact";

interface LeadFormProps {
  variant?: LeadFormVariant;
  transparent?: boolean;
  onSubmitted?: () => void;
}

const LeadForm = ({
  variant = "full",
  transparent = false,
  onSubmitted,
}: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please enter your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    if (!API_URL) {
      toast({
        title: "Configuration error",
        description: "API URL is not configured properly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property_project_name: "Orchid IVY - Sector 51 Gurugram",
    };

    try {
      const res = await fetch(`${API_URL}/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Backend error: ${res.status}`);
      }

      const data = await res.json();

      if (data?.success) {
        toast({
          title: "Thank you! 🎉",
          description:
            "Your request has been received. Our team will contact you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        if (onSubmitted) onSubmitted();
      } else {
        throw new Error("Lead submission failed");
      }
    } catch (error) {
      console.error("Lead submission error:", error);

      toast({
        title: "Submission failed",
        description:
          "Please try again or call 9971809303 directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const FormCard = (
    <Card
      className={cn(
        "rounded-2xl shadow-xl border bg-white/90 backdrop-blur-xl transition hover:shadow-2xl",
        transparent ? "bg-background/50 border-white/20" : ""
      )}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black">
          Book Your Site Visit
        </CardTitle>
        <CardDescription className="text-base text-gray-600">
          Fill in your details to receive brochure, pricing & availability.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <User size={16} />
              Full Name *
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
              required
              className="mt-2 rounded-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <Phone size={16} />
              Phone Number *
            </Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 9876543210"
              required
              className="mt-2 rounded-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <Mail size={16} />
              Email Address
            </Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="example@email.com"
              className="mt-2 rounded-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 font-semibold">
              <MessageSquare size={16} />
              Your Requirements
            </Label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Budget, preferred configuration..."
              rows={3}
              className="mt-2 rounded-lg"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold rounded-lg text-white bg-black hover:opacity-90"
          >
            {isSubmitting ? "Submitting..." : "✨ Request Callback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );

  if (variant === "compact") return FormCard;

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Schedule Your Site Visit
          </h2>
          <p className="text-gray-600 mt-4">
            Connect with Lavneet Dabbas for premium independent floors in
            Sector 51, Gurugram.
          </p>
        </div>

        <div className="max-w-md mx-auto">{FormCard}</div>
      </div>
    </section>
  );
};

export default LeadForm;