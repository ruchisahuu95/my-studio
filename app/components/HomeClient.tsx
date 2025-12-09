// app/components/HomeClient.tsx
"use client"; // THIS MAKES IT A CLIENT COMPONENT

import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WorksSection from "./WorksSection";
import Projects from "./Projects";
import RecentProjectsSection from "./RecentProjectsSection";
import FounderSection from "./FounderSection";
import FooterSection from "./FooterSection";
import Footer from "./Footer";

export default function HomeClient() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />
            {/* <TrailImagesContainer /> */}
            <RecentProjectsSection />
            <WorksSection />
            <Projects />
            <FounderSection />
            <FooterSection />
            <Footer />
        </main>
    );
}
