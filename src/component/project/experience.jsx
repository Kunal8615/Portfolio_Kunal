import React from 'react'
import Experience from './experience_comp.jsx'

const DisplayExperience = () => {
    return (
        <Experience
            companyName={"FarEye"}
            profile={"Trainee Solution Engineer"}
            startDate={"Oct 2024"}
            endDate={"June 2025"}
            jobRoleDescription="Role involved delivering JavaScript-based logistics Platform applications to optimize first, mid, and last-mile delivery operations. Developed and enhanced responsive web and mobile interfaces for field executives, improving delivery success rates and operational efficiency. Designed and deployed interactive data dashboards using Apache Superset and SQL to track delivery performance, SLA compliance, and route efficiency. Developed and integrated RESTful APIs for seamless data exchange across systems, while also performing API analysis, debugging, and optimization for reliability. Collaborated with cross-functional teams and clients to gather, analyze, and translate business requirements into scalable technical solutions. Involved in the complete software development lifecycle, including requirement analysis, Backend development, UAT support, and production deployments. Conducted code reviews, performance optimization, and bug fixing to ensure high-quality, maintainable, and scalable application delivery."
        />
    );
}

export default DisplayExperience;