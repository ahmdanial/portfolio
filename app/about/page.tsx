import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";
import { ArrowBigLeft } from "lucide-react";

const navigation = [
  { icon: <ArrowBigLeft size={20} />, name: "Back to Home", href: "/" },
  // Add other navigation items as needed
];

const frontendSkills = [
  { language: "HTML", icon: "html-icon.png", level: "Advance" },
  { language: "CSS", icon: "css-icon.png", level: "Intermediate" },
  { language: "JavaScript", icon: "js-icon.png", level: "Intermediate" },
  { language: "React", icon: "react-icon.png", level: "Beginner" },
  { language: "Bootstrap", icon: "bootstrap-icon.png", level: "Beginner" },
];

const backendSkills = [
  { language: "Python", icon: "python-icon.png", level: "Intermediate" },
  { language: "Node.js", icon: "nodejs-icon.png", level: "Intermediate" },
  { language: "PHP", icon: "php-icon.png", level: "Intermediate" },
  { language: "GitHub", icon: "github-icon.png", level: "Intermediate" },
  { language: "MySQL", icon: "mysql-icon.png", level: "Intermediate" },
  { language: "Laragon", icon: "laragon-icon.png", level: "Intermediate" },
  { language: "R", icon: "r-icon.png", level: "Intermediate" },
];

const webFrameworkSkills = [
  { framework: "Laravel", icon: "laravel-icon.png", level: "Intermediate" },
  { framework: "Django", icon: "django-icon.png", level: "Intermediate" },

];

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-4 mr-auto">
        <ul className="flex items-center justify-start gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 flex items-center ml-6"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="my-8 text-center">
        <img
          src="/profile.png" // Add the correct path to your profile picture
          alt="Profile"
          className="w-48 h-48 rounded-full mb-4"
          style={{ margin: "0 auto" }}
        />
        <br />
        <h1 className="text-4xl text-white mb-2 font-display">
          Ahmad Danial
        </h1>
        <p className="text-2sm text-zinc-500 mb-8">
          Fresh Graduate | Full Stack Developer | Based in Malaysia
        </p>
        <p className="text-sm text-zinc-500 mb-2">
        Hello! I'm Danial, a dedicated Computer Science student with a passion for technology and a 
        strong desire to make a meaningful impact in the world of software development.<br></br> 
        Currently, I am pursuing a Diploma in Computer Science at Kolej Profesional MARA Beranang, Selangor, where I have been gaining valuable insights into the world of coding, algorithms, and problem-solving.
        </p>
      </div>

      <div className="my-16 text-center">
        <h2 className="text-2xl text-white mb-4 font-display">
          Programming Skills
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg text-white mb-2">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill.language} className="text-center mb-4">
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.language}
                    className="w-12 h-12 mb-2 ml-16"
                  />
                  <p className="text-sm text-zinc-500">
                    {skill.language} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg text-white mb-2">Backend</h3>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              {backendSkills.map((skill) => (
                <div key={skill.language} className="text-center mb-4">
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.language}
                    className={`w-12 h-12 mb-2 ml-12 
                      ${skill.language === 'PHP' ? 'php-logo' : ''} 
                      ${skill.language === 'R' ? 'r-logo' : ''} 
                      ${skill.language === 'MySQL' ? 'mysql-logo' :''}`}

                    style={skill.language === 'PHP' ? { width: '90px', marginLeft:'14px' } : 
                          (skill.language === 'R' ? { marginLeft:'25px' } : 
                          (skill.language === 'MySQL' ? { width:'70px', marginRight:'40px' } : 
                          {}))} 
                  />
                  <p className="text-sm text-zinc-500">
                    {skill.language} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg text-white mb-2">Web Framework</h3>
            <div className="grid grid-cols-2 gap-4 ">
              {webFrameworkSkills.map((skill) => (
                <div key={skill.framework} className="text-center mb-4">
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.framework}
                    className={`w-12 h-12 mb-2 ${skill.framework === 'Laravel' ? 'laravel-logo' : ''} ${skill.framework === 'Django' ? 'django-logo' : ''}`}
                    style={skill.framework === 'Laravel' ? { width: '180px' } : (skill.framework === 'Django' ? { width: '120px', marginLeft:'25px' } : {})} />
                  <p className="text-sm text-zinc-500">
                    {skill.framework} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Particles className="absolute inset-0 -z-10" quantity={100} />
    
    </div>
  );
}