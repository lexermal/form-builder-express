import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "./RepairForm";
import { Label } from "@/components/ui/label";

const GARMIN_DEVICES = [
  "Forerunner 945",
  "Fenix 7",
  "Venu 2",
  "Instinct 2",
  "Vivoactive 4",
];

const REPAIR_TYPES = [
  "Screen Repair",
  "Battery Replacement",
  "Button Repair",
  "Water Damage",
  "Sensor Issues",
  "Software Problems",
];

type Props = {
  onNext: (data: Partial<FormData>) => void;
  initialData: FormData;
};

const DeviceInfoStep = ({ onNext, initialData }: Props) => {
  const [deviceType, setDeviceType] = useState(initialData.deviceType);
  const [repairTypes, setRepairTypes] = useState<string[]>(
    initialData.repairTypes
  );
  const [details, setDetails] = useState(initialData.details);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ deviceType, repairTypes, details });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="device-type">Device Type</Label>
        <Select
          value={deviceType}
          onValueChange={setDeviceType}
        >
          <SelectTrigger id="device-type">
            <SelectValue placeholder="Select your Garmin device" />
          </SelectTrigger>
          <SelectContent>
            {GARMIN_DEVICES.map((device) => (
              <SelectItem key={device} value={device}>
                {device}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Repair Types Needed</Label>
        <div className="grid grid-cols-2 gap-4">
          {REPAIR_TYPES.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={repairTypes.includes(type)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setRepairTypes([...repairTypes, type]);
                  } else {
                    setRepairTypes(repairTypes.filter((t) => t !== type));
                  }
                }}
              />
              <label
                htmlFor={type}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Additional Details</Label>
        <Textarea
          id="details"
          placeholder="Please describe the issues you're experiencing..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full">
        Next
      </Button>
    </form>
  );
};

export default DeviceInfoStep;