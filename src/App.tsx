import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { OrgStructure } from './components/OrgStructure';
import { DivisionsSection } from './components/DivisionsSection';
import { BranchSection } from './components/BranchSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MemberModal } from './components/MemberModal';
import { Member } from './types';

export default function App() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchClick = () => {
    const pengurusElement = document.getElementById('pengurus');
    if (pengurusElement) {
      pengurusElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-red-950 text-white font-sans selection:bg-amber-400 selection:text-red-950">
      {/* Navigation Header */}
      <Navbar onSearchClick={handleSearchClick} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Sejarah / History Section */}
        <HistorySection />

        {/* Susunan Pengurus & Anggota */}
        <OrgStructure
          onSelectMember={(m) => setSelectedMember(m)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Divisi Kerja Special Highlights */}
        <DivisionsSection />

        {/* DPD & DPC Regional Branches */}
        <BranchSection />

        {/* Form Kontak & Sekretariat */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Member Profile Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
