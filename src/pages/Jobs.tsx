import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Briefcase, MapPin, Filter, Users } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { ContentSection } from '@/components/layout/content-section';
import { JobCard } from '@/components/ui/job-card';
import { FilterDropdown } from '@/components/ui/filter-dropdown';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import jobsData from '@/data/jobs.json';

const jobTypes = [
  { value: 'Full-Time', label: 'Full-Time' },
  { value: 'Part-Time', label: 'Part-Time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' }
];

const locations = [
  { value: 'Remote', label: 'Remote' },
  { value: 'On-site', label: 'On-site' },
  { value: 'San Francisco', label: 'San Francisco' },
  { value: 'New York', label: 'New York' },
  { value: 'Austin', label: 'Austin' },
  { value: 'Boston', label: 'Boston' },
  { value: 'Los Angeles', label: 'Los Angeles' },
  { value: 'Chicago', label: 'Chicago' },
  { value: 'Miami', label: 'Miami' }
];

const sectors = [
  { value: 'FinTech', label: 'FinTech' },
  { value: 'HealthTech', label: 'HealthTech' },
  { value: 'CleanTech', label: 'CleanTech' },
  { value: 'SaaS', label: 'SaaS' },
  { value: 'FoodTech', label: 'FoodTech' },
  { value: 'CyberSecurity', label: 'CyberSecurity' },
  { value: 'EdTech', label: 'EdTech' },
  { value: 'BioTech', label: 'BioTech' },
  { value: 'PropTech', label: 'PropTech' }
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      // Search filter
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.startup.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Type filter
      const matchesType = selectedTypes.length === 0 || 
        selectedTypes.includes(job.type);

      // Location filter
      const matchesLocation = selectedLocations.length === 0 || 
        selectedLocations.some(loc => {
          if (loc === 'Remote' && job.remote) return true;
          if (loc === 'On-site' && !job.remote) return true;
          return job.location.includes(loc);
        });

      // Sector filter
      const matchesSector = selectedSectors.length === 0 || 
        selectedSectors.includes(job.sector);

      return matchesSearch && matchesType && matchesLocation && matchesSector;
    });
  }, [searchTerm, selectedTypes, selectedLocations, selectedSectors]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
    setSelectedLocations([]);
    setSelectedSectors([]);
  };

  const hasActiveFilters = searchTerm || selectedTypes.length > 0 || 
    selectedLocations.length > 0 || selectedSectors.length > 0;

  return (
    // <div className="min-h-screen">
    //   {/* Page Header */}
    //   <PageHeader
    //     title="Job Board"
    //     description="Discover exciting opportunities at innovative startups in our portfolio and network"
    //   />

    //   {/* Search and Filters */}
    //   <ContentSection className="py-8 border-b border-border">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       className="space-y-6"
    //     >
    //       {/* Stats */}
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    //         <div className="text-center p-4 bg-card rounded-lg border border-border">
    //           <div className="text-2xl font-bold text-primary mb-1">{jobsData.length}</div>
    //           <div className="text-sm text-muted-foreground">Total Jobs</div>
    //         </div>
    //         <div className="text-center p-4 bg-card rounded-lg border border-border">
    //           <div className="text-2xl font-bold text-primary mb-1">{new Set(jobsData.map(j => j.startup)).size}</div>
    //           <div className="text-sm text-muted-foreground">Companies</div>
    //         </div>
    //         <div className="text-center p-4 bg-card rounded-lg border border-border">
    //           <div className="text-2xl font-bold text-primary mb-1">{jobsData.filter(j => j.remote).length}</div>
    //           <div className="text-sm text-muted-foreground">Remote Jobs</div>
    //         </div>
    //         <div className="text-center p-4 bg-card rounded-lg border border-border">
    //           <div className="text-2xl font-bold text-primary mb-1">{jobsData.filter(j => j.featured).length}</div>
    //           <div className="text-sm text-muted-foreground">Featured</div>
    //         </div>
    //       </div>

    //       {/* Search Bar */}
    //       <div className="relative">
    //         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
    //         <Input
    //           type="text"
    //           placeholder="Search jobs, companies, or keywords..."
    //           value={searchTerm}
    //           onChange={(e) => setSearchTerm(e.target.value)}
    //           className="pl-12 py-3 text-base"
    //         />
    //       </div>

    //       {/* Filters */}
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    //         <FilterDropdown
    //           label="Job Type"
    //           options={jobTypes}
    //           selectedValues={selectedTypes}
    //           onSelectionChange={setSelectedTypes}
    //           multiSelect
    //         />
            
    //         <FilterDropdown
    //           label="Location"
    //           options={locations}
    //           selectedValues={selectedLocations}
    //           onSelectionChange={setSelectedLocations}
    //           multiSelect
    //         />
            
    //         <FilterDropdown
    //           label="Sector"
    //           options={sectors}
    //           selectedValues={selectedSectors}
    //           onSelectionChange={setSelectedSectors}
    //           multiSelect
    //         />

    //         {hasActiveFilters && (
    //           <Button
    //             variant="outline"
    //             onClick={clearAllFilters}
    //             className="h-auto py-2.5"
    //           >
    //             <Filter className="h-4 w-4 mr-2" />
    //             Clear Filters
    //           </Button>
    //         )}
    //       </div>

    //       {/* Results Count */}
    //       <div className="flex items-center justify-between">
    //         <p className="text-sm text-muted-foreground">
    //           Showing {filteredJobs.length} of {jobsData.length} jobs
    //         </p>
            
    //         {hasActiveFilters && (
    //           <div className="flex items-center space-x-2 text-sm">
    //             <span className="text-muted-foreground">Active filters:</span>
    //             {searchTerm && (
    //               <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
    //                 "{searchTerm}"
    //               </span>
    //             )}
    //             {selectedTypes.length > 0 && (
    //               <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
    //                 {selectedTypes.length} type{selectedTypes.length > 1 ? 's' : ''}
    //               </span>
    //             )}
    //             {selectedLocations.length > 0 && (
    //               <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
    //                 {selectedLocations.length} location{selectedLocations.length > 1 ? 's' : ''}
    //               </span>
    //             )}
    //             {selectedSectors.length > 0 && (
    //               <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
    //                 {selectedSectors.length} sector{selectedSectors.length > 1 ? 's' : ''}
    //               </span>
    //             )}
    //           </div>
    //         )}
    //       </div>
    //     </motion.div>
    //   </ContentSection>

    //   {/* Job Listings */}
    //   <ContentSection className="py-12">
    //     {filteredJobs.length > 0 ? (
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {filteredJobs.map((job, index) => (
    //           <JobCard
    //             key={job.id}
    //             job={job}
    //             index={index}
    //           />
    //         ))}
    //       </div>
    //     ) : (
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6 }}
    //         className="text-center py-16"
    //       >
    //         <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
    //         <h3 className="text-xl font-semibold text-foreground mb-2">
    //           No jobs found
    //         </h3>
    //         <p className="text-muted-foreground mb-6 max-w-md mx-auto">
    //           Try adjusting your search criteria or filters to find more opportunities.
    //         </p>
    //         <Button onClick={clearAllFilters} variant="outline">
    //           Clear All Filters
    //         </Button>
    //       </motion.div>
    //     )}

    //     {/* Post Job CTA */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10"
    //     >
    //       <Users className="w-12 h-12 text-primary mx-auto mb-4" />
    //       <h3 className="text-2xl font-bold text-foreground mb-4">
    //         Hiring? Post Your Job
    //       </h3>
    //       <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
    //         Reach top talent from our network of entrepreneurs, developers, and startup professionals.
    //         Get your open positions in front of motivated candidates.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //         <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
    //           Post a Job
    //         </Button>
    //         <Button variant="outline" size="lg">
    //           Learn About Pricing
    //         </Button>
    //       </div>
    //     </motion.div>
    //   </ContentSection>
    // </div>
        <div className='flex w-full h-full flex-row justify-center items-center'> coming soon ....</div>

  );
}