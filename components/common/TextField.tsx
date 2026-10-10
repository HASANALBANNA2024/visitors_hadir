'use client';
/* ==========================================================
 * TextField: label + input (form widget)
 * ========================================================== */
import { useId } from 'react';
import { useLang } from '@/hooks/useLang';
import type { Localized } from '@/data/types';

interface Props {
  label: Localized;
  placeholder: Localized;
  value: string;
  onChange: (value: string) => void;
  name: string;
  type?: 'text' | 'tel' | 'number';
  required?: boolean;
  min?: number;
  autoComplete?: string;
  dir?: 'ltr' | 'rtl';
  inputMode?: 'text' | 'tel' | 'numeric';
  pattern?: string;
  maxLength?: number;
}

export default function TextField({ label, placeholder, value, onChange, name, type = 'text', required = false, min, autoComplete, dir, inputMode, pattern, maxLength }: Props) {
  const { t } = useLang();
  const id = useId();
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{t(label)}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={t(placeholder)}
        required={required}
        min={min}
        autoComplete={autoComplete}
        dir={dir}
        inputMode={inputMode}
        pattern={pattern}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
