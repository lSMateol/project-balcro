export default function Component() {
    const socialIcons = {
      facebook: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      tiktok: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      ),
      whatsapp: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    }
  
    return (
      <footer className="bg-[#2b2b2b] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm">
              © 2024 Universidad de cundinamarca
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                {socialIcons.facebook}
              </a>
              <a 
                href="https://www.instagram.com/tejiendoritmosysaberes.of/profilecard/?igsh=MWF0MGpsZHE1ODE1dA==" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                {socialIcons.instagram}
              </a>
              <a 
                href="https://www.tiktok.com/@tejiendoritmossab?_t=8rLqXs0bx83&_r=1" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="TikTok"
              >
                {socialIcons.tiktok}
              </a>
              <a 
                href="https://wa.me/c/573502204664" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="WhatsApp"
              >
                {socialIcons.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }