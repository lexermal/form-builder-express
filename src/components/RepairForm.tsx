import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeviceInfoStep from "./DeviceInfoStep";
import PhotoUploadStep from "./PhotoUploadStep";
import { useToast } from "@/components/ui/use-toast";

export type FormData = {
  deviceType: string;
  repairTypes: string[];
  details: string;
  photos: File[];
};

const RepairForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    deviceType: "",
    repairTypes: [],
    details: "",
    photos: [],
  });
  const { toast } = useToast();

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (!data.deviceType || !data.repairTypes.length || !data.details) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (photos: File[]) => {
    setFormData((prev) => ({ ...prev, photos }));
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you soon.",
    });
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, photos });
  };

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Garmin Device Repair
          </CardTitle>
          <div className="flex justify-center space-x-2 mt-4">
            <div
              className={`h-2 w-16 rounded ${
                step === 1 ? "bg-primary" : "bg-secondary"
              }`}
            />
            <div
              className={`h-2 w-16 rounded ${
                step === 2 ? "bg-primary" : "bg-secondary"
              }`}
            />
          </div>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <DeviceInfoStep onNext={handleNext} initialData={formData} />
          ) : (
            <PhotoUploadStep onBack={handleBack} onSubmit={handleSubmit} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RepairForm;