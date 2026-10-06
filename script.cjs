const fs = require("fs");

const content = `import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ArrowRight } from "lucide-react";

interface AttachCarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AttachCarModal({ isOpen, onClose }: AttachCarModalProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const [formData, setFormData] = useState({
    ownerName: "",
    phoneNumber: "",
    email: "",
    brand: "",
    model: "",
    variant: "",
    year: "",
    fuelType: "",
    transmission: "",
    registrationNumber: "",
    seatingCapacity: "",
    availability: "",
    availableFrom: "",
    availableUntil: "",
    additionalNotes: "",
  });

  useEffect(() => {
    if (isOpen) {
      setShowConfirmation(false);
    }
  }, [isOpen]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = \`*ATTACH YOUR CAR - VEHICLE SUBMISSION*

*Owner Details*
Name: \${formData.ownerName}
Phone: \${formData.phoneNumber}
Email: \${formData.email || "N/A"}

*Vehicle Details*
Brand/Make: \${formData.brand}
Model: \${formData.model}
Variant: \${formData.variant || "N/A"}
Year: \${formData.year}
Fuel Type: \${formData.fuelType}
Transmission: \${formData.transmission || "N/A"}
Registration Number: \${formData.registrationNumber}
Seating Capacity: \${formData.seatingCapacity}

*Availability:* \${formData.availability}
\${
  formData.availability === "Specific Dates"
    ? \\\`Available From: \${formData.availableFrom}\\nAvailable Until: \${formData.availableUntil}\\n\\\`
    : ""
}
*Additional Notes:*
\${formData.additionalNotes || "N/A"}

*PHOTOS & DOCUMENTS*
I will send the required vehicle photos and documents separately in this WhatsApp chat.\`;

    const encodedMessage = encodeURIComponent(message);
    const url = \`https://wa.me/919177340016?text=\${encodedMessage}\`;
    
    setWhatsappUrl(url);
    setShowConfirmation(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setShowConfirmation(false), 300);
  };

  const handleContinueToWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto w-[94vw] sm:max-w-[600px] !rounded-[20px] p-6 sm:p-8">
        {!showConfirmation ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-display text-ink">
                Attach Your Car
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* OWNER DETAILS */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Owner Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name *</Label>
                    <Input id="ownerName" required value={formData.ownerName} onChange={(e) => handleChange("ownerName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input id="phoneNumber" type="tel" required value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                  </div>
                </div>
              </div>

              {/* VEHICLE DETAILS */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Vehicle Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand/Make *</Label>
                    <Input id="brand" required value={formData.brand} onChange={(e) => handleChange("brand", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model *</Label>
                    <Input id="model" required value={formData.model} onChange={(e) => handleChange("model", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variant">Variant (Optional)</Label>
                    <Input id="variant" value={formData.variant} onChange={(e) => handleChange("variant", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Manufacture *</Label>
                    <Input id="year" type="number" required value={formData.year} onChange={(e) => handleChange("year", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fuelType">Fuel Type *</Label>
                    <Select required value={formData.fuelType} onValueChange={(val) => handleChange("fuelType", val)}>
                      <SelectTrigger><SelectValue placeholder="Select fuel type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Petrol">Petrol</SelectItem>
                        <SelectItem value="Diesel">Diesel</SelectItem>
                        <SelectItem value="CNG">CNG</SelectItem>
                        <SelectItem value="Electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transmission">Transmission</Label>
                    <Select value={formData.transmission} onValueChange={(val) => handleChange("transmission", val)}>
                      <SelectTrigger><SelectValue placeholder="Select transmission" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Manual">Manual</SelectItem>
                        <SelectItem value="Automatic">Automatic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input id="registrationNumber" required value={formData.registrationNumber} onChange={(e) => handleChange("registrationNumber", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seatingCapacity">Seating Capacity *</Label>
                    <Input id="seatingCapacity" type="number" required value={formData.seatingCapacity} onChange={(e) => handleChange("seatingCapacity", e.target.value)} />
                  </div>
                </div>
              </div>

              {/* RENTAL PREFERENCES */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Rental Preferences</h3>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select required value={formData.availability} onValueChange={(val) => handleChange("availability", val)}>
                    <SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediate / Anytime">Immediate / Anytime</SelectItem>
                      <SelectItem value="Weekends Only">Weekends Only</SelectItem>
                      <SelectItem value="Specific Dates">Specific Dates</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {formData.availability === "Specific Dates" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="availableFrom">Available From *</Label>
                      <Input id="availableFrom" type="date" required value={formData.availableFrom} onChange={(e) => handleChange("availableFrom", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availableUntil">Available Until *</Label>
                      <Input id="availableUntil" type="date" required value={formData.availableUntil} onChange={(e) => handleChange("availableUntil", e.target.value)} />
                    </div>
                  </div>
                )}
              </div>

              {/* ADDITIONAL INFORMATION */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea id="additionalNotes" value={formData.additionalNotes} onChange={(e) => handleChange("additionalNotes", e.target.value)} placeholder="Any other details you want to share..." />
                </div>
              </div>

              <div className="pt-4 border-t">
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-primary text-white font-bold text-lg hover:bg-[#EA580C] transition-colors"
                >
                  Submit via WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-2">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl sm:text-3xl font-bold font-display text-ink text-center mb-2">
                Ready to Continue?
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-6">
              <p className="text-ink/80 text-center text-sm sm:text-base px-2">
                Your vehicle details are ready. WhatsApp will open with the information you provided.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <p className="font-semibold text-ink mb-3 text-sm">
                  Please attach these manually in the same WhatsApp chat:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 text-sm text-ink/80">
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Front photo</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Rear photo</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Left Side photo</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Right Side photo</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Interior photo</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> RC / Registration</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Insurance</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> PUC</div>
                  <div className="flex items-center gap-2.5"><Check className="size-4 text-primary shrink-0" /> Owner ID</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row-reverse gap-3 pt-4">
                <button
                  onClick={handleContinueToWhatsApp}
                  className="w-full sm:flex-1 h-12 rounded-full bg-primary text-white font-bold hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Continue to WhatsApp <ArrowRight className="size-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="w-full sm:flex-1 h-12 rounded-full bg-white text-ink border border-gray-300 font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
`;

fs.writeFileSync("src/components/AttachCarModal.tsx", content);
