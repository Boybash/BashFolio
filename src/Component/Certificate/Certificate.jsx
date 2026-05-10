import React from "react";
import CertLogo from "../../assets/award.png";
import { Fade } from "react-awesome-reveal";
export default function Certificate() {
  const certificates = [
    {
      id: "INT-CERT-CAR349011466920",
      title: "Truemind Innovation Limited",
      image: CertLogo,
      status: "Internship",
      role: "Frontend Developer",
      date: "May 2026",
      expires: "No Expiration",
      link: "https://truemindsltd.com/",
      pdf: "/internship-cert.pdf",
    },
  ];
  return (
    <section className="bg-[#d7d7d7] flex flex-col items-center justify-center w-full py-10 font-montserat">
      {/* Header with a Terminal feel */}
      <div className="text-center mb-16">
        <h1 className=" uppercase border-5 border-black px-8 py-3 font-bold tracking-[0.3em] truncate">
          Certifications
        </h1>
      </div>
      <Fade>
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl px-10">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group bg-[#1A1A1A] border-t-4 border-blue-500 text-white rounded-sm shadow-xl p-6 w-[320px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Row: Logo & Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white p-2 rounded-md">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-1 rounded">
                  {certificate.status}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                <h2 className="text-lg font-bold leading-tight mb-4 group-hover:text-blue-400 transition-colors">
                  {certificate.title}
                </h2>

                <div className="space-y-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <p className="flex justify-between border-b border-white/5 pb-1">
                    <span>Role:</span>{" "}
                    <span className="text-white">{certificate.role}</span>
                  </p>
                  <p className="flex justify-between border-b border-white/5 pb-1">
                    <span>Date Issued:</span>{" "}
                    <span className="text-white">{certificate.date}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Credential ID:</span>{" "}
                    <span className="text-white/50">
                      {certificate.id.slice(0, 12)}...
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-center border border-white/20 py-2 hover:bg-white hover:text-black transition-all"
                >
                  COMPANY SITE
                </a>
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-center bg-blue-600 py-2 hover:bg-blue-500 transition-all"
                >
                  VIEW PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
