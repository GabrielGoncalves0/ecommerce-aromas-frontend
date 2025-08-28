import { forwardRef, InputHTMLAttributes, useState, useRef, useEffect } from "react";

// ---------------- Interfaces base ----------------
interface FieldBaseProps {
  label: string;
  className?: string;
}

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement>, FieldBaseProps { }
interface FieldNumberProps extends InputHTMLAttributes<HTMLInputElement>, FieldBaseProps { }

interface FieldSelectProps extends FieldBaseProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

// ---------------- FieldText ----------------
const FieldText = forwardRef<HTMLInputElement, FieldTextProps>(({ label, className, ...props }, ref) => (
  <div className="w-full relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      ref={ref}
      className={`
        w-full px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-600
        focus:outline-none focus:ring-1 focus:ring-gray-400
        ${className || ''}
      `}
      {...props}
    />
  </div>
));

// ---------------- FieldNumber ----------------
const FieldNumber = forwardRef<HTMLInputElement, FieldNumberProps>(({ label, className, ...props }, ref) => (
  <div className="w-full relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="number"
      ref={ref}
      className={`
        w-full px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-500
        focus:outline-none focus:ring-1 focus:ring-gray-400
        ${className || ''}
      `}
      {...props}
    />
  </div>
));

// ---------------- FieldSelect ----------------
const FieldSelect = forwardRef<HTMLDivElement, FieldSelectProps>(
  ({ label, options, value, onChange, className }, ref) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || options[0]?.value || "");
    const containerRef = useRef<HTMLDivElement>(null);

    const selected = options.find((opt) => opt.value === selectedValue) || options[0];

    const handleSelect = (opt: { value: string; label: string }) => {
      setSelectedValue(opt.value);
      onChange?.(opt.value);
      setOpen(false);
    };

    // Sincroniza valor externo
    useEffect(() => {
      if (value !== undefined) setSelectedValue(value);
    }, [value]);

    // Fecha ao clicar fora
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="w-full relative" ref={containerRef}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

        <div
          ref={ref as any}
          className={`group w-full px-4 py-2 pr-10 border border-gray-400 rounded-lg text-sm text-gray-900 bg-white cursor-pointer focus:outline-none relative ${className || ''}`}
          onClick={() => setOpen(!open)}
        >
          <span className="flex items-center min-h-[1.25rem] text-gray-600">{selected.label}</span>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center pointer-events-none">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div
            className={`absolute z-50 left-0 right-0 mt-3 w-full transition-all duration-200 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          >
            <ul
              className="bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
            >
              {options.map((opt) => (
                <li
                  key={opt.value}
                  className={`px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 ${selected.value === opt.value ? "bg-gray-100 font-semibold text-gray-900" : ""}`}
                  onClick={() => handleSelect(opt)}
                >
                  <span>{opt.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

// ---------------- Export ----------------
export const Field = {
  Text: FieldText,
  Number: FieldNumber,
  Select: FieldSelect,
};