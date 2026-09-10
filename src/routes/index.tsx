import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeIndianRupee,
  BadgeCheck,
  BedDouble,
  Building2,
  Building,
  CalendarDays,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronDown,
  Headphones,
  Heart,
  Home,
  House,
  Armchair,
  FileText,
  Facebook,
  IndianRupee,
  LockKeyhole,
  MapPin,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircleMore,
  Phone,
  Plus,
  Repeat2,
  Search,
  ShieldCheck,
  Star,
  Tags,
  Users,
  UserRound,
  WalletCards,
  X,
  Youtube,
  Zap,
} from "lucide-react";

import heroAsset from "@/assets/roomy-hero.jpg.asset.json";
import pgAsset from "@/assets/offer-pg.jpg.asset.json";
import hostelAsset from "@/assets/offer-hostel.jpg.asset.json";
import colivingAsset from "@/assets/offer-coliving.jpg.asset.json";
import apartmentAsset from "@/assets/offer-apartment.jpg.asset.json";
import savingsPlantAsset from "@/assets/savings-plant.jpg.asset.json";
import kotaAsset from "@/assets/city-kota.jpg.asset.json";
import jaipurAsset from "@/assets/city-jaipur.jpg.asset.json";
import delhiAsset from "@/assets/city-delhi.jpg.asset.json";
import indoreAsset from "@/assets/city-indore.jpg.asset.json";
import bhopalAsset from "@/assets/city-bhopal.jpg.asset.json";
import sikarAsset from "@/assets/city-sikar.jpg.asset.json";
import blogPerfectPgAsset from "@/assets/blog-perfect-pg.jpg.asset.json";
import blogSmartBiddingAsset from "@/assets/blog-smart-bidding.jpg.asset.json";
import blogLivingGuideAsset from "@/assets/blog-living-guide.jpg.asset.json";
import blogBudgetAsset from "@/assets/blog-budget.jpg.asset.json";
import { Button } from "@/components/ui/button";

const heroImage = heroAsset.url;
const pgImage = pgAsset.url;
const hostelImage = hostelAsset.url;
const colivingImage = colivingAsset.url;
const apartmentImage = apartmentAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROOMHY — Student Housing in India" },
      { name: "description", content: "Find verified PGs, hostels, co-living spaces and apartments in India's top cities." },
      { property: "og:title", content: "ROOMHY — Student Housing in India" },
      { property: "og:description", content: "Find verified PGs, hostels, co-living spaces and apartments in India's top cities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const propertyTypes = [
  { label: "PG", icon: BedDouble },
  { label: "Hostels", icon: Building2 },
  { label: "Co-living", icon: Users },
  { label: "Apartments", icon: House },
];

const assurances = [
  { title: "Smart Bidding", subtitle: "Best price deals", icon: ShieldCheck },
  { title: "Verified Properties", subtitle: "100% verified listings", icon: ShieldCheck },
  { title: "Lowest Price Guarantee", subtitle: "Best price, always", icon: BadgeIndianRupee },
  { title: "24/7 Support", subtitle: "Always here to help", icon: Headphones },
  { title: "Safe & Secure", subtitle: "Your safety, our priority", icon: LockKeyhole },
];

const offers = [
  { title: "PG", text: "Comfortable and affordable stays near your college or workplace.", image: pgImage, icon: BedDouble },
  { title: "Hostels", text: "Vibrant communities with essential amenities.", image: hostelImage, icon: Building2 },
  { title: "Co-living", text: "Modern living with like-minded people.", image: colivingImage, icon: Users },
  { title: "Apartments", text: "Spacious and independent living options.", image: apartmentImage, icon: House },
];

const cities = [
  { name: "Kota", properties: "25,000+ Properties", image: kotaAsset.url },
  { name: "Jaipur", properties: "18,000+ Properties", image: jaipurAsset.url },
  { name: "Delhi", properties: "45,000+ Properties", image: delhiAsset.url },
  { name: "Indore", properties: "12,000+ Properties", image: indoreAsset.url },
  { name: "Bhopal", properties: "10,000+ Properties", image: bhopalAsset.url },
  { name: "Sikar", properties: "8,500+ Properties", image: sikarAsset.url },
];

const reasons = [
  { title: "Smart Bidding", text: "Bid your budget and get instant verified deals.", icon: ShieldCheck, tone: "mint" },
  { title: "Verified Properties", text: "Every listing is verified by our team for your safety.", icon: BadgeCheck, tone: "peach" },
  { title: "Best Price Guarantee", text: "Find the best prices compared to other platforms.", icon: WalletCards, tone: "lilac" },
  { title: "Fully Furnished", text: "Move in with just your suitcase. All essentials included.", icon: Armchair, tone: "sun" },
  { title: "24/7 Support", text: "Our support team is always here to help you anytime.", icon: Headphones, tone: "sky" },
  { title: "Flexible Booking", text: "Book for any duration – short term or long term.", icon: CalendarCheck2, tone: "rose" },
  { title: "Secure & Safe", text: "Verified owners, safe localities and secure living.", icon: LockKeyhole, tone: "green" },
  { title: "Lowest Price", text: "Get the most affordable stays in top locations.", icon: Tags, tone: "aqua" },
];

const trending = [
  { name: "ROOMHYPROP ESSENCE Harsh Plaza", location: "Chandigarh", price: "₹6,000", image: pgImage },
  { name: "ROOMHYPROP CREST Harsh Plaza", location: "Chandigarh", price: "₹7,500", image: apartmentImage },
  { name: "PARADISE RESIDENCY", location: "Kota", price: "₹7,500", image: hostelImage },
  { name: "ROOMHYPROP CREST HL Residency", location: "Kota", price: "₹2,500", image: colivingImage },
];

const savingsChecks = [
  { icon: ShieldCheck, label: "No Hidden Charges" },
  { icon: UserRound, label: "Direct Owner Contact" },
  { icon: CalendarCheck2, label: "Transparent Pricing" },
];

const traditionalWay = ["Pay Brokerage", "Extra Charges", "Multiple Calls", "Time Consuming", "Expensive"];
const roomhyWay = ["Smart Bidding", "No Hidden Charges", "Direct Owner", "Quick & Easy", "Best Prices"];

const reviews = [
  { name: "Rahul Sharma", role: "IIT JEE Student, Kota", quote: "Roomhy made finding my hostel so easy! Smart bidding and no hidden charges. Highly recommended!", tone: "rose" },
  { name: "Priya Patel", role: "NEET Student, Sikar", quote: "Great platform! I found a safe PG near my college within a day. The owner was very cooperative.", tone: "peach" },
  { name: "Vikram Singh", role: "Allen Student, Kota", quote: "Verified properties and direct owner contact saved me both money and time.", tone: "sky" },
  { name: "Aman Gupta", role: "Coaching Student, Jaipur", quote: "Super smooth experience. Booked my room online without any agent hassle.", tone: "lilac" },
  { name: "Sneha Reddy", role: "Medical Student, Hyderabad", quote: "Best app for student stays. Verified owners and smooth digital check-in process.", tone: "sun" },
  { name: "Rohan Kapoor", role: "Engineering Student, Pune", quote: "Saved ₹12,000 on annual rent using Smart Bidding. Couldn't be happier!", tone: "sky" },
  { name: "Anjali Mehta", role: "IT Professional, Indore", quote: "Love the variety of options. Co-living spaces are amazing and budget friendly.", tone: "peach" },
  { name: "Karan Verma", role: "Student, Delhi University", quote: "Extremely easy to search and compare PGs. Got an instant discount through bidding!", tone: "rose" },
];

const blogPosts = [
  { category: "TIPS", date: "Sep 2, 2025", readTime: "5 min read", title: "7 Tips to Find the Perfect PG in Kota", image: blogPerfectPgAsset.url },
  { category: "SAVINGS", date: "Aug 28, 2025", readTime: "6 min read", title: "How Smart Bidding Saves You ₹10,000+ Every Academic Year", image: blogSmartBiddingAsset.url },
  { category: "GUIDE", date: "Aug 20, 2025", readTime: "5 min read", title: "PG vs Hostel vs Co-living – Which is Right for You?", image: blogLivingGuideAsset.url },
  { category: "BUDGET", date: "Aug 14, 2025", readTime: "4 min read", title: "How to Save Money While Living Away From Home", image: blogBudgetAsset.url },
];

const faqs = [
  { question: "How does Smart Bidding work?", answer: "Choose a verified property, submit the monthly rent you are comfortable with, and the owner can accept or respond with their best available offer.", icon: MessageCircleMore, tone: "mint" },
  { question: "How can I contact the property owner?", answer: "Once you select a property, Roomhy lets you connect directly with its verified owner through the contact options on the listing.", icon: Phone, tone: "sage" },
  { question: "Is the property verified?", answer: "Yes. Properties marked as verified have been checked by the Roomhy team for listing details, location, amenities, and owner information.", icon: ShieldCheck, tone: "green" },
  { question: "Can I visit the property before booking?", answer: "Yes. You can request a visit at a convenient time and inspect the room and amenities before confirming your booking.", icon: CalendarDays, tone: "rose" },
  { question: "What documents are required to book?", answer: "A valid photo ID and basic student or employment details are generally required. The owner will confirm any property-specific documents.", icon: FileText, tone: "mint" },
  { question: "Can I get a refund if I cancel?", answer: "Refund eligibility depends on the property's cancellation terms. The applicable policy is shown before you complete your booking.", icon: IndianRupee, tone: "gold" },
  { question: "Can I change my room after booking?", answer: "Room changes may be possible if another room is available. Contact Roomhy support or the property owner to review your options.", icon: Repeat2, tone: "aqua" },
  { question: "Is Roomhy safe for girls?", answer: "Roomhy offers verified women-only and secure accommodation options with clear amenity and safety information to help you choose confidently.", icon: Users, tone: "gold" },
];

const popularSearches = ["PG in Kota", "PG in Jaipur", "PG in Delhi", "Hostels in Kota", "Hostels in Jaipur", "Hostels in Delhi", "Co-living in Bangalore", "Co-living in Pune", "Student Apartments", "Girls Hostel", "Boys Hostel", "Luxury PG", "Budget PG"];

const footerGroups = [
  { title: "POPULAR CITIES", icon: MapPin, links: ["PG in Kota", "PG in Jaipur", "PG in Delhi", "PG in Indore", "PG in Bangalore", "PG in Pune"], more: "View all cities" },
  { title: "PROPERTY TYPES", icon: Building2, links: ["PG for Boys", "PG for Girls", "Co-ed PG", "Hostels", "Boys Hostels", "Girls Hostels", "Co-living", "Apartments"], more: "View all properties" },
];

const footerTrust = [
  { title: "Smart Bidding", subtitle: "Best price deals", icon: ShieldCheck },
  { title: "Verified Listings", subtitle: "100% verified properties", icon: BadgeCheck },
  { title: "50,000+ Students", subtitle: "Trust us to find a home", icon: Users },
  { title: "10+ Cities", subtitle: "Across India", icon: Building },
];

function Brand() {
  return <a className="brand" href="#top" aria-label="ROOMHY home">ROOMHY<span>.com</span></a>;
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <a className="active" href="#top">Home</a><a href="#offers">Properties</a><a href="#trending">Cities</a>
          <a href="#works">FAQ</a><a href="#works">About</a><a href="#works">Contact</a>
        </nav>
        <div className="header-actions">
          <Button variant="outline" className="list-button"><Home /> List Your Property</Button>
          <Button className="bid-button"><Zap fill="currentColor" /> Bid Now</Button>
          <span className="profile-divider" aria-hidden="true" />
          <Button variant="ghost" className="profile-button" aria-label="Open Harsh's account menu"><UserRound /><span>Harsh</span><ChevronDown /></Button>
          <Button variant="ghost" size="icon" className="menu-button" aria-label="Open menu"><Menu /></Button>
        </div>
      </div>
    </header>
  );
}

function SearchPanel() {
  const [selectedType, setSelectedType] = useState("PG");
  return (
    <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
      <div className="property-tabs" role="tablist" aria-label="Property type">
        {propertyTypes.map(({ label, icon: Icon }) => (
          <Button key={label} type="button" variant="ghost" onClick={() => setSelectedType(label)} className={selectedType === label ? "property-tab selected" : "property-tab"} aria-selected={selectedType === label} role="tab"><Icon /><span>{label}</span></Button>
        ))}
      </div>
      <div className="search-controls">
        <label className="location-field"><MapPin /><input aria-label="Location" placeholder="Search city, locality or landmark (e.g. Koramangala, Mumbai)" /></label>
        <Button type="button" variant="ghost" className="filter-button"><UserRound /> Any Gender <ChevronDown /></Button>
        <Button type="button" variant="ghost" className="filter-button"><WalletCards /> Any Budget <ChevronDown /></Button>
        <Button type="submit" className="search-button"><Search /> Search</Button>
      </div>
    </form>
  );
}

function AssuranceRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "works-assurance" : "assurance-row"}>
      {assurances.map(({ title, subtitle, icon: Icon }) => (
        <div className="assurance" key={title}><span className="assurance-icon"><Icon /></span><span><strong>{title}</strong><small>{subtitle}</small></span></div>
      ))}
    </div>
  );
}

function StudentProof() {
  return (
    <div className="student-proof"><span className="avatars" aria-hidden="true"><i>H</i><i>A</i><i>R</i></span><span><strong>50,000+ students</strong><small>already found their home</small></span><ArrowRight /></div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={heroImage} alt="A warm modern student room overlooking a city" width={1920} height={768} />
      <div className="hero-wash" /><p className="left-note">Better<br />Students<br />Brighter<br />Tomorrows</p><p className="right-note">Same<br />City<br />New<br />Stories ♡</p>
      <div className="hero-copy"><p>India's #1 broker-free student housing platform</p><h1 id="hero-title">Find a place<br />that feels like home</h1><span>Verified PGs, Hostels, Co-living spaces and Apartments in top cities.</span></div>
      <SearchPanel />
      <div className="trust-curve"><AssuranceRow /><StudentProof /></div>
    </section>
  );
}

function LeafSpray({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 400" aria-hidden="true">
      <path className="leaf-stem" d="M20 380C55 295 67 187 118 28" />
      <path className="leaf-blade" d="M67 274C12 269 0 223 10 183C51 194 76 226 67 274Z" />
      <path className="leaf-blade" d="M76 225C118 212 139 174 130 139C94 150 72 183 76 225Z" />
      <path className="leaf-blade" d="M95 152C58 139 46 105 57 75C88 87 104 116 95 152Z" />
      <path className="leaf-blade" d="M113 91C143 76 151 48 140 24C116 38 105 63 113 91Z" />
    </svg>
  );
}

function Offers() {
  return (
    <section id="offers" className="offers" aria-labelledby="offers-title">
      <LeafSpray className="offer-leaves offer-leaves-left" /><LeafSpray className="offer-leaves offer-leaves-right" />
      <p className="offers-left-note">Live<br />Learn<br />Belong</p><p className="offers-right-note">A Better<br />Place<br />To Be ♡</p>
      <div className="offer-heading"><p>Explore your living options</p><h2 id="offers-title">What We Offer</h2><span>Choose from a variety of accommodation types tailored for students and professionals.</span></div>
      <Button variant="outline" className="view-all">View all options <ArrowRight /></Button>
      <div className="offer-grid">
        {offers.map(({ title, text, image, icon: Icon }) => (
          <article className="offer-card" key={title}><div className="offer-image-wrap"><img src={image} alt={`${title} student accommodation`} width={900} height={560} loading="lazy" /><span className="offer-chip"><Icon /> {title}</span></div><div className="offer-body"><p>{text}</p><a href="#trending" aria-label={`Explore ${title}`}><ArrowRight /></a></div></article>
        ))}
      </div>
    </section>
  );
}

