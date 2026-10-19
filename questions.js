// Question bank. Add questions to this list (same fields as the existing ones).
window.QUESTIONS = [
 {
  "id": "G001",
  "topic": "Units & Conversions",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "units"
  ],
  "question": "The brake accumulator on a transport aircraft is charged to 3000 psi. Using 1 lbf = 4.4482 N and 1 in2 = 0.00064516 m2, what is this pressure in MPa?",
  "options": [
   "20.7 MPa",
   "2.07 MPa",
   "13.3 MPa",
   "0.144 MPa"
  ],
  "answer": 0,
  "explanation": "1 psi = 4.4482 N / 0.00064516 m2 = 6895 Pa, so 3000 psi = 3000 × 6895 Pa = 2.07 × 10^7 Pa = 20.7 MPa.",
  "type": "calculation"
 },
 {
  "id": "G002",
  "topic": "Units & Conversions",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force",
   "units"
  ],
  "question": "Brake line pressure of 10 MPa acts on a caliper piston with an area of 3.0 in2. Using 1 in2 = 0.00064516 m2 and 1 N = 0.224809 lbf, what is the force on the piston in lbf?",
  "options": [
   "4350 lbf",
   "1450 lbf",
   "19,400 lbf",
   "171,000 lbf"
  ],
  "answer": 0,
  "explanation": "Area = 3.0 × 0.00064516 = 0.0019355 m2, so F = 10^7 Pa × 0.0019355 m2 = 19,355 N, and 19,355 × 0.224809 = about 4351 lbf.",
  "type": "calculation"
 },
 {
  "id": "G003",
  "topic": "Units & Conversions",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "units"
  ],
  "question": "The placard on a main landing gear wheel specifies 10.0 bar (take 1 bar = 100,000 Pa), but the nitrogen cart gauge reads in psi and the tire currently holds 130 psi. Using 1 lbf = 4.4482 N and 1 in2 = 0.00064516 m2, about how many psi must be added?",
  "options": [
   "15 psi",
   "1.5 psi",
   "145 psi",
   "69,000 psi"
  ],
  "answer": 0,
  "explanation": "1 psi = 6895 Pa, so 10.0 bar = 1,000,000 Pa / 6895 = 145 psi; 145 − 130 = 15 psi to add.",
  "type": "calculation"
 },
 {
  "id": "G004",
  "topic": "Units & Conversions",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "units",
   "force"
  ],
  "question": "If the brake caliper piston diameter is halved while the same clamping force must still be produced, how does the required line pressure change, and does it matter whether it is read in psi or Pa?",
  "options": [
   "It becomes four times higher, in both psi and Pa, because the conversion factor is a fixed constant",
   "It becomes two times higher in psi but four times higher in Pa",
   "It becomes two times higher in both psi and Pa",
   "It becomes four times higher in psi but stays unchanged in Pa"
  ],
  "answer": 0,
  "explanation": "Area scales with diameter squared, so half the diameter gives one quarter of the area and four times the pressure (P = F/A); converting psi to Pa multiplies by the same constant, 6895, so the factor of four stays.",
  "type": "theory"
 },
 {
  "id": "G005",
  "topic": "Units & Conversions",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force",
   "units"
  ],
  "question": "Estimate the load carried by a light trainer's nosewheel tire inflated to 35 psi with a contact patch of about 30 in2. Using 1 lbf = 4.4482 N, which is the closest load in newtons?",
  "options": [
   "About 4.7 kN",
   "About 1.0 kN",
   "About 47 kN",
   "About 470 N"
  ],
  "answer": 0,
  "explanation": "Load = 35 psi × 30 in2 = 1050 lbf, and 1050 × 4.4482 = about 4670 N, roughly 4.7 kN.",
  "type": "calculation"
 },
 {
  "id": "G006",
  "topic": "Units & Conversions",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "A hydraulic bottle jack has a ram extension of 450 mm when it supports an aircraft axle. What is this extension in inches? (1 in = 25.4 mm)",
  "options": [
   "17.7 in",
   "11.4 in",
   "177 in",
   "17.7 ft"
  ],
  "answer": 0,
  "explanation": "Divide by 25.4 mm per inch: 450 / 25.4 = 17.7 in. Multiplying instead gives the wrong value of 11.4 in.",
  "type": "calculation"
 },
 {
  "id": "G007",
  "topic": "Units & Conversions",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "units"
  ],
  "question": "A student reads a hangar hoist rail height of 6 m and converts it to feet by multiplying by 0.3048, obtaining 1.8 ft. Why is this result clearly wrong?",
  "options": [
   "A foot is shorter than a meter, so the height in feet must be a larger number than 6, about 19.7 ft",
   "A foot is longer than a meter, so the number in feet should be smaller, but 1.8 is too small",
   "Heights must be converted to inches first, then to feet",
   "The result is correct, because 0.3048 is the conversion factor from meters to feet"
  ],
  "answer": 0,
  "explanation": "1 ft = 0.3048 m, so 6 m must be divided by 0.3048, giving about 19.7 ft. Multiplying by 0.3048 gives a number that is too small.",
  "type": "theory"
 },
 {
  "id": "G008",
  "topic": "Units & Conversions",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "units"
  ],
  "question": "Estimate the height in meters of a hangar hoist rail mounted 25 ft above the floor. (1 ft = 0.3048 m)",
  "options": [
   "About 2.1 m",
   "About 7.6 m",
   "About 82 m",
   "About 76 m"
  ],
  "answer": 1,
  "explanation": "25 ft × 0.3048 m/ft = 7.62 m, so about 7.6 m. Multiplying by 3.28 gives the wrong figure of 82 m.",
  "type": "calculation"
 },
 {
  "id": "G009",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "heat",
   "temperature"
  ],
  "question": "When liquid fuel evaporates inside a vented fuel tank on a warm day, which statement correctly describes what has happened to the fuel?",
  "options": [
   "The fuel has turned into a different compound because vapor behaves so differently from liquid",
   "It is the same compound, but its molecules now have more motion and are much farther apart",
   "Its molecules have stopped moving relative to each other and now have a definite shape",
   "The vapor keeps the definite volume of the liquid but has less heat energy"
  ],
  "answer": 1,
  "explanation": "A change of state does not change the compound. The molecules gain heat energy and motion, and in a gas they are farther apart with no surface-tension bonding.",
  "type": "theory"
 },
 {
  "id": "G010",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "density"
  ],
  "question": "During a hydraulic system check, four observations are reported. Which one is physically suspicious and should be questioned?",
  "options": [
   "After air enters a brake line, the pedal feels spongy and travels farther before the brakes respond",
   "A sealed line completely full of hydraulic fluid with no air, raised from 0 to 3000 psi, shows its fluid volume shrinking by about 20 percent",
   "Hydraulic fluid poured from a round drum into a rectangular reservoir takes the shape of the reservoir with essentially the same volume",
   "An air pocket trapped in a fuel line gets noticeably smaller when the line pressure is increased"
  ],
  "answer": 1,
  "explanation": "Liquids are essentially incompressible, so a 20 percent volume loss in an air-free fluid is not credible. Gases (air bubbles) are compressible, which explains the spongy pedal and the shrinking air pocket.",
  "type": "theory"
 },
 {
  "id": "G011",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force"
  ],
  "question": "Hydraulic fluid is forced from a master cylinder into a slave actuator through a sealed, air-free line. The master piston has an area of 2.0 in^2 and moves 9.0 in. The slave piston has an area of 6.0 in^2. Treating the fluid as incompressible with no leakage, how far does the slave piston move?",
  "options": [
   "3.0 in",
   "9.0 in",
   "18 in",
   "27 in"
  ],
  "answer": 0,
  "explanation": "The incompressible fluid displaced is 2.0 in^2 x 9.0 in = 18 in^3. The slave piston travel is 18 in^3 / 6.0 in^2 = 3.0 in.",
  "type": "calculation"
 },
 {
  "id": "G012",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units",
   "density"
  ],
  "question": "Five US gallons of fuel (1 US gal = 231 in^3) are drained into an open rectangular sample tank with a base of 11 in by 15 in. Because the liquid keeps its volume and simply takes the shape of its container, what is the depth of the fuel in the tank?",
  "options": [
   "7.0 in",
   "3.9 in",
   "8.4 in",
   "77 in"
  ],
  "answer": 0,
  "explanation": "Volume = 5 x 231 = 1155 in^3. Depth = 1155 in^3 / (11 in x 15 in) = 1155 / 165 = 7.0 in.",
  "type": "calculation"
 },
 {
  "id": "G013",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "density"
  ],
  "question": "If the absolute pressure in a sealed hydraulic line is doubled at constant temperature, and the line holds both an air pocket and the hydraulic fluid, what happens to their volumes?",
  "options": [
   "The air pocket volume is about halved, while the liquid volume stays essentially unchanged",
   "Both the air pocket and the liquid volumes are halved",
   "The air pocket volume stays the same, while the liquid volume is halved",
   "The air pocket volume doubles, while the liquid volume stays essentially unchanged"
  ],
  "answer": 0,
  "explanation": "Gases are compressible, so doubling the absolute pressure at constant temperature halves the air volume (Boyle's law). Liquids are essentially incompressible, so the fluid volume barely changes.",
  "type": "theory"
 },
 {
  "id": "G014",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force"
  ],
  "question": "Splitting a seized steel nut from a structural bracket, a mechanic drives a cold chisel that is 8 in long and 1/2 in wide at the tip. Because the steel stays a rigid solid, the chisel acts as a fixed wedge. If the hammer delivers an effective effort of 30 lb, what is the ideal force exerted on the nut? (Effort arm = length, resistance arm = width.)",
  "options": [
   "480 lb",
   "1.9 lb",
   "240 lb",
   "15 lb"
  ],
  "answer": 0,
  "explanation": "Mechanical advantage = 8 in ÷ 0.5 in = 16, so R = E × 16 = 30 lb × 16 = 480 lb.",
  "type": "calculation"
 },
 {
  "id": "G015",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force",
   "weight"
  ],
  "question": "While weighing a 1600 lb aircraft on a ramp 6 in high and 24 in long and refitting fasteners, four observations were logged. Which one is physically impossible?",
  "options": [
   "Pushing the aircraft up the ramp needs an ideal effort of 400 lb.",
   "The real push force was somewhat more than the ideal value because of friction.",
   "A fine-threaded bolt has a greater mechanical advantage than a coarse-threaded bolt of the same diameter.",
   "After the liquid solvent on a bolt evaporated, its matter ceased to exist because it was no longer a liquid."
  ],
  "answer": 3,
  "explanation": "Matter cannot be created or destroyed, only changed in state; the evaporated solvent still exists as a gas. The other three statements are correct.",
  "type": "theory"
 },
 {
  "id": "G016",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "energy",
   "work",
   "heat"
  ],
  "question": "Air trapped in the brake-booster cylinder of a tow tug absorbs Q = 900 ft·lb of heat while expanding and pushing the piston, doing W = 4,800 in·lb of work. Using Q = ΔU + W, what is the change in internal energy ΔU of the air?",
  "options": [
   "500 ft·lb",
   "1,300 ft·lb",
   "-3,900 ft·lb",
   "5,700 ft·lb"
  ],
  "answer": 0,
  "explanation": "Convert the work first: 4,800 in·lb / 12 = 400 ft·lb. Then ΔU = Q - W = 900 - 400 = 500 ft·lb.",
  "type": "calculation"
 },
 {
  "id": "G017",
  "topic": "Kinematics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "acceleration"
  ],
  "question": "Two identical rivets leave the edge of a scaffold platform at the same instant. One is released from rest. The other slides off the end of a chute (an inclined plane) that ends horizontally, leaving at 10 ft/s. Ignoring air resistance, which statement is correct?",
  "options": [
   "The sliding rivet lands later, because it has to travel a longer path through the air.",
   "The sliding rivet lands first, because its total speed is greater.",
   "The dropped rivet lands later, because the inclined plane gave the other rivet extra downward acceleration.",
   "Both rivets land at the same time, because the chute only sets the horizontal speed and does not change the vertical fall."
  ],
  "answer": 3,
  "explanation": "Horizontal and vertical motions are independent. Both rivets start with zero vertical velocity and accelerate downward at g = 32.2 ft/s², so they fall for the same time.",
  "type": "theory"
 },
 {
  "id": "G018",
  "topic": "Kinematics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units",
   "velocity"
  ],
  "question": "Washers slide down a chute (an inclined plane) and leave its horizontal end at 12 ft/s. The chute exit is 48.3 in above the floor. Using g = 32.2 ft/s² and ignoring air resistance, how far horizontally from the chute exit do the washers land?",
  "options": [
   "6.0 ft",
   "4.2 ft",
   "12.0 ft",
   "20.8 ft"
  ],
  "answer": 0,
  "explanation": "Convert the height: 48.3 in = 4.025 ft. Then t = sqrt(2h/g) = sqrt(2 × 4.025 / 32.2) = 0.5 s, so the range is 12 ft/s × 0.5 s = 6.0 ft.",
  "type": "calculation"
 },
 {
  "id": "G019",
  "topic": "Kinematics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "acceleration"
  ],
  "question": "Estimate how far from the base of a 100 ft mast a loose nut lands. A rope running over a pulley at the top knocks the nut sideways off the platform, giving it about 5 ft/s horizontally. Use g = 32.2 ft/s² and ignore air resistance. Which order of magnitude is correct?",
  "options": [
   "About 1 ft",
   "About 12 ft",
   "About 120 ft",
   "About 1200 ft"
  ],
  "answer": 1,
  "explanation": "The fall time is t = sqrt(2 × 100 / 32.2) ≈ 2.5 s. The horizontal distance is about 5 ft/s × 2.5 s ≈ 12 ft. The pulley only changes the direction of the rope force and does not affect the flight.",
  "type": "calculation"
 },
 {
  "id": "G020",
  "topic": "Kinematics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "velocity",
   "acceleration"
  ],
  "question": "If a lever-type launcher is adjusted so that it doubles the launch speed of a test bolt, with the launch angle fixed at 45° on level ground and no air resistance, what happens to the horizontal range?",
  "options": [
   "It doubles.",
   "It increases by a factor of sqrt(2).",
   "It becomes 4 times larger.",
   "It becomes 8 times larger."
  ],
  "answer": 2,
  "explanation": "The range is R = v² sin(2θ) / g. With θ and g unchanged, R is proportional to v², so doubling v multiplies the range by 4.",
  "type": "theory"
 },
 {
  "id": "G021",
  "topic": "Kinematics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "acceleration"
  ],
  "question": "After a screw jack raises a platform to 16.1 ft, a washer slides horizontally off its edge and lands 9 ft from the base of the platform. Using g = 32.2 ft/s² and ignoring air resistance, what was the washer's horizontal speed as it left the edge?",
  "options": [
   "4.5 ft/s",
   "18.0 ft/s",
   "0.56 ft/s",
   "9.0 ft/s"
  ],
  "answer": 3,
  "explanation": "The fall time is t = sqrt(2 × 16.1 / 32.2) = 1 s. The horizontal speed is then 9 ft / 1 s = 9.0 ft/s.",
  "type": "calculation"
 },
 {
  "id": "G022",
  "topic": "Kinematics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "acceleration",
   "velocity"
  ],
  "question": "If the same constant acceleration is kept but the run time is doubled, what happens to the distance covered? A tool carriage on a workshop test rail starts from rest and speeds up at constant acceleration for a time t, covering a distance d. This distance is the area under its straight-line velocity-time graph.",
  "options": [
   "It becomes 2d",
   "It becomes 3d",
   "It becomes 4d",
   "It becomes 8d"
  ],
  "answer": 2,
  "explanation": "The graph is a triangle with base t and height a·t, so the area is d = (1/2)·a·t^2. Doubling t multiplies the distance by 2^2 = 4.",
  "type": "theory"
 },
 {
  "id": "G023",
  "topic": "Kinematics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "acceleration"
  ],
  "question": "On a workshop gantry rail, a parts trolley's velocity-time graph rises in a straight line from 0 to 6 ft/s in 3 s, then stays flat at 6 ft/s for 5 s. How far does the trolley travel in these 8 s?",
  "options": [
   "48 ft",
   "39 ft",
   "30 ft",
   "24 ft"
  ],
  "answer": 1,
  "explanation": "Triangle area = (1/2)(6 ft/s)(3 s) = 9 ft, and the flat part is uniform motion, X = U·t = 6 × 5 = 30 ft, so the total is 39 ft.",
  "type": "calculation"
 },
 {
  "id": "G024",
  "topic": "Kinematics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "velocity",
   "acceleration"
  ],
  "question": "A data logger records a bench cart that starts from rest and moves with constant acceleration along a straight rail. Four runs are summarized as (final speed, time, distance). Which run is physically inconsistent with the area under a straight-line velocity-time graph?",
  "options": [
   "6 ft/s, 3 s, 9 ft",
   "8 ft/s, 4 s, 16 ft",
   "4 ft/s, 5 s, 10 ft",
   "10 ft/s, 2 s, 20 ft"
  ],
  "answer": 3,
  "explanation": "From rest with constant acceleration, distance = (1/2)·v·t. For the last run this gives (1/2)(10)(2) = 10 ft, not 20 ft, so the 20 ft entry used v·t, which is only valid for uniform motion.",
  "type": "calculation"
 },
 {
  "id": "G025",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force",
   "weight",
   "equilibrium"
  ],
  "question": "Which statement is correct about a bucket holding 1 gallon of water (8.34 lb, bucket weight neglected) that is hoisted at constant speed by a rope over a frictionless pulley?",
  "options": [
   "The rope tension must be more than 8.34 lb because the bucket is moving upward.",
   "The rope tension is zero because the bucket is not accelerating.",
   "The rope tension must be less than 8.34 lb, otherwise the bucket would not keep moving.",
   "The rope tension is 8.34 lb, because constant velocity means the net force is zero and tension balances weight."
  ],
  "answer": 3,
  "explanation": "By Newton's first law, constant velocity means zero net force, so the upward rope tension equals the downward weight of 8.34 lb. Motion alone does not require extra force.",
  "type": "theory"
 },
 {
  "id": "G026",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force",
   "torque"
  ],
  "question": "Water stands 23.1 in deep above a 10 in^2 drain stopper in the bottom of an open tank (8.34 psi per 231 in of water). The stopper is held shut by a lever, with the stopper 6 in from the pivot and the holding force applied 12 in from the pivot. What holding force is needed at the handle? Atmospheric pressure acts on both sides and cancels.",
  "options": [
   "8.34 lb",
   "16.68 lb",
   "4.17 lb",
   "0.834 lb"
  ],
  "answer": 2,
  "explanation": "Pressure = 8.34 x (23.1/231) = 0.834 psi, so the force on the stopper = 0.834 x 10 = 8.34 lb. Balancing moments gives F x 12 = 8.34 x 6, so F = 4.17 lb.",
  "type": "calculation"
 },
 {
  "id": "G027",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "weight"
  ],
  "question": "Reviewing the results from a gear-pump test rig, which reported observation is physically impossible for water at rest? (Use 8.34 psi per 231 in of water height.)",
  "options": [
   "A narrow tank filled to 231 in reads 8.34 psi at the bottom.",
   "A gauge halfway down a 231 in column of water reads 4.17 psi.",
   "A tank holding twice the volume of water at the same 231 in height reads 16.68 psi at the bottom.",
   "Atmospheric pressure at 15 000 ft is lower than at 10 000 ft."
  ],
  "answer": 2,
  "explanation": "Pressure at the bottom depends only on the height of the liquid, not on volume or container shape. A 231 in column always gives 8.34 psi, so 16.68 psi is not possible.",
  "type": "theory"
 },
 {
  "id": "G028",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "weight",
   "density"
  ],
  "question": "If the same reservoir volume on a tow tug is filled with a fluid whose specific gravity is twice that of the original fluid, what happens to the weight of the fluid in the reservoir?",
  "options": [
   "It stays the same, because the volume has not changed",
   "It doubles, because weight per unit volume is proportional to specific gravity",
   "It is cut in half, because a denser fluid takes up less space",
   "It quadruples, because specific gravity is a squared ratio"
  ],
  "answer": 1,
  "explanation": "Specific gravity compares the weight of a given volume of the fluid with an equal volume of water, so for a fixed volume the weight is proportional to specific gravity. Doubling it doubles the weight.",
  "type": "theory"
 },
 {
  "id": "G029",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "density",
   "weight"
  ],
  "question": "While checking fluid samples from a tow tug's hydraulic system, a hydrometer is used. Which of the following reports is physically inconsistent?",
  "options": [
   "The float reads 1 000 when placed in pure water",
   "A fluid with a specific gravity of 0.8 has 1 ft^3 weighing 49.92 lb",
   "The float rises higher than it did in pure water, yet the scale reads below 1 000",
   "The reading of specific gravity is given as a pure number with no units"
  ],
  "answer": 2,
  "explanation": "A float rises in a liquid of greater density, which gives a reading above 1 000. A float riding higher than in water cannot indicate a specific gravity below 1 000.",
  "type": "theory"
 },
 {
  "id": "G030",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "density",
   "weight"
  ],
  "question": "Which statement about specific gravity is correct for fuel drawn from a ground-service bowser?",
  "options": [
   "A larger sample of fuel has a higher specific gravity because it weighs more",
   "Specific gravity is expressed in lb/ft^3",
   "Specific gravity compares the fuel with an equal weight of water, not an equal volume",
   "A 50-gallon sample and a 5-gallon sample of the same fuel have the same specific gravity"
  ],
  "answer": 3,
  "explanation": "Specific gravity and density do not depend on the size of the sample, only on the substance. It is a ratio of weights of equal volumes, so it has no units.",
  "type": "theory"
 },
 {
  "id": "G031",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "weight",
   "density"
  ],
  "question": "Roughly how much does the fuel weigh in a bowser holding 100 ft^3 of fuel with a specific gravity of 0.8? (Water weighs 62.4 lb/ft^3.)",
  "options": [
   "About 50 lb",
   "About 500 lb",
   "About 5 000 lb",
   "About 50 000 lb"
  ],
  "answer": 2,
  "explanation": "Weight = 100 ft^3 × 62.4 lb/ft^3 × 0.8 = 4 992 lb, which is about 5 000 lb.",
  "type": "calculation"
 },
 {
  "id": "G032",
  "topic": "Newton’s Laws & Forces",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units",
   "weight",
   "density"
  ],
  "question": "An auxiliary tank on a tow tug measures 2 ft long, 18 in wide and 12 in deep inside, and it is completely full of hydraulic fluid with a specific gravity of 0.8. Using 62.4 lb/ft^3 for water, what is the weight of the fluid?",
  "options": [
   "149.8 lb",
   "187.2 lb",
   "12.5 lb",
   "21 565 lb"
  ],
  "answer": 0,
  "explanation": "Volume = 2 ft × 1.5 ft × 1 ft = 3 ft^3. Weight = 3 × 62.4 × 0.8 = 149.8 lb.",
  "type": "calculation"
 },
 {
  "id": "G033",
  "topic": "Friction",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "friction",
   "force"
  ],
  "question": "Which statement about the coefficient of friction of a rubber-lagged drive pulley gripping a belt or cable is correct?",
  "options": [
   "The coefficient can never exceed 1, because friction cannot be larger than the normal force.",
   "The coefficient can be greater than 1 for a material such as rubber, so the friction force can be larger than the normal force.",
   "The coefficient of static friction applies only once the surfaces are already sliding over each other.",
   "A coefficient of exactly 0 is typical for any real pair of dry surfaces."
  ],
  "answer": 1,
  "explanation": "The coefficient usually lies between 0 and 1 but can be greater than 1, as for rubber, which means friction is stronger than the normal force. Static friction applies when the surfaces are not moving, and 0 is only theoretically possible.",
  "type": "theory"
 },
 {
  "id": "G034",
  "topic": "Friction",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "friction",
   "weight",
   "force"
  ],
  "question": "Roughly how much steady pull is needed on a tow cable, running over a low-friction snatch pulley, to keep a 12,000 lb aircraft rolling on a concrete ramp once it is moving? Use a rolling friction coefficient of 0.02.",
  "options": [
   "About 24 lb",
   "About 2,400 lb",
   "About 240 lb",
   "About 12,000 lb"
  ],
  "answer": 2,
  "explanation": "F = μ × N = 0.02 × 12,000 lb = 240 lb, which is the right order of magnitude, a small fraction of the aircraft weight.",
  "type": "calculation"
 },
 {
  "id": "G035",
  "topic": "Friction",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "friction",
   "units",
   "weight"
  ],
  "question": "Gearbox cover plate: a cast gear housing weighing 80 oz sits on a flat steel bench. The coefficient of static friction is 0.45. What horizontal force in lb is needed to just start it sliding? (16 oz = 1 lb)",
  "options": [
   "36 lb",
   "2.25 lb",
   "5 lb",
   "0.14 lb"
  ],
  "answer": 1,
  "explanation": "Convert first: 80 oz ÷ 16 = 5 lb, so N = 5 lb. Then F = 0.45 × 5 lb = 2.25 lb.",
  "type": "calculation"
 },
 {
  "id": "G036",
  "topic": "Friction",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "friction",
   "force",
   "equilibrium"
  ],
  "question": "Using a cam-lever clamp with a mechanical advantage of 6, a mechanic pushes the handle with 50 lb of effort (ignore lever losses). The clamp squeezes a plate between two faces, each pressed with the full clamp force. The coefficient of static friction at each face is 0.3. What is the maximum friction force resisting the plate sliding out?",
  "options": [
   "90 lb",
   "300 lb",
   "180 lb",
   "30 lb"
  ],
  "answer": 2,
  "explanation": "Clamp force N = 6 × 50 lb = 300 lb. Each face gives 0.3 × 300 lb = 90 lb, and there are two faces, so the total is 180 lb.",
  "type": "calculation"
 },
 {
  "id": "G037",
  "topic": "Friction",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "friction",
   "force"
  ],
  "question": "Reviewing a friction test log for a sliding gear block on a steel bench, which reported result is physically suspicious?",
  "options": [
   "A rubber pad on a pulley rim gave a coefficient of friction of 1.1.",
   "A 79,600 lb aircraft on concrete needed a pull of 1,592 lb to keep rolling, giving a rolling coefficient of 0.02.",
   "Under a 100 lb normal load, the block needed 40 lb to break away, but only 55 lb was needed to keep it sliding steadily.",
   "Under the same 100 lb load, rolling the block on rollers took 3 lb, while sliding it took 30 lb."
  ],
  "answer": 2,
  "explanation": "The static coefficient (0.40) is lower than the kinetic coefficient (0.55), but friction is normally highest at breakaway and lower once sliding. Coefficients above 1, a rolling coefficient of 0.02, and rolling friction well below sliding friction are all realistic.",
  "type": "theory"
 },
 {
  "id": "G038",
  "topic": "Friction",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "friction",
   "force"
  ],
  "question": "A drum cart carrying hydraulic fluid is pushed along a hangar floor at constant velocity on wheels with ball bearings. Which statement is correct?",
  "options": [
   "The push must be greater than the rolling friction force, otherwise the cart could not keep moving.",
   "The push equals the rolling friction force, and topping up the drum raises that force because the normal force N increases in F = μN.",
   "The rolling friction force does not depend on the load, because only the coefficient μ matters.",
   "The rolling friction force becomes zero once the cart is moving, so no push is needed."
  ],
  "answer": 1,
  "explanation": "Constant velocity means the net force is zero, so the push equals the rolling friction F = μN. A heavier load gives a larger N and therefore a larger friction force.",
  "type": "theory"
 },
 {
  "id": "G039",
  "topic": "Friction",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "friction",
   "density",
   "weight"
  ],
  "question": "A trolley with an empty mass of 50 kg carries 0.25 m^3 of hydraulic oil of density 800 kg/m^3. It rolls at steady speed on bearing-mounted wheels with a rolling friction coefficient μ = 0.03. Taking g = 10 m/s^2, what horizontal push is needed?",
  "options": [
   "75 N",
   "60 N",
   "7.5 N",
   "150 N"
  ],
  "answer": 0,
  "explanation": "Oil mass = 800 × 0.25 = 200 kg, so the total mass is 250 kg and N = 2500 N. F = μN = 0.03 × 2500 = 75 N.",
  "type": "calculation"
 },
 {
  "id": "G040",
  "topic": "Friction",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "friction",
   "buoyancy"
  ],
  "question": "Roughly what rolling friction force acts in the bearings of a submerged fuel boost pump rotor assembly? Its mass is 8 kg and its volume is 0.001 m^3. It is fully immersed in fuel of density 800 kg/m^3, and the bearing rolling friction coefficient is μ = 0.002. Take g = 10 m/s^2 and assume the bearings carry the net downward force.",
  "options": [
   "0.14 N",
   "0.16 N",
   "1.4 N",
   "0.014 N"
  ],
  "answer": 0,
  "explanation": "Buoyancy A = Vρg = 0.001 × 800 × 10 = 8 N, and the weight is 80 N, so N = 72 N. F = μN = 0.002 × 72 ≈ 0.14 N.",
  "type": "calculation"
 },
 {
  "id": "G041",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "units",
   "energy"
  ],
  "question": "On a water-flow test rig used to check a shop eductor, the total pressure is steady at 20 psi because no energy is added to or taken from the water. At the narrow throat, a dynamic-pressure gauge reads 720 lb/ft^2. What static pressure should the throat gauge show?",
  "options": [
   "20 psi",
   "15 psi",
   "25 psi",
   "5 psi"
  ],
  "answer": 1,
  "explanation": "Convert the dynamic pressure: 720 lb/ft^2 / 144 in^2/ft^2 = 5 psi. Static pressure = total pressure - dynamic pressure = 20 - 5 = 15 psi.",
  "type": "calculation"
 },
 {
  "id": "G042",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "velocity",
   "energy"
  ],
  "question": "Water flows steadily through a bench venturi with a wide inlet (A), a narrow throat (B) and a wide outlet (C). The inlet and outlet have the same diameter. Which logged set of readings is physically impossible, given that no pump energy is added between A and C?",
  "options": [
   "A: 40.0 psi, 8 ft/s; B: 38.7 psi, 16 ft/s; C: 39.8 psi, 8 ft/s",
   "A: 40.0 psi, 8 ft/s; B: 41.0 psi, 16 ft/s; C: 39.8 psi, 8 ft/s",
   "A: 40.0 psi, 8 ft/s; B: 38.7 psi, 16 ft/s; C: 40.0 psi, 8 ft/s",
   "A: 40.0 psi, 8 ft/s; B: 38.7 psi, 16 ft/s; C: 39.5 psi, 8 ft/s"
  ],
  "answer": 1,
  "explanation": "With no energy added, higher velocity at the throat means higher dynamic pressure and therefore lower static pressure. A throat static pressure above the inlet value at higher speed breaks Bernoulli's principle. The other sets differ only by small friction losses or show the ideal case.",
  "type": "theory"
 },
 {
  "id": "G043",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "velocity",
   "energy"
  ],
  "question": "In a parts-washer eductor, water enters the wide section at 30 psi static pressure and 2 psi dynamic pressure. The throat cross-sectional area is half that of the wide section. Assuming no energy is added or lost, what is the static pressure at the throat?",
  "options": [
   "24 psi",
   "28 psi",
   "22 psi",
   "26 psi"
  ],
  "answer": 0,
  "explanation": "Total pressure = 30 + 2 = 32 psi. Half the area doubles the velocity, so dynamic pressure rises by 2^2 = 4 times to 8 psi. Static pressure at the throat = 32 - 8 = 24 psi.",
  "type": "calculation"
 },
 {
  "id": "G044",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "energy"
  ],
  "question": "Air speeds up as it passes through the narrow throat of the venturi in a siphon-type paint spray gun. Which statement best describes what happens to the energy of the airflow?",
  "options": [
   "Total pressure drops at the throat because the air loses energy by speeding up",
   "The narrowing adds energy to the air, so both static and dynamic pressure increase",
   "Static pressure, the potential energy, falls as dynamic pressure, the kinetic energy, rises, while total pressure stays the same",
   "Static pressure rises at the throat because the air is squeezed into a smaller space"
  ],
  "answer": 2,
  "explanation": "Bernoulli's principle says total pressure = static pressure + dynamic pressure stays constant when no energy is added or removed. The throat only converts static pressure into dynamic pressure.",
  "type": "theory"
 },
 {
  "id": "G045",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "velocity"
  ],
  "question": "A suction nozzle on a workshop air line draws fluid in through its throat. The air speed in the throat is doubled by raising the supply pressure, while the air in the supply side stays almost still. By what factor does the drop in static pressure at the throat, relative to the supply side, change?",
  "options": [
   "2 times",
   "8 times",
   "4 times",
   "1/2 as much"
  ],
  "answer": 2,
  "explanation": "The static pressure drop equals the dynamic pressure gained, which is proportional to v^2. Doubling v multiplies the dynamic pressure, and so the drop, by 2^2 = 4.",
  "type": "calculation"
 },
 {
  "id": "G046",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "torque",
   "work"
  ],
  "question": "Leaning with 10 lb of force on the end of a 10 in wrench, a mechanic cannot turn a bolt that is already tight. Which statement is correct?",
  "options": [
   "A torque of 100 lb·in is applied to the bolt, but no work is done because nothing moves",
   "No torque exists because the bolt does not rotate, and no work is done",
   "A torque of 100 lb·in and 100 in·lb of work are both produced",
   "No torque exists, but 100 in·lb of work is done by the force"
  ],
  "answer": 0,
  "explanation": "Torque is force applied along a distance (10 lb × 10 in = 100 lb·in) and exists even without motion. Work needs the force to act through a distance, and here there is no movement.",
  "type": "theory"
 },
 {
  "id": "G047",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "power",
   "units"
  ],
  "question": "A chain hoist raises a 3300 lb load through 24 in in 30 seconds. Using 1 hp = 550 ft·lb/s, what power does the hoist deliver?",
  "options": [
   "12 hp",
   "0.40 hp",
   "4.8 hp",
   "220 hp"
  ],
  "answer": 1,
  "explanation": "Work = 3300 lb × 2 ft = 6600 ft·lb. Power = 6600 ÷ 30 = 220 ft·lb/s, and 220 ÷ 550 = 0.40 hp.",
  "type": "calculation"
 },
 {
  "id": "G048",
  "topic": "Work, Power, Energy, Torque and their relation",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "torque",
   "force"
  ],
  "question": "At the end of a 24 in breaker bar, a mechanic pushes down with 35 lb of force to loosen a stubborn nut. What torque is applied to the nut?",
  "options": [
   "59 lb·in",
   "420 lb·in",
   "840 lb·in",
   "840 in·lb"
  ],
  "answer": 2,
  "explanation": "Torque = force × distance along which it is applied = 35 lb × 24 in = 840 lb·in. The unit is lb·in, not in·lb, which is the unit of work.",
  "type": "calculation"
 },
 {
  "id": "G049",
  "topic": "Simple Machines",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force",
   "work"
  ],
  "question": "Estimate the load a hand-operated screw jack can lift. It has a speed ratio of 50 and an efficiency of about 40%, and the mechanic pushes the handle with 80 lb. Which load is closest, using Efficiency = Mechanical Advantage ÷ Speed Ratio × 100?",
  "options": [
   "160 lb",
   "1,600 lb",
   "4,000 lb",
   "16,000 lb"
  ],
  "answer": 1,
  "explanation": "MA = efficiency × SR = 0.40 × 50 = 20, so load = 20 × 80 lb = 1,600 lb. Ignoring friction gives the wrong figure of 4,000 lb.",
  "type": "calculation"
 },
 {
  "id": "G050",
  "topic": "Simple Machines",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "work",
   "friction"
  ],
  "question": "During acceptance tests of several geared hand winches, the mechanical advantage (MA) and speed ratio (SR) were recorded. Which recorded result is physically impossible, using Efficiency = MA ÷ SR × 100?",
  "options": [
   "MA = 4.5, SR = 6",
   "MA = 12, SR = 10",
   "MA = 2.4, SR = 8",
   "MA = 9, SR = 12"
  ],
  "answer": 1,
  "explanation": "MA = 12 with SR = 10 gives an efficiency of 120%, which would mean more work out than in. The other three give 75%, 30% and 75%.",
  "type": "theory"
 },
 {
  "id": "G051",
  "topic": "Simple Machines",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force",
   "friction"
  ],
  "question": "If the gearing of a hand winch is changed so its speed ratio is doubled while its efficiency stays the same, what happens to the effort force needed to raise the same load?",
  "options": [
   "It doubles",
   "It is halved",
   "It stays the same",
   "It is reduced to one quarter"
  ],
  "answer": 1,
  "explanation": "MA = (Efficiency × SR) ÷ 100, so doubling SR at constant efficiency doubles MA. The same load then needs half the effort.",
  "type": "theory"
 },
 {
  "id": "G052",
  "topic": "Simple Machines",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "work",
   "force",
   "energy"
  ],
  "question": "A lever-type jack has a mechanical advantage of 8 when lifting an engine stand. Which statement is correct?",
  "options": [
   "The jack multiplies the work, so the work output is 8 times the work input",
   "The effort moves through a greater distance than the load, and the work output cannot exceed the work input",
   "The effort moves through the same distance as the load, but the force is multiplied by 8",
   "Friction in the jack increases the work output above the work input"
  ],
  "answer": 1,
  "explanation": "A machine trades force for distance, since Work = F × d. Output work equals input work at best and is less when friction is present.",
  "type": "theory"
 },
 {
  "id": "G053",
  "topic": "Simple Machines",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "work",
   "friction",
   "force"
  ],
  "question": "A block-and-tackle hoist raises a 900 lb engine by 10 ft. The mechanic pulls with 150 lb of force through 80 ft of rope. How much work is lost to friction, and what is the efficiency?",
  "options": [
   "3,000 ft·lb lost, efficiency 75%",
   "3,000 ft·lb lost, efficiency 133%",
   "9,000 ft·lb lost, efficiency 75%",
   "12,000 ft·lb lost, efficiency 25%"
  ],
  "answer": 0,
  "explanation": "Work in = 150 × 80 = 12,000 ft·lb and work out = 900 × 10 = 9,000 ft·lb, so 3,000 ft·lb is lost. Efficiency = 9,000 ÷ 12,000 = 75%, which matches MA 6 ÷ SR 8.",
  "type": "calculation"
 },
 {
  "id": "G054",
  "topic": "Simple Machines",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "torque",
   "force"
  ],
  "question": "During a bench test of a hand-cranked fuel transfer pump, a mechanic pushes with 20 lb on a crank handle 12 in from the shaft. The crank drives the pump through a 5:1 reduction gear pair (the output torque ideally rises by the gear ratio). Which recorded output torque is physically impossible and points to a faulty gauge or wrong reading?",
  "options": [
   "78 lb·ft",
   "91 lb·ft",
   "96 lb·ft",
   "108 lb·ft"
  ],
  "answer": 3,
  "explanation": "Input torque = 20 lb × 12 in = 240 lb·in = 20 lb·ft. The ideal output is 20 × 5 = 100 lb·ft, so 108 lb·ft would mean an efficiency above 100%, which is impossible.",
  "type": "calculation"
 },
 {
  "id": "G055",
  "topic": "Simple Machines",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force"
  ],
  "question": "In a hand-operated hydraulic test pump for a fuel system, the handle is a second class lever: the pivot is at one end, the piston rod pushes on the handle 4 in from the pivot, and the operator pushes at the grip 20 in from the pivot with 30 lb. The piston area is 0.5 in², which gives 300 psi. If the grip distance is doubled to 40 in and the piston area is halved, with the same 30 lb effort and the same rod position, what pressure results (ignoring losses)?",
  "options": [
   "300 psi",
   "600 psi",
   "1200 psi",
   "2400 psi"
  ],
  "answer": 2,
  "explanation": "Piston force = 30 lb × 40 in ÷ 4 in = 300 lb. Pressure = 300 lb ÷ 0.25 in² = 1200 psi, which is 4 times the original.",
  "type": "calculation"
 },
 {
  "id": "G056",
  "topic": "Simple Machines",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "torque",
   "units"
  ],
  "question": "An emergency hydraulic hand primer is turned by pushing with 16 lb at the end of a 3 in crank arm. The crank shaft carries a 20-tooth pinion that drives a 50-tooth gear, and the gear pair is 90% efficient. What is the output torque in lb·ft?",
  "options": [
   "108 lb·ft",
   "9 lb·ft",
   "10 lb·ft",
   "1.44 lb·ft"
  ],
  "answer": 1,
  "explanation": "Input torque = 16 lb × 3 in = 48 lb·in. Output = 48 × (50/20) × 0.90 = 108 lb·in, and 108 lb·in ÷ 12 = 9 lb·ft.",
  "type": "calculation"
 },
 {
  "id": "G057",
  "topic": "Statics & Equilibrium",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "torque",
   "weight"
  ],
  "question": "On a workshop rack that is used as a weighing datum reference, a 35 lb toolbox sits 48 in from the datum. What is the moment of the toolbox about the datum?",
  "options": [
   "83 in-lb",
   "1680 in-lb",
   "140 in-lb",
   "0.73 in-lb"
  ],
  "answer": 1,
  "explanation": "Moment = weight × arm = 35 lb × 48 in = 1680 in-lb.",
  "type": "calculation"
 },
 {
  "id": "G058",
  "topic": "Statics & Equilibrium",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units",
   "torque"
  ],
  "question": "Mixed measurements were noted for a 20 lb bracket-mounted tool: its arm from the datum is 3 ft 6 in. What is its moment about the datum in in-lb?",
  "options": [
   "70 in-lb",
   "180 in-lb",
   "840 in-lb",
   "1680 in-lb"
  ],
  "answer": 2,
  "explanation": "Convert the arm first: 3 ft 6 in = 42 in. Moment = 20 lb × 42 in = 840 in-lb.",
  "type": "calculation"
 },
 {
  "id": "G059",
  "topic": "Statics & Equilibrium",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units",
   "torque",
   "weight"
  ],
  "question": "A 50 lb engine accessory hangs from a bench beam at an arm of 30 in from the wall. Four apprentices log the moment about the wall. Which logged entry is physically wrong (suspicious) for this setup?",
  "options": [
   "1500 in-lb",
   "125 ft·lb",
   "169.5 N·m",
   "1500 lb"
  ],
  "answer": 3,
  "explanation": "Moment = 50 lb × 30 in = 1500 in-lb = 125 ft·lb ≈ 169.5 N·m. A moment is a force times a distance, so a result given in lb alone (a force unit) is wrong.",
  "type": "calculation"
 },
 {
  "id": "G060",
  "topic": "Statics & Equilibrium",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "equilibrium",
   "weight"
  ],
  "question": "A flat aluminum bench plate has a heavy motor bolted near one end, so its mass is very unevenly distributed. The plate is hung from its center of gravity (CG). Which statement is correct?",
  "options": [
   "It hangs in balance with no tendency to rotate, because the total moment of its weight about the CG is zero, even though the CG is not at the geometric center.",
   "It tilts toward the motor end, because the heavy end always pulls the plate down even when it is hung from the CG.",
   "It balances only if the CG is at the geometric center of the plate.",
   "It balances only if the weights on each side of the CG are equal and the arms are equal."
  ],
  "answer": 0,
  "explanation": "The CG is the balance point where the weight acts as if concentrated. The moments on either side cancel, so the plate has no tendency to rotate. A small heavy weight at a long arm can balance a larger weight at a short arm, and the CG moves toward the motor.",
  "type": "theory"
 },
 {
  "id": "G061",
  "topic": "Statics & Equilibrium",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "torque",
   "weight",
   "equilibrium"
  ],
  "question": "A shop cart weighs 60 lb with its own CG 30 in aft of the datum at the front axle. A 40 lb tool chest is then placed with its CG 75 in aft of the datum. Where is the combined CG of the loaded cart, measured from the datum?",
  "options": [
   "52.5 in",
   "48 in",
   "80 in",
   "30 in"
  ],
  "answer": 1,
  "explanation": "Total moment = 60×30 + 40×75 = 1800 + 3000 = 4800 in-lb. Total weight = 100 lb, so CG = 4800 / 100 = 48 in.",
  "type": "calculation"
 },
 {
  "id": "G062",
  "topic": "Statics & Equilibrium",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "friction",
   "work",
   "equilibrium"
  ],
  "question": "Dragging a 250 lb engine stand 20 ft across a concrete floor at constant speed takes a pull equal to the sliding friction. The coefficient of sliding friction is 0.24. How much work is done against friction?",
  "options": [
   "5,000 ft·lb",
   "1,500 ft·lb",
   "60 ft·lb",
   "1,200 ft·lb"
  ],
  "answer": 3,
  "explanation": "At constant speed the applied force balances the friction, so F = 0.24 × 250 lb = 60 lb. Work = 60 lb × 20 ft = 1,200 ft·lb, not weight × distance.",
  "type": "calculation"
 },
 {
  "id": "G063",
  "topic": "Statics & Equilibrium",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "friction",
   "force",
   "equilibrium"
  ],
  "question": "Roughly how much horizontal pull keeps a 600 lb loaded tool cart rolling at constant speed, if rolling friction is about one tenth of the weight, as in the course example of a 900 lb load needing no more than 90 lb?",
  "options": [
   "6 lb",
   "600 lb",
   "60 lb",
   "6,000 lb"
  ],
  "answer": 2,
  "explanation": "At constant speed the pull equals rolling friction: about 0.1 × 600 lb = 60 lb, not the full weight.",
  "type": "calculation"
 },
 {
  "id": "G064",
  "topic": "Statics & Equilibrium",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units",
   "friction",
   "work"
  ],
  "question": "Weighing 2,400 oz (16 oz = 1 lb), a steel tool chest is slid 240 in across a bench at constant speed. The sliding friction force is 0.3 of its weight. How much work is done against friction?",
  "options": [
   "900 ft·lb",
   "10,800 ft·lb",
   "36,000 ft·lb",
   "3,000 ft·lb"
  ],
  "answer": 0,
  "explanation": "Weight = 2,400 / 16 = 150 lb, so friction = 0.3 × 150 = 45 lb. Distance = 240 in = 20 ft, so work = 45 × 20 = 900 ft·lb.",
  "type": "calculation"
 },
 {
  "id": "G065",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "rotation",
   "force"
  ],
  "question": "Pushing down on one end of the horizontal axle of a spinning gyro in a gimbal on a structural inspection rig, a trainee predicts that the axle will simply tilt downward. Which statement corrects this misconception?",
  "options": [
   "The gyro responds as though the force acted 90 degrees further around the rotor in its direction of spin, so it rotates about its vertical axis instead of tilting",
   "The axle tilts downward as expected, but more slowly because of the rotor's spin",
   "The axle tilts upward, because a gyro always responds opposite to the applied force",
   "The gyro does not respond at all, because the rotor's mass cancels any force applied to the axle"
  ],
  "answer": 0,
  "explanation": "Precession means the gyro reacts as though the force came from 90 degrees further around in the direction of rotor spin, so it rotates about the vertical axis rather than tilting.",
  "type": "theory"
 },
 {
  "id": "G066",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "momentum",
   "velocity"
  ],
  "question": "Roughly how much momentum does a 1.2 kg hammer have when it swings at 8 m/s to seat a fastener in a structural bracket?",
  "options": [
   "About 0.01 kg·m/s",
   "About 0.1 kg·m/s",
   "About 10 kg·m/s",
   "About 1000 kg·m/s"
  ],
  "answer": 2,
  "explanation": "Momentum p = m × v = 1.2 kg × 8 m/s = 9.6 kg·m/s, which is about 10 kg·m/s.",
  "type": "calculation"
 },
 {
  "id": "G067",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "momentum",
   "energy"
  ],
  "question": "On a low-friction bench rail, a 2.0 kg hammer head moving at 5 m/s strikes a 3.0 kg stationary steel fitting and the two move off together. How much kinetic energy is lost in the impact?",
  "options": [
   "5 J",
   "10 J",
   "15 J",
   "25 J"
  ],
  "answer": 2,
  "explanation": "Momentum conservation gives v = (2.0 × 5)/(5.0) = 2 m/s. Kinetic energy falls from 0.5 × 2 × 5^2 = 25 J to 0.5 × 5 × 2^2 = 10 J, a loss of 15 J.",
  "type": "calculation"
 },
 {
  "id": "G068",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "rotation",
   "force"
  ],
  "question": "Reviewing a bench test of a spinning gyro used in a turn and bank type indicator on a structural test frame, which of the following reported observations is physically suspicious?",
  "options": [
   "A force applied to the horizontal axis makes the gyro rotate about its vertical axis instead of tilting",
   "The gyro reacts as though the force came from 90 degrees further around the rotor in its direction of spin",
   "The plane of the applied force, the plane of rotation and the plane of precession are all parallel to each other",
   "The spinning gyro resists the applied force on its axis instead of moving in the direction of the push"
  ],
  "answer": 2,
  "explanation": "For a gyro, the plane of the applied force, the plane of rotation and the plane of precession are mutually perpendicular, not parallel.",
  "type": "theory"
 },
 {
  "id": "G069",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "momentum",
   "velocity"
  ],
  "question": "If a 2 kg clamp block sliding at 3 m/s on a low-friction test rail hits a stationary 2 kg fitting and sticks to it, the pair moves off at 1.5 m/s. What would the common speed be if the stationary fitting were doubled to 4 kg, with everything else unchanged?",
  "options": [
   "0.5 m/s",
   "0.75 m/s",
   "1.0 m/s",
   "1.5 m/s"
  ],
  "answer": 2,
  "explanation": "Momentum is conserved: 2 kg × 3 m/s = (2 + 4) kg × v, so v = 6/6 = 1.0 m/s.",
  "type": "calculation"
 },
 {
  "id": "G070",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force",
   "rotation"
  ],
  "question": "When a chip breaks off the rim of a bench grinder wheel spinning at full speed, in which direction does the chip initially travel (ignoring gravity)?",
  "options": [
   "Along the tangent to the rim at the point where it broke away",
   "Radially outward, pushed by a real centrifugal force",
   "Along a curved spiral path that keeps following the wheel's rotation",
   "Radially inward, because the centripetal force pulls it toward the axle"
  ],
  "answer": 0,
  "explanation": "Once the chip separates, nothing supplies the centripetal force, so by Newton I it keeps its velocity, which is tangent to the rim. 'Centrifugal force' is only what is felt in the rotating frame, not a real force.",
  "type": "theory"
 },
 {
  "id": "G071",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "rotation",
   "velocity"
  ],
  "question": "Roughly how fast, in rad/s, does a bench grinder wheel turn when the motor runs at 3,450 rpm?",
  "options": [
   "About 58 rad/s",
   "About 361 rad/s",
   "About 3,450 rad/s",
   "About 21,700 rad/s"
  ],
  "answer": 1,
  "explanation": "ω = 2πf with f = 3,450/60 = 57.5 rev/s, so ω = 2π × 57.5 ≈ 361 rad/s.",
  "type": "calculation"
 },
 {
  "id": "G072",
  "topic": "Momentum, Collisions & Circular Motion",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "rotation"
  ],
  "question": "A wire wheel 6 in in diameter spins at 3,600 rpm on a bench motor. What is the speed of a bristle tip at the rim?",
  "options": [
   "About 15 ft/s",
   "About 94 ft/s",
   "About 188 ft/s",
   "About 5,650 ft/s"
  ],
  "answer": 1,
  "explanation": "f = 3,600/60 = 60 rev/s, so ω = 2π × 60 ≈ 377 rad/s. With r = 0.25 ft, v = ωr ≈ 94 ft/s.",
  "type": "calculation"
 },
 {
  "id": "G073",
  "topic": "Fluids & Pressure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force"
  ],
  "question": "The handle lever of a hydraulic hand pump presses on a piston with an area of 0.75 in² using a force of 30 lb. What pressure is created in the fluid?",
  "options": [
   "22.5 psi",
   "30 psi",
   "40 psi",
   "0.025 psi"
  ],
  "answer": 2,
  "explanation": "Pressure = Force ÷ Area = 30 lb ÷ 0.75 in² = 40 psi.",
  "type": "calculation"
 },
 {
  "id": "G074",
  "topic": "Fluids & Pressure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force"
  ],
  "question": "During a check of a lever-operated hydraulic hoist, a 5 lb force is applied to a 1/2 in² input piston. The output piston has an area of 5 in². Which of the following readings would be physically impossible or suspicious?",
  "options": [
   "A pressure of 10 psi measured at the pump",
   "An output force of 50 lb at the output piston",
   "A pressure of 100 psi measured at the output cylinder",
   "A mechanical advantage of 10"
  ],
  "answer": 2,
  "explanation": "Input pressure is 5 lb ÷ 0.5 in² = 10 psi, and by Pascal's law this acts equally everywhere in the fluid, so 100 psi at the output cylinder is impossible.",
  "type": "theory"
 },
 {
  "id": "G075",
  "topic": "Fluids & Pressure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force"
  ],
  "question": "If the bore diameter of a brake master cylinder piston, pushed by a lever with the same force, is reduced to one half of its original value, what happens to the pressure created in the fluid?",
  "options": [
   "It doubles",
   "It increases four times",
   "It is halved",
   "It stays the same"
  ],
  "answer": 1,
  "explanation": "Area is proportional to diameter squared, so halving the diameter cuts the area to one quarter. Since Pressure = Force ÷ Area, pressure becomes four times larger.",
  "type": "theory"
 },
 {
  "id": "G076",
  "topic": "Fluids & Pressure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force",
   "equilibrium"
  ],
  "question": "Using a pump handle that is a lever with an 8:1 ratio, a mechanic pushes with 15 lb. The lever pushes on a 0.6 in² input piston, which is connected to a 4 in² output piston. What output force is produced (ignoring friction and fluid weight)?",
  "options": [
   "100 lb",
   "480 lb",
   "800 lb",
   "1,600 lb"
  ],
  "answer": 2,
  "explanation": "Force on the piston = 15 × 8 = 120 lb; pressure = 120 ÷ 0.6 = 200 psi; output force = 200 psi × 4 in² = 800 lb.",
  "type": "calculation"
 },
 {
  "id": "G077",
  "topic": "Fluids & Pressure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units",
   "pressure",
   "force"
  ],
  "question": "A small lever pump pushes on its piston with a force of 640 oz (16 oz = 1 lb). The piston area is 0.5 in². What pressure is produced in the fluid, in psi?",
  "options": [
   "1,280 psi",
   "20 psi",
   "5 psi",
   "80 psi"
  ],
  "answer": 3,
  "explanation": "Convert first: 640 oz ÷ 16 = 40 lb. Then Pressure = 40 lb ÷ 0.5 in² = 80 psi.",
  "type": "calculation"
 },
 {
  "id": "G078",
  "topic": "Fluids & Pressure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure"
  ],
  "question": "Which statement about a pressure gauge on a sealed, bolted inspection cover at sea level is correct when the gauge reads 0 psi?",
  "options": [
   "The absolute pressure inside is also 0 psi, so the cover carries no load from the air",
   "The absolute pressure inside is about 14.7 psi, equal to atmospheric pressure",
   "The absolute pressure inside is about 29.92 psi",
   "The gauge pressure is negative, so the absolute pressure is below 14.7 psi"
  ],
  "answer": 1,
  "explanation": "Gauge pressure is measured relative to ambient, so Pabs = Patm + Pg = 14.7 + 0 = 14.7 psi. A zero gauge reading does not mean zero absolute pressure.",
  "type": "theory"
 },
 {
  "id": "G079",
  "topic": "Fluids & Pressure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure",
   "force"
  ],
  "question": "Estimate the load on the bolts of a 12 in × 12 in cover plate on a vacuum test fixture. The inside is evacuated almost completely, and the outside is at sea-level atmosphere (14.7 psi). Which value is closest?",
  "options": [
   "About 21 lb",
   "About 210 lb",
   "About 2,100 lb",
   "About 21,000 lb"
  ],
  "answer": 2,
  "explanation": "Area = 144 in², so F = 14.7 psi × 144 in² ≈ 2,100 lb.",
  "type": "calculation"
 },
 {
  "id": "G080",
  "topic": "Fluids & Pressure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "pressure"
  ],
  "question": "During a proof test of a bolted-flange pressure vessel at sea level, the gauge reads 85 psi. Using Patm = 14.7 psi, what is the absolute pressure inside the vessel?",
  "options": [
   "70.3 psi",
   "85.0 psi",
   "99.7 psi",
   "1,249.5 psi"
  ],
  "answer": 2,
  "explanation": "Pabs = Patm + Pg = 14.7 + 85 = 99.7 psi.",
  "type": "calculation"
 },
 {
  "id": "G081",
  "topic": "Heat & Thermodynamics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "heat",
   "energy",
   "temperature"
  ],
  "question": "An electric resistance thermometer bridge is balanced (galvanometer reads zero) on a 5 lb sample of hydraulic fluid in a test reservoir. A stirring pump then does 7,780 ft·lb of work on the fluid, and all of it becomes heat in the fluid (first law). Take 1 Btu = 778 ft·lb and a specific heat of 0.5 Btu/(lb·°F). What temperature rise results, and what does the bridge do?",
  "options": [
   "4°F rise; the bulb resistance changes, the bridge becomes unbalanced and the galvanometer shows current",
   "4°F rise; the bridge stays balanced and the galvanometer still reads zero",
   "2°F rise; the bulb resistance changes and the galvanometer shows current",
   "10°F rise; the bulb resistance changes and the galvanometer shows current"
  ],
  "answer": 0,
  "explanation": "Heat = 7,780 / 778 = 10 Btu, so the rise is 10 / (5 lb × 0.5 Btu/lb·°F) = 4°F. The bulb resistance then changes, so the bridge is unbalanced and current flows in the galvanometer.",
  "type": "calculation"
 },
 {
  "id": "G082",
  "topic": "Heat & Thermodynamics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "heat",
   "temperature",
   "power"
  ],
  "question": "A fuel sample in a test vessel is boiling steadily while a resistance-thermometer bridge indicates a constant temperature. The sample is still boiling when the heater power is doubled. What happens?",
  "options": [
   "The indicated temperature doubles, and the time to vaporize the sample stays the same",
   "The indicated temperature stays the same, and the time to vaporize the sample is halved",
   "The indicated temperature stays the same, and the time to vaporize the sample is doubled",
   "The indicated temperature doubles, and the time to vaporize the sample is halved"
  ],
  "answer": 1,
  "explanation": "During a change of state the temperature stays constant, because all the added energy is latent heat. The latent heat needed is fixed (m × L), so doubling the power halves the time.",
  "type": "theory"
 },
 {
  "id": "G083",
  "topic": "Heat & Thermodynamics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "heat",
   "energy",
   "temperature"
  ],
  "question": "About 2 lb of aviation fuel vapor condenses back to liquid in a tank vent line. Assume a latent heat of roughly 150 Btu/lb and 1 Btu = 778 ft·lb. Which estimate of the heat released is correct, and what does a resistance-thermometer bulb in the line show while the condensation is going on?",
  "options": [
   "About 300 Btu (roughly 2×10^5 ft·lb); the indicated temperature stays constant during the change of state",
   "About 300 Btu (roughly 2×10^5 ft·lb); the indicated temperature falls steadily during the change of state",
   "About 3 Btu (roughly 2×10^3 ft·lb); the indicated temperature stays constant during the change of state",
   "About 30,000 Btu (roughly 2×10^7 ft·lb); the indicated temperature stays constant during the change of state"
  ],
  "answer": 0,
  "explanation": "Q = m × L = 2 lb × 150 Btu/lb = 300 Btu, and 300 × 778 is about 2.3×10^5 ft·lb. The released energy is latent heat, so the temperature stays constant until the change of state is complete.",
  "type": "calculation"
 },
 {
  "id": "G084",
  "topic": "Heat & Thermodynamics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "heat",
   "temperature"
  ],
  "question": "A small resistance-thermometer bulb at 150°F is lowered into a large tank of fuel at 60°F. Which statement is correct?",
  "options": [
   "Heat flows from the bulb to the fuel until both reach the same temperature, because the bulb is hotter; the tank holding more total energy does not change this",
   "Heat flows from the fuel to the bulb, because the large tank contains more total heat energy",
   "No heat flows, because temperature measures the absolute amount of heat in a body, not a difference between bodies",
   "Heat flows from the bulb to the fuel only until the bridge is balanced, and then the bulb is colder than the fuel"
  ],
  "answer": 0,
  "explanation": "Heat always flows from hot to cold, and the direction depends on the temperature difference, not on the total energy content. Flow stops when the temperatures are equal.",
  "type": "theory"
 },
 {
  "id": "G085",
  "topic": "Heat & Thermodynamics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "heat",
   "temperature"
  ],
  "question": "An engineer reviews test logs from a fuel-cooled hydraulic oil cooler with no other heat source. Fuel flows in at 60°F and hydraulic oil flows in at 150°F. Which logged result is physically impossible or highly suspicious?",
  "options": [
   "Oil leaves the cooler at 110°F and fuel leaves at 90°F",
   "The thermometer bridge for the fuel inlet shows zero galvanometer current when the bulb resistance equals the other three bridge resistances",
   "Fuel leaves the cooler at 200°F while the hottest oil entering is 150°F",
   "Oil leaves the cooler cooler than it entered, and the fuel leaves warmer than it entered"
  ],
  "answer": 2,
  "explanation": "Heat flows only from hot to cold, so the fuel can never be heated above the 150°F of the hottest oil with no other source. A 200°F fuel outlet would need heat to flow from a colder body to a hotter one.",
  "type": "theory"
 },
 {
  "id": "G086",
  "topic": "Heat & Thermodynamics",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "energy",
   "heat"
  ],
  "question": "If the touchdown speed of an aircraft is doubled, and the wheel brakes must absorb all of the kinetic energy as heat, how does the heat the brakes must absorb change? (Same aircraft mass.)",
  "options": [
   "It stays the same, because the mass has not changed",
   "It doubles",
   "It increases by a factor of 4",
   "It increases by a factor of 8"
  ],
  "answer": 2,
  "explanation": "Kinetic energy is (1/2)mv^2, so doubling v multiplies it by 4. Friction in the brakes converts that mechanical energy into heat, so the heat is also 4 times larger.",
  "type": "theory"
 },
 {
  "id": "G087",
  "topic": "Heat & Thermodynamics",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "work",
   "heat"
  ],
  "question": "Which statement about the heat in aircraft wheel brakes after a landing roll is correct?",
  "options": [
   "The heat equals the aircraft weight multiplied by the stopping distance",
   "The energy removed by brake friction is converted to heat in the brake. It is then lost to the surroundings by conduction, convection and radiation",
   "The energy removed by braking is destroyed, so no heat is produced unless the wheels skid",
   "Heat is produced only by electrical energy, so mechanical braking does not heat the brakes"
  ],
  "answer": 1,
  "explanation": "Heat is produced by converting other forms of energy, including mechanical energy through friction. The work is done against the actual braking friction force, not the weight. The brake then cools by conduction, convection and radiation.",
  "type": "theory"
 },
 {
  "id": "G088",
  "topic": "Heat & Thermodynamics",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "work",
   "heat",
   "temperature"
  ],
  "question": "Wheel brakes apply an average retarding force of 20 kN while an aircraft rolls 400 m to a stop. All of the work done becomes heat in a steel brake heat sink of mass 40 kg and specific heat capacity 500 J/(kg·K). Neglecting heat losses during the stop, what is the temperature rise of the heat sink?",
  "options": [
   "40 K",
   "200 K",
   "400 K",
   "800 K"
  ],
  "answer": 2,
  "explanation": "Heat = work = F × d = 20 000 N × 400 m = 8 × 10^6 J. Then ΔT = Q/(m c) = 8 × 10^6 / (40 × 500) = 400 K.",
  "type": "calculation"
 },
 {
  "id": "G089",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "vibration",
   "rotation"
  ],
  "question": "A seven-piston hydraulic pump turns at 3,000 rpm, and each piston delivers one pressure pulse per shaft revolution. Which value is the best estimate of the pressure-pulsation frequency?",
  "options": [
   "About 3.5 Hz",
   "About 35 Hz",
   "About 350 Hz",
   "About 21,000 Hz"
  ],
  "answer": 2,
  "explanation": "3,000 rpm is 50 rev/s, and 7 pulses per revolution gives 7 × 50 = 350 cycles per second, or 350 Hz.",
  "type": "calculation"
 },
 {
  "id": "G090",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "vibration",
   "acceleration"
  ],
  "question": "Treat a fueling nozzle hanging from an overhead hose reel on an 8.05 ft line as a simple pendulum (g = 32.2 ft/s²). About how many complete swings (cycles) does it make in 60 s?",
  "options": [
   "About 38",
   "About 19",
   "About 9.5",
   "About 120"
  ],
  "answer": 1,
  "explanation": "T = 2π sqrt(L/g) = 2π sqrt(8.05/32.2) = 2π(0.5) ≈ 3.14 s, so 60 s ÷ 3.14 s ≈ 19 cycles.",
  "type": "calculation"
 },
 {
  "id": "G091",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "waves",
   "velocity"
  ],
  "question": "On an apron, a tug driver sounds a 490 Hz horn and hears the echo from a hangar wall 0.40 s later. Taking the speed of sound as 343 m/s, how many wavelengths of the horn tone fit in the one-way distance between the tug and the wall?",
  "options": [
   "196",
   "98",
   "49",
   "68.6"
  ],
  "answer": 1,
  "explanation": "Wavelength = 343/490 = 0.70 m. The one-way distance is 343 × 0.40 / 2 = 68.6 m, so 68.6 / 0.70 = 98 wavelengths. Using the full round-trip path gives the distractor 196.",
  "type": "calculation"
 },
 {
  "id": "G092",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "waves",
   "units"
  ],
  "question": "The reversing alarm on a tow tractor has a fundamental tone of 1.715 kHz. Using 343 m/s for the speed of sound, what is the wavelength of its 2nd harmonic, in cm?",
  "options": [
   "20 cm",
   "1.0 cm",
   "10 cm",
   "100 cm"
  ],
  "answer": 2,
  "explanation": "The 2nd harmonic is 2 × 1.715 kHz = 3430 Hz. Then λ = v/f = 343/3430 = 0.10 m = 10 cm. The 20 cm option is the fundamental's wavelength.",
  "type": "calculation"
 },
 {
  "id": "G093",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "waves",
   "velocity"
  ],
  "question": "Ground crews on the ramp use handheld radios transmitting at 120 MHz. Radio waves need no medium and travel at c = 3×10^8 m/s. What is their wavelength?",
  "options": [
   "0.4 m",
   "25 m",
   "0.25 m",
   "2.5 m"
  ],
  "answer": 3,
  "explanation": "Frequency × wavelength = speed of light, so λ = 3×10^8 / 1.2×10^8 = 2.5 m.",
  "type": "calculation"
 },
 {
  "id": "G094",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "waves",
   "vibration"
  ],
  "question": "A tug's warning horn is changed from sounding its fundamental frequency to sounding its 3rd harmonic, in the same still air. What happens to the sound?",
  "options": [
   "The wavelength becomes one-third and the speed of sound stays 343 m/s",
   "The wavelength stays the same and the speed of sound triples",
   "The wavelength triples and the speed of sound stays 343 m/s",
   "Both the wavelength and the speed of sound become one-third"
  ],
  "answer": 0,
  "explanation": "The 3rd harmonic has three times the fundamental frequency. The speed is set by the air (343 m/s), so λ = v/f becomes one-third.",
  "type": "theory"
 },
 {
  "id": "G095",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "hard",
  "units": "SI",
  "keywords": [
   "waves",
   "vibration"
  ],
  "question": "Tow-tractor alarm tests were logged on a calm apron, where sound travels at 343 m/s. Which logged entry is physically suspicious?",
  "options": [
   "Fundamental 343 Hz, wavelength 1.00 m",
   "Fundamental 400 Hz, 2nd harmonic recorded at 800 Hz, wavelength about 0.43 m",
   "Fundamental 200 Hz, 3rd harmonic recorded at 400 Hz, wavelength about 0.86 m",
   "Tone of 686 Hz, wavelength 0.50 m"
  ],
  "answer": 2,
  "explanation": "The 3rd harmonic of a 200 Hz fundamental must be 3 × 200 = 600 Hz, not 400 Hz. The other entries satisfy f × λ = 343 m/s, and the 2nd harmonic entry is correctly 2 × 400 Hz.",
  "type": "theory"
 },
 {
  "id": "G096",
  "topic": "Waves, Sound & Vibration",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "waves",
   "velocity"
  ],
  "question": "Near an overhead chain hoist, the electric motor gives off a steady 150 Hz hum. Sound travels at 1,125 ft/s in the shop air. What is the wavelength of the hum?",
  "options": [
   "7.5 ft",
   "0.13 ft",
   "3.75 ft",
   "168,750 ft"
  ],
  "answer": 0,
  "explanation": "Wavelength = speed / frequency = 1,125 ft/s / 150 Hz = 7.5 ft.",
  "type": "calculation"
 },
 {
  "id": "G097",
  "topic": "Light & Optics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "waves"
  ],
  "question": "During a nacelle inspection, a fiber-optic cable carries the propeller speed sensor signal to the cockpit. Using c = 3×10^8 m/s, which of the following logged results is physically impossible?",
  "options": [
   "Light in the glass core travels at 2.05×10^8 m/s, which gives a refractive index of about 1.46.",
   "The glass core is measured with a refractive index of 0.90, which would mean light travels faster in the core than in vacuum.",
   "The optical power at the cockpit end is lower than at the engine end because of attenuation in the fiber.",
   "A 1,550 nm infrared signal has a frequency of about 1.9×10^14 Hz."
  ],
  "answer": 1,
  "explanation": "Since n = c / v, a refractive index below 1 would require v greater than c, which is impossible. The other three results are consistent with n = 1.46, attenuation, and f = c / wavelength.",
  "type": "theory"
 },
 {
  "id": "G098",
  "topic": "Light & Optics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "velocity",
   "waves"
  ],
  "question": "Engine torque data travel as light pulses through a 30 m fiber-optic run from the engine to the cockpit. The glass core has a refractive index of 1.50 and c = 3×10^8 m/s. What is the delay of a pulse over this run?",
  "options": [
   "100 ns",
   "150 ns",
   "225 ns",
   "1.5 µs"
  ],
  "answer": 1,
  "explanation": "v = c / n = (3×10^8) / 1.5 = 2×10^8 m/s, so t = 30 / (2×10^8) = 1.5×10^-7 s = 150 ns.",
  "type": "calculation"
 },
 {
  "id": "G099",
  "topic": "Light & Optics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "waves",
   "velocity"
  ],
  "question": "A propeller governor monitor sends data through a fiber using a 1,550 nm infrared source. The source is replaced by one with twice the frequency. Which statement is correct, using frequency × wavelength = speed of light?",
  "options": [
   "The vacuum wavelength halves to 775 nm, and the speed of light in vacuum stays 3×10^8 m/s.",
   "The vacuum wavelength doubles to 3,100 nm, and the speed of light in vacuum stays 3×10^8 m/s.",
   "The vacuum wavelength halves to 775 nm, and the speed of light in vacuum doubles.",
   "The vacuum wavelength stays at 1,550 nm, and the speed of light in vacuum doubles."
  ],
  "answer": 0,
  "explanation": "The speed of light in vacuum is constant, so doubling f halves the wavelength (1,550 nm becomes 775 nm). Changing the source frequency does not change c.",
  "type": "theory"
 },
 {
  "id": "G100",
  "topic": "Light & Optics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "velocity",
   "rotation"
  ],
  "question": "Roughly how far does a light pulse travel inside a glass fiber (refractive index about 1.5) during the time a propeller turning at 2,400 rpm makes one revolution? Use c = 186,282 miles per second.",
  "options": [
   "About 31 miles",
   "About 4,700 miles",
   "About 7,000 miles",
   "About 3,100 miles"
  ],
  "answer": 3,
  "explanation": "One revolution takes 60/2,400 = 0.025 s. In the fiber v = 186,282 / 1.5 ≈ 124,200 miles/s, so the distance is about 124,200 × 0.025 ≈ 3,100 miles.",
  "type": "calculation"
 },
 {
  "id": "G101",
  "topic": "Light & Optics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "waves",
   "velocity"
  ],
  "question": "A student says that after a long fiber run past the engine and through several dirty connectors, the signal arrives weaker because attenuation has slowed the light and lowered its frequency. Which statement is correct?",
  "options": [
   "Attenuation lowers the frequency of the light, so the wavelength in the fiber becomes longer.",
   "Attenuation reduces the intensity of the light through scattering and absorption, while its frequency is unchanged and its speed in the core stays c / n.",
   "Attenuation slows the light below c / n, which is why long fibers cause large delays.",
   "Attenuation raises the refractive index of the core, so the light slows down as the signal weakens."
  ],
  "answer": 1,
  "explanation": "Attenuation is a loss of intensity caused by scattering and absorption. The frequency is set by the source and the speed in the core by n (v = c / n), so neither changes.",
  "type": "theory"
 },
 {
  "id": "G102",
  "topic": "Light & Optics",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "force",
   "work"
  ],
  "question": "A fiber-optic break-beam sensor is operated by a lever. The effort arm L is 9 in and the load arm l is 3 in. A shutter on the load end blocks the light across a gap between two fiber ends. If the handle end is pushed 0.6 in, how far does the shutter move?",
  "options": [
   "1.8 in",
   "0.6 in",
   "0.067 in",
   "0.2 in"
  ],
  "answer": 3,
  "explanation": "Movements are in the same ratio as the arms (E·L = R·l, so distance scales with arm length): 0.6 in × (3/9) = 0.2 in.",
  "type": "calculation"
 },
 {
  "id": "G103",
  "topic": "Light & Optics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "rotation",
   "units"
  ],
  "question": "An encoder disc with 60 slots chops a light beam carried by a fiber to a counter. The disc sits on the output shaft of a 3:1 reduction gearbox driven by a motor at 1,800 rpm. What is the time between successive light pulses?",
  "options": [
   "0.556 ms",
   "0.185 ms",
   "1.67 ms",
   "100 ms"
  ],
  "answer": 2,
  "explanation": "Output speed = 1,800/3 = 600 rpm = 10 rev/s, so the pulse frequency is 60 × 10 = 600 Hz and T = 1/f = 1/600 s = 1.67 ms.",
  "type": "calculation"
 },
 {
  "id": "G104",
  "topic": "Light & Optics",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "work",
   "energy"
  ],
  "question": "During a pulley-block load test, load-cell readings travel to a laptop over a fiber-optic data link. The block has 4 supporting rope segments (VR = 4), and the effort is 100 lb in every test. Efficiency = MA / VR × 100%. Which logged load is physically impossible for this block?",
  "options": [
   "300 lb lifted (75% efficiency)",
   "360 lb lifted (90% efficiency)",
   "440 lb lifted (110% efficiency)",
   "200 lb lifted (50% efficiency)"
  ],
  "answer": 2,
  "explanation": "A load of 440 lb gives MA = 4.4 and efficiency 110%. No machine multiplies work, so efficiency cannot exceed 100%, and this entry cannot be real.",
  "type": "theory"
 },
 {
  "id": "G105",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Titanium is used for lightweight pivot pins in control-lever linkages. The most common titanium isotope is written ^48_22 Ti. How many neutrons does one nucleus of this isotope contain?",
  "options": [
   "22",
   "26",
   "48",
   "70"
  ],
  "answer": 1,
  "explanation": "The number of neutrons is N = A - Z = 48 - 22 = 26.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G106",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Suppose a neutral aluminium atom (Z = 13) is compared with a neutral atom whose atomic number is doubled to Z = 26, which is iron, the main element in steel gears. Which statement is correct?",
  "options": [
   "The atom with Z = 26 has twice as many electrons and is a different element",
   "The atom with Z = 26 has twice as many electrons but is still aluminium",
   "The atom with Z = 26 has the same number of electrons but more neutrons",
   "The atom with Z = 26 has half as many electrons and is a different element"
  ],
  "answer": 0,
  "explanation": "The atomic number Z sets the element. A neutral atom has Z electrons, so doubling Z doubles the electrons (13 to 26) and gives a different element.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G107",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "density"
  ],
  "question": "Steel used for gears contains a small amount of carbon, which occurs mainly as carbon-12 with a trace of carbon-14. Which statement about these two isotopes is correct?",
  "options": [
   "Carbon-14 has 14 protons, so it is a different element from carbon-12",
   "Carbon-14 has 2 more neutrons but the same number of protons, and the same number of electrons when neutral",
   "Carbon-14 has 2 more electrons than carbon-12, so it bonds differently",
   "Carbon-14 has the same mass number as carbon-12 but a different atomic number"
  ],
  "answer": 1,
  "explanation": "Isotopes have the same Z (6 protons) and differ only in N: 12 - 6 = 6 neutrons versus 14 - 6 = 8 neutrons. A neutral atom has 6 electrons in both cases.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G108",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Corrosion on an aluminium pulley sheave produces Al^3+ ions from the isotope ^27_13 Al, each of which has lost three electrons. For one such ion, what is the number of neutrons plus the number of electrons?",
  "options": [
   "17",
   "24",
   "27",
   "30"
  ],
  "answer": 1,
  "explanation": "Neutrons: N = A - Z = 27 - 13 = 14. Electrons: 13 - 3 = 10. The sum is 14 + 10 = 24.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G109",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "density"
  ],
  "question": "Estimate the fraction of the mass of one neutral ^27_13 Al atom in an aluminium gear that is carried by its 13 electrons. An electron is roughly 1/1800 as massive as a proton or neutron. Which order of magnitude is correct?",
  "options": [
   "About 48%, because 13 of the 27 particles are electrons",
   "About 10%",
   "About 1%",
   "Well under 0.1%"
  ],
  "answer": 3,
  "explanation": "The electron mass is about 13/1800 of one nucleon mass, compared with 27 nucleon masses in the nucleus. The fraction is 13/(27 × 1800), about 0.03%, so nearly all the mass is in the nucleus.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G110",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Brass fittings in a fuel line contain zinc. A lab report describes one zinc nucleus only by its mass number A = 64 and its neutron count N = 34. How many electrons does the neutral atom have?",
  "options": [
   "34",
   "64",
   "98",
   "30"
  ],
  "answer": 3,
  "explanation": "Z = A - N = 64 - 34 = 30 protons, and a neutral atom has as many electrons as protons, so it has 30 electrons.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G111",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Tin solder is used on a fuel-quantity probe connector. For a neutral ^120_50 Sn atom, what is the total number of particles (protons + neutrons + electrons)?",
  "options": [
   "120",
   "170",
   "220",
   "100"
  ],
  "answer": 1,
  "explanation": "N = A - Z = 120 - 50 = 70 neutrons. With 50 protons and 50 electrons the total is 70 + 50 + 50 = 170.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G112",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Copper tubing in a hydraulic line contains an isotope of copper (Z = 29) whose nucleus has 36 neutrons. What is its mass number A?",
  "options": [
   "65",
   "36",
   "29",
   "94"
  ],
  "answer": 0,
  "explanation": "A = Z + N = 29 + 36 = 65, so the isotope is ^65_29 Cu.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G113",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Which entry in a materials report for a hydraulic pump housing is physically impossible?",
  "options": [
   "Iron: Z = 26, N = 30",
   "Carbon: Z = 6, N = 8",
   "Copper: Z = 29, N = 34",
   "Iron: Z = 26, A = 20"
  ],
  "answer": 3,
  "explanation": "N = A - Z = 20 - 26 = -6, and a nucleus cannot have a negative number of neutrons; the other entries give A = 56, 14 and 63.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G114",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Hydraulic pump parts contain iron atoms with 28 neutrons (^54 Fe) and iron atoms with 30 neutrons (^56 Fe). Which statement is correct?",
  "options": [
   "They are different elements because their mass numbers differ.",
   "They are isotopes of the same element: both have 26 protons but different numbers of neutrons.",
   "They have the same number of neutrons but different numbers of protons.",
   "They are the same element only if their mass numbers are equal."
  ],
  "answer": 1,
  "explanation": "The element is fixed by the atomic number Z (26 protons); atoms with the same Z but different N are isotopes of that element.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G115",
  "topic": "Other",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "During a metallurgy review of a titanium landing gear beam (Z = 22), an analyst lists four entries for neutral atoms. Which entry is inconsistent and should be rejected?",
  "options": [
   "^46_22 Ti: 22 protons, 24 neutrons, 22 electrons",
   "^50_22 Ti: 22 protons, 28 neutrons, 22 electrons",
   "^49_22 Ti: 22 protons, 27 neutrons, 26 electrons",
   "^48_22 Ti: 22 protons, 26 neutrons, 22 electrons"
  ],
  "answer": 2,
  "explanation": "A neutral atom has as many electrons as protons (Z = 22), so 26 electrons is impossible for a neutral Ti atom. The other entries satisfy N = A - Z with 22 electrons.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G116",
  "topic": "Other",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Hard chromium plating protects the piston rod of a landing gear strut. Chromium has atomic number Z = 24. How many neutrons are in the nucleus of the isotope ^53 Cr?",
  "options": [
   "24",
   "77",
   "53",
   "29"
  ],
  "answer": 3,
  "explanation": "N = A - Z = 53 - 24 = 29 neutrons.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G117",
  "topic": "Other",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Corrosion on a titanium torque-link fitting on a landing gear produces ions written as ^48_22 Ti^4+ (the ion has lost 4 electrons). How many particles in total (protons + neutrons + electrons) does one such ion contain?",
  "options": [
   "70",
   "74",
   "66",
   "44"
  ],
  "answer": 2,
  "explanation": "Protons = 22, neutrons = 48 - 22 = 26, electrons = 22 - 4 = 18. The total is 22 + 26 + 18 = 66.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G118",
  "topic": "Other",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Magnesium alloy wheels are used on some landing gear. Consider the magnesium isotope ^24_12 Mg. Suppose, hypothetically, that both its number of protons and its number of neutrons were doubled. Which statement describes the resulting neutral atom?",
  "options": [
   "A = 48, 24 electrons, and it would be a different element (chromium, Z = 24)",
   "A = 48, 12 electrons, and it would still be magnesium",
   "A = 24, 24 electrons, and it would be a different element",
   "A = 36, 18 electrons, and it would be an isotope of magnesium"
  ],
  "answer": 0,
  "explanation": "Doubling Z to 24 and N to 24 gives A = 48. A neutral atom then has 24 electrons, and since Z decides the element, it is no longer magnesium.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G119",
  "topic": "Other",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Nickel is an alloying element in high-strength landing gear steel. For a neutral ^58_28 Ni atom, roughly how many electrons are there for each nucleon (proton or neutron) in the nucleus?",
  "options": [
   "About 2 electrons per nucleon",
   "About 1 electron per nucleon",
   "About 0.01 electrons per nucleon",
   "About 0.5 electrons per nucleon (roughly one for every two nucleons)"
  ],
  "answer": 3,
  "explanation": "Electrons = Z = 28 and nucleons = A = 58, so the ratio is 28/58, which is about 0.5.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G120",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "If the number of protons in every atom of an aluminium lever arm (^27_13 Al) were doubled, what would the atoms become?",
  "options": [
   "A different element, iron (Z = 26), with 26 electrons when neutral",
   "Still aluminium, but a heavier isotope with A = 54",
   "Still aluminium, but with 26 electrons",
   "A different element with Z = 13 but 26 neutrons"
  ],
  "answer": 0,
  "explanation": "The proton count Z defines the element, so Z = 26 is no longer aluminium. It is iron, and a neutral atom has as many electrons as protons, which is 26.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G121",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "For a rough count, a steel gear shaft is made of ^56_26 Fe atoms. Adding the protons, neutrons and electrons in one neutral atom, which is the best order-of-magnitude estimate of the total number of particles?",
  "options": [
   "About 8",
   "About 80",
   "About 800",
   "About 8000"
  ],
  "answer": 1,
  "explanation": "Nucleons number A = 56 (26 protons + 30 neutrons) and there are 26 electrons, giving 56 + 26 = 82 particles, which is about 80.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G122",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Inspection data for a sample from an aluminium pulley block (^27_13 Al) list one atom with 13 protons, 14 neutrons and 15 electrons, and the report calls it a neutral atom. What is the correct conclusion?",
  "options": [
   "The data are fine, because the number of electrons does not have to match the number of protons",
   "The data are impossible, because aluminium cannot have 14 neutrons",
   "The data are inconsistent for a neutral atom; 15 electrons with 13 protons would be an aluminium ion with two extra electrons",
   "The sample must be a different element, because it has 15 electrons"
  ],
  "answer": 2,
  "explanation": "A neutral atom has electrons = Z = 13. Having 15 electrons means the atom has gained two electrons (an ion), but the element is still aluminium because Z = 13.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G123",
  "topic": "Units & Conversions",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units",
   "weight"
  ],
  "question": "A steel pulley sheave has a mass of 2.2 lb and a steel lever bar has a mass of 1.0 kg (take 1 kg = 2.2 lb). Nearly all the mass of an atom is in its nucleus. Which is the best estimate of the combined mass contained in the atomic nuclei of both parts?",
  "options": [
   "About 3.2 kg, found by adding 2.2 and 1.0",
   "About 1.0 kg, because the electrons carry about half of the mass",
   "Almost zero, because the nuclei are tiny compared with the electron cloud",
   "About 2.0 kg (4.4 lb), because the sheave is also about 1.0 kg and nearly all the mass is in the nuclei"
  ],
  "answer": 3,
  "explanation": "2.2 lb is about 1.0 kg, so the total is about 2.0 kg (4.4 lb). Since nearly all the atomic mass is in the nucleus, the nuclei hold almost all of it.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G124",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "A bronze bushing in a pulley block contains copper atoms of the isotope ^65_29 Cu. How many neutrons are in the nucleus of one such atom?",
  "options": [
   "29",
   "36",
   "65",
   "94"
  ],
  "answer": 1,
  "explanation": "N = A - Z = 65 - 29 = 36 neutrons.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G125",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "weight"
  ],
  "question": "When rust forms on a jack's steel ram, some iron atoms lose three electrons and become Fe^3+ ions. Which statement is correct?",
  "options": [
   "The atom becomes a different element because its number of electrons has changed.",
   "The atom loses most of its mass, because electrons carry nearly all of an atom's mass.",
   "The number of protons drops by three to balance the lost electrons.",
   "The atom is still iron, because the number of protons Z is unchanged; it is now an ion."
  ],
  "answer": 3,
  "explanation": "The element is fixed by the atomic number Z (protons). Losing electrons makes an ion, not a new element. Nearly all the mass is in the nucleus, so the mass barely changes.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G126",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "SI",
  "keywords": [
   "units"
  ],
  "question": "Corrosion on an aluminum jack bracket produces Al^3+ ions from the isotope ^27_13 Al. How many protons, neutrons and electrons does one of these ions contain?",
  "options": [
   "13 protons, 14 neutrons, 10 electrons",
   "13 protons, 14 neutrons, 13 electrons",
   "10 protons, 14 neutrons, 13 electrons",
   "13 protons, 14 neutrons, 16 electrons"
  ],
  "answer": 0,
  "explanation": "Protons = Z = 13 and neutrons N = A - Z = 27 - 13 = 14. The 3+ ion has lost 3 electrons, so it has 13 - 3 = 10 electrons.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G127",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Roughly how many electrons are in a 2 lb steel hoist hook? Treat it as pure neutral iron, ^56_26 Fe, and take the hook to contain about 1 x 10^25 atoms.",
  "options": [
   "1 x 10^25 electrons",
   "2.6 x 10^26 electrons",
   "5.6 x 10^26 electrons",
   "2.6 x 10^24 electrons"
  ],
  "answer": 1,
  "explanation": "A neutral iron atom has Z = 26 electrons, so the total is 26 x 10^25 = 2.6 x 10^26. Using A = 56 would count nucleons, not electrons.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G128",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Copper terminal lugs on a workshop bench are crimped onto wires. One copper atom in a lug is the isotope ^63_29 Cu. How many neutrons are in its nucleus?",
  "options": [
   "63",
   "29",
   "34",
   "92"
  ],
  "answer": 2,
  "explanation": "N = A - Z = 63 - 29 = 34 neutrons.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G129",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units",
   "weight"
  ],
  "question": "Fuel of 2.0 lb is burned completely in a shop test burner with 112 oz of oxygen. All of the fuel and oxygen end up as exhaust gases. What is the total mass of the exhaust in lb?",
  "options": [
   "114 lb",
   "5.0 lb",
   "9.0 lb",
   "7.0 lb"
  ],
  "answer": 2,
  "explanation": "Mass is conserved. 112 oz = 112/16 = 7.0 lb of oxygen, so the exhaust mass is 2.0 + 7.0 = 9.0 lb.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G130",
  "topic": "Matter & Atomic Structure",
  "difficulty": "easy",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "While checking a materials record for iron (Z = 26) used in tool steel, you see four entries. Which one is physically impossible?",
  "options": [
   "A neutral ^56_26 Fe atom with 30 electrons",
   "An ^54_26 Fe atom with 28 neutrons",
   "A neutral ^56_26 Fe atom with 26 electrons",
   "An ^56_26 Fe ion with 24 electrons"
  ],
  "answer": 0,
  "explanation": "A neutral atom has as many electrons as protons, so neutral iron has 26 electrons, not 30. Having 24 electrons just means the atom is an ion.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G131",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "density"
  ],
  "question": "Which statement about a neutral atom in a steel wrench is correct?",
  "options": [
   "The nucleus fills most of the atom's volume, so the atom is mostly nucleus.",
   "Nearly all the atom's mass is in the tiny nucleus, while the electrons determine its chemical behavior.",
   "Most of the atom's mass is in the electrons, because they move around the nucleus.",
   "The neutrons set the element and the chemical bonding, because they are in the nucleus."
  ],
  "answer": 1,
  "explanation": "The small, dense nucleus of protons and neutrons holds nearly all the mass, and the electrons decide bonding. The element is fixed by Z, the number of protons.",
  "type": "theory",
  "lesson": "2026-10-14"
 },
 {
  "id": "G132",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Consider, as a thought experiment, a carbon atom ^12_6 C in a steel file whose number of neutrons is doubled while its number of protons stays the same. What is the new mass number, and is it still carbon?",
  "options": [
   "A = 24, and it is still carbon",
   "A = 18, and it is still carbon",
   "A = 18, and it becomes a different element",
   "A = 12, and it is still carbon"
  ],
  "answer": 1,
  "explanation": "The original N = 12 - 6 = 6. Doubling gives N = 12, so A = Z + N = 6 + 12 = 18. Z is unchanged, so it is still carbon, a different isotope.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G133",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "units"
  ],
  "question": "Nickel plating on a landing gear brake component contains Ni^2+ ions of the isotope ^58_28 Ni. How many more neutrons than electrons does one such ion have?",
  "options": [
   "2",
   "4",
   "30",
   "32"
  ],
  "answer": 1,
  "explanation": "Neutrons: N = A - Z = 58 - 28 = 30. The ion has lost two electrons, so it has 28 - 2 = 26 electrons. The difference is 30 - 26 = 4.",
  "type": "calculation",
  "lesson": "2026-10-14"
 },
 {
  "id": "G134",
  "topic": "Matter & Atomic Structure",
  "difficulty": "hard",
  "units": "imperial",
  "keywords": [
   "weight",
   "units"
  ],
  "question": "Inside a sealed steel can, 1 lb 12 oz of liquid solvent is heated until all of it has turned to vapor. The empty can with its lid has a mass of 14 oz, and nothing escapes. What is the total mass of the can plus its contents after all the solvent has evaporated?",
  "options": [
   "2.00 lb",
   "2.625 lb",
   "1.75 lb",
   "1.89 lb"
  ],
  "answer": 1,
  "explanation": "Mass is conserved when a liquid turns to gas in a sealed can. Total = 1 lb 12 oz + 14 oz = 28 oz + 14 oz = 42 oz = 2.625 lb, since 1 lb = 16 oz.",
  "type": "calculation",
  "lesson": "2026-10-14"
 }
];
