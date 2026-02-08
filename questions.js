const questions = [
    // Q1 correct=0
    {
        question: "Which part of a Beyblade X makes contact with the stadium floor?",
        options: ["The Bit", "The Ratchet", "The Blade", "The Gear Chip"],
        correct: 0,
        funFact: "The Bit is the bottom component that touches the stadium surface. It determines the Beyblade's movement pattern, speed, and also contributes to burst resistance through its shaft thickness.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q2 correct=1
    {
        question: "Every Beyblade X consists of how many interchangeable parts?",
        options: ["Two parts", "Three parts", "Four parts", "Five parts"],
        correct: 1,
        funFact: "Every Beyblade X is made of three interchangeable parts: Blade (top), Ratchet (middle), and Bit (bottom). The newer CX Custom Line introduced a five-part system.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q3 correct=2
    {
        question: "How many Beyblade types exist in Beyblade X?",
        options: ["Three types", "Five types", "Four types", "Six types"],
        correct: 2,
        funFact: "Beyblade X has four types: Attack (aggressive knockouts), Defense (absorb hits), Stamina (outspin opponents), and Balance (hybrid of other types).",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q4 correct=3
    {
        question: "Which part of a Beyblade X determines its battle type?",
        options: ["The Ratchet", "The Bit", "The Gear Chip", "The Blade"],
        correct: 3,
        funFact: "The Blade sits on top and contains the main contact points. Its shape and weight distribution determine whether the Beyblade is Attack, Defense, Stamina, or Balance type.",
        wiki: "https://beyblade.fandom.com/wiki/Blade_(Beyblade_X)"
    },
    // Q5 correct=0
    {
        question: "What type is Knight Shield 3-80N (BX-04)?",
        options: ["Defense", "Attack", "Stamina", "Balance"],
        correct: 0,
        funFact: "Knight Shield 3-80N is a Defense type and one of the initial four BX releases. It uses the Needle (N) Bit for exceptional defensive grip and stability.",
        wiki: "https://beyblade.fandom.com/wiki/Knight_Shield_3-80N"
    },
    // Q6 correct=1
    {
        question: "What material are the main contact points on a Beyblade X Blade made from?",
        options: ["Stainless steel", "Zinc alloy", "Aluminum alloy", "Titanium alloy"],
        correct: 1,
        funFact: "The upper contact points of a Blade are made from zinc alloy for durability and weight, while the lower sections are made from PMMA (acrylic plastic).",
        wiki: "https://beyblade.fandom.com/wiki/Blade_(Beyblade_X)"
    },
    // Q7 correct=2
    {
        question: "What is the product code for Dran Sword, the first Beyblade X release?",
        options: ["BX-02", "BX-00", "BX-01", "BX-04"],
        correct: 2,
        funFact: "BX-01 Dran Sword 3-60F was one of the first products released on July 15, 2023. It's an Attack type and the protagonist Jaxon Cross's primary Beyblade.",
        wiki: "https://beyblade.fandom.com/wiki/Dran_Sword_3-60F"
    },
    // Q8 correct=3
    {
        question: "In the type matchup system, which type has an advantage over Stamina?",
        options: ["Defense", "Balance", "Stamina", "Attack"],
        correct: 3,
        funFact: "Attack beats Stamina because aggressive Attack types can knock out Stamina types before they outlast their opponent. It's a classic offense-over-endurance advantage.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q9 correct=0
    {
        question: "What does 'OWD' stand for in reference to UX Unique Line Blades?",
        options: ["Outward Weight Distribution", "Optimal Weapon Deployment", "Outer Wall Defense", "Offensive Win Differential"],
        correct: 0,
        funFact: "OWD stands for Outward Weight Distribution. UX Blades are designed with most of their metal on the outside perimeter, increasing OWD for more extreme performance.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q10 correct=1
    {
        question: "What does the Ratchet connect in a Beyblade X assembly?",
        options: ["The Gear Chip and the Blade", "The Blade and the Bit", "The Bit and the Launcher", "The Blade and the Launcher"],
        correct: 1,
        funFact: "The Ratchet is the middle component that connects the Blade (top) to the Bit (bottom). It determines the Beyblade's height, burst resistance, and center of gravity.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q11 correct=2
    {
        question: "Which Beyblade X type is designed to absorb hits and tank opponent attacks?",
        options: ["Attack", "Stamina", "Defense", "Balance"],
        correct: 2,
        funFact: "Defense types are built to absorb and deflect impacts. They typically use taller Ratchets (70-80mm) and defensive Bits like Needle or High Needle to stay stable.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q12 correct=3
    {
        question: "How many parts does a CX Custom Line Beyblade have?",
        options: ["Three parts", "Four parts", "Six parts", "Five parts"],
        correct: 3,
        funFact: "CX Beyblades split the standard three-part system into five: Lock Chip, Main Blade, Assist Blade, Ratchet, and Bit. This was introduced in March 2025.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q13 correct=0
    {
        question: "How many points is a Spin Finish worth in competitive Beyblade X?",
        options: ["1 point", "2 points", "3 points", "0 points"],
        correct: 0,
        funFact: "A Spin Finish (when your opponent's Beyblade stops spinning) is worth 1 point — the lowest scoring finish type in Beyblade X.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q14 correct=1
    {
        question: "In the type matchup triangle, which type does Stamina beat?",
        options: ["Attack", "Defense", "Balance", "Stamina"],
        correct: 1,
        funFact: "Stamina beats Defense because Defense types focus on absorbing hits rather than maintaining spin. A Stamina type can simply outlast a Defense type by spinning longer.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q15 correct=2
    {
        question: "How many launcher hooks does a standard Beyblade X Blade require?",
        options: ["Two hooks", "Four hooks", "Three hooks", "One hook"],
        correct: 2,
        funFact: "Standard BX-line Blades require three launcher hooks. The UX Unique Line changed these hooks from metal to resin for a different weight distribution.",
        wiki: "https://beyblade.fandom.com/wiki/Blade_(Beyblade_X)"
    },
    // Q16 correct=3
    {
        question: "What type is Hells Scythe 4-60T (BX-02)?",
        options: ["Attack", "Defense", "Stamina", "Balance"],
        correct: 3,
        funFact: "Hells Scythe is a Balance type Beyblade used by Robin Kazami. It uses the Taper (T) Bit, which provides balanced attack and defense performance.",
        wiki: "https://beyblade.fandom.com/wiki/Hells_Scythe_4-60T"
    },
    // Q17 correct=0
    {
        question: "What is the name of the protagonist of the Beyblade X anime?",
        options: ["Jaxon Cross", "Robin Kazami", "Khrome Ryugu", "Multi Nana-iro"],
        correct: 0,
        funFact: "Jaxon Cross (known as Ekusu Kurosu in Japanese) is the main protagonist. He uses the alias 'Blader X' and wields Dran Sword 3-60F as his primary Beyblade.",
        wiki: "https://beyblade.fandom.com/wiki/Jaxon_Cross"
    },
    // Q18 correct=1
    {
        question: "What is located at the center of a Beyblade X Blade beneath transparent plastic?",
        options: ["A metal weight disc", "A Gear Chip with a sticker", "A spring mechanism", "A rubber grip pad"],
        correct: 1,
        funFact: "Each Blade has a Gear Chip at its center beneath transparent PMMA plastic, featuring a sticker of the Bey's Avatar and a symbol indicating its spin direction.",
        wiki: "https://beyblade.fandom.com/wiki/Blade_(Beyblade_X)"
    },
    // Q19 correct=2
    {
        question: "The lower sections of a Beyblade X Blade are made from PMMA. What is PMMA?",
        options: ["Polycarbonate resin", "Nylon composite", "Acrylic plastic", "Polyethylene foam"],
        correct: 2,
        funFact: "PMMA (polymethyl methacrylate) is commonly known as acrylic plastic. It's used for the lower sections of Blades and the transparent cover over the Gear Chip.",
        wiki: "https://beyblade.fandom.com/wiki/Blade_(Beyblade_X)"
    },
    // Q20 correct=3
    {
        question: "Which Beyblade is the first left-spin release in Beyblade X?",
        options: ["Dran Buster 1-60A", "Phoenix Wing 9-60GF", "Wizard Rod 5-70DB", "Cobalt Dragoon 2-60C"],
        correct: 3,
        funFact: "Cobalt Dragoon (BX-34) is the first left-spin Beyblade in Beyblade X, released on July 13, 2024. Its Gear Chip features the Blue Dragon (Seiryu) from Chinese mythology.",
        wiki: "https://beyblade.fandom.com/wiki/Cobalt_Dragoon_2-60C"
    },
    // Q21 correct=0
    {
        question: "Which Beyblade X type strategy focuses on outlasting the opponent?",
        options: ["Stamina", "Attack", "Defense", "Balance"],
        correct: 0,
        funFact: "Stamina types are designed to outspin opponents. They typically have weight on their outer edge for rotational inertia and use stable Bits like Ball or Orb.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q22 correct=1
    {
        question: "In a CX Custom Line Beyblade, what locks the Main Blade and Assist Blade together?",
        options: ["The Ratchet", "The Lock Chip", "The Gear Chip", "The Bit"],
        correct: 1,
        funFact: "The Lock Chip sits on top of a CX Beyblade and locks the Main Blade and Assist Blade together. It also showcases the Avatar sticker.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q23 correct=2
    {
        question: "What is the product code for the standard Xtreme Stadium?",
        options: ["BX-05", "BX-15", "BX-10", "BX-20"],
        correct: 2,
        funFact: "The Xtreme Stadium is product BX-10 and features the X-Celerator Rail system that makes Xtreme Dashes possible. It's the standard arena for Beyblade X battles.",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Stadium"
    },
    // Q24 correct=3
    {
        question: "Which Beyblade X type typically uses low Ratchet heights like 60mm?",
        options: ["Defense", "Stamina", "Balance", "Attack"],
        correct: 3,
        funFact: "Attack types typically use lower Ratchets (60mm) to strike opponents from below. Defense types prefer taller Ratchets (70-80mm) to avoid those low hits.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q25 correct=0
    {
        question: "What determines burst resistance in addition to the Ratchet design?",
        options: ["The Bit's shaft thickness", "The Blade's color scheme", "The Gear Chip material", "The Avatar sticker type"],
        correct: 0,
        funFact: "Burst resistance comes from both the Ratchet (protrusion size and number) and the Bit (shaft thickness). A thicker Bit shaft makes the Beyblade harder to burst.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q26 correct=1
    {
        question: "What is the product code for Dran Buster, the first UX release?",
        options: ["BX-23", "UX-01", "UX-03", "BX-34"],
        correct: 1,
        funFact: "UX-01 Dran Buster 1-60A was the first UX Unique Line product, released on March 30, 2024. It uses the Accel Bit with 16 gear teeth instead of the standard 12.",
        wiki: "https://beyblade.fandom.com/wiki/Dran_Buster_1-60A"
    },
    // Q27 correct=2
    {
        question: "How many exit zones does the Xtreme Stadium have?",
        options: ["Two exit zones", "Four exit zones", "Three exit zones", "One exit zone"],
        correct: 2,
        funFact: "The Xtreme Stadium has three exit zones, all on one side: two smaller corner exits called Over Zones and one wider central exit called the Xtreme Zone.",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Stadium"
    },
    // Q28 correct=3
    {
        question: "What is the name of the smaller corner exits on the Xtreme Stadium?",
        options: ["Burst Zones", "Launch Zones", "Exit Zones", "Over Zones"],
        correct: 3,
        funFact: "The two smaller corner exits are called Over Zones. Knocking an opponent into an Over Zone scores 2 points, compared to 3 points for the central Xtreme Zone.",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Stadium"
    },
    // Q29 correct=0
    {
        question: "Which Blade has the best stamina performance of any Beyblade X release?",
        options: ["Wizard Rod", "Wizard Arrow", "Dran Sword", "Hells Scythe"],
        correct: 0,
        funFact: "Wizard Rod (UX-03) has the best stamina of any Blade. It weighs approximately 35.5 grams and was dominant in the 2025 World Championship competitive meta.",
        wiki: "https://beyblade.fandom.com/wiki/Wizard_Rod_5-70DB"
    },
    // Q30 correct=1
    {
        question: "What is the name of the wider central exit on the Xtreme Stadium?",
        options: ["The Over Zone", "The Xtreme Zone", "The Burst Zone", "The Launch Zone"],
        correct: 1,
        funFact: "The Xtreme Zone is the wider central exit. Knocking an opponent into the Xtreme Zone scores the maximum 3 points (Xtreme Finish).",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Stadium"
    },
    // Q31 correct=2
    {
        question: "What are the gears embedded in the stadium's raised rail called?",
        options: ["The Dash Rail", "The Speed Track", "The X-Celerator Rail", "The Turbo Ring"],
        correct: 2,
        funFact: "The X-Celerator Rail (also called the Xtreme Line or X-Line) contains gears that interact with a Beyblade's Bit gear to create the signature Xtreme Dash acceleration.",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Stadium"
    },
    // Q32 correct=3
    {
        question: "Which Beyblade X product represents the Stamina type among the initial four?",
        options: ["Dran Sword 3-60F", "Knight Shield 3-80N", "Hells Scythe 4-60T", "Wizard Arrow 4-80B"],
        correct: 3,
        funFact: "Wizard Arrow 4-80B (BX-03) is the Stamina type among the initial four. The first four releases each covered a different type: Attack, Balance, Stamina, and Defense.",
        wiki: "https://beyblade.fandom.com/wiki/Wizard_Arrow_4-80B"
    },
    // Q33 correct=0
    {
        question: "How many gear teeth does a standard Beyblade X Bit have?",
        options: ["12 gear teeth", "8 gear teeth", "16 gear teeth", "20 gear teeth"],
        correct: 0,
        funFact: "Most standard Bits have a 12-tooth gear that interacts with the X-Celerator Rail. Some special Bits have 16 teeth (Accel) or 8 teeth, affecting Xtreme Dash speed.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q34 correct=1
    {
        question: "Where are all three exit zones positioned on the Xtreme Stadium?",
        options: ["Evenly around the perimeter", "All on one side of the stadium", "On opposite sides of the stadium", "At the center of the floor"],
        correct: 1,
        funFact: "All three exit zones are on one side of the stadium, creating an asymmetric design. This means positioning and launch angle matter significantly in competitive play.",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Stadium"
    },
    // Q35 correct=2
    {
        question: "What does the 'F' stand for in the (F) Bit?",
        options: ["Fast", "Force", "Flat", "Free"],
        correct: 2,
        funFact: "The Flat Bit has a flat contact surface that creates aggressive, high-speed movement patterns. It was the first Bit introduced in BX-01 Dran Sword.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q36 correct=3
    {
        question: "How many gear teeth does the Accel (A) Bit have?",
        options: ["8 gear teeth", "12 gear teeth", "20 gear teeth", "16 gear teeth"],
        correct: 3,
        funFact: "The Accel Bit (from UX-01 Dran Buster) has 16 gear teeth instead of the standard 12. This provides faster speed and better grip when engaging the X-Celerator Rail.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q37 correct=0
    {
        question: "Which Bit is considered the best overall competitive Bit for consistency?",
        options: ["Ball (B)", "Flat (F)", "Needle (N)", "Taper (T)"],
        correct: 0,
        funFact: "The Ball (B) Bit has a hemispherical tip that provides the highest stamina and consistent performance. Its round shape gives predictable movement and excellent spin retention.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q38 correct=1
    {
        question: "What does the Bit abbreviation 'HN' stand for?",
        options: ["Hyper Needle", "High Needle", "Heavy Needle", "Hex Needle"],
        correct: 1,
        funFact: "The High Needle Bit is highly valued for defensive consistency. It first appeared in BX-13 Knight Lance 4-80HN and provides stable, centered movement.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q39 correct=2
    {
        question: "What does the Bit abbreviation 'GF' stand for?",
        options: ["Ground Flat", "Glide Flat", "Gear Flat", "Grip Flat"],
        correct: 2,
        funFact: "The Gear Flat Bit combines aggressive flat tip movement with gear teeth for interacting with the X-Celerator Rail. It first appeared on Phoenix Wing 9-60GF.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q40 correct=3
    {
        question: "Which Bit was dominant in the 2025 World Championship competitive meta?",
        options: ["Ball (B)", "Flat (F)", "Accel (A)", "Low Rush (LR)"],
        correct: 3,
        funFact: "Low Rush (LR) was the dominant Bit in the 2025 World Championship meta, often paired with the Wizard Rod Blade. It first appeared in UX-11 Impact Drake.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q41 correct=0
    {
        question: "What shape is the contact tip of the Ball (B) Bit?",
        options: ["A hemispherical dome", "A sharp needle point", "A flat disc surface", "A tapered cone shape"],
        correct: 0,
        funFact: "The Ball Bit has a hemispherical (half-sphere) tip that provides excellent stamina. Its round shape distributes friction evenly and maintains consistent spin.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q42 correct=1
    {
        question: "What does the Bit abbreviation 'DB' stand for?",
        options: ["Double Ball", "Disk Ball", "Deep Ball", "Dash Ball"],
        correct: 1,
        funFact: "The Disk Ball Bit first appeared in UX-03 Wizard Rod 5-70DB. Its disk shape provides additional stamina, making it key to one of the most dominant competitive combos.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q43 correct=2
    {
        question: "Which Beyblade does Robin Kazami primarily use?",
        options: ["Dran Sword 3-60F", "Knight Shield 3-80N", "Hells Scythe 4-60T", "Wizard Arrow 4-80B"],
        correct: 2,
        funFact: "Robin Kazami uses Hells Scythe 4-60T as his primary Beyblade. He later upgrades to Hells Chain 5-60HT. Robin is the leader of Team Persona.",
        wiki: "https://beyblade.fandom.com/wiki/Robin_Kazami"
    },
    // Q44 correct=3
    {
        question: "What is the name of the protagonist's team in the Beyblade X anime?",
        options: ["Team Yggdrasil", "Team Zodiac", "Team Pendragon", "Team Persona"],
        correct: 3,
        funFact: "Team Persona is founded by Jaxon Cross and led by Robin Kazami. Its members include Jaxon, Robin, and Multi Nana-iro, with Meiko Myoden as coach.",
        wiki: "https://beyblade.fandom.com/wiki/Persona_(team)"
    },
    // Q45 correct=0
    {
        question: "What does 'Nanairo' mean in Multi Nana-iro's name?",
        options: ["Seven Colors", "Seven Stars", "Seven Blades", "Seven Victories"],
        correct: 0,
        funFact: "Nanairo means 'Seven Colors,' a Japanese word for rainbow. Multi's name reflects her versatile nature — she uses multiple Beyblades and swaps them strategically.",
        wiki: "https://beyblade.fandom.com/wiki/Multi_Nana-iro"
    },
    // Q46 correct=1
    {
        question: "What is Meiko Myoden's day job outside of Beyblade?",
        options: ["She works as a teacher", "She runs a sushi restaurant", "She works at a toy shop", "She coaches full-time"],
        correct: 1,
        funFact: "Meiko Myoden is a former pro blader who manages a sushi restaurant. She becomes the coach and manager of Team Persona.",
        wiki: "https://beyblade.fandom.com/wiki/Meiko_Myoden"
    },
    // Q47 correct=2
    {
        question: "What is the name of the fictional city where the Beyblade X anime takes place?",
        options: ["Neo Tokyo", "Blade City", "Xenon City", "Spiral Town"],
        correct: 2,
        funFact: "Xenon City is a city-scale Olympic village where Beyblade is a professional sport. 'The X' is the main arena where the best pro bladers compete.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q48 correct=3
    {
        question: "Who is the leader of Team Pendragon, the Season 1 antagonist team?",
        options: ["Blaze Fujiwara", "Jaxon Cross", "Sigrid Nana-iro", "Khrome Ryugu"],
        correct: 3,
        funFact: "Khrome Ryugu is the Pro League champion and leader of Pendragon. He uses Cobalt Dragoon, the first left-spin Beyblade in Beyblade X.",
        wiki: "https://beyblade.fandom.com/wiki/Khrome_Ryugu"
    },
    // Q49 correct=0
    {
        question: "In the Ratchet naming convention '3-60', what does the '3' represent?",
        options: ["Number of protrusions", "Weight in grams", "Burst resistance rating", "Compatible Blade series"],
        correct: 0,
        funFact: "The first number in a Ratchet name indicates the number of protrusions (blades) on its perimeter. These protrusions are what opponents strike to trigger a burst.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q50 correct=1
    {
        question: "Which Ratchet number is skipped in Beyblade X (never used as a protrusion count)?",
        options: ["6", "8", "7", "10"],
        correct: 1,
        funFact: "Available protrusion counts are 0, 1, 2, 3, 4, 5, 6, 7, and 9 — the number 8 is skipped entirely in the Beyblade X Ratchet lineup.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q51 correct=2
    {
        question: "What does a 0-series Ratchet (like 0-60) mean?",
        options: ["Maximum protrusions", "Prototype Ratchet", "Zero protruding blades", "Left-spin only"],
        correct: 2,
        funFact: "A 0-series Ratchet has zero protruding blades and uses a 'Simple Type' O-shaped joint. With no protrusions to strike, it offers very high burst resistance.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q52 correct=3
    {
        question: "Which Ratchet height is generally best suited for Defense type Beyblades?",
        options: ["50mm (very low)", "60mm (low)", "55mm (low)", "80mm (tall)"],
        correct: 3,
        funFact: "Taller Ratchets (80mm) are better for Defense types because they're harder to hit from below. Attack types prefer lower Ratchets (60mm) to strike from underneath.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q53 correct=0
    {
        question: "How many points is an Xtreme Finish worth in competitive play?",
        options: ["3 points", "1 point", "2 points", "4 points"],
        correct: 0,
        funFact: "An Xtreme Finish — when you knock your opponent's Bey into the central Xtreme Zone — is worth 3 points, the maximum possible for a single finish.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q54 correct=1
    {
        question: "How does having fewer but larger protrusions on a Ratchet affect burst resistance?",
        options: ["It increases resistance", "It decreases resistance", "It has no effect", "It improves stamina"],
        correct: 1,
        funFact: "Fewer but larger protrusions (like 3-80) decrease burst resistance because they provide bigger targets. Many small protrusions (like 9-60) are harder for opponents to strike.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q55 correct=2
    {
        question: "How many points does a player need to win a standard Beyblade X match?",
        options: ["3 points", "5 points", "4 points", "6 points"],
        correct: 2,
        funFact: "A standard match is first to 4 points. A single Xtreme Finish (3 points) plus a Spin Finish (1 point) could win a match in just two rounds.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q56 correct=3
    {
        question: "In the standard competitive format, how many Beyblades does each player prepare?",
        options: ["One Beyblade", "Two Beyblades", "Four Beyblades", "Three Beyblades"],
        correct: 3,
        funFact: "In the standard 3on3 format, each player prepares a deck of 3 Beyblades. This adds strategy as players must consider type matchups for each round.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q57 correct=0
    {
        question: "What is the maximum blade weight limit in official tournaments?",
        options: ["33 grams", "25 grams", "40 grams", "50 grams"],
        correct: 0,
        funFact: "The official blade weight limit is 33 grams (blade weight only, not including the Ratchet or Bit). This prevents overly heavy combinations from dominating.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q58 correct=1
    {
        question: "Where was the 2025 Beyblade X World Championship held?",
        options: ["Wembley Arena in London", "RED TOKYO TOWER in Tokyo", "Madison Square Garden in NYC", "Sydney Convention Centre"],
        correct: 1,
        funFact: "The 2025 World Championship was held October 11-12 at RED TOKYO TOWER in Tokyo. Over 15,000 participants from 21 regions competed, with 33 finalists.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q59 correct=2
    {
        question: "What are the three main product lines in Beyblade X?",
        options: ["Alpha, Beta, and Gamma", "Standard, Premium, and Elite", "BX, UX, and CX", "Series 1, Series 2, and Series 3"],
        correct: 2,
        funFact: "BX (Basic Line, July 2023), UX (Unique Line, March 2024), and CX (Custom Line, March 2025) are the three main lines, each introducing new features.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q60 correct=3
    {
        question: "Which animation studio produces the Beyblade X anime?",
        options: ["Toei Animation", "Studio Pierrot", "Sunrise", "OLM"],
        correct: 3,
        funFact: "OLM (Oriental Light and Magic) produces the Beyblade X anime. OLM is also famous for producing the Pokemon anime series.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X_(anime)"
    },
    // Q61 correct=0
    {
        question: "Which Beyblade does Khrome Ryugu use?",
        options: ["Cobalt Dragoon 2-60C", "Phoenix Wing 9-60GF", "Dran Buster 1-60A", "Shark Edge 3-60LF"],
        correct: 0,
        funFact: "Khrome Ryugu uses Cobalt Dragoon 2-60C, the first left-spin Beyblade in Beyblade X. His team Pendragon is sponsored by Douden Corp.",
        wiki: "https://beyblade.fandom.com/wiki/Khrome_Ryugu"
    },
    // Q62 correct=1
    {
        question: "Which manga magazine serializes the Beyblade X manga?",
        options: ["Weekly Shonen Jump", "CoroCoro Comic", "Shonen Sunday", "Monthly Shonen Mag"],
        correct: 1,
        funFact: "The Beyblade X manga is serialized in CoroCoro Comic, a monthly manga magazine published by Shogakukan.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X_(manga)"
    },
    // Q63 correct=2
    {
        question: "On which TV network did the Beyblade X anime premiere?",
        options: ["Fuji TV", "NHK General", "TV Tokyo", "TBS Network"],
        correct: 2,
        funFact: "The Beyblade X anime premiered on TV Tokyo on October 6, 2023.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X_(anime)"
    },
    // Q64 correct=3
    {
        question: "What secret alias does Jaxon Cross use in the anime?",
        options: ["Blader Z", "Blader Zero", "Phantom Blader", "Blader X"],
        correct: 3,
        funFact: "Jaxon Cross uses the alias Blader X (known as Mask X in Japan) to hide his identity. He's a former member of Team Pendragon who now challenges them.",
        wiki: "https://beyblade.fandom.com/wiki/Jaxon_Cross"
    },
    // Q65 correct=0
    {
        question: "What is the approximate weight of the Phoenix Wing Blade?",
        options: ["38-39 grams", "28-29 grams", "33-34 grams", "43-44 grams"],
        correct: 0,
        funFact: "Phoenix Wing (BX-23) weighs approximately 38-39 grams depending on the mold version. It's a three-sided Attack type with massive contact points.",
        wiki: "https://beyblade.fandom.com/wiki/Phoenix_Wing_9-60GF"
    },
    // Q66 correct=1
    {
        question: "Which Beyblade X product was designed for 'one-hit victories'?",
        options: ["Phoenix Wing 9-60GF", "Dran Buster 1-60A", "Shark Edge 3-60LF", "Cobalt Dragoon 2-60C"],
        correct: 1,
        funFact: "Dran Buster (UX-01) is designed for one-hit victories with its aggressive Attack profile and the Accel Bit's 16 gear teeth for faster Xtreme Dashes.",
        wiki: "https://beyblade.fandom.com/wiki/Dran_Buster_1-60A"
    },
    // Q67 correct=2
    {
        question: "Which mythological creature does Cobalt Dragoon's Gear Chip feature?",
        options: ["The White Tiger (Byakko)", "The Vermilion Bird (Suzaku)", "The Blue Dragon (Seiryu)", "The Black Tortoise (Genbu)"],
        correct: 2,
        funFact: "Cobalt Dragoon's Gear Chip features Seiryu, the Blue Dragon from Chinese mythology. Seiryu is one of the Four Symbols, associated with the East.",
        wiki: "https://beyblade.fandom.com/wiki/Cobalt_Dragoon_2-60C"
    },
    // Q68 correct=3
    {
        question: "How many large contact blades does the Shark Edge Blade feature?",
        options: ["Three blades", "Four blades", "One blade", "Two blades"],
        correct: 3,
        funFact: "Shark Edge features two large aggressive blades designed for powerful Attack hits. It was the prize in Random Booster Vol.1 and is used by Meiko Myoden.",
        wiki: "https://beyblade.fandom.com/wiki/Shark_Edge_3-60LF"
    },
    // Q69 correct=0
    {
        question: "Phoenix Wing 9-60GF (BX-23) has how many sides of contact points?",
        options: ["Three sides", "Two sides", "Four sides", "Five sides"],
        correct: 0,
        funFact: "Phoenix Wing is a three-sided Attack type Blade with massive contact points on each side, making it one of the most aggressive Beyblades in the lineup.",
        wiki: "https://beyblade.fandom.com/wiki/Phoenix_Wing_9-60GF"
    },
    // Q70 correct=1
    {
        question: "Which character swaps between multiple Beyblades strategically during matches?",
        options: ["Jaxon Cross", "Multi Nana-iro", "Robin Kazami", "Khrome Ryugu"],
        correct: 1,
        funFact: "Multi Nana-iro uses multiple Beyblades including Wizard Arrow, Knight Shield, and Knight Lance. Her 'Multi' name reflects her many talents and Bey collection.",
        wiki: "https://beyblade.fandom.com/wiki/Multi_Nana-iro"
    },
    // Q71 correct=2
    {
        question: "What is the relationship between Multi Nana-iro and Sigrid Nana-iro?",
        options: ["They are unrelated rivals", "They are Team Persona teammates", "Sigrid is Multi's older sister", "Multi is Sigrid's mentor"],
        correct: 2,
        funFact: "Sigrid is Multi's older sister and a member of the rival Team Pendragon. Multi's goal is to defeat her sister, adding personal stakes to the rivalry.",
        wiki: "https://beyblade.fandom.com/wiki/Multi_Nana-iro"
    },
    // Q72 correct=3
    {
        question: "Which company sponsors Team Pendragon in the anime?",
        options: ["Yggdrasil Inc.", "WBBA Corporation", "Xenon Industries", "Douden Corp."],
        correct: 3,
        funFact: "Douden Corp., a souvenir keychain manufacturer, sponsors Team Pendragon. Team Yggdrasil is sponsored by Yggdrasil Inc., team leader Blaze Fujiwara's family company.",
        wiki: "https://beyblade.fandom.com/wiki/Pendragon_(team)"
    },
    // Q73 correct=0
    {
        question: "Who gave Jaxon Cross his Dran Sword as a parting gift?",
        options: ["Ginro", "Robin Kazami", "Khrome Ryugu", "Meiko Myoden"],
        correct: 0,
        funFact: "Ginro is Jaxon's mentor who gave him Dran Sword 3-60F as a parting gift. This Beyblade becomes central to Jaxon's journey on the pro circuit.",
        wiki: "https://beyblade.fandom.com/wiki/Jaxon_Cross"
    },
    // Q74 correct=1
    {
        question: "What is Robin Kazami's upgraded Beyblade that he receives later in the series?",
        options: ["Hells Hammer 3-70H", "Hells Chain 5-60HT", "Hells Blade 4-60T", "Hells Wing 9-60GF"],
        correct: 1,
        funFact: "Robin upgrades from Hells Scythe 4-60T to Hells Chain 5-60HT, which uses the High Taper (HT) Bit instead of the standard Taper (T).",
        wiki: "https://beyblade.fandom.com/wiki/Hells_Chain_5-60HT"
    },
    // Q75 correct=2
    {
        question: "Which Beyblade does Meiko Myoden use?",
        options: ["Wizard Arrow 4-80B", "Hells Scythe 4-60T", "Shark Edge 3-60LF", "Dran Sword 3-60F"],
        correct: 2,
        funFact: "Meiko Myoden uses Shark Edge (called Keel Shark in the Hasbro version). She also uses Tide Whale and Scale Shark at different points in the series.",
        wiki: "https://beyblade.fandom.com/wiki/Meiko_Myoden"
    },
    // Q76 correct=3
    {
        question: "Which Beyblade X product was the prize in Random Booster Vol.1 (BX-14)?",
        options: ["Phoenix Wing 9-60GF", "Cobalt Dragoon 2-60C", "Leon Claw 5-60P", "Shark Edge 3-60LF"],
        correct: 3,
        funFact: "Shark Edge 3-60LF was the prize Beyblade in Random Booster Vol.1 (BX-14). It's an Attack type with two large aggressive blades and the Low Flat Bit.",
        wiki: "https://beyblade.fandom.com/wiki/Shark_Edge_3-60LF"
    },
    // Q77 correct=0
    {
        question: "Which type of Beyblade X launcher provides the most launch power?",
        options: ["The Winder Launcher", "The Entry Launcher", "The String Launcher", "The Ripcord Launcher"],
        correct: 0,
        funFact: "The Winder Launcher combines the ripcord design with the string launcher gear train. It has the longest and most rugged cord, providing the highest launch power.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q78 correct=1
    {
        question: "Which Blade dominated the meta at the 2025 World Championship?",
        options: ["Phoenix Wing", "Wizard Rod", "Dran Buster", "Dran Sword"],
        correct: 1,
        funFact: "Wizard Rod (UX-03) was the dominant Blade at the 2025 World Championship, often paired with the Low Rush (LR) Bit. Its superior stamina made it the go-to choice.",
        wiki: "https://beyblade.fandom.com/wiki/Wizard_Rod_5-70DB"
    },
    // Q79 correct=2
    {
        question: "When was the UX Unique Line first launched?",
        options: ["July 2023", "January 2024", "March 2024", "October 2024"],
        correct: 2,
        funFact: "The UX Unique Line launched on March 30, 2024, with UX-01 Dran Buster 1-60A. UX Blades feature more outward weight distribution with resin hooks.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q80 correct=3
    {
        question: "How does Hasbro typically rename Beyblade X products compared to Takara Tomy?",
        options: ["They add number suffixes", "They translate names directly", "They use unrelated names", "They reverse the word order"],
        correct: 3,
        funFact: "Hasbro generally reverses the word order: DranSword becomes Sword Dran, PhoenixWing becomes Soar Phoenix, SharkEdge becomes Keel Shark, and so on.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q81 correct=0
    {
        question: "What is the Hasbro name for HellsScythe?",
        options: ["Scythe Incendio", "Scythe Hells", "Dark Scythe", "Shadow Scythe"],
        correct: 0,
        funFact: "Hasbro renamed HellsScythe to Scythe Incendio, likely because 'Hells' was considered inappropriate for Western toy markets. 'Incendio' means fire in Romance languages.",
        wiki: "https://beyblade.fandom.com/wiki/Hells_Scythe_4-60T"
    },
    // Q82 correct=1
    {
        question: "Which Bit type provides exceptional defense and grip against fast attacks?",
        options: ["Ball (B)", "Needle (N)", "Flat (F)", "Taper (T)"],
        correct: 1,
        funFact: "The Needle (N) Bit has a sharp, narrow contact point that provides exceptional grip on the stadium floor. This stability helps it counter fast-moving Attack types.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q83 correct=2
    {
        question: "What does the Bit abbreviation 'LF' stand for?",
        options: ["Left Flat", "Long Flat", "Low Flat", "Light Flat"],
        correct: 2,
        funFact: "The Low Flat Bit sits lower than the standard Flat, making it easier to contact the Xtreme Line. This makes it especially aggressive for Attack types.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q84 correct=3
    {
        question: "What does the Bit abbreviation 'FB' stand for?",
        options: ["Fast Ball", "Force Ball", "Flat Ball", "Free Ball"],
        correct: 3,
        funFact: "The Free Ball Bit first appeared in UX-08 Silver Wolf 3-80FB, the first gimmick Beyblade in the UX line. Its free-spinning ball tip creates unique movement.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q85 correct=0
    {
        question: "Which team did Robin Kazami lead before forming Team Persona?",
        options: ["Team Albatross", "Team Zodiac", "Team Pendragon", "Team Yggdrasil"],
        correct: 0,
        funFact: "Robin Kazami originally had a team called Albatross that disbanded. He later became the leader of Team Persona alongside Jaxon Cross and Multi Nana-iro.",
        wiki: "https://beyblade.fandom.com/wiki/Robin_Kazami"
    },
    // Q86 correct=1
    {
        question: "Which character is Tenka Shiroboshi's mother in the Beyblade X anime?",
        options: ["Meiko Myoden", "Omega Shiroboshi", "Multi Nana-iro", "Sigrid Nana-iro"],
        correct: 1,
        funFact: "Omega Shiroboshi is Tenka's mother and the leader of Team Zodiac, the primary antagonist team in Season 2. Tenka joins Team Persona in Season 2.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q87 correct=2
    {
        question: "Which Beyblade does Tenka Shiroboshi use?",
        options: ["Cobalt Dragoon 2-60C", "Wizard Rod 5-70DB", "Samurai Saber 2-70L", "Phoenix Wing 9-60GF"],
        correct: 2,
        funFact: "Tenka Shiroboshi uses Samurai Saber (UX-09), an Attack type UX Beyblade. She's the instructor of the Shiroboshi Style School.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q88 correct=3
    {
        question: "What is the name of the main arena building in Xenon City?",
        options: ["The Stadium", "The Colosseum", "The Arena", "The X"],
        correct: 3,
        funFact: "The X is the main arena in Xenon City, equivalent to an Olympic stadium. It's where the best professional bladers compete in high-stakes tournament matches.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q89 correct=0
    {
        question: "Jaxon Cross's UX upgrade Beyblade uses which Bit?",
        options: ["Accel (A)", "Flat (F)", "Ball (B)", "Rush (R)"],
        correct: 0,
        funFact: "Jaxon upgrades from Dran Sword 3-60F to Dran Buster 1-60A. The Accel (A) Bit has 16 gear teeth instead of 12, giving faster Xtreme Dashes.",
        wiki: "https://beyblade.fandom.com/wiki/Dran_Buster_1-60A"
    },
    // Q90 correct=1
    {
        question: "How many regions were represented at the 2025 World Championship?",
        options: ["12 regions", "21 regions", "30 regions", "15 regions"],
        correct: 1,
        funFact: "Twenty-one regions from around the world sent competitors to the 2025 World Championship. Over 15,000 total participants entered, with 33 making it to the finals.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q91 correct=2
    {
        question: "Which Beyblade X product was the first gimmick Beyblade in the UX line?",
        options: ["UX-01 Dran Buster", "UX-03 Wizard Rod", "UX-08 Silver Wolf", "UX-11 Impact Drake"],
        correct: 2,
        funFact: "UX-08 Silver Wolf 3-80FB was the first gimmick Beyblade in the UX line. It uses the Free Ball (FB) Bit with a free-spinning ball tip for unique movement.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q92 correct=3
    {
        question: "What does the Taper (T) Bit provide in terms of battle performance?",
        options: ["Maximum stamina output", "Aggressive attack speed", "Exceptional grip defense", "Balanced overall performance"],
        correct: 3,
        funFact: "The Taper Bit has a conical shape that provides balanced attack and defense performance. It's used on Hells Scythe 4-60T, which is classified as a Balance type.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q93 correct=0
    {
        question: "How many available Ratchet heights exist in the standard Beyblade X system?",
        options: ["Seven heights", "Three heights", "Five heights", "Nine heights"],
        correct: 0,
        funFact: "There are seven available Ratchet heights: 50, 55, 60, 65, 70, 80, and 85. Each height affects how the Beyblade interacts with opponents and the stadium.",
        wiki: "https://beyblade.fandom.com/wiki/Ratchet_(Beyblade_X)"
    },
    // Q94 correct=1
    {
        question: "Knight Lance 4-80HN (BX-13) features die-cast metal parts designed for what purpose?",
        options: ["Increasing launch speed", "Deflecting opponent attacks", "Adding decorative weight", "Improving floor grip"],
        correct: 1,
        funFact: "Knight Lance is a Defense type whose die-cast metal parts are designed for deflecting attacks. Combined with the High Needle (HN) Bit, it's a strong defensive option.",
        wiki: "https://beyblade.fandom.com/wiki/Knight_Lance_4-80HN"
    },
    // Q95 correct=2
    {
        question: "The Beyblade X anime Season 2 premiered in which month and year?",
        options: ["April 2024", "January 2025", "October 2024", "July 2024"],
        correct: 2,
        funFact: "Season 2 premiered on October 18, 2024, almost exactly one year after Season 1 debuted on October 6, 2023. Both seasons air on TV Tokyo.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X_(anime)"
    },
    // Q96 correct=3
    {
        question: "Who won the Open Class at the 2025 World Championship?",
        options: ["A player from Tokyo", "Leobardo from Mexico City", "A player from New York", "Fahreddin from Istanbul"],
        correct: 3,
        funFact: "Fahreddin from Istanbul won the Open Class (ages 6+/adults). Leobardo from Mexico City won the Regular Class for younger competitors (ages 6-12).",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q97 correct=0
    {
        question: "Which Bit first appeared with UX-09 Samurai Saber?",
        options: ["Level (L)", "Accel (A)", "Hexa (H)", "Disk Ball (DB)"],
        correct: 0,
        funFact: "The Level (L) Bit first appeared in UX-09 Samurai Saber 2-70L, used by Tenka Shiroboshi. Each UX release typically introduces a new Bit design.",
        wiki: "https://beyblade.fandom.com/wiki/Bit_(Beyblade_X)"
    },
    // Q98 correct=1
    {
        question: "Can a right-spin launcher be used with a left-spin Beyblade in Beyblade X?",
        options: ["Yes, all launchers are universal", "No, they are spin-direction specific", "Yes, but with an adapter only", "Yes, it reverses automatically"],
        correct: 1,
        funFact: "Launchers are spin-direction specific in Beyblade X. Left-spin Beyblades like Cobalt Dragoon require a dedicated left-spin launcher (e.g., BX-40 Winder Launcher L).",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
    // Q99 correct=2
    {
        question: "What special move do both Khrome Ryugu and Jaxon Cross use with the Xtreme Dash?",
        options: ["Xtreme Dash Infinite", "Xtreme Dash Lightning", "Xtreme Dash Dragonic Break", "Xtreme Dash Dragon Fury"],
        correct: 2,
        funFact: "Both Khrome and Jaxon use the Xtreme Dash Dragonic Break. Their shared connection to this move reflects their former partnership on Team Pendragon.",
        wiki: "https://beyblade.fandom.com/wiki/Xtreme_Dash"
    },
    // Q100 correct=3
    {
        question: "What triggers a Beyblade to burst during a Beyblade X battle?",
        options: ["The Bit's gear teeth snap off", "The Blade overheats from friction", "The launcher cord snaps apart", "The Ratchet turns on impact"],
        correct: 3,
        funFact: "A Bey bursts when any part fully detaches. The Ratchet triggers bursts by turning on impact, and burst resistance depends on the Ratchet design and Bit shaft thickness.",
        wiki: "https://beyblade.fandom.com/wiki/Beyblade_X"
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}
