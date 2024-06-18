import dynamic from 'next/dynamic';
import React from 'react';

const ProjectBanner = dynamic(import('components/Projects/ProjectBanner'));
const ProjectBrochure = dynamic(import('components/Projects/ProjectBrochure'));
const ProjectOverview = dynamic(import('components/Projects/ProjectOverview'));
const ProjectForm = dynamic(import('components/Projects/ProjectForm'));
const ProjectPlans = dynamic(import('components/Projects/ProjectPlans'));
const ProjectAdvantages = dynamic(import('components/Projects/ProjectAdvantages'));
const ProjectGallery = dynamic(import('components/Projects/ProjectGallery'));

function ProjectDetails() {
  return (
    <>
      {/* Project banner */}
      <ProjectBanner />
      {/* Project overviw */}
      <section className="project-detail-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ProjectBrochure />
            </div>
          </div>
          <div className="row mt-lg-5 mt-4">
            <div className="col-lg-8">
              <ProjectOverview />
            </div>
            <div className="col-lg-4">
              <ProjectForm />
            </div>
          </div>
        </div>
      </section>
      {/* Project Master and Florr Plans */}
      <ProjectPlans />
      {/* Project Advantages */}
      <ProjectAdvantages />
      {/* Project Villa */}
      <ProjectGallery />
    </>
  );
}

export default ProjectDetails;
