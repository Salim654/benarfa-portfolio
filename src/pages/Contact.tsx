import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";
import { useState } from "react";
import { contactData, contactGenres, uiCopy } from "../data/mockData";

const contactSchema = z.object({
  genre: z.string().min(1, "Please select a commission type."),
  client: z
    .string()
    .min(2, "Client or organization is required.")
    .max(120, "Please keep under 120 characters."),
  email: z.string().email("Please provide a valid email address."),
  date: z.string().min(1, "Please provide an anticipated window or date."),
  location: z.string().min(2, "Please provide a city and country."),
  budget: z.string().min(1, "Please select a budget tier."),
  scope: z
    .string()
    .min(20, "Please describe your project in a few sentences (at least 20 characters).")
    .max(2000, "Please keep your brief under 2000 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClasses = (hasError: boolean) =>
  clsx(
    "w-full rounded border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent",
    hasError ? "border-error/70" : "border-hairline hover:border-ink/30",
  );

const labelClasses = "block text-xs font-medium uppercase tracking-widest text-ink-soft";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { hero, studio, form, workflow } = contactData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      genre: "",
      client: "",
      email: "",
      date: "",
      location: "",
      budget: "",
      scope: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    void values;
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-36 lg:px-12">
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">
          {hero.title.split(" ").map((word, i, arr) =>
            i === arr.length - 1 ? (
              <em key={i} className="italic text-accent-strong">
                {word}
              </em>
            ) : (
              <span key={i}>{word} </span>
            ),
          )}
        </h1>
        <p className="mt-4 max-w-2xl text-ink-soft">{hero.body}</p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent-strong">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.status}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
              {studio.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">
              {studio.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{studio.description}</p>

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-xs uppercase tracking-widest text-ink-soft">Email</dt>
                <dd>
                  <a
                    href={`mailto:${studio.email}`}
                    className="text-ink underline decoration-hairline underline-offset-4 hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {studio.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-xs uppercase tracking-widest text-ink-soft">Phone</dt>
                <dd className="text-ink">{studio.phone}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-hairline pb-3">
                <dt className="text-xs uppercase tracking-widest text-ink-soft">Turnaround</dt>
                <dd className="text-right text-ink-soft">{studio.turnaround}</dd>
              </div>
            </dl>

            <div className="mt-8 overflow-hidden rounded">
              <img
                src={studio.studioImage}
              
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {studio.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-hairline underline-offset-4 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-hairline bg-paper p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
                {form.stepLabel}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-ink">{form.title}</h2>

              {submitted ? (
                <div
                  className="mt-8 rounded border border-accent/40 bg-accent/10 p-6 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <p className="font-serif text-2xl text-ink">{uiCopy.contact.successTitle}</p>
                  <p className="mt-2 text-sm text-ink-soft">
                    {uiCopy.contact.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-ink/30 px-6 py-2 text-sm text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {uiCopy.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
                  noValidate
                >
                  <fieldset>
                    <legend className={labelClasses}>Commission Type</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {contactGenres.map((genre) => (
                        <label key={genre.value} className="cursor-pointer">
                          <input
                            type="radio"
                            value={genre.value}
                            className="peer sr-only"
                            {...register("genre")}
                          />
                          <span className="inline-block rounded-full border border-hairline px-4 py-2 text-sm text-ink-soft transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:ring-2 peer-focus-visible:ring-accent">
                            {genre.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.genre && (
                      <p className="mt-2 text-sm text-error" role="alert">
                        {errors.genre.message}
                      </p>
                    )}
                  </fieldset>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="client" className={labelClasses}>
                        Client / Organization
                      </label>
                      <input
                        id="client"
                        type="text"
                        className={clsx(inputClasses(!!errors.client), "mt-2")}
                        placeholder="Your name or brand"
                        {...register("client")}
                      />
                      {errors.client && (
                        <p className="mt-2 text-sm text-error" role="alert">
                          {errors.client.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={clsx(inputClasses(!!errors.email), "mt-2")}
                        placeholder="you@company.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-error" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="date" className={labelClasses}>
                        Anticipated Window / Date
                      </label>
                      <input
                        id="date"
                        type="text"
                        className={clsx(inputClasses(!!errors.date), "mt-2")}
                        placeholder="e.g. Q3 2026, March 19-23"
                        {...register("date")}
                      />
                      {errors.date && (
                        <p className="mt-2 text-sm text-error" role="alert">
                          {errors.date.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="location" className={labelClasses}>
                        Location / City / Country
                      </label>
                      <input
                        id="location"
                        type="text"
                        className={clsx(inputClasses(!!errors.location), "mt-2")}
                        placeholder="e.g. Marrakech, Morocco"
                        {...register("location")}
                      />
                      {errors.location && (
                        <p className="mt-2 text-sm text-error" role="alert">
                          {errors.location.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="scope" className={labelClasses}>
                      Project Scope
                    </label>
                    <textarea
                      id="scope"
                      rows={5}
                      className={clsx(inputClasses(!!errors.scope), "mt-2 resize-y")}
                      placeholder="Describe the assignment, deliverables, locations, and any creative context…"
                      {...register("scope")}
                    />
                    {errors.scope && (
                      <p className="mt-2 text-sm text-error" role="alert">
                        {errors.scope.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? uiCopy.contact.submitting : uiCopy.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-strong">
            {uiCopy.contact.processLabel}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.step} className="border-t-2 border-accent pt-6">
                <span className="text-xs uppercase tracking-widest text-ink-soft">
                  {step.step}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.detail}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-accent-strong">
                  {step.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
