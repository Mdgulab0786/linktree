
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

function App() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mojahid-ul-haque/',  label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/mojahid0862', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hey@mojahidulhaque.com2', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/mojahid_ul_haque', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-md">
      
        
      
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden   shadow-lg">
              <img 
                src="/image/aadil_bhai.png" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-3">Mojahid-Ul Haque</h1>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 px-4">
            DevOps Engineer | AWS, Azure & GCP | CI/CD, Docker, K8s, Ansible, Terraform | Automating, optimizing, problem-solving, Vibe coder.. Let's connect & build!
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
            className="block w-full bg-gray-900 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-4">
              <img 
                src="/images  /portfolio.png"
                alt="Portfolio"
                className="w-full h-50 object-cover rounded-lg mb-3"
              
              />
              <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-center">
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
            className="block w-full bg-gray-900 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-4">
              <img 
                src="/public/IP Geolocation Lookup.png"
                alt="IP Lookup by Crafzo"
                className="w-full h-50 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-center">
                IP Lookup by Crafzo
              </h3>
            </div>
          </a>

          {/* Fridge Feast by Crafzo */}
          <a
            href="https://crafzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-900 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-4">
              <img 
                src="/data/Fridge Feast.png"
                alt="Fridge Feast by Crafzo"
                className="w-full h-50 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-center">
                Fridge Feast by Crafzo
              </h3>
            </div>
          </a>

          {/* Credit Card Generator */}
          <a
            href="https://ccgen.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-900 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-4">
              <img 
                src="/data/CC Generator.png"
                alt="Credit Card Generator"
                className="w-full h-50 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-center">
                Credit Card Generator for Testing
              </h3>
            </div>
          </a>

              {/* DNS & SSL Toolkit*/}
          <a
            href="https://dns.crafzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-900 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-4">
              <img 
                src="/data/DNS & SSL Toolkit.png"
                alt="Credit Card Generator"
                className="w-full h-50 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-center">
                DNS & SSL Toolkit
              </h3>
            </div>
          </a>

          {/* New School DevOps */}
          <a
            href="https://www.linkedin.com/newsletters/new-school-devops-7287344762305552385/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-900 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-4">
              <img 
                src="/data/New School DevOps.png"
                alt="New School DevOps"
                className="w-full h-51 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-center">
                New School DevOps. | LinkedIn
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