const it = {
  id: 2,
  departmentName: "Information Technology",
  cardName: "Information Technology",
  shortName: "IT",
  technicalEventCount: 4,
  nonTechnicalEventCount: 3,
  workshop: 2,

  departmentDescription:
    "Our department is committed to fostering innovation, creativity, and excellence through dynamic and engaging events. From technical workshops and competitions to collaborative hackathons and research symposiums, we provide platforms for students to explore their potential, sharpen their skills, and showcase their talents. Our events are designed to inspire learning, teamwork, and problem-solving, equipping participants to tackle real-world challenges and drive future advancements in their fields.",
  coordinatorName: "Ms. A. Suganya, AP / IT",
  coordinatorContactPhone: "9047797814",
  coordinatorEmail: "suganya.a@kce.ac.in",
  events: [
    {
      posterUrl: "",
      eventName: "Word- Scramble",
      eventType: "Non- Technical Event Puzzle-solving",
      eventSubType: "NonTechnical",
      eventTime: "1:00 PM to 3:00 PM",
      eventDescription:
        "Get ready to put the vocabulary and quick-thinking skills to the test with Word Scramble, a fun and exciting word-solving challenge! Participants will be given a set of scrambled words, and their task is to unscramble them correctly within the given time. The event features multiple rounds with increasing difficulty, testing speed, logic, and linguistic prowess.",
      eventRules: [
        "The event can be played individually or in teams of 2-3 members.",
        "Participants will receive a set of jumbled letters that form a meaningful word.",
        "Each word must be solved within the given time (30-60 seconds per word)",
        "Answers must be written or spoken out loud before time runs out.",
      ],
      eventVenue: "C-Block",
      eventRounds: ["1"],
      eventPrize: [
        "As per the norms all the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Mr. S. Nagaraj, AP / IT",
        contact: "+91 95003 13921",
      },
      studentCoordinator: [
        {
          name: "S. Sandhiya,",
          contact: "9789348537",
        },
        {
          name: "E.Rajaveni,",
          contact: " 6385274131",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Dumb-charades",
      eventSubType: "NonTechnical",
      eventType: "Non- Technical Event Themed Dumb-Charades",
      eventTime: "10:00 AM to 12.30 PM ",
      eventDescription:
        "Lights, Camera… but No Action Words! Get ready for a thrilling round of Dumb Charades, where actions speak louder than words. In this classic game of gestures, teams will compete to guess the given word or phrase based on their teammate’s silent acting. Each team takes turns sending a member to act out a randomly assigned word, while their teammates race against the clock to guess it correctly. The event will progress through multiple rounds, featuring increasingly difficult words and creative challenges.",
      eventRules: [
        "Each team consists of 2-4 participants.",
        "1 person will act and other will make the guesses",
        "No lip movement or speaking is allowed.",
        "Proper name should be guessed, an incomplete name would not be considered.",
        "Gestures can be used but cannot be broken into letters or alphabets",
        // "The actor cannot speak, write, or mouth words only gestures and facial expressions are allowed.",
        // "Words are assigned randomly from different categories.",
        // "Each team gets 60-90 seconds per turn. Teams take turns acting and guessing.",
      ],
      eventVenue: "C-Block / Room No..: C304)",
      eventRounds: ["Round 1 : Thematic Words", "Round 2: Complex Phrases"],
      eventPrize: [
       " Winner will get prize worth of Rs. 1000 and runner will get the prize worth of Rs.750.",
        "All the candidates will be given with participation certificates."
        
      ],
      eventStaffCoordinator: {
        name: "Ms. A. Arthi, AP / IT",
        contact: "+91 89037 39051",
      },
      studentCoordinator: [
        {
          name: "P. Madhan",
          contact: "9345453082",
        },
        {
          name: "R. Karthik Kiran",
          contact: "8300181333",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Connection",
      eventSubType: "NonTechnical",
      eventType: "Non- Technical Event Connection",
      eventTime: "10:00 AM to 12:30 PM",
      eventDescription:
        "The Connection Game is a creative and interactive event where participants work in teams to identify common connections between a series of seemingly unrelated words or images. The aim is to encourage critical thinking, teamwork, and quick decision-making, all while having fun and engaging with your peers.",
      eventRules: [
        "Maximum three members per team",
        " Each answer will be rewarded with 10 points",
        " If a team fails to answer in their round 15 secs will be given to the other teams, to guess the answer and these answers will be rewarded with 5 points each.",
        "Second round qualifications will be based on first round.",
        "Judges and co-ordinators decision will be final.",
      ],
      eventVenue: "C-Block /Room No.: C-302",
      eventRounds: ["Round 1 ", " Final Round"],
      eventPrize: [
        "Winner will get prize worth of Rs. 1000 and runner will get the prize worth of Rs.750.",
        "All the candidates will be given with participation certificates."
,
      ],
      eventStaffCoordinator: {
        name: "Ms. M. Shyamala, AP / IT",
        contact: "9944323138",
      },
      studentCoordinator: [
        {
          name: "S.K.Madhan Kumaran",
          contact: "6379835083",
        },
        {
          name: "M. Sham",
          contact: "6379130757",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "CodeVerse - Coding Contest - Technical Event",
      eventType: "Technical Event – Coding",
      eventSubType: "Technical",
      eventTime: "10.30am – 12.30 pm",
      eventDescription:
        "Challenging Coding Problems – Solve algorithmic and real-world programming challenges. Multiple Rounds – Compete in different levels, from beginner to advance. Allowed programming languages: Python, Java, C++, and more.Solutions will be evaluated based on accuracy, efficiency, and execution time.",
      eventRules: ["Participation needs ID Card"],
      eventVenue: "C Block",
      eventRounds: [1],
      eventPrize: [
        "As per the norms all the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Dr.M.Dhurgadevi, Prof./IT",
        contact: "+91 98650 08455",
      },
      studentCoordinator: [
        {
          name: "Vijith S",
          contact: "9597515807",
        },
        {
          name: "Srinath B",
          contact: "7868807839",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "CODE CHAMP - 25",
      eventSubType: "Technical",
      eventType: "Technical Event",
      eventTime: "10:00 AM - 12:00 PM",
      eventDescription:
        "A thrilling coding competition for young innovators to showcase their programming skills and creativity. Solve challenges, build solutions, and compete for glory! Unlock your potential of Python / C / C++ Java / Javascript and become the ultimate Code Champ of 2025!Each round will have a specific time limit; exceeding it may lead to disqualification",
      eventRules: [
        "The event consists of two rounds - Quiz, Problem Solving Participants can use Python / C / C++ / Java / Javascript language.",
        "The Participated Candidates needs to solve the given logic with in the language.",
        "Team Size :   1 Member",
      ],
      eventVenue: "IT LAB",
      eventRounds: ["Round 1", "Final Round"],
      eventPrize: [
        "Winner will get prize worth of Rs. 1000 and runner will get the prize worth of Rs.750.",
        "All the candidates will be given with participation certificates."
      ],
      eventStaffCoordinator: {
        name: "Dr. B. P. Sreeja, AP / IT",
        contact: "+91 82206 12234",
      },
      studentCoordinator: [
        {
          name: "Gnanith S",
          contact: "9600206651",
        },
        {
          name: "Siranjeevi P",
          contact: "6385908383",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Paper quest",
      eventSubType: "Technical",
      eventType:
        "Paper presentation – Technical event, Please mail your papers to paperquest2k25@gmail.com after registration",
      eventTime: "10.30 AM",
      eventDescription: "Paper presentation",
      eventRules: [
        "1. Eligibility & Registration Each team can have a maximum of 2 members (or specify if individual participation is allowed).Participants must register before the deadline. Late entries will not be entertained.Papers should be original, plagiarism-free, and relevant to the event theme or selected domains.",
        "2. Paper Submission Guidelines.Papers must follow the standard IEEE format.The document should not exceed [e.g., 6 pages], including references and appendices.Papers must be submitted in PDF format via [mention submission link or email].The submission deadline is 12.03.2025. No extensions will be granted.Presentation Guidelines.Each team will have [e.g., 8-10 minutes] for the presentation, followed by [e.g., 2-5 minutes] of Q&A.Presentations must be in PPT format and submitted at least before the event starts. Participants must use only the provided equipment (or specify if personal laptops are allowed). Exceeding the time limit may lead to point deductions.",

        "General Rules:Participants must be present 15 minutes before their scheduled time.Misconduct, use of offensive language, or violating academic integrity will lead to disqualification.The judges' decision will be final and binding. No disputes will be entertained.In case of a tie, additional questions or a rapid presentation round may be conducted",
      ],
      eventVenue: "C 306",
      eventRounds: ["1"],
      eventPrize: [
        "As per the norms all the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Mr. Varatharajan N",
        contact: "+91 9789496799",
      },
      studentCoordinator: [
        {
          name: "Sham",
          contact: "6379130757",
        },
        {
          name: "Tharun raj",
          contact: "9342233810",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Hackathon: Unleash Your Coding Potential",
      eventType: "Technical Event",
      eventSubType: "Technical",
      eventTime: "10:00 AM - 12:00 PM",
      eventDescription:
        "Join us for an exciting Web Hackathon where creativity meets code! This event challenges participants to build innovative web solutions within a limited timeframe, pushing the boundaries of web development. Whether you're a seasoned developer or just starting your journey, this hackathon is the perfect platform to showcase your skills, learn new web technologies, and collaborate with like-minded enthusiasts. Solve real-world challenges, enhance your problem-solving abilities, and bring your web ideas to life. Don't miss this opportunity to innovate, compete, and make an impact in the world of web development!",
      eventRules: [
        "1. All coding must be done on-site; pre-written code is not allowed",
        "2. Solutions must be original and developed during the hackathon",
        "3. The question will be given on the spot, and teams must develop their solutions within the given timeframe.",
        "4. Teams must strictly adhere to the event schedule.",
        "5. Each team must consist of exactly 2 members.",
        "6. The judges' decisions will be final and binding."
      ],
      eventVenue: "IT PROJECT LAB",
      eventRounds: ["Round 1 : Web Developement (Responsive Web Page)"],
      eventPrize: [
        "Winner Will Get Prize Reward",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Dr. V. Jothi Prakash, AP / IT",
        contact: "+91 96775 04541",
      },
      studentCoordinator: [
        {
          name: "S. Poovarasan",
          contact: "9361614200",
        },
        {
          name: "K. Vishwa",
          contact: "7695844676",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "FutureTech Forum - AI and ML Hands-on session - Workshop",
      eventType: "Workshop - Technical",
      eventSubType: "WorkShop",
      eventTime: "10.30 am",
      eventDescription:
        "Interactive and Hands-on session is designed for tech enthusiasts, developers, and professionals to explore the practical aspects of AI and ML.",
      eventRules: ["Participation needs ID Card"],
      eventVenue: "C Block",
      eventRounds: ["1"],
      eventPrize: [
        "As per the norms all the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Dr. T. Guhan, ASP / IT",
        contact: "+91 98422 02738",
      },
      studentCoordinator: [
        {
          name: "D. Justish Kanth",
          contact: "8754758789",
        },
        {
          name: "S. Babu",
          contact: "9524645135",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Workshop on Data Analytics with Python",
      eventType: "Workshop - Technical",
      eventSubType: "WorkShop",
      eventTime: "10.30 a.m",
      eventDescription:
        "Interactive and Hands-on session is designed for tech enthusiasts, developers, and professionals to explore the practical aspects of Data Analytics with Python",
      eventRules: [],
      eventVenue: "MG Hall",
      eventRounds: [],
      eventPrize: [
        "As per the norms all the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Dr.M.Dhurgadevi, Prof./IT",
        contact: "+91 98650 08455",
      },
      studentCoordinator: [
        {
          name: "Mithuna S",
          contact: "9600672506",
        },
        {
          name: "Charumathi G",
          contact: "6381235404",
        },
      ],
    },
  ],
};

export default it;
