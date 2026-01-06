'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PROJECTS = [
  {
    tag: 'Security',
    title: 'Rescor',
    image: '/Rescor.webp',
    link: '#',
  },
  {
    tag: 'SaaS',
    title: 'Markups.AI',
    image: '/Markups.webp',
    link: '#',
  },
  {
    tag: 'Tech',
    title: 'Loomia',
    image: '/Loomia.webp',
    link: '#',
  },
  {
    tag: 'Education',
    title: 'The Hybrid Way',
    image: '/hybrid.webp',
    link: '#',
  },
  {
    tag: 'Agency',
    title: 'Tradie Hub',
    image: '/Tradie.webp',
    link: '#',
  },
];

export default function LatestWork() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(to_bottom,#EDF2F6_80%,#ffffff_80%)] py-24 sm:py-32">
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center rounded-full bg-[#506C834D] px-4 py-1.5 text-sm font-medium text-[#475569]">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#506c83]" />
              Sam Crawford&apos;s Latest Work
            </span>
            <h2 className="font-aeonik text-4xl font-normal leading-tight text-[#1E293B] sm:text-5xl md:text-6xl">
              Building Websites That
              <br className="hidden sm:block" /> Drive Results
            </h2>
            <p className="max-w-2xl font-aeonik text-base text-[#64748B] md:text-lg">
              Want a Squarespace website that converts visitors into loyal
              customers? Explore my portfolio to see how I&apos;ve turned visions
              into vibrant realities. From sleek e-commerce sites to engaging
              portfolios, my designs are crafted to meet your thriving business
              needs and stand out in the digital landscape.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#516C83] px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105"
          >
            View all work
          </Link>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="mt-16 sm:mt-20">
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          grabCursor={true}
          loop={true}
          className="!w-full !overflow-visible !pl-6 sm:!pl-8 lg:!pl-12"
          breakpoints={{
            640: {
              spaceBetween: 32,
            },
          }}
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="group relative h-[500px] w-[340px] select-none overflow-hidden rounded-3xl border-[6px] border-[#eaf0f6] bg-white p-6 transition-all hover:shadow-xl sm:h-[600px] sm:w-[500px] sm:p-8">
                <div className="flex h-full flex-col gap-6">
                  {/* Card Header: Tag & Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-[#E2E8F0] px-4 py-1.5 text-sm font-medium text-[#475569]">
                      {project.tag}
                    </span>
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#516C83] text-white transition-transform group-hover:rotate-45 cursor-pointer">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="font-aeonik text-3xl font-normal text-[#1E293B]">
                    {project.title}
                  </h3>

                  {/* Image Area */}
                  <div className="relative flex-1 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
