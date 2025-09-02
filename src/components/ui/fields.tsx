import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FieldTextProps {
  label?: string;
  placeholder?: string;
  className?: string;
}

function FieldText({ label, placeholder, className }: FieldTextProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
    </div>
  );
}

interface SelectOption {
  value: string;
  label: string;
}

interface FieldSelectProps {
  label?: string;
  options: SelectOption[];
  className?: string;
  defaultValue?: string;
  autoSelectFirst?: boolean;
}

function FieldSelect({
  label,
  options,
  className,
  defaultValue,
  autoSelectFirst = true
}: FieldSelectProps) {
  
  const initialValue = defaultValue || (autoSelectFirst && options.length > 0 ? options[0].value : undefined);

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label>{label}</Label>}
      <Select defaultValue={initialValue}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export const Field = {
  Text: FieldText,
  Select: FieldSelect,
};
