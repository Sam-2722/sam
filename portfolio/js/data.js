/* ===== EDIT YOUR DETAILS HERE ===== */
const P={
  name:"Brian Samonte",
  title:"IT Student | Game Developer & Animator",
  tagline:"I design digital experiences that blend code, creativity, and storytelling.",
  intro:"I build websites, game animations, visual effects, and UI designs that help ideas feel polished, interactive, and memorable.",
  bio:"I'm an IT student with hands-on experience in game development, animation, and digital design. I create websites, motion graphics, game visual effects, and user-focused interfaces that combine technical skill with creative direction. My goal is to keep growing as a developer, designer, and visual storyteller.",
  age:"20",
  birthdate:"May 27, 2006",
  location:"Calamba, Philippines",
  occupation:"IT student and independent multimedia creator",
  yearsExperience:"4 years of project-based creative practice",
  email:"briansamonte27@gmail.com",
  phone:"09207988170",
  facebook:"https://www.facebook.com/brian.samonte.378/",
  instagram:"https://www.instagram.com/sam_pa_god/",
  linkedin:"",
  github:"",
  education:"Bachelor of Science in Information Technology",
  focus:"Web development, game development, animation, UI/UX design, and branding",
  availability:"Available for freelance work, school collaborations, and creative project opportunities.",
  cv:"assets/Brian-Samonte-CV.pdf",
  securityCertificate:"assets/Brian-Samonte-Security-Awareness-Certificate.pdf",
  photo:"assets/brian-samonte-photo.png",
  formEndpoint:"https://formspree.io/f/maeebqeq"
};
const SKILLS={
  "Web and UI":["Website Development","UI Design"],
  "Game development and animation":["Game Development","Game Animation","Game Effects","Animation"],
  "Security":["Digital Safety and Security Awareness"],
  "Professional":["Creative Problem Solving","Communication","Team Collaboration"]
};
const EDU=[
  {level:"College",t:"Bachelor of Science in Information Technology",o:"City College of Calamba",y:"2024 - 2028",n:"Old Municipal Hall, Poblacion, Calamba City"},
  {level:"Senior High School",t:"Humanities and Social Sciences",o:"Calamba Bayside Integrated School",y:"2022 - 2024",n:""},
  {level:"Junior High School",t:"Junior High School",o:"Calamba Bayside Integrated School",y:"2018 - 2022",n:""},
  {level:"Elementary School",t:"Elementary School",o:"Lingga Elementary School",y:"2012 - 2018",n:""}
];
const EXPERIENCE=[
  {role:"Multimedia & Digital Content Creator",company:"Independent / Project-based practice",location:"Calamba, Philippines",period:"2022 - Present",summary:"Developing practical skills through independent and academic creative work in animation, game art, visual effects, web design, and branding.",responsibilities:["Create and refine visual concepts, illustrations, and brand assets.","Develop game animation and visual effects, then review how they read in motion.","Plan user flows and screen layouts for web and portfolio projects."],accomplishments:["Built a portfolio of graphic design, branding, web wireframe, animation, and VFX projects.","Created a multi-format Brew Haven campaign and a Skull & Roses logo identity."]}
];
const CREDENTIALS=[
  {name:"Digital Safety and Security Awareness",issuer:"Cisco Networking Academy",date:"13 August 2026",file:"assets/Brian-Samonte-Security-Awareness-Certificate.pdf"}
];
const ACHIEVEMENTS=[
  "Security Awareness Certificate",
  "Portfolio project showcase in web design and animation",
  "Ongoing growth in game development, UI design, and visual storytelling"
];
const PROJECT_TYPES=[
  "Graphic Design",
  "System",
  "Web Development",
  "Game Development"
];
const PROJECTS=[
  {
    id:"gladiator-sparta-gym-management-system",
    name:"Gladiator and Sparta Fitness Gym Management System",
    category:"System",
    type:"Gym Management System",
    year:"2025",
    date:"2025 - 2026",
    dateGroup:"2025",
    status:"Academic Software Engineering Project",
    role:"Team member",
    team:["Judy Valiente","John Ravoni","Jen Briliante","Brian Samonte"],
    github:"https://github.com/Sam-2722/gym-membershipandmanagementsystem",
    images:[
      "assets/gladiator-sparta-login-redacted.png",
      "assets/gladiator-sparta-dashboard.png",
      "assets/gladiator-sparta-members.png",
      "assets/gladiator-sparta-check-in.png",
      "assets/gladiator-sparta-sales.png",
      "assets/gladiator-sparta-history.png"
    ],
    tools:[],
    desc:"A gym management system created with classmates for a Software Engineering subject.",
    overview:"For our Software Engineering subject, my classmates and I worked together on the Gladiator and Sparta Fitness Gym Management System. The screens show a dashboard, member records, QR-based check-in, point of sale, and activity history.",
    problem:"The project brought several day-to-day gym tasks—member management, attendance, product sales, and activity records—together in one system.",
    solution:"Our team designed a gym management interface with dedicated dashboard, members, check-in, sales, and history views.",
    objective:"Explore how a gym could manage its members, attendance, product sales, and records through one coordinated system.",
    approach:"We planned and built the project collaboratively as part of our Software Engineering subject. The gallery documents the main screens and workflows.",
    features:["Dashboard with member, product, revenue, and check-in summaries","Member directory and search","QR code and member-ID check-in","Product sales and cart","History views for transactions and attendance"],
  },
  {
    id:"m1-combo-and-slash-vfx",
    name:"M1 Combo & Slash VFX",
    category:"Game Development",
    type:"Game Animation / VFX",
    year:"2024",
    date:"2024 - Present",
    dateGroup:"2024",
    status:"In Progress",
    role:"Animator, VFX Artist, and Character Designer",
    images:["assets/m1-character-design.png"],
    videos:[
      {src:"assets/m1-combo-animation.mp4",label:"M1 combo animation",role:"Animator"},
      {src:"assets/slash-vfx.mp4",label:"Slash visual effects",role:"VFX Artist"}
    ],
    tools:["Character design","Game animation","Visual effects"],
    desc:"A fighting-game character concept with a combo animation, custom slash effects, and character design.",
    overview:"This project brings together a designed character and combat presentation. I contributed to three parts of the work: the M1 combo animation, the slash visual effects, and the character design artwork.",
    problem:"The character needed a coordinated presentation in which the combo animation, slash effects, and visual design felt like parts of the same fighting-game concept.",
    solution:"I designed the character, animated the M1 combo, and created the slash VFX as distinct contributions, making each part easy to review in the project album.",
    objective:"Create a cohesive character presentation that combines readable combat animation, impactful slash effects, and a distinct visual design.",
    approach:"I animated the M1 combo, created the slash VFX, and designed the character shown in the concept art. Each contribution is presented separately below so my role in the animation, effects, and design is clear.",
    features:["M1 combo animation — Animator","Slash VFX — VFX Artist","Character concept art — Designer"]
  },
  {
    id:"dragon-fruit-colored-pencil-study",
    name:"Dragon Fruit Study",
    category:"Graphic Design",
    type:"Colored Pencil Study",
    year:"2026",
    date:"08-14-2026",
    dateGroup:"2026",
    status:"Completed",
    role:"Artist",
    images:["assets/dragon-fruit-studio-art.png","assets/dragon-fruit-study-cover-portrait.png","assets/dragon-fruit-colored-pencil-study.jpg"],
    tools:["Colored pencil"],
    desc:"A hand-drawn dragon fruit study using colored pencil to explore natural color, texture, and form.",
    overview:"This drawing presents a whole dragon fruit and its cross-section, using colored pencil on paper to capture its pink skin, green scales, and dotted flesh.",
    problem:"The study needed to translate the fruit's distinct shape, color, and surface details into a clear hand-rendered illustration.",
    solution:"I drew the fruit and cross-section, then layered colored-pencil details to communicate its form, skin, scales, and flesh.",
    objective:"Practice observing a familiar natural subject and translating its shape, texture, and colors into a hand-rendered illustration.",
    approach:"I drew the whole fruit and its cross-section by hand, then layered pink, green, and dark pencil details to show the skin, leafy scales, seeds, and form.",
    features:["Hand-drawn dragon fruit illustration","Whole-fruit and cross-section studies","Colored-pencil shading and details"]
  },
  {
    id:"brew-haven-digital-campaign",
    name:"Brew Haven",
    category:"Graphic Design",
    type:"Digital Campaign",
    year:"2026",
    date:"09-07-2026",
    dateGroup:"2026",
    status:"Completed",
    role:"Graphic designer",
    images:[
      "assets/brew-haven-social-media-post.png",
      "assets/brew-haven-extra.jfif",
      "assets/brew-haven-logo.png",
      "assets/brew-haven-banner-ad.png",
      "assets/brew-haven-landing-page-banner.png",
      "assets/brew-haven-newsletter-header.png"
    ],
    tools:["Adobe Photoshop"],
    desc:"A warm coffee-shop identity with campaign graphics and digital promotional materials.",
    overview:"Brew Haven is a coffee-shop campaign built around a seasonal Pumpkin Spice Latte promotion. The project includes a brand logo, social media creative, digital banner ads, a landing-page banner, and a newsletter header.",
    problem:"The seasonal promotion needed a consistent look across several different digital placements.",
    solution:"I created a warm coffee-inspired visual direction and adapted it across the social post, logo, banner ads, landing-page banner, and newsletter header.",
    objective:"Create a cohesive seasonal campaign that introduces Brew Haven and promotes its Pumpkin Spice Latte across multiple digital formats.",
    approach:"I developed a warm coffee-inspired visual identity and adapted the seasonal promotion across social, web, banner-ad, and email placements.",
    features:["Brand logo","Seasonal campaign graphic","Social media post","Digital banner advertisement","Landing-page banner","Newsletter header"]
  },
  {
    id:"andalucia-clothing-typography-poster",
    name:"Andalucia Clothing Co.",
    category:"Graphic Design",
    type:"Typography Poster",
    year:"2026",
    date:"09-18-2026",
    dateGroup:"2026",
    status:"Completed",
    role:"Designer",
    images:["assets/andalucia-typography-poster.png"],
    tools:["Typography","Digital design"],
    desc:"A promotional poster for Andalucia Clothing Co.'s Aura collection, featuring a bold clothing-brand wordmark and a bomber jacket product announcement.",
    overview:"The poster introduces Andalucia Clothing Co.'s Aura collection and promotes its first drop: the “Deuce” bomber jacket.",
    problem:"The poster needed to introduce the clothing label and its first product while keeping the brand name and product information easy to distinguish.",
    solution:"I used a prominent wordmark, restrained supporting typography, and a warm editorial layout to establish a clear information hierarchy.",
    objective:"Create a distinctive clothing-brand poster that presents the collection identity and key product information in a clear visual hierarchy.",
    approach:"I paired a prominent all-caps brand name with restrained supporting type, a warm neutral background, and fine diagonal lines to give the product announcement a refined, editorial feel.",
    features:["Collection and brand identity","Bold typographic wordmark","Bomber jacket product announcement","Warm editorial poster layout"]
  },
  {
    id:"portfolio-website-wireframe",
    name:"Portfolio Website Wireframe",
    category:"Web Development",
    type:"Website Wireframe",
    year:"2024",
    date:"10-26-2026",
    dateGroup:"2026",
    status:"Completed",
    role:"Designer",
    images:["assets/portfolio-wireframe-mobile.png","assets/portfolio-website-wireframe-landscape.jpeg"],
    tools:["Pencil and paper"],
    desc:"A hand-drawn mobile portfolio wireframe mapping out the Home, Work, About, and Contact screens.",
    overview:"This low-fidelity sketch plans a mobile portfolio experience, from its home introduction and work gallery to the About and Contact screens.",
    problem:"The mobile portfolio needed a clear way to organize its main content and connect the Home, Work, About, and Contact screens.",
    solution:"I mapped the key screens and used persistent bottom navigation to make the planned sections easy to reach.",
    objective:"Plan the main page layouts and navigation for a personal portfolio before development.",
    approach:"I sketched the key screens and arranged content blocks for the introduction, featured work, profile information, and contact form, with bottom navigation connecting each section.",
    features:["Home screen with profile introduction","Work screen with project gallery","About screen with profile details","Contact screen with message form","Persistent bottom navigation"]
  },
  {
    id:"skull-and-roses-brand-identity",
    name:"Skull & Roses",
    category:"Graphic Design",
    type:"Brand Identity",
    year:"2026",
    date:"08-31-2026",
    dateGroup:"2026",
    status:"Completed",
    role:"Designer",
    images:[
      "assets/skull-roses-final-concept.png",
      "assets/skull-roses-horizontal.png",
      "assets/skull-rose-icon.png",
      "assets/skull-rose-badge.png",
      "assets/skull-roses-vertical.png",
      "assets/skull-roses-sketch.jpg"
    ],
    tools:["Digital illustration","Logo design"],
    desc:"A skull-and-rose visual identity combining gothic line art, deep red roses, and green vines.",
    overview:"This brand identity project develops a skull-and-rose motif across horizontal, vertical, icon, and badge logo formats.",
    problem:"The identity needed to feel distinctive while remaining adaptable to different layouts and logo uses.",
    solution:"I explored three initial logo directions, selected the skull-and-rose concept, and developed it into horizontal, vertical, icon, and badge variations.",
    objective:"Create a memorable visual identity that can adapt to different layouts and uses.",
    approach:"I illustrated a skull intertwined with roses and vines, then arranged the artwork into horizontal, vertical, icon, and badge variations. The sketch shows the three logo directions I explored: a spade-inspired symbol, a skull-and-rose concept, and a kingpin-inspired character mark. I used the sketch to compare the strongest visual storytelling and choose the direction that best matched the brand's mood, identity, and readability.",
    features:["Three initial logo explorations","Skull and rose illustration","Horizontal logo","Vertical logo","Square icon","Transparent badge variation"]
  }
];
/* ===== END OF EDIT AREA ===== */
