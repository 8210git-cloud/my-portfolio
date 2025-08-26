import React, { useState, useEffect, useRef } from 'react';
import { Mail, Briefcase, FileText, User, Home, BookOpen, ChevronRight, Check, Search, MapPin, ShoppingCart, Menu, Grid, Bell, Play, Info, ArrowLeft, XCircle } from 'lucide-react';

// Data file for easy customization
const portfolioData = {
  name: "KHUSHI SINGH",
  tagline: "Innovate, create, iterate",
  photoUrl: "https://i.postimg.cc/QVLsCkRY/Whats-App-Image-2025-08-12-at-21-04-25-a00bb5b8.jpg",
  aboutMe: "Java-focused Software Engineer with a solid foundation in Data Structures & Algorithms and a proven track record of designing scalable full-stack solutions. Experienced in          developing robust Android applications, building distributed systems using microservices architecture, and creating modern, responsive web platforms. Passionate about writing clean, efficient code and tackling complex system design challenges, including high-level (HLD) and low-level design (LLD). Always eager to learn new technologies and optimize solutions for performance and maintainability.",
  contact: {
    email: "khushisingh2045@gmail.com",
    linkedin: "your_linkedin_url",
    twitter: "your_twitter_handle"
  },
  skills: [
  { name: "Java", category: "Programming Language" },
  { name: "C++", category: "Programming Language" },
  { name: "Kotlin", category: "Android Development" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "React", category: "Frontend Framework" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "SQL", category: "Backend / Database" },
  { name: "MongoDB", category: "Database" },
  { name: "System Designing", category: "LLD & HLD" },
  { name: "Git", category: "Tools" }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "SRM Institute Of Science And Technology - Kattankulathur",
      years: "2022 - 2026"
    }
  ],
  projects: [
    {
      name: "JapaMitra: Meditation Track App",
      description: "JapaMitra is a digital meditation companion that transforms traditional mantra chanting into an accessible, tech-enabled experience. It helps users maintain focus with  tappable digital mala beads, track daily goals and streaks, and practice comfortably with adjustable cycles and multiple mantras. Built with Android (Java) and Firebase, featuring custom Canvas animations, Material Design UI, and offline support, JapaMitra combines clean MVVM architecture with a user-friendly interface, making spiritual practice easier, trackable, and enjoyable for all ages.",
      techUsed: ["Android (Java), Firebase, Material Design, MPAndroidChart, Android Canvas, Glide, Lottie"],
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      codeSnippet: `
        // An example of a key function or file from JapaMitra Android project.
        package com.example.japacounter.ui.counter
        import androidx.lifecycle.ViewModel
        import com.example.japacounter.data.Repository
        import kotlinx.coroutines.flow.MutableStateFlow
        import kotlinx.coroutines.flow.StateFlow

        class CounterViewModel(@Suppress("unused") private val repo: Repository) : ViewModel() 
        {

       private val _count = MutableStateFlow(0)
       val count: StateFlow<Int> = _count

       private val _cycleLength = MutableStateFlow(108)
       val cycleLength: StateFlow<Int> = _cycleLength

       fun setCycle(length: Int) 
       {
        _cycleLength.value = if (length > 0) length else 108
       }

       fun increment(): Boolean 
       {
        val newCount = _count.value + 1
        _count.value = newCount
        return newCount % _cycleLength.value == 0
       }

       fun reset() 
       {
        _count.value = 0
       }
       }`
    },
    {
      name: "UberZen: Ride-Hailing Platform",
      description: "UberZen is an Android app built with Kotlin and Jetpack Compose, featuring Firebase Authentication and Firestore/Realtime Database integration for secure login and     real-time data storage. The app showcases a modern, responsive UI, smooth navigation, and scalable architecture, demonstrating full-stack Android development skills.",
      techUsed: ["Kotlin, Jetpack Compose, Firebase (Auth, Firestore, Realtime DB), and Google Maps API"],
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      codeSnippet: `
        // A snippet of Kotlin code demonstrating a key algorithm.
        // SignInScreen.kt
          @Composable
          fun SignInScreen(auth: FirebaseAuth = FirebaseAuth.getInstance(), onSignInSuccess: () -> Unit) 
         {
          var email by remember { mutableStateOf("") }
          var password by remember { mutableStateOf("") }

          Column
          (
            modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
             verticalArrangement = Arrangement.Center
          ) {
             TextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") }
          )
             Spacer(modifier = Modifier.height(8.dp))
             TextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            visualTransformation = PasswordVisualTransformation()
          )
             Spacer(modifier = Modifier.height(16.dp))
             Button(onClick = {
            auth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener { task ->
                    if (task.isSuccessful) onSignInSuccess()
                }
          }) {
            Text("Sign In")
          }
        }
       }`
    },
     {
      name: "Book Wings: Library Platform",
      description: "A robust books  backend system platform, built with Node.js and Express. It handles user authentication, product management, and order processing.",
      techUsed: ["Node.js", "Express.js", "MongoDB", "JWT"],
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      codeSnippet: `
        // Example route for fetching products
        router.get('/products', async (req, res) => {
          try {
            const products = await Product.find({});
            res.status(200).json(products);
          } catch (error) {
            res.status(500).json({ message: 'Server error' });
          }
        });
      `
    }
  ],
  achievements: [
    "Led a winning team in college hackathons.",
    "Certified in web development",
    "top student in computer applications"
  ],
  blogs: [
    {
      title: "From Curiosity to Scale: Engineering My Full-Stack Future",
      content: `
      It all started because I got stuck. Not on a coding problem, but on a website. 
      I was trying to customize my Tumblr blog back in the day, fiddling with HTML and CSS, 
      and I just had to know how the button I designed actually talked to the server to save my changes. 
      That frustration—that simple "how does this work?" feeling—is what finally pushed me to go beyond the 
      browser's inspector and into my first JavaScript tutorial.

      My learning path has been anything but linear. I’d get obsessed with making a React component 
      perfectly reusable, then spend a week down a rabbit hole learning about PostgreSQL indexing 
      because my queries were slow. I’ve had moments of pure rage staring at a terminal error message 
      for hours, only to have the solution hit me while I was making a sandwich. Those small victories, 
      the quiet click of a puzzle piece snapping into place, are what kept me going. It taught me that 
      the process isn't about knowing everything, but about learning how to figure anything out.

      Lately, I've been pushing myself to think beyond just making it work. I rebuilt a project's backend 
      three times—first just to function, then to be more secure, and finally to actually handle scale. 
      I wanted to understand the why behind the principles I read about in tech blogs. Deploying my own apps 
      using Docker and a cloud server felt like a huge leap. It was messy and I broke things constantly, 
      but finally seeing something I built live on the internet, for anyone to use, was an incredible feeling. 
      It’s where the frontend and backend magic finally came together.

      For me, the biggest shift wasn't learning a new framework; it was learning to think like an engineer. 
      It’s about asking "how might this break?" as much as "how do I build this?" I get a real kick out of 
      crafting clean, readable code that another person could actually understand and work on. 
      I love the design process just as much as the debugging process.

      I'm looking for a team where that curiosity is valued. I want to work on tough problems that matter, 
      to learn from brilliant people, and to eventually build things that feel as seamless and powerful as 
      the apps that inspired me to start this journey in the first place. I'm ready to roll up my sleeves 
      and contribute.
    `
    },
    {
      title: "JapaMitra: Coding Mindfulness into Reality",
      content: `**Building a Digital Spiritual Companion**
       When I first conceived of JapaMitra, I wanted to bridge ancient spiritual practices with modern technology. As someone who values mindfulness but struggled with maintaining focus during meditation, I recognized the need for a tool that could help practitioners track progress without disrupting their spiritual flow. Traditional mala beads presented several challenges - they could be easily dropped, required manual counting that often led to distractions, and offered no way to track progress over time.
       **Technical Architecture and Implementation**
       The development journey presented fascinating technical challenges. Creating smooth, responsive mala bead animations using Android Canvas required significant experimentation with custom drawing techniques and touch event handling. I spent considerable time optimizing the rendering pipeline to ensure the beads moved fluidly with each tap, maintaining consistent performance across devices.
       Implementing real-time synchronization with Firebase posed another interesting challenge. I needed to ensure users could seamlessly switch between devices without losing meditation progress, which required careful design of the data model and conflict resolution strategies. The offline-first approach was particularly complex but crucial for ensuring the app remained functional without internet connectivity.
       **Designing for Accessibility**
       Perhaps the most valuable lesson came from designing for accessibility. Creating the "Walking Mode" with large tap targets and high-contrast visuals required me to think beyond technical implementation and truly consider diverse user needs. This experience reinforced the importance of inclusive design in creating applications that serve all users effectively.
       **Reflections and Learnings**
       Throughout this project, I deepened my understanding of key Android development concepts. Working with Canvas API taught me about efficient drawing techniques and performance optimization. Implementing the MVVM architecture with Repository pattern helped me create a clean, maintainable codebase that separated concerns effectively.
       Building JapaMitra was more than a technical exercise - it was a journey in creating something meaningful that could genuinely enhance people's spiritual practices. The positive feedback from users, particularly elderly practitioners who appreciated the accessibility features, has been incredibly rewarding.
       This project solidified my passion for creating technology that serves human needs and enhances wellbeing. The journey of building JapaMitra has been one of both technical growth and personal reflection, reminding me that the most meaningful applications often emerge at the intersection of technology and human experience. `
    },
    {
      title: "From Maps to Rides: Building My Own Uber-Inspired App",
      content: `
       Building My Own Mini Uber Clone with Firebase & Google Maps
       Recently, I took on the challenge of building a **Mini Uber Clone**, a simplified version of the popular ride-booking app. My intention was not to create a production-level product but to push myself to work with **real-world technologies** that power modern mobile applications. I wanted to explore how authentication, real-time databases, and live location tracking come together to create a seamless user experience.
       The app includes several important features that make it functional and engaging. I implemented **Firebase Authentication** to allow users to securely sign up and log in. I also integrated **Google Maps and Location Services** to display the user’s live location directly on the map, which was one of the most exciting parts to work on. For storing and syncing user and ride data, I used **Firebase Firestore and Realtime Database**, which gave me valuable experience working with cloud-based services. On the design side, I built the entire interface using **Jetpack Compose**, ensuring that the app feels modern, smooth, and responsive.
       One of the things I enjoyed most about this project was seeing how small pieces of code connect the UI to backend services. For example, adding Firebase Authentication with just a few lines of Kotlin allowed me to create a real sign-in flow that worked reliably with Firebase. It was a great feeling to see the login screen transition smoothly into the app once authentication succeeded.
       Throughout the process, I learned a lot about structuring an Android project using **Gradle Kotlin DSL**, which made dependency management cleaner and easier to maintain. Working with Jetpack Compose gave me a new appreciation for declarative UI design, and connecting it with Firebase taught me how to manage **real-time data updates** in a practical way.
       Overall, building this Mini Uber Clone was a rewarding experience. It gave me hands-on knowledge of how complex apps like Uber function behind the scenes and helped me strengthen my skills in Android development. While this is only a simplified version, I now have a solid foundation to expand it further in the future by adding features like driver mode, ride history, and push notifications. This project has been one of the most exciting additions to my portfolio, and it has given me confidence in my ability to build scalable and meaningful mobile applications.
      `
    },
    {
      title: "Pixels of Me: Building My Portfolio Website",
      content: `
       When I decided to build my portfolio website, I wanted it to be more than just a static page showcasing my work—I wanted it to feel like an extension of me. Many portfolios end up looking similar: minimal text, a few project links, and a contact form. While that structure works, it didn’t feel personal enough. I wanted to build something that would reflect **who I am, what inspires me, and how I think as a developer**.
       That’s when I realized: some of my biggest design inspirations were already right in front of me—**Google, Netflix, and Amazon**. These are platforms I interact with almost every single day. Beyond their functionality, I’ve always admired how they combine usability with design. They aren’t just websites; they’re experiences. So, I asked myself: *What if my portfolio could channel elements from these platforms, blending their familiar design languages into my own personal space?*
       Drawing Inspiration from Everyday Giants:- 
       * **Google’s Minimalism:**
       Google has always inspired me with its simplicity. The homepage is iconic—clean, distraction-free, and purpose-driven. I wanted my portfolio to carry that same sense of **clarity and focus**, where visitors instantly know where to go and what to do.
       * **Netflix’s Immersion:**
       Netflix is all about engagement. The visuals, the scrolling sections, the way it feels alive—I love how it pulls users into an experience. I mirrored that in my portfolio by using **immersive layouts, bold design choices, and smooth transitions** that make navigating my site feel less like browsing and more like exploring.
       * **Amazon’s Structure:**
       Amazon may not always be “pretty,” but it’s incredibly effective. Everything is categorized, layered, and easy to access. For my portfolio, I used that approach for **structuring content clearly**—projects, skills, and contact sections are easy to find and well-organized, ensuring no recruiter or visitor has to “hunt” for information.
       By combining these inspirations, I was able to create a website that isn’t just professional but also very **authentic to me**.
       #### **The Technical Journey**
       Building the site was as much a technical challenge as it was a design one. I built the portfolio using:
       * **HTML, CSS, and JavaScript** for the core structure and interactivity.
       * **Tailwind CSS** for styling, which allowed me to rapidly prototype layouts while keeping the design responsive across all screen sizes.
       * **Animations and transitions** to make the experience feel smooth and modern, much like Netflix’s interface.
       * **Clean code organization** inspired by Amazon’s focus on scalability—so that even as I add more projects, the site remains easy to maintain.
       Every feature was intentional. For example, the navigation menu reflects the **Google-like simplicity**, the project showcase channels a **Netflix-style browsing experience**, and the overall content layout borrows from **Amazon’s clear structure**.
       #### **Why This Portfolio Matters to Me**
       This project was more than just a way to “tick off” a requirement for recruiters. It was about creating a digital home that I could proudly point people to, knowing it reflects both my **technical ability** and my **design perspective**.
       Through this portfolio, I’ve not only showcased my projects and skills but also my ability to **draw inspiration from the world around me** and translate it into code. To me, that’s what being a developer is about: taking influences, solving problems, and creating experiences that are meaningful.
       Building my portfolio taught me that design isn’t just about colors and layouts—it’s about **storytelling**. And this site tells my story, one pixel at a time.
       `
    }
  ],
  primeContent: "Welcome to your exclusive PRIME portfolio content! This section contains privileged information about my most complex projects, available only to recruiters with a 'Prime' membership."
};

