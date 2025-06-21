import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData';

function Education() {
    const { theme } = useContext(ThemeContext);

    // Group by institution
    const groupedCerts = educationData.reduce((acc, cert) => {
        if (!acc[cert.institution]) acc[cert.institution] = [];
        acc[cert.institution].push(cert);
        return acc;
    }, {});

    return (
        <div className="education" id="education" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Certifications</h1>

                    {Object.entries(groupedCerts).map(([institution, certs]) => (
                        <div key={institution} className="edu-group">
                            <h3 style={{ color: theme.tertiary }}>{institution}</h3>
                            <div className="edu-group-list">
                                {certs.map((edu) => (
                                    <EducationCard 
                                        key={edu.id}
                                        id={edu.id}
                                        course={edu.course}
                                        startYear={edu.startYear}
                                        endYear={edu.endYear}
                                    />

                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Education;
