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

// ---------------- Classes base ----------------
const baseClasses =
    "w-full px-4 py-2 border-2 border-primary-500 rounded-lg text-sm text-primary-500 font-medium bg-white focus:border-primary-400 focus:ring-1 focus:ring-primary-400 hover:border-primary-300 transition-all duration-300 shadow-elegant";

// ---------------- FieldText ----------------
const FieldText = forwardRef<HTMLInputElement, FieldTextProps>(({ label, className, ...props }, ref) => (
    <div className="w-full relative">
        <label className="block text-sm font-medium text-primary-700 mb-1">{label}</label>
        <input ref={ref} className={`${baseClasses} ${className}`} {...props} />
    </div>
));

// ---------------- FieldNumber ----------------
const FieldNumber = forwardRef<HTMLInputElement, FieldNumberProps>(({ label, className, ...props }, ref) => (
    <div className="w-full relative">
        <label className="block text-sm font-medium text-primary-700 mb-1">{label}</label>
        <input type="number" ref={ref} className={`${baseClasses} ${className}`} {...props} />
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
                <label className="block text-sm font-medium text-primary-700 mb-1">{label}</label>

                <div
                    className={`${baseClasses} relative cursor-pointer ${className} pr-10`}
                    onClick={() => setOpen(!open)}
                >
                    <span>{selected.label}</span>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                            className={`w-5 h-5 text-primary-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                        </svg>
                    </div>

                    {open && (
                        <ul className="absolute z-10 left-0 right-0 mt-2 w-full bg-white border border-primary-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {options.map((opt) => (
                                <li
                                    key={opt.value}
                                    className={`px-4 py-2 cursor-pointer flex justify-between items-center
                    hover:bg-primary-100
                    ${selected.value === opt.value ? "bg-primary-100 font-semibold text-primary-700" : ""}`}
                                    onClick={() => handleSelect(opt)}
                                >
                                    <span>{opt.label}</span>
                                </li>
                            ))}
                        </ul>
                    )}
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
