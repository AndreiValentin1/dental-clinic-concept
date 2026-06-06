import { useMemo, useState } from 'react';

import Button from '../shared/Button';
import { IconArrowRight } from '../shared/Icons';
import { appointmentTypes, preferredTimes } from '../../data/contact';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  appointmentType: '',
  preferredTime: '',
  message: '',
  consent: false,
};

function FieldError({ children }) {
  if (!children) return null;

  return (
    <p className="mt-1.5 text-xs font-semibold text-red-700">
      {children}
    </p>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const markTouched = (event) => {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
  };

  const errors = useMemo(() => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Use a valid email address or leave it empty.';
    }

    if (!form.appointmentType) {
      nextErrors.appointmentType = 'Choose an appointment type.';
    }

    if (!form.preferredTime) {
      nextErrors.preferredTime = 'Choose a preferred time.';
    }

    if (form.message.trim().length > 800) {
      nextErrors.message = 'Keep the message under 800 characters.';
    }

    if (!form.consent) {
      nextErrors.consent = 'Consent is required for this demo form.';
    }

    return nextErrors;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const showError = (fieldName) => touched[fieldName] && errors[fieldName];

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched({
      name: true,
      phone: true,
      email: true,
      appointmentType: true,
      preferredTime: true,
      message: true,
      consent: true,
    });

    if (!isValid) return;

    setSubmitted(true);
    setForm(initialForm);
    setTouched({});
  };

  if (submitted) {
    return (
      <div className="rounded-4xl border border-cream-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-dental-green/20 text-dental-blue-dark">
          ✓
        </div>

        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink-900">
          Demo appointment request sent.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-ink-500">
          This is a concept form only. In a production clinic website, this would
          connect to email, CRM, booking software, or a secure backend endpoint.
        </p>

        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-4xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-dental-blue-dark">
          Appointment request
        </p>

        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900">
          Tell us how we can help.
        </h2>

        <p className="mt-3 text-sm leading-7 text-ink-500">
          This demo form shows the expected UX. It does not submit real patient
          data anywhere.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-ink-900">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={updateField}
            onBlur={markTouched}
            className="mt-2 w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-dental-blue focus:bg-white"
            placeholder="Your name"
          />
          <FieldError>{showError('name')}</FieldError>
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold text-ink-900">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={updateField}
            onBlur={markTouched}
            className="mt-2 w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-dental-blue focus:bg-white"
            placeholder="+00 ..."
          />
          <FieldError>{showError('phone')}</FieldError>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-sm font-bold text-ink-900">
            Email <span className="font-medium text-ink-500">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={updateField}
            onBlur={markTouched}
            className="mt-2 w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-dental-blue focus:bg-white"
            placeholder="you@example.com"
          />
          <FieldError>{showError('email')}</FieldError>
        </div>

        <div>
          <label htmlFor="appointmentType" className="text-sm font-bold text-ink-900">
            Appointment type *
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            value={form.appointmentType}
            onChange={updateField}
            onBlur={markTouched}
            className="mt-2 w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-dental-blue focus:bg-white"
          >
            <option value="">Select type</option>
            {appointmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError>{showError('appointmentType')}</FieldError>
        </div>

        <div>
          <label htmlFor="preferredTime" className="text-sm font-bold text-ink-900">
            Preferred time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={form.preferredTime}
            onChange={updateField}
            onBlur={markTouched}
            className="mt-2 w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-dental-blue focus:bg-white"
          >
            <option value="">Select time</option>
            {preferredTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <FieldError>{showError('preferredTime')}</FieldError>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-ink-900">
            Message <span className="font-medium text-ink-500">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={updateField}
            onBlur={markTouched}
            className="mt-2 w-full resize-y rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-dental-blue focus:bg-white"
            placeholder="Shortly describe the issue or the type of appointment you need."
          />
          <div className="mt-1.5 flex justify-between gap-3 text-xs text-ink-500">
            <FieldError>{showError('message')}</FieldError>
            <span className="ml-auto">{form.message.trim().length}/800</span>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="flex gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-4 text-sm leading-6 text-ink-600">
            <input
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={updateField}
              onBlur={markTouched}
              className="mt-1 h-4 w-4 rounded border-cream-200 accent-dental-blue-dark"
            />
            <span>I agree to be contacted about my appointment request.</span>
          </label>
          <FieldError>{showError('consent')}</FieldError>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-6 text-ink-500">
          Production version: connect to a secure backend, email notification,
          booking platform, or clinic CRM.
        </p>

        <Button type="submit">
          Send request
          <IconArrowRight />
        </Button>
      </div>
    </form>
  );
}

export default AppointmentForm;