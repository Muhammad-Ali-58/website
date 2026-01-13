import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import GrowthSection from '@/components/services/GrowthSection';
import PricingSection from '@/components/PricingSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const WHY_CHOOSE_ITEMS = [
    {
        title: "Certified Squarespace Expertise",
        description: "As experienced Squarespace experts, we know the platform inside and out, allowing us to push its capabilities to deliver a truly unique website.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Client-Centered Approach",
        description: "We prioritize your input at every step, ensuring your website feels authentically you.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Proven Results",
        description: "With 700+ successful projects completed, We've helped businesses like yours achieve their online goals with style and ease.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const GROWTH_FEATURES = [
    {
        title: "Custom web application development",
        description: "Design and development of web applications tailored to your product requirements and user needs.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Frontend and backend architecture",
        description: "Structured frontend and backend systems built for clarity, performance, and long-term maintainability.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "API and system integration",
        description: "Seamless integration with third-party services, internal systems, and external APIs.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Performance optimization",
        description: "Identification and resolution of bottlenecks to keep applications fast, responsive, and stable.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Scalability and refactoring",
        description: "Ongoing improvements to support growth, new features, and increasing user demand without breaking existing functionality.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Priority web support",
        description: "Responsive support for production issues, updates, and time-sensitive changes.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const WEB_PRICING_PLANS = [
    {
        name: 'Essentials',
        price: '$4,500',
        description: 'Perfect for lean builds and fast turnarounds. Built directly in Squarespace—no code, no fuss. A sleek, functional design that reflects your brand’s ambitions.',
        features: [
            'Up to 4 pages',
            'No-code build',
            '1 round of revisions',
            '2-week timeline cap',
            'Direct-to-Squarespace design'
        ],
        isDark: true
    },
    {
        name: 'Premium',
        price: '$9,500',
        description: 'For businesses that need more flexibility and finesse. A hybrid approach for extra polish and performance that helps your organisation scale quickly.',
        features: [
            'Up to 7 pages',
            'Custom styling (CSS)',
            '2 rounds of revisions',
            '5-week timeline cap',
            'Hybrid build'
        ],
        isDark: true
    },
    {
        name: 'Enterprise',
        price: "Let's Talk",
        description: 'Our flagship offer for high-level organisations that demand excellence. A bespoke solution combining strategy, innovation, and cutting-edge design. Best for complex builds.',
        features: [
            'Unlimited pages',
            'Unlimited code',
            'Unlimited revisions',
            'No timeline cap',
            'Dedicated design phase'
        ],
        isDark: false
    }
];

const TECH_STACK = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Python", "REST APIs"
]

export default function WebsiteBuildsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Web application development"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Web Applications Built for Scale and Stability
                    </span>
                }
                description={"We build web applications that are designed to grow with your product and your users. From early MVPs to mature platforms, our focus is on clean architecture, performance, and long-term maintainability. \n\n Our work balances speed with structure, so teams can ship confidently without creating problems later."}
                imageSrc="/services-section/hero-img.webp"
            />
            <LatestWork />
            <GrowthSection
                badge="What we offer"
                title={"You focus on the product. \n We’ll handle the web application."}
                description="Our web application development services adapt to your product stage and technical needs. Whether you are building from scratch or improving an existing system, we work in a way that supports steady progress and clear ownership."
                techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <PricingSection
                badge="Pricing"
                title="Flexible Web Design Packages"
                description="Find the Perfect Plan for Your Business"
                plans={WEB_PRICING_PLANS}
            />
            <ServiceFAQSection />
        </main>
    );
}


