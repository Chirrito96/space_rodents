import React from "react";

function LinkedInCertifications({ certifications }) {
  return (
    <div className="d-flex ">
      <ul>
        {certifications.map((certification) => (
          <li key={certification.id}>
            <a href={certification.credentialUrl}> <h3 className="lead">{certification.title}</h3></a><span className="small">{certification.authority}</span>
<span className="small">-{certification.issued}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkedInCertifications;
