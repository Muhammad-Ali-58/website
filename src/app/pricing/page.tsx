'use client';

import PricingHeroSection from '@/components/PricingHeroSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import PricingSection from '@/components/PricingSection';
import GrowthSection from '@/components/services/GrowthSection';
import IntegrationsSection from '@/components/IntegrationsSection';

import WhyChooseSquarespace from '@/components/WhyChooseSquarespace';
import ProcessSection from '@/components/WhyChooseSection';
import AdditionalCostsSection from '@/components/AdditionalCostsSection';
import PackagesSection from '@/components/PackagesSection';
import WhyChooseStatsSection from '@/components/WhyChooseStatsSection';
import IndustriesSection from '@/components/IndustriesSection';

const GROWTH_FEATURES = [
    {
        title: "Fully Responsive Design",
        description: "Your website will look stunning on desktop, tablet, and mobile devices.",
        icon: "/services-section/offer-item-6.webp"
    },
    {
        title: "Content Formatting",
        description: "Professional styling and organization of all your content.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Domain & SSL Setup",
        description: "Secure connection and professional domain configuration included.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "SEO-Ready Setup",
        description: "Meta tags, clean structure, and alt text optimized for search engines.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Analytics Integration",
        description: "Google Analytics and tracking setup for insights into your audience.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Training & Handover",
        description: "Complete walkthrough so you can confidently manage your site.",
        icon: "/services-section/offer-item-5.webp"
    }
];

const REASONS = [
    {
        title: '1. Consultation & Briefing',
        description: "Every successful website begins with understanding. We start by learning about your business goals, target audience, and brand identity to make sure we capture what makes you unique.\n\n This discovery phase allows us to align our strategy with your objectives and identify key opportunities to strengthen your online presence. By the end, we have a clear roadmap for creating a website that truly reflects your vision.",
        image: '/process-1.webp'
    },
    {
        title: '2. Design Phase',
        description: "With a clear direction in place, our team begins crafting your website directly in Squarespace. We design the structure, layout, and visual concept to balance beauty with usability, ensuring every page is engaging and purposeful.\n\n  Attention is given to user experience, mobile responsiveness, and performance optimization. The result is a design that not only looks professional but feels effortless to navigate.",
        image: '/process-2.webp'
    },
    {
        title: '3. Review & Revisions',
        description: "Collaboration is at the heart of our process. Once the initial design is ready, we walk you through every page and gather detailed feedback to refine and perfect the look and feel.\n\n We make adjustments to visuals, layout, and copy until every detail aligns with your expectations. This stage ensures your new site feels completely tailored to your brand and audience.",
        image: '/process-3.webp'
    },
    {
        title: '4. Launch',
        description: "When your website is finalized, we prepare everything for a flawless launch. This includes connecting your custom domain, implementing SEO essentials, and testing across devices and browsers to guarantee a smooth experience for every visitor.\n\n We handle all the technical details behind the scenes so you can focus on sharing your new site with confidence. Once live, your brand is presented online with impact and polish.",
        image: '/process-4.webp'
    },
    {
        title: '5. Post-Launch Support',
        description: "After launch, we make sure you feel confident managing your new website. We provide hands-on training so you know how to update pages, add content, and track performance through Squarespace’s tools.\n\n For continued peace of mind, we offer ongoing support options to help you maintain, improve, and evolve your site as your business grows. Our goal is to keep your website looking and performing at its best long after launch.",
        image: '/process-5.webp'
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <PricingHeroSection />
            <WhyChooseSquarespace />
            <PricingSection />
            <GrowthSection
                badge="What’s included"
                title={"What's Included in Our Design"}
                description="Every package includes these essential features to ensure your success."
                // techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <ProcessSection
                badgeText="Our process"
                title="How Our Design Process Works"
                description="A streamlined approach to bring your vision to life"
                REASONS={REASONS}
                isPricing={true}
            />
            <AdditionalCostsSection />
            <IntegrationsSection />
            <PackagesSection />
            <WhyChooseStatsSection />
            <IndustriesSection />
            <ContactSection />
            <BlogSection />
        </main>
    );
} 
