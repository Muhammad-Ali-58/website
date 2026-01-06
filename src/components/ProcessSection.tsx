'use client';

import Image from 'next/image';

const STEPS = [
  {
    number: '01',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: 'Client Onboarding & Design',
    description:
      "Book a discovery call to discuss your vision and see if we're a perfect match. Afterwards, you'll receive a detailed proposal outlining the scope of work, deliverables, timeline, and pricing.",
    image: '/onboarding.webp',
  },
  {
    number: '02',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: 'Development And Feedback',
    description:
      'Once we agree on the scope and you accept the proposal, the website build begins. Using markup.io, you can provide feedback easily, ensuring a seamless and collaborative process from start to finish.',
    image: '/development.webp',
  },
  {
    number: '03',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Handover Training',
    description:
      "Upon your approval of the finished website, you'll receive bespoke handover training via a recorded Loom link. Plus, enjoy 30 days of free email support to help you transition smoothly.",
    image: '/handover.webp',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#506C834D] bg-opacity-10 px-4 py-1.5 text-sm font-medium text-[#506C83]">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#506c83]" />
            Smooth & efficient process
          </span>
          <h2 className="mt-6 font-aeonik text-4xl font-normal leading-tight text-[#1E293B] sm:text-5xl lg:text-6xl">
            An Example Squarespace Web Design Project
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-[#506C83] hover:bg-[#506C83] hover:shadow-xl"
            >
              {/* Background Number */}
              <div className="absolute left-[-18] top-0 font-aeonik text-[180px] font-bold leading-none text-[#506C83] opacity-[0.08] transition-colors group-hover:text-white group-hover:opacity-10">
                {step.number}
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-1 flex-col">
                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[#1E293B] transition-colors group-hover:bg-white/10 group-hover:text-white">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mb-4 font-aeonik text-2xl font-normal text-[#1E293B] transition-colors group-hover:text-white sm:text-3xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-12 font-aeonik text-base leading-relaxed text-[#64748B] transition-colors group-hover:text-white/80">
                  {step.description}
                </p>

                {/* Image */}
                <div className="relative mt-auto aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