function BrowseCities() {
  return (
    <section id="cities" className="cities" aria-labelledby="cities-title">
      <LeafSpray className="cities-leaves cities-leaves-left" /><LeafSpray className="cities-leaves cities-leaves-right" />
      <p className="cities-note-left">Live<br />Learn<br />Explore<br />Grow ♡</p>
      <p className="cities-note-center">Different<br />Cities,<br />Same Dreams ♡</p>
      <p className="cities-note-right">New<br />Places<br />Brighter<br />Futures</p>
      <div className="cities-heading">
        <p className="section-eyebrow">Explore Top Destinations</p>
        <h2 id="cities-title">Browse by <em>Cities</em></h2>
        <span>Explore properties in India's most popular student cities.</span>
      </div>
      <Button variant="outline" className="cities-view-all">View all cities <ArrowRight /></Button>
      <div className="cities-grid">
        {cities.map(({ name, properties, image }) => (
          <article className="city-card" key={name}>
            <div className="city-image-wrap">
              <img src={image} alt={`${name}, India destination`} width={1200} height={912} loading="lazy" />
              <span className="city-pin" aria-hidden="true"><MapPin /></span>
            </div>
            <div className="city-body"><div><h3>{name}</h3><p>{properties}</p></div><a href="#trending" aria-label={`Browse properties in ${name}`}><ArrowRight /></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="works" className="why-choose" aria-labelledby="why-title">
      <LeafSpray className="why-leaves why-leaves-right" />
      <p className="why-note">A Better Place<br />To Be ♡</p>
      <div className="why-heading">
        <p className="section-eyebrow">Trusted by Students Across India</p>
        <h2 id="why-title">Why Choose <em>Roomhy?</em></h2>
        <span>Built by students, for students. Here's why thousands trust us.</span>
      </div>
      <div className="reason-grid">
        {reasons.map(({ title, text, icon: Icon, tone }) => (
          <article className="reason-card" key={title}>
            <span className={`reason-icon ${tone}`}><Icon /></span>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Trending() {
  const [offset, setOffset] = useState(0);
  const [saved, setSaved] = useState<string[]>([]);
  const ordered = [...trending.slice(offset), ...trending.slice(0, offset)];
  const rotate = (direction: number) => setOffset((offset + direction + trending.length) % trending.length);
  const toggleSaved = (name: string) => setSaved((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  return (
    <section id="trending" className="trending" aria-labelledby="trending-title">
      <LeafSpray className="trend-leaves trend-leaves-left" /><LeafSpray className="trend-leaves trend-leaves-right" />
      <p className="trend-note-left">Good<br />Spaces<br />Greater<br />Stories</p><p className="trend-note-right">Live<br />Learn<br />Grow</p>
      <div className="trending-heading"><p className="section-eyebrow">Trending Stays</p><h2 id="trending-title">Trending Stays This Week</h2><span>Most popular properties among students</span></div>
      <Button variant="outline" className="trending-view-all">View all properties <ArrowRight /></Button>
      <Button variant="outline" size="icon" className="carousel-arrow carousel-left" onClick={() => rotate(-1)} aria-label="Previous properties"><ArrowLeft /></Button>
      <div className="trending-grid">
        {ordered.map(({ name, location, price, image }) => (
          <article className="trending-card" key={name}><div className="trending-image-wrap"><img src={image} alt={`${name} in ${location}`} loading="lazy" /><span className="trending-verified"><CheckCircle2 /> Verified</span><Button variant="outline" size="icon" className={saved.includes(name) ? "trend-heart saved" : "trend-heart"} onClick={() => toggleSaved(name)} aria-label={`${saved.includes(name) ? "Remove" : "Save"} ${name}`}><Heart fill={saved.includes(name) ? "currentColor" : "none"} /></Button></div><div className="trending-body"><h3>{name}</h3><p><MapPin /> {location}</p><strong>{price} <small>/mo</small></strong></div></article>
        ))}
      </div>
      <Button variant="outline" size="icon" className="carousel-arrow carousel-right" onClick={() => rotate(1)} aria-label="Next properties"><ArrowRight /></Button>
      <div className="carousel-dots" aria-hidden="true"><i className="active" /><i /><i /></div>
    </section>
  );
}

function SmartSavings() {
  return (
    <section id="savings" className="savings" aria-labelledby="savings-title">
      <LeafSpray className="savings-leaves savings-leaves-right" />
      <p className="savings-note-left">Better<br />Deals<br />Brighter<br />Futures ♡</p>
      <p className="savings-note-right">Save<br />More<br />Live<br />Better ♡</p>
      <div className="savings-panel">
        <div className="savings-copy">
          <p className="section-eyebrow">Smart Living, Smart Savings</p>
          <h2 id="savings-title">Smart Bidding.<br /><em>100% Savings.</em></h2>
          <span className="savings-sub">Connect directly with verified property owners and save thousands on brokerage.</span>
          <ul>
            {savingsChecks.map(({ icon: Icon, label }) => (
              <li key={label}><span className="savings-check"><Icon /></span><strong>{label}</strong></li>
            ))}
          </ul>
        </div>
        <div className="savings-compare">
          <article className="compare-card compare-bad">
            <span className="compare-chip bad">Traditional Way</span>
            <ul>{traditionalWay.map((item) => <li key={item}><X /> {item}</li>)}</ul>
          </article>
          <span className="compare-vs" aria-hidden="true">VS</span>
          <article className="compare-card compare-good">
            <span className="compare-chip good">With Roomhy</span>
            <ul>{roomhyWay.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
          </article>
        </div>
        <div className="savings-image-wrap">
          <img src={savingsPlantAsset.url} alt="Plant growing out of saved coins" width={768} height={768} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function StudentsSay() {
  return (
    <section id="reviews" className="reviews" aria-labelledby="reviews-title">
      <LeafSpray className="reviews-leaves reviews-leaves-left" />
      <p className="reviews-note-left">Students<br />Today<br />Thriving<br />Tomorrow ♡</p>
      <p className="reviews-note-right">Same<br />City<br />New<br />Stories ♡</p>
      <div className="reviews-heading">
        <p className="section-eyebrow">Real Stories, Real Students</p>
        <h2 id="reviews-title">What Students <em>Say</em></h2>
        <span>Trusted by 50,000+ students across India</span>
      </div>
      <div className="reviews-proof" aria-label="50,000 plus happy students">
        <span className="avatars" aria-hidden="true"><i>H</i><i>A</i><i>R</i></span>
        <span><strong>50,000+ happy students</strong><small>Finding a better tomorrow</small></span>
        <ArrowRight />
      </div>
      <div className="reviews-grid">
        {reviews.map(({ name, role, quote, tone }) => (
          <article className="review-card" key={name}>
            <div className="review-head">
              <span className={`review-avatar ${tone}`}>{name.split(" ").map((part) => part[0]).join("")}</span>
              <div><h3>{name}</h3><p>{role}</p></div>
              <span className="review-quote-mark" aria-hidden="true">&ldquo;</span>
            </div>
            <div className="review-stars" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" strokeWidth={0} />)}
            </div>
            <p className="review-text">{quote}</p>
          </article>
        ))}
      </div>
      <Button variant="outline" className="reviews-more">Read More Reviews <ArrowRight /></Button>
    </section>
  );
}

function LatestBlog() {
  return (
    <section id="blog" className="latest-blog" aria-labelledby="blog-title">
      <LeafSpray className="blog-leaves blog-leaves-left" /><LeafSpray className="blog-leaves blog-leaves-right" />
      <p className="blog-note-left">Stay<br />Informed<br />Stay<br />Ahead ♡</p>
      <p className="blog-note-right">Better<br />Choices<br />Brighter<br />Futures ♡</p>
      <div className="editorial-heading">
        <p className="section-eyebrow">Insights for a Brighter Tomorrow</p>
        <h2 id="blog-title">Latest from Our Blog</h2>
        <span>Tips, guides and stories to make your student living journey easier.</span>
      </div>
      <Button variant="outline" className="editorial-view-all">View all blogs <ArrowRight /></Button>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.title}>
            <div className="blog-image-wrap">
              <img src={post.image} alt="" width={1024} height={640} loading="lazy" />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-body">
              <p className="blog-meta"><CalendarDays /> {post.date} <i /> {post.readTime}</p>
              <h3>{post.title}</h3>
              <a href="#blog" aria-label={`Read ${post.title}`}><ArrowRight /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <LeafSpray className="faq-leaves faq-leaves-left" /><LeafSpray className="faq-leaves faq-leaves-right" />
      <p className="faq-note">Your<br />Questions<br />Our Support<br />Always ♡</p>
      <div className="editorial-heading faq-heading">
        <p className="section-eyebrow">Quick Answers, Clearer Decisions</p>
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <span>Everything you need to know before you book.</span>
      </div>
      <Button variant="outline" className="editorial-view-all faq-view-all">View all FAQs <ArrowRight /></Button>
      <div className="faq-grid">
        {[faqs.slice(0, 4), faqs.slice(4)].map((column, columnIndex) => (
          <div className="faq-column" key={columnIndex}>
            {column.map(({ question, answer, icon: Icon, tone }) => {
              const isOpen = openFaq === question;
              return (
                <article className={isOpen ? "faq-item open" : "faq-item"} key={question}>
                  <Button variant="ghost" className="faq-trigger" onClick={() => setOpenFaq(isOpen ? null : question)} aria-expanded={isOpen}>
                    <span className={`faq-icon ${tone}`}><Icon /></span><span className="faq-question">{question}</span><Plus className="faq-plus" />
                  </Button>
                  <div className="faq-answer" aria-hidden={!isOpen}><p>{answer}</p></div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function PopularSearchesFooter() {
  return (
    <section className="footer-top" aria-labelledby="popular-search-title">
      <LeafSpray className="footer-leaves footer-leaves-right" />
      <div className="footer-search-card">
        <div className="footer-search-intro">
          <span className="footer-search-icon"><Search /></span>
          <div><p className="section-eyebrow">Explore More</p><h2 id="popular-search-title">Popular Searches</h2><span>Quick links to find what you're looking for.</span></div>
        </div>
        <div className="footer-search-chips" aria-label="Popular accommodation searches">
          {popularSearches.map((search) => <a href="#top" key={search}>{search}</a>)}
        </div>
        <div className="footer-search-aside"><p>Find<br />Explore<br />Move In<br />Belong ♡</p><a href="#top">View all searches <ArrowRight /></a></div>
      </div>
      <div className="footer-trust-strip">
        {footerTrust.map(({ title, subtitle, icon: Icon }) => <div className="footer-trust-item" key={title}><span><Icon /></span><div><strong>{title}</strong><small>{subtitle}</small></div></div>)}
      </div>
    </section>
  );
}

function FooterColumn({ title, icon: Icon, links, more }: { title: string; icon: typeof MapPin; links: string[]; more?: string }) {
  return <div className="footer-column"><h3><Icon />{title}</h3><ul>{links.map((link) => <li key={link}><a href="#top"><span>›</span>{link}</a></li>)}</ul>{more && <a className="footer-more" href="#top">{more} <ArrowRight /></a>}</div>;
}

function Footer() {
  return (
    <footer className="site-footer">
      <LeafSpray className="footer-leaves footer-leaves-left" />
      <p className="footer-note">Students<br />Build<br />Better<br />Tomorrows ♡</p>
      <div className="footer-grid">
        <div className="footer-brand-column"><Brand /><p>India's smart bidding platform for<br />PGs, Hostels, Co-living Spaces &amp;<br />Student Apartments.</p><ul><li><ShieldCheck />Smart Bidding</li><li><BadgeCheck />Verified Properties</li><li><BedDouble />50,000+ Beds</li><li><Star />Trusted by Students</li></ul><div className="footer-social"><strong>FOLLOW US ON</strong><div><a aria-label="Facebook" href="#top"><Facebook /></a><a aria-label="Instagram" href="#top"><Instagram /></a><a aria-label="LinkedIn" href="#top"><Linkedin /></a><a aria-label="YouTube" href="#top"><Youtube /></a></div></div></div>
        {footerGroups.map((group) => <FooterColumn key={group.title} {...group} />)}
        <div className="footer-column footer-split"><h3><BedDouble />HOSTELS</h3><ul>{["Hostels for Boys", "Hostels for Girls", "Co-ed Hostels"].map((link) => <li key={link}><a href="#top"><span>›</span>{link}</a></li>)}</ul><h3><Building2 />CO-LIVING</h3><ul>{["Co-living for Boys", "Co-living for Girls", "Co-ed Co-living"].map((link) => <li key={link}><a href="#top"><span>›</span>{link}</a></li>)}</ul></div>
        <FooterColumn title="QUICK LINKS" icon={ArrowRight} links={["List Your Property", "Owner Dashboard", "Tenant Dashboard / My Stays", "About Us", "Contact Us", "FAQ", "Login / Register"]} />
        <FooterColumn title="POLICIES & LEGAL" icon={FileText} links={["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cancellation Policy", "Refund Request"]} />
      </div>
      <div className="footer-bottom"><div className="footer-legal-row"><span>© 2026 Roomhy Technology Pvt. Ltd. All rights reserved.</span><span>Made with <Heart fill="currentColor" /> In India</span><span><a href="mailto:team@roomhy.com"><Mail />team@roomhy.com</a><a href="tel:+918764425020"><Phone />+91 8764425020</a></span></div><div className="footer-address-row"><span><MapPin />ROOMHY TECHNOLOGY — 847, Balaji Nagar, Rangbari, Near Pani Ki Tanki, Kota, Rajasthan 324005, India</span><span><FileText />GSTIN: 08SLWPS2629G1ZZ</span></div></div>
    </footer>
  );
}

function Index() {
  return <main><Header /><Hero /><Offers /><BrowseCities /><WhyChoose /><Trending /><SmartSavings /><StudentsSay /><LatestBlog /><FrequentlyAskedQuestions /><PopularSearchesFooter /><Footer /></main>;
}