// Tailwind CSS theme definitions.
const themes = {
  default: {
    bg: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'bg-purple-600',
    secondary: 'bg-gray-700',
    accent: 'text-purple-400',
    logo: null,
    navLogo: null,
    background: null,
    backgroundPosition: 'center'
  },
  amazon: {
    bg: 'bg-[#131921]',
    text: 'text-gray-100',
    primary: 'bg-[#ff9900]',
    secondary: 'bg-[#232f3e]',
    accent: 'text-[#ff9900]',
    logo: 'https://placehold.co/400x100/131921/ff9900?text=Amazon+Logo',
    navLogo: 'https://placehold.co/100x30/131921/ff9900?text=Amazon+Logo',
    background: 'https://placehold.co/1920x1080/131921/ff9900/white?font=montserrat&text=Amazon+Background',
    backgroundPosition: 'top'
  },
  google: {
    bg: 'bg-[#3c4043]',
    text: 'text-white',
    primary: 'bg-blue-500',
    secondary: 'bg-[#202124]',
    accent: 'text-blue-400',
    logo: 'https://placehold.co/400x100/3c4043/4285F4?text=Google+Logo',
    navLogo: 'https://placehold.co/100x30/3c4043/4285F4?text=Google+Logo',
    background: 'https://placehold.co/1920x1080/FFFFFF/3c4043?font=montserrat&text=Google+Background',
    backgroundPosition: 'center'
  },
  netflix: {
    bg: 'bg-[#141414]',
    text: 'text-white',
    primary: 'bg-[#e50914]',
    secondary: 'bg-[#222222]',
    accent: 'text-[#e50914]',
    logo: 'https://placehold.co/400x100/141414/e50914?text=Netflix+Logo',
    navLogo: 'https://placehold.co/100x30/141414/e50914?text=Netflix+Logo',
    background: 'https://placehold.co/1920x1080/141414/e50914?font=montserrat&text=Netflix+Background',
    backgroundPosition: 'center'
  }
};

