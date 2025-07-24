import { Github, Linkedin, Mail, Instagram } from "lucide-react";

function App() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mojahid-ul-haque/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/mojahid0862", label: "GitHub" },
    { icon: Mail, href: "mailto:i@mojahidulhaque.com", label: "Email" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/mojahid_ul_haque",
      label: "Instagram",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden   shadow-lg">
              <img
                src="aadil-bhai.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-3">Mojahid-Ul Haque </h1>
          <p className="text-gray-300 fon text-sm leading-relaxed mb-6 px-4 font-bold">
            DevOps Engineer | AWS, Azure & GCP | CI/CD, Docker, K8s, Ansible,
            Terraform | Automating, optimizing, problem-solving, Vibe coder..
            Let's connect & build!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social.label}
                target="_blank"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Portfolio Card */}
<div className="mb-6">
  <a
    href="https://mojahidulhaque.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full rounded-2xl border border-[#262626] hover:border-[#3d3d3d] transition-all duration-300 group overflow-hidden"
  >
    <div className="relative">
      <img
        src="portfolio"
        alt="Portfolio"
        className="w-full h-55 object-cover"
      />
      <h3 className="absolute bottom-3 left-2  font-semibold text-white px-3 py-1 rounded backdrop-blur-md ">
        Mojahid Ul Haque - Portfolio
      </h3>
    </div>
  </a>
</div>

        {/* Project Cards */}
        <div className="space-y-4">
          {/* IP Lookup by Crafzo */}
          <a
            href="https://ip.crafzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl border border-[#262626] hover:border-[#3d3d3d] transition-all duration-300 group overflow-hidden"
          >
            <div className="relative">
              <img
                src="IP-Geolocation Lookup"
                alt="IP Lookup by Crafzo"
                className="w-full h-62 object-cover"
              />
              <h3 className="absolute bottom-3 left-2  font-semibold text-white px-3 py-1 rounded backdrop-blur-md ">
                IP Lookup by Crafzo
              </h3>
            </div>
          </a>
          {/* Fridge Feast by Crafzo */}
          <a
            href="https://crafzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl border border-[#262626] hover:border-[#3d3d3d] transition-all duration-300 group overflow-hidden"
          >
            <div className="relative">
              <img
                src="Fridge-Feast"
                alt="Fridge Feast by Crafzo"
                className="w-full h-62 object-cover"
              />
              <h3 className="absolute bottom-3 left-2  font-semibold text-white px-3 py-1 rounded backdrop-blur-md ">
                Fridge Feast by Crafzo
              </h3>
            </div>
          </a>

          {/* Credit Card Generator */}
          <a
            href="https://ccgen.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl border border-[#262626] hover:border-[#3d3d3d] transition-all duration-300 group overflow-hidden"
          >
            <div className="relative">
              <img
                src="CC-Generator"
                alt="Credit Card Generator"
                className="w-100 h-100 object-cover"
              />
              <span>
              <p className="absolute bottom-3 left-2  font-semibold text-white px-3 py-1 rounded backdrop-blur-md ">
                Credit Card Generator for Testing
              </p>
              </span>
            </div>
          </a>

          {/* DNS & SSL Toolkit */}
          <a
            href="https://dns.crafzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl border border-[#262626] hover:border-[#3d3d3d] transition-all duration-300 group overflow-hidden"
          >
            <div className="relative">
              <img
                src="DNS-&-SSL-Toolkit.png"
                alt="DNS & SSL Toolkit"
                className="w-full h-62 object-cover"
              />
              <h3 className="absolute bottom-3 left-2  font-semibold text-white px-3 py-1 rounded backdrop-blur-md ">
                DNS & SSL Toolkit by Crafzo
              </h3>
            </div>
          </a>

          {/* New School DevOps */}
          <a
            href="https://www.linkedin.com/newsletters/new-school-devops-7287344762305552385/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl border border-[#262626] hover:border-[#3d3d3d] transition-all duration-300 group overflow-hidden"
          >
            <div className="relative">
              <img
                src="new-school-devops-.png"
                alt="New School DevOps"
                className="w-full h-62 object-cover"
              />
              <h3 className="absolute bottom-3 left-2 text-lg font-semibold text-black px-3 py-1 rounded ">
             
              </h3>
            </div>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs">
            © 2025 Mojahid-Ul Haque. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
