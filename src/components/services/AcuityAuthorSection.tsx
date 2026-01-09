'use client';

import React from 'react';
import Image from 'next/image';
import { FaBehance, FaDribbble, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const ROLES = [
    "Squarespace Expert",
    "Squarespace Community Leader",
    "Squarespace Blog Contributor",
    "Squarespace Panelist",
    "Squarespace Educator",
    "Squarespace Enterprise Partner"
];

const SOCIAL_LINKS = [
    { icon: <FaBehance />, label: "Behance" },
    { icon: <FaDribbble />, label: "Dribbble" },
    { icon: <FaLinkedinIn />, label: "LinkedIn" },
    { icon: <FaYoutube />, label: "YouTube" },
    { icon: <IoMailOutline />, label: "Email" }
];

export default function AcuityAuthorSection() {
    return (
        <section className="bg-white overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">

                    {/* Left Side: Image with Overlays */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-[600px] mx-auto rounded-[18px] overflow-hidden">
                            <Image
                                src="/services-section/author.webp"
                                alt="Sam Crawford"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-5 py-2 bg-[#D1D9E0] text-[#516C83]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#516C83] mr-3"></span>
                            <span className="font-aeonik text-xs font-medium uppercase tracking-widest">About author</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="font-aeonik text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#1E293B] tracking-tight">
                                Hi, I'm Sam Crawford
                            </h2>
                            <h3 className="font-aeonik text-2xl sm:text-3xl text-[#1E293B]/60 font-normal">
                                Meet The Person Behind The Setup
                            </h3>
                        </div>

                        {/* Descriptions */}
                        <div className="space-y-6 max-w-2xl">
                            <p className="font-aeonik text-base sm:text-lg text-[#1E293B]/70 leading-relaxed">
                                I've built over 700 Squarespace websites for businesses, churches & creatives who need their site to do more than just look good. That includes setting up powerful booking systems using Acuity Scheduling – fully styled, fully connected & easy to manage.
                            </p>
                            <p className="font-aeonik text-base sm:text-lg text-[#1E293B]/70 leading-relaxed">
                                If you're looking for a Squarespace appointment scheduler that looks on-brand, saves time & actually gets used – you're in the right place.
                            </p>
                        </div>

                        {/* Roles Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 w-full max-w-2xl my-4">
                            {ROLES.map((role, index) => (
                                <div key={index} className="font-aeonik text-base text-[#1E293B]/40">
                                    {role}
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <button
                                    key={index}
                                    className="w-12 h-12 rounded-full bg-[#B9C1C9] flex items-center justify-center text-[#1E293B] hover:bg-[#516C83] hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