// Amazon Loading Screen
const AmazonLoading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#131921] flex flex-col items-center justify-center z-50">
      <div className="text-center">
        {/* Amazon Logo Animation */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-[#ff9900] animate-pulse">
            amazon
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-16 h-1 bg-[#ff9900] rounded-full transform origin-left animate-[scaleX_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-[#232f3e] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#ff9900] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-gray-300 mt-4 text-sm">Loading your portfolio...</p>
      </div>
    </div>
  );
};

// Google Loading Screen
const GoogleLoading = ({ onComplete }) => {
  const [dotIndex, setDotIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex(prev => (prev + 1) % 4);
    }, 300);
    
    setTimeout(onComplete, 3000);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335'];

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="text-center">
        {/* Google Logo */}
        <div className="mb-12">
          <h1 className="text-8xl font-light" style={{ fontFamily: 'Product Sans, Arial, sans-serif' }}>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </h1>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: colors[index],
                opacity: dotIndex === index ? 1 : 0.3,
                transform: dotIndex === index ? 'scale(1.2)' : 'scale(1)'
              }}
            ></div>
          ))}
        </div>
        
        <p className="text-gray-500 mt-6 text-sm">Searching your portfolio...</p>
      </div>
    </div>
  );
};

// Netflix Loading Screen
const NetflixLoading = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  
  useEffect(() => {
    // Show the N animation first
    setTimeout(() => setShowLogo(true), 500);
    
    // Complete loading after animation
    setTimeout(onComplete, 3500);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Netflix N Animation */}
        <div className="relative mb-8">
          <div className={`text-9xl font-black text-[#e50914] transform transition-all duration-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}>
            N
          </div>
          
          {/* Animated red line sweep */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-2 bg-[#e50914] transition-all duration-1500 ease-out ${showLogo ? 'h-24' : 'h-0'}`}></div>
          </div>
        </div>
        
        {showLogo && (
          <>
            <div className="text-4xl font-bold text-[#e50914] mb-4 animate-fade-in">
              NETFLIX
            </div>
            
            {/* Loading indicator */}
            <div className="flex justify-center">
              <div className="w-8 h-8 border-2 border-[#e50914] border-t-transparent rounded-full animate-spin"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Component to wrap each content section
const Section = ({ title, children, id, activeTheme }) => (
  <section id={id} className={`p-8 md:p-12 relative flex flex-col justify-center transition-colors duration-500 ${activeTheme.bg} ${activeTheme.text}`}>
    {activeTheme.background && (
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `url(${activeTheme.background})`,
        backgroundSize: 'cover',
        backgroundPosition: activeTheme.backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}></div>
    )}
    <div className="relative z-10">
      <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center md:text-left ${activeTheme.accent}`}>
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// A reusable Modal component
const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4">
      <div className="bg-gray-800 p-8 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto relative text-gray-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors duration-200">
          <XCircle size={32} />
        </button>
        {children}
      </div>
    </div>
  );
};

// A reusable Carousel component
const Carousel = ({ items, renderItem, theme }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollLeft = () => {
    setScrollPosition(pos => Math.max(0, pos - 300));
  };
  const scrollRight = () => {
    setScrollPosition(pos => Math.min(items.length * 300, pos + 300));
  };
  return (
    <div className="relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scroll-smooth" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-80 md:w-96 snap-center">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 z-10">
        <button onClick={scrollLeft} className={`bg-black/50 hover:bg-black/75 transition-colors text-white p-2 rounded-full transform -translate-x-1/2`}>
          <ChevronRight size={24} className="rotate-180" />
        </button>
        <button onClick={scrollRight} className={`bg-black/50 hover:bg-black/75 transition-colors text-white p-2 rounded-full transform translate-x-1/2`}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// The content for the portfolio sections, rendered conditionally based on `activeSection`
const PortfolioContent = ({ activeSection, activeTheme, handleThemeChange, onAddToCart, isLoggedIn }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);
  
  if (activeSection === 'home') {
    return (
      <Section id="home" title="" activeTheme={activeTheme}>
        <div className="flex flex-col items-center text-center">
          {activeTheme.logo ? (
            <img src={activeTheme.logo} alt={`${activeTheme.name} logo`} className="mb-8 w-64 md:w-96 transition-all duration-500" />
          ) : (
            <div className="flex flex-col items-center">
              <div className={`relative inline-block mb-8 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 ${activeTheme.primary}`}>
                <img src={portfolioData.photoUrl} alt="Your Name" className="object-cover w-48 h-48 rounded-full border-4 border-white transform hover:rotate-3 transition-transform duration-300" />
                <div className={`absolute inset-0 rounded-full border-4 border-white animate-pulse ${activeTheme.primary}`}></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">{portfolioData.name}</h1>
            </div>
          )}
          <p className={`text-xl md:text-2xl font-light mt-4 ${activeTheme.accent}`}>{portfolioData.tagline}</p>
          <ThemeSwitcher handleThemeChange={handleThemeChange} />
        </div>
      </Section>
    );
  } else if (activeSection === 'about') {
    return (
      <Section id="about" title="About Me" activeTheme={activeTheme}>
        <div className="max-w-3xl mx-auto text-lg space-y-6">
          <p>{portfolioData.aboutMe}</p>
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${activeTheme.accent}`}>Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.skills.map(skill => (<div key={skill.name} className={`p-4 rounded-lg shadow-inner ${activeTheme.secondary}`}><span className="font-medium">{skill.name}</span></div>))}
            </div>
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${activeTheme.accent}`}>Education</h3>
            {portfolioData.education.map((edu, index) => (<div key={index} className="p-4 rounded-lg shadow-inner"><p className="font-bold text-lg">{edu.degree}</p><p className="text-sm italic">{edu.school}, {edu.years}</p></div>))}
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${activeTheme.accent}`}>Achievements</h3>
            <ul className="list-disc list-inside space-y-2">{portfolioData.achievements.map((ach, index) => (<li key={index}>{ach}</li>))}</ul>
          </div>
        </div>
      </Section>
    );
  } else if (activeSection === 'projects') {
    return (
      <Section id="projects" title="Projects" activeTheme={activeTheme}>
        <p className="text-lg mb-8 text-center md:text-left">Here are some of my projects. I've included detailed explanations, a video walkthrough, and key code snippets.</p>
        <Carousel
          items={portfolioData.projects}
          theme={activeTheme}
          renderItem={(project) => (
            <div onClick={() => openModal(project)} className={`rounded-2xl shadow-xl p-6 ${activeTheme.secondary} cursor-pointer transition-all duration-300 hover:scale-105`}>
              <h3 className={`text-2xl font-bold mb-4 ${activeTheme.accent}`}>{project.name}</h3>
              <p className="mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.techUsed.map(tech => (<span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${activeTheme.primary} text-gray-900`}>{tech}</span>))}</div>
              <button onClick={(e) => { e.stopPropagation(); onAddToCart(project); }} className={`mt-4 w-full py-2 rounded-full font-bold transition-all duration-300 ${activeTheme.primary} text-gray-900 hover:brightness-110`}>Add to Cart</button>
            </div>
          )}
        />
        {selectedItem && (
          <Modal onClose={closeModal}>
            <h3 className={`text-3xl font-bold mb-4 ${activeTheme.accent}`}>{selectedItem.name}</h3>
            <p className="mb-4 text-lg">{selectedItem.description}</p>
            <h4 className={`text-xl font-semibold mb-2 ${activeTheme.accent}`}>Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-4">{selectedItem.techUsed.map(tech => (<span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${activeTheme.primary} text-gray-900`}>{tech}</span>))}</div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden mb-4">
                <iframe className="w-full h-full" src={selectedItem.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={selectedItem.name}></iframe>
              </div>
            <h4 className={`text-xl font-semibold mb-2 ${activeTheme.accent}`}>Code Showcase</h4>
            <pre className={`bg-gray-800 p-4 rounded-xl text-sm overflow-x-auto`}><code className="language-java">{selectedItem.codeSnippet}</code></pre>
          </Modal>
        )}
      </Section>
    );
  } else if (activeSection === 'blog') {
    return (
      <Section id="blog" title="Blog" activeTheme={activeTheme}>
        <Carousel
          items={portfolioData.blogs}
          theme={activeTheme}
          renderItem={(blog) => (
            <div onClick={() => openModal(blog)} className={`rounded-2xl shadow-xl p-6 ${activeTheme.secondary} cursor-pointer transition-all duration-300 hover:scale-105`}>
              <h3 className={`text-2xl font-bold mb-4 ${activeTheme.accent}`}>{blog.title}</h3>
              <p className="text-lg line-clamp-3">{blog.content}</p>
            </div>
          )}
        />
        {selectedItem && (
          <Modal onClose={closeModal}>
            <h3 className={`text-3xl font-bold mb-4 ${activeTheme.accent}`}>{selectedItem.title}</h3>
            <p className="text-lg">{selectedItem.content}</p>
          </Modal>
        )}
      </Section>
    );
  } else if (activeSection === 'resume') {
    return (
      <Section id="resume" title="My Resume" activeTheme={activeTheme}>
        <div className="flex flex-col justify-center items-center">
          <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 text-xl rounded-full font-bold transition-all duration-300 shadow-lg ${activeTheme.primary} text-gray-900 hover:scale-105`}>
            <FileText className="inline-block mr-2" /> View/Download Resume
          </a>
        </div>
      </Section>
    );
  } else if (activeSection === 'contact') {
    return (
      <Section id="contact" title="Contact Me" activeTheme={activeTheme}>
        <div className="max-w-2xl mx-auto text-lg space-y-6">
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on social media.</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href={`mailto:${portfolioData.contact.email}`} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg ${activeTheme.primary} text-gray-900 hover:scale-105`}><Mail className="inline-block mr-2" /> Email Me</a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg ${activeTheme.secondary} text-white hover:scale-105`}>LinkedIn</a>
            <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg ${activeTheme.secondary} text-white hover:scale-105`}>Twitter</a>
          </div>
        </div>
      </Section>
    );
  }
};

// Theme switcher for the home page
const ThemeSwitcher = ({ handleThemeChange }) => (
  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <button onClick={() => handleThemeChange('amazon')} className="p-4 w-28 md:w-32 rounded-lg text-sm md:text-base font-bold text-white bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">Amazon</button>
    <button onClick={() => handleThemeChange('google')} className="p-4 w-28 md:w-32 rounded-lg text-sm md:text-base font-bold text-white bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">Google</button>
    <button onClick={() => handleThemeChange('netflix')} className="p-4 w-28 md:w-32 rounded-lg text-sm md:text-base font-bold text-white bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">Netflix</button>
  </div>
);

// Navigation bar for the default theme
const Nav = ({ activeTheme, setActiveSection }) => {
  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Blog', id: 'blog', icon: BookOpen },
    { name: 'Resume', id: 'resume', icon: FileText },
    { name: 'Contact', id: 'contact', icon: Mail }
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-800 bg-opacity-75 backdrop-blur-md md:top-0 md:bottom-auto md:w-auto md:left-1/2 md:transform md:-translate-x-1/2 md:p-2 md:rounded-full">
      <ul className="flex justify-around md:space-x-4 md:justify-center">
        {navItems.map(item => (
          <li key={item.id}>
            <button onClick={() => setActiveSection(item.id)} className="flex flex-col items-center p-2 text-sm font-medium transition-colors duration-300 rounded-full md:flex-row md:space-x-2 hover:text-purple-400">
              <item.icon className="w-5 h-5" />
              <span className="hidden md:inline">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Layout for Amazon theme
const AmazonLayout = ({ handleThemeChange, setActiveSection, onLogin, onLogout, isLoggedIn, cartItems, searchResults, handleSearch, searchQuery, setSearchQuery }) => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showAllDropdown, setShowAllDropdown] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Blogs", id: "blog" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" }
  ];
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  const showSearchDropdown = isSearchFocused || (searchQuery.length > 0 && searchResults.length > 0);

  return (
    <header className="bg-[#131921] text-gray-100">
      <div className="flex items-center justify-between p-2 md:p-4">
        <div className="flex items-center space-x-2">
          <button onClick={() => handleThemeChange('default')} className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 text-gray-100" />
          </button>
          <button onClick={() => setActiveSection('home')} className="flex items-end">
            <span className="text-3xl font-extrabold text-[#ff9900]">Amazon</span>
            <span className="text-sm font-bold ml-1 text-gray-300">.in</span>
          </button>
        </div>

        {/* Search bar, now in the top row */}
        <div className="relative flex-grow mx-4 hidden md:flex" ref={searchContainerRef}>
          <input
            type="text"
            placeholder="Search Portfolio"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className="w-full h-10 px-4 py-2 text-gray-900 rounded-md outline-none focus:ring-2 focus:ring-[#ff9900]"
            ref={searchInputRef}
          />
          <button
            className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-[#ff9900] rounded-r-md"
            onClick={() => {
              if (searchInputRef.current) {
                searchInputRef.current.focus();
              }
            }}
          >
            <Search className="w-6 h-6 text-gray-900" />
          </button>
          {showSearchDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <button
                    key={index}
                    className="block w-full text-left p-3 border-b border-gray-700 hover:bg-gray-700 transition-colors"
                    onClick={() => {
                      setActiveSection(result.id);
                      setIsSearchFocused(false);
                      setSearchQuery(result.name);
                    }}
                  >
                    <p className="font-bold">{result.name}</p>
                    <p className="text-xs text-gray-400">Section: {result.type}</p>
                  </button>
                ))
              ) : (
                <div className="p-3 text-gray-400 text-center">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* User profile, cart, and account options */}
        <div className="flex items-center space-x-4">
          <div className="relative text-xs hidden md:block cursor-pointer" onClick={() => setShowAccountDropdown(!showAccountDropdown)}>
            {isLoggedIn ? (
              <>
                <p className="text-gray-300">Hello sir/mam!</p>
                <p className="font-bold">welcome to PRIME</p>
              </>
            ) : (
              <button onClick={(e) => { e.stopPropagation(); onLogin(); }} className="font-bold hover:underline">Sign In</button>
            )}
            {showAccountDropdown && isLoggedIn && (
              <div className="absolute right-0 mt-2 w-48 bg-[#131921] rounded-md shadow-lg py-1 z-20">
                <p className="px-4 py-2 text-sm text-gray-100 border-b border-gray-700">Change Theme</p>
                <button onClick={() => handleThemeChange('default')} className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-[#232f3e]">Default</button>
                <button onClick={() => handleThemeChange('amazon')} className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-[#232f3e]">Amazon</button>
                <button onClick={() => handleThemeChange('google')} className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-[#232f3e]">Google</button>
                <button onClick={() => handleThemeChange('netflix')} className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-[#232f3e]">Netflix</button>
                <div className="border-t border-gray-700 mt-1">
                  <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-[#232f3e]">Sign Out</button>
                </div>
              </div>
            )}
          </div>
          <button onClick={() => setActiveSection('projects')} className="flex items-center space-x-1"><ShoppingCart className="w-6 h-6" /><span className="font-bold text-lg hidden md:block">Cart ({cartItems.length})</span><span className="md:hidden">({cartItems.length})</span></button>
        </div>
      </div>
      <nav className="flex items-center bg-[#232f3e] text-white p-2 text-sm">
        <div className="relative">
          <button onClick={() => setShowAllDropdown(!showAllDropdown)} onMouseEnter={() => setShowAllDropdown(true)} onMouseLeave={() => setShowAllDropdown(false)} className="flex items-center space-x-1 font-bold p-1 rounded-sm hover:border hover:border-white"><Menu className="w-5 h-5" /><span>All</span></button>
          {showAllDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#232f3e] rounded-md shadow-lg py-1 z-20">
              {navItems.map(item => (<button key={item.id} onClick={() => { setActiveSection(item.id); setShowAllDropdown(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-[#131921]">{item.name}</button>))}
            </div>
          )}
        </div>
        <div className="flex flex-1 justify-center md:justify-start ml-8 gap-3 hidden md:flex">
          {navItems.map(item => (<button key={item.id} onClick={() => setActiveSection(item.id)} className="px-3 py-2 rounded-sm hover:border hover:border-white hover:bg-[#344050] transition-colors duration-200">{item.name}</button>))}
        </div>
      </nav>
    </header>
  );
};

// Layout for Google theme
const GoogleLayout = ({ handleThemeChange, setActiveSection, activeTheme, activeSection, onAddToCart, isLoggedIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-end p-4 space-x-4 text-sm text-gray-700">
        <button onClick={() => setActiveSection('home')} className="hidden md:block hover:underline">Home</button>
        <button className="hidden md:block hover:underline">Gmail</button>
        <button className="hidden md:block hover:underline">Images</button>
        <button onClick={() => setShowDropdown(!showDropdown)} className="relative p-2 rounded-full hover:bg-gray-100">
          <Grid className="w-5 h-5" />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
              <p className="px-4 py-2 text-sm text-gray-500 border-b">Change Theme</p>
              <button onClick={() => handleThemeChange('default')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Default</button>
              <button onClick={() => handleThemeChange('amazon')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Amazon</button>
              <button onClick={() => handleThemeChange('google')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Google</button>
              <button onClick={() => handleThemeChange('netflix')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Netflix</button>
            </div>
          )}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User className="w-5 h-5" />
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-7xl font-bold mb-6" style={{ fontFamily: 'Product Sans, Arial, sans-serif' }}>
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </h1>

        {/* Search bar */}
        <div className="relative w-full max-w-xl mb-6">
          <input
            type="text"
            placeholder="Search your portfolio..."
            className="w-full py-3 px-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveSection('about')}
            className="px-5 py-2 bg-gray-100 text-sm rounded hover:border hover:border-gray-300"
          >
            About Me
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className="px-5 py-2 bg-gray-100 text-sm rounded hover:border hover:border-gray-300"
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection('resume')}
            className="px-5 py-2 bg-gray-100 text-sm rounded hover:border hover:border-gray-300"
          >
            Resume
          </button>
          <button
            onClick={() => setActiveSection('blog')}
            className="px-5 py-2 bg-gray-100 text-sm rounded hover:border hover:border-gray-300"
          >
            Blog
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-5 py-2 bg-gray-100 text-sm rounded hover:border hover:border-gray-300"
          >
            Contact Me
          </button>
        </div>

        {/* Render portfolio content */}
        <div className="mt-12 w-full max-w-3xl">
          <PortfolioContent
            activeSection={activeSection}
            activeTheme={activeTheme}
            handleThemeChange={handleThemeChange}
            onAddToCart={onAddToCart}
            isLoggedIn={isLoggedIn}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 text-xs p-4 border-t border-gray-200">
        <p>This is a portfolio built to emulate the Google theme. Not affiliated with Google.</p>
      </footer>
    </div>
  );
};

// Layout for Netflix theme
const NetflixLayout = ({ handleThemeChange, setActiveSection, activeTheme, activeSection, onAddToCart, isLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black">
        <h1 className="text-2xl font-bold text-red-600">NETFLIX</h1>
        <nav className="flex space-x-6 text-sm">
          <button onClick={() => setActiveSection('about')} className="hover:text-red-500">About</button>
          <button onClick={() => setActiveSection('projects')} className="hover:text-red-500">Projects</button>
          <button onClick={() => setActiveSection('blog')} className="hover:text-red-500">Blog</button>
          <button onClick={() => setActiveSection('resume')} className="hover:text-red-500">Resume</button>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-red-500" />
          <span className="text-sm">Recruiter</span>
          <Bell className="w-5 h-5 cursor-pointer hover:text-red-500" />
          <User className="w-5 h-5 cursor-pointer hover:text-red-500" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Unlimited Portfolio Content, Projects, and More.
          </h2>
          <p className="text-lg mb-8">
            Watch my journey like a Netflix Original 🚀
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection('projects')}
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
            >
              <Play className="w-5 h-5" /> <span>View Projects</span>
            </button>
            <button
              onClick={() => setActiveSection('resume')}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition"
            >
              <Info className="w-5 h-5" /> <span>My Resume</span>
            </button>
          </div>
        </div>
      </main>

      {/* Render portfolio content */}
      <section className="relative z-10 px-8 py-12 bg-black">
        <PortfolioContent
          activeSection={activeSection}
          activeTheme={activeTheme}
          handleThemeChange={handleThemeChange}
          onAddToCart={onAddToCart}
          isLoggedIn={isLoggedIn}
        />
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-sm text-center py-6 border-t border-gray-800">
        <p>This is a portfolio built to emulate the Netflix theme. Not affiliated with Netflix.</p>
      </footer>
    </div>
  );
};

// Toast component for notifications
const Toast = ({ message, type, onClose }) => {
  const typeClasses = {
    success: 'bg-green-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };
  return (
    <div className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white ${typeClasses[type]} flex items-center space-x-2 animate-bounce-in-right`}>
      <span className="flex-1">{message}</span>
      <button onClick={onClose}><XCircle size={20} /></button>
    </div>
  );
};

// Main App component
export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [tourStep, setTourStep] = useState(1);
  const [currentTheme, setCurrentTheme] = useState('default');
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTheme, setLoadingTheme] = useState(null);
  
  const activeTheme = themes[currentTheme];
  
  const handleThemeChange = (theme) => {
    if (theme !== 'default' && theme !== currentTheme) {
      setLoadingTheme(theme);
      setIsLoading(true);
    } else {
      setCurrentTheme(theme);
      if (theme !== 'default') {
        setShowIntro(false);
      }
      setActiveSection('home');
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setCurrentTheme(loadingTheme);
    setShowIntro(false);
    setActiveSection('home');
    setLoadingTheme(null);
  };

  const nextTourStep = () => {
    setTourStep(tourStep + 1);
  };
  
  const closeTour = () => {
    setShowIntro(false);
  };
  
  const onAddToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    showToast('Item added to cart!', 'success');
  };
  
  const onLogin = () => {
    setIsLoggedIn(true);
    showToast('Signed in successfully!', 'success');
  };
  
  const onLogout = () => {
    setIsLoggedIn(false);
    showToast('Signed out.', 'info');
  };
  
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };
  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.length > 0) {
      const results = [];
      portfolioData.projects.forEach(p => {
        if (p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.techUsed.some(t => t.toLowerCase().includes(query))) {
          results.push({ name: p.name, id: 'projects', type: 'Project' });
        }
      });
      portfolioData.blogs.forEach(b => {
        if (b.title.toLowerCase().includes(query) || b.content.toLowerCase().includes(query)) {
          results.push({ name: b.title, id: 'blog', type: 'Blog Post' });
        }
      });
      portfolioData.skills.forEach(s => {
        if (s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query)) {
          results.push({ name: s.name, id: 'about', type: 'Skill' });
        }
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Show loading screen
  if (isLoading) {
    if (loadingTheme === 'amazon') {
      return <AmazonLoading onComplete={handleLoadingComplete} />;
    } else if (loadingTheme === 'google') {
      return <GoogleLoading onComplete={handleLoadingComplete} />;
    } else if (loadingTheme === 'netflix') {
      return <NetflixLoading onComplete={handleLoadingComplete} />;
    }
  }

  return (
    <div className={`font-sans antialiased ${activeTheme.bg} ${activeTheme.text}`}>
      {showIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-90">
          <div className={`p-8 mx-4 max-w-lg text-center rounded-2xl shadow-lg transition-all duration-500 ${activeTheme.primary} ${activeTheme.text}`}>
            {tourStep === 1 && (<><h3 className="text-2xl font-bold mb-4">Welcome, Recruiter!</h3><p className="mb-4">This portfolio is designed to be highly interactive. Let me give you a quick tour so you know what to expect.</p><button onClick={nextTourStep} className="px-6 py-2 rounded-full font-bold bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300">Start Tour <ChevronRight className="inline-block ml-2" /></button></>)}
            {tourStep === 2 && (<><h3 className="text-2xl font-bold mb-4">See My Skills in Action</h3><p className="mb-4">Hover over certain elements on the site to see what technologies were used to create them.</p><button onClick={nextTourStep} className="px-6 py-2 rounded-full font-bold bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300">Next <ChevronRight className="inline-block ml-2" /></button></>)}
            {tourStep === 3 && (<><h3 className="text-2xl font-bold mb-4">FAANG Theme Switcher</h3><p className="mb-4">On the next page, you'll find buttons to switch the entire website's theme to match different companies like Amazon, Google, or Netflix. Try it out!</p><button onClick={closeTour} className="px-6 py-2 rounded-full font-bold bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300">Got It! <Check className="inline-block ml-2" /></button></>)}
          </div>
        </div>
      )}

      {!showIntro && (
        <>
          {currentTheme === 'amazon' && (
            <div className={`min-h-screen font-sans antialiased ${activeTheme.bg} ${activeTheme.text}`}>
                <AmazonLayout
                    handleThemeChange={handleThemeChange}
                    setActiveSection={setActiveSection}
                    onLogin={onLogin}
                    onLogout={onLogout}
                    isLoggedIn={isLoggedIn}
                    cartItems={cartItems}
                    searchResults={searchResults}
                    handleSearch={handleSearch}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <main className="min-h-screen pt-16">
                    <PortfolioContent
                        activeSection={activeSection}
                        activeTheme={activeTheme}
                        handleThemeChange={handleThemeChange}
                        onAddToCart={onAddToCart}
                        isLoggedIn={isLoggedIn}
                    />
                    {isLoggedIn && (
                        <Section id="prime-content" title="Prime Exclusive" activeTheme={activeTheme}>
                            <div className="bg-yellow-900 bg-opacity-30 p-8 rounded-xl border-2 border-yellow-500">
                                <p className="text-xl text-yellow-300 font-medium">{portfolioData.primeContent}</p>
                            </div>
                        </Section>
                    )}
                </main>
                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            </div>
          )}
          {currentTheme === 'google' && (
            <GoogleLayout
                handleThemeChange={handleThemeChange}
                setActiveSection={setActiveSection}
                activeTheme={activeTheme}
                activeSection={activeSection}
                onAddToCart={onAddToCart}
                isLoggedIn={isLoggedIn}
            />
          )}
          {currentTheme === 'netflix' && (
            <NetflixLayout
                handleThemeChange={handleThemeChange}
                setActiveSection={setActiveSection}
                activeTheme={activeTheme}
                activeSection={activeSection}
                onAddToCart={onAddToCart}
                isLoggedIn={isLoggedIn}
            />
          )}
          {currentTheme === 'default' && (
            <div className={`min-h-screen font-sans antialiased ${activeTheme.bg} ${activeTheme.text}`}>
                <Nav activeTheme={activeTheme} setActiveSection={setActiveSection} />
                <main className="min-h-screen pt-16">
                    <PortfolioContent
                        activeSection={activeSection}
                        activeTheme={activeTheme}
                        handleThemeChange={handleThemeChange}
                        onAddToCart={onAddToCart}
                        isLoggedIn={isLoggedIn}
                    />
                </main>
            </div>
          )}
        </>
      )}
    </div>
  );
}
