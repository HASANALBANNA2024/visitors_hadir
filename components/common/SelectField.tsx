'use client';
/* ==========================================================
 * SelectField: label + dropdown (form widget)
 * The first empty option shows the placeholder text.
 * ========================================================== */
import { useId } from 'react';
import { useLang } from '@/hooks/useLang';
import type { Localized, SelectOption } from '@/data/types';

interface Props {
  label: Localized;
  placeholder: Localized;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  required?: boolean;
}

export default function SelectField({ label, placeholder, options, value, onChange, name, required = false }: Props) {
  const { t } = useLang();
  const id = useId();
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{t(label)}</label>
      <select id={id} name={name} value={value} required={required} onChange={(e) => onChange(e.target.value)}>
        <option value="">{t(placeholder)}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.icon ? `${o.icon} ` : ''}
            {t(o.label)}
          </option>
        ))}
      </select>
    </div>
  );
}
