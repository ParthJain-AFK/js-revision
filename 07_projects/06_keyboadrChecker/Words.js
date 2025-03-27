const wordsStartingWithA = [
    "abandon", "abate", "aberration", "abhor", "abide", "abjure", "ablution", "abnegation", "abrogate", "abscond",
    "absolve", "abstain", "abstruse", "abundant", "abysmal", "accede", "accolade", "accretion", "acerbic", "acme",
    "acquiesce", "acrimonious", "acumen", "adamant", "adept", "adhere", "admonish", "adroit", "adulation", "adversity",
    "aegis", "aesthetic", "affable", "affinity", "aggrandize", "aggregate", "agile", "alacrity", "alchemy", "allege",
    "alleviate", "allude", "aloof", "altruism", "amalgamate", "ambiguous", "ambivalent", "ameliorate", "amenable", "amiable",
    "amorphous", "anachronistic", "analogous", "anarchy", "anathema", "ancillary", "anecdote", "animosity", "annex", "annihilate",
    "anomaly", "antagonist", "antediluvian", "anthology", "antipathy", "antiquated", "apathetic", "apocryphal", "apotheosis", "appease",
    "apprehensive", "approbation", "arbitrary", "arcane", "archaic", "ardent", "arduous", "arid", "aristocrat", "arrogate",
    "ascertain", "ascetic", "aspersion", "assiduous", "assuage", "astute", "asylum", "atavistic", "attenuate", "audacious",
    "augment", "auspicious", "austere", "autonomous", "avarice", "aversion", "avid", "avuncular", "axiom", "azure"
,
    "baffle", "baleful", "balk", "ballad", "banal", "bane", "banter", "baroque", "barrage", "bastion",
    "bawdy", "beatific", "bedlam", "befuddle", "behemoth", "belie", "belligerent", "bemused", "benevolent", "benign",
    "bequeath", "berate", "bereft", "berserk", "beseech", "besmirch", "bestow", "betrothed", "bewilder", "bifurcate",
    "bilateral", "bilk", "bipartisan", "blasphemy", "blatant", "blithe", "bombastic", "boon", "boorish", "bourgeois",
    "braggart", "brandish", "brevity", "brusque", "buccaneer", "buffoon", "bulwark", "bumptious", "bungalow", "buoyant",
    "bureaucracy", "burgeon", "burlesque", "burnish", "buttress", "byzantine", "babble", "backlash", "backslide", "bailiwick",
    "balderdash", "ballast", "balm", "bamboozle", "bandy", "bane", "banish", "bard", "barrage", "bask",
    "bastion", "bathetic", "bauble", "bawdy", "beatitude", "beckon", "bedraggled", "befogged", "beget", "begrudge",
    "beguile", "behemoth", "belabor", "belated", "beleaguer", "bellicose", "bellwether", "bemoan", "bemuse", "benefactor",
    "beneficent", "benevolence", "benighted", "benignity", "bequeath", "berth", "beseech", "beset", "besiege", "besmirch"
,
    "cabal", "cabbage", "cabin", "cabinet", "cable", "cactus", "cadence", "cajole", "calamity", "caliber",
    "callous", "calm", "calumny", "camaraderie", "campaign", "candid", "candor", "canine", "canny", "canvas",
    "capacious", "capacity", "capitulate", "capricious", "captivate", "caravan", "carbon", "cardinal", "carefree", "caress",
    "caricature", "carnage", "carnival", "carouse", "carpenter", "cascade", "casual", "cataclysm", "catalog", "catapult",
    "catastrophe", "catechism", "categorical", "caterpillar", "cathartic", "cathedral", "caucus", "cauldron", "causal", "caution",
    "cavalier", "cavern", "cavity", "celebrate", "celestial", "censor", "censure", "ceramic", "ceremonial", "certainty",
    "certify", "cessation", "chagrin", "challenge", "chamber", "champion", "chaos", "charade", "charisma", "charitable",
    "charming", "chastise", "chatoyant", "chauvinist", "cheerful", "cherish", "chicanery", "chimera", "chivalry", "choleric",
    "choreograph", "chronicle", "chrysalis", "chuckle", "circuitous", "circumference", "circumspect", "circumvent", "clairvoyant", "clamorous",
    "clandestine", "clarify", "classical", "claustrophobia", "clemency", "clergy", "cliché", "clientele", "climactic", "cloister",
    "coalesce", "coercion", "cogent", "cognizant",

    "dabble", "dainty", "dalliance", "dapper", "dauntless", "dawdle", "dearth", "debacle", "debilitate", "debunk",
    "decadent", "decipher", "decorum", "deduce", "defamation", "deferential", "defiance", "defunct", "degradation", "deleterious",
    "deliberate", "delineate", "deluge", "demagogue", "demeanor", "demure", "denounce", "depict", "deplete", "deplore",
    "depravity", "deprecate", "derelict", "deride", "derivative", "desolate", "despondent", "destitute", "deteriorate", "deterrent",
    "detrimental", "deviate", "devious", "dexterous", "diaphanous", "diatribe", "dichotomy", "dictate", "didactic", "diffident",
    "digress", "dilapidated", "diligent", "diminish", "diminutive", "disarray", "discern", "discreet", "disdain", "disgruntled",
    "disheveled", "disillusion", "disingenuous", "disparate", "dispel", "disrepute", "disseminate", "dissent", "dissipate", "dissonance",
    "dissuade", "distend", "divergent", "divulge", "docile", "dogmatic", "dormant", "dour", "dubious", "duplicity",
    "durable", "dwindle", "dysfunction", "dystopia", "dactylology", "daedal", "daisy", "dalliance", "damask", "dander",
    "dandle", "dank", "dapper", "dapple", "darbies", "daredevil", "darkle", "darnel", "dartle", "dastard",
    "dawdle", "daze", "dearth", "debacle",

    "ebullient", "eccentric", "eclectic", "ecstasy", "edification", "efface", "effervescent", "efficacious", "effigy", "effulgent",
    "egregious", "elaborate", "elated", "elicit", "eloquence", "elucidate", "elusive", "emaciated", "emanate", "embellish",
    "embezzle", "emend", "eminent", "emissary", "emollient", "empirical", "enamored", "encapsulate", "encomium", "encroach",
    "encumber", "endearing", "endemic", "endow", "enervate", "engender", "engross", "enhance", "enigma", "enmity",
    "ennui", "enrapture", "ensconce", "enthrall", "entice", "entourage", "entreat", "enunciate", "ephemeral", "epicure",
    "epitaph", "epithet", "epitome", "equanimity", "equivocal", "eradicate", "erratic", "erudite", "eschew", "esoteric",
    "espouse", "esteem", "ethereal", "etymology", "eulogize", "euphemism", "euphoria", "evanescent", "evoke", "exacerbate",
    "exacting", "exalt", "exasperate", "excavate", "exculpate", "execrable", "exemplary", "exhilarate", "exhort", "exigent",
    "exonerate", "exorbitant", "expedite", "explicit", "exponential", "expound", "expunge", "extant", "extemporaneous", "extenuate",
    "extol", "extraneous", "extricate", "exuberant", "exult", "ebbtide", "ebonize", "ebullience", "eccentricity", "ecclesiastical",
    "echelon", "echinate", "eclat", "eclecticism",

    "fabric", "face", "fact", "factor", "factory", "faculty", "fail", "faint", "fair", "faith",
    "fall", "false", "fame", "familiar", "family", "famous", "fan", "fancy", "far", "farm",
    "farmer", "fashion", "fast", "fat", "fate", "father", "fault", "favor", "favorite", "fear",
    "feature", "federal", "fee", "feed", "feel", "feeling", "fellow", "female", "fence", "festival",
    "few", "fiber", "fiction", "field", "fierce", "fight", "figure", "file", "fill", "film",
    "final", "finance", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish",
    "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flesh",
    "flight", "float", "flood", "floor", "flour", "flow", "flower", "fluid", "fly", "focus",
    "fold", "folk", "follow", "food", "foot", "football", "for", "force", "forecast", "foreign",
    "forest", "forever", "forget", "forgive", "fork", "form", "formal", "format", "former", "formula",

    "gain", "gallon", "game", "gap", "garage", "garbage", "garden", "garlic", "gas", "gate",
    "gather", "gauge", "general", "generate", "generation", "generous", "genius", "gentle", "genuine", "geography",
    "geometry", "gesture", "get", "ghost", "giant", "gift", "giggle", "girl", "give", "glad",
    "glance", "glass", "global", "globe", "gloom", "glory", "glove", "glow", "glue", "go",
    "goal", "goat", "god", "gold", "golden", "golf", "good", "goodbye", "goods", "goose",
    "gorilla", "gospel", "gossip", "govern", "government", "governor", "gown", "grab", "grace", "grade",
    "gradual", "graduate", "grain", "grand", "grant", "grape", "graph", "graphic", "grasp", "grass",
    "grateful", "grave", "gravity", "gray", "great", "green", "greet", "grief", "grill", "grim",
    "grin", "grind", "grip", "grocery", "gross", "ground", "group", "grow", "growth", "guarantee",
    "habit", "habitat", "hair", "half", "hall", "halt", "hammer", "hand", "handle", "handsome",
    "hang", "happen", "happy", "harbor", "hard", "hardware", "harm", "harmony", "harsh", "harvest",
    "hat", "hate", "haul", "have", "hazard", "he", "head", "headline", "headquarters", "heal",
    "health", "healthy", "hear", "heart", "heat", "heaven", "heavy", "heel", "height", "heir",
    "helicopter", "hell", "hello", "helmet", "help", "hence", "her", "herb", "here", "heritage",
    "hero", "hers", "herself", "hesitate", "hey", "hide", "high", "highlight", "highway", "hike",
    "hill", "him", "himself", "hint", "hip", "hire", "his", "historian", "historic", "history",
    "hit", "hobby", "hold", "hole", "holiday", "hollow", "holy", "home", "honest", "honey",
    "honor", "hope", "horizon", "hormone", "horn", "horror", "horse", "hospital", "host", "hotel",

    "ice", "idea", "ideal", "identify", "identity", "ignore", "ill", "illegal", "illness", "illustrate",
    "image", "imagine", "immediate", "impact", "implement", "implication", "imply", "import", "important", "impose",
    "impossible", "impress", "impression", "improve", "improvement", "impulse", "in", "incentive", "incident", "include",
    "income", "increase", "incredible", "indeed", "independence", "independent", "index", "indicate", "individual", "industrial",
    "industry", "inevitable", "infant", "infect", "infer", "infinite", "influence", "inform", "information", "ingredient",
    "inhabit", "inherit", "initial", "initiative", "injury", "inner", "innocent", "input", "inquiry", "insight",
    "insist", "inspect", "inspire", "install", "instance", "instant", "instead", "instinct", "institute", "institution",
    "instruction", "instrument", "insult", "insurance", "intact", "integrate", "integrity", "intellectual", "intelligence", "intend",
    "intense", "intensity", "intent", "intention", "interaction", "interest", "interfere", "interior", "internal", "international",

    "jacket", "jail", "jam", "jar", "jargon", "jaw", "jealous", "jeans", "jelly", "jewel",
    "jewelry", "job", "join", "joint", "joke", "journal", "journey", "joy", "judge", "judgment",
    "juice", "jump", "jungle", "junior", "junk", "jury", "just", "justice", "justify", "juvenile",
    "jackal", "jaguar", "jamboree", "janitor", "jasmine", "jaunt", "javelin", "jawbone", "jaywalk", "jeopardy",
    "jersey", "jest", "jigsaw", "jitter", "jockey", "jocular", "jogger", "jolly", "jostle", "jovial",
    "jubilee", "judicial", "juggernaut", "juicy", "jumble", "jumbo", "junction", "juncture", "jungle", "juniper",
    "junket", "juror", "justice", "justifiable", "juvenescence", "juxtapose", "juxtaposition", "jackknife", "jackpot", "jargonize",
    "jaundice", "jauntily", "jeering", "jejune", "jellyfish", "jeopardize", "jeremiad", "jettison", "jigsaw", "jingling",
    "jinx", "jitney", "jobbery", "jocose", "jocund", "jogging", "johnnycake", "jointure", "jollity", "jostling",
    "jounce", "journalese", "journeyman", "joviality", "joyride", "jubilation", "judicious", "jugglery", "juiciness", "jujitsu",

    "kangaroo", "karate", "keen", "keep", "kettle", "key", "keyboard", "kick", "kid", "kidney",
    "kill", "kiln", "kilo", "kilogram", "kilometer", "kin", "kind", "king", "kingdom", "kiss",
    "kit", "kitchen", "kite", "kitten", "knack", "knee", "kneel", "knight", "knit", "knob",
    "knock", "knot", "know", "knowledge", "knuckle", "koala", "kudos", "kaleidoscope", "kaput", "karst",
    "kayak", "keel", "keenly", "keeper", "kennel", "kerchief", "kernel", "kerosene", "kestrel", "ketch",
    "kettle", "keyhole", "keystone", "khaki", "kibbutz", "kibosh", "kickback", "kickoff", "kidnap", "kidney",
    "killjoy", "kilobyte", "kilowatt", "kimono", "kindergarten", "kindle", "kindness", "kinetic", "kinfolk", "kingfisher",
    "kingpin", "kiosk", "kismet", "kitchenette", "kiteboard", "kittenish", "kleptomania", "knapsack", "knavery", "kneecap",
    "knighthood", "knitwear", "knobbly", "knockabout", "knockout", "knothole", "knotty", "knowable", "knowhow", "knuckleball",
    "koan", "kookaburra", "kosher", "kowtow", "kraut", "kremlin", "krill", "kudos", "kumquat", "kvetch",

    "label", "labor", "ladder", "lady", "lake", "lamp", "land", "language", "laptop", "large",
    "last", "late", "laugh", "launch", "law", "lawn", "lawsuit", "layer", "lazy", "leader",
    "leaf", "learn", "lease", "leather", "leave", "lecture", "left", "legal", "legend", "leisure",
    "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liberty", "library",
    "license", "life", "lift", "light", "lightning", "like", "limb", "limit", "line", "linguistics",
    "link", "lion", "liquid", "list", "listen", "literature", "little", "live", "liver", "lizard",
    "load", "loan", "lobby", "local", "location", "lock", "log", "logic", "logo", "look",
    "loop", "loose", "lord", "lose", "loss", "lost", "lot", "loud", "love", "loyal",
    "luck", "luggage", "lumber", "lunar", "lunch", "lung", "luxury", "lyric", "labyrinth", "laconic",
    "lament", "lampoon", "languid", "languish", "lank", "larceny", "larder", "largess", "lascivious", "lassitude",

    "machine", "mad", "magazine", "magic", "magnet", "mail", "main", "maintain", "major", "make",
    "male", "mall", "man", "manage", "mandate", "manner", "manual", "manufacture", "many", "map",
    "marble", "march", "margin", "marine", "market", "marriage", "marry", "mask", "mass", "master",
    "match", "material", "math", "matter", "maximum", "maybe", "mayor", "meal", "mean", "measure",
    "meat", "mechanic", "media", "medicine", "medium", "meet", "melody", "melt", "member", "memory",
    "mention", "menu", "merchant", "mercy", "merge", "merit", "merry", "message", "metal", "method",
    "middle", "might", "mild", "military", "milk", "million", "mind", "mine", "mineral", "minimum",
    "minister", "minor", "minute", "miracle", "mirror", "miss", "mission", "mistake", "mix", "mixture",
    "mobile", "mode", "model", "moderate", "modern", "modest", "modify", "moment", "money", "monitor",
    "month", "mood", "moon", "moral", "more", "morning", "mortgage", "most", "mother", "motion",

    "nail", "name", "narrow", "nation", "native", "natural", "nature", "near", "nearly", "neat",
    "necessary", "neck", "need", "negative", "neglect", "negotiate", "neighbor", "neither", "nerve", "nervous",
    "nest", "net", "network", "neutral", "never", "nevertheless", "new", "news", "newspaper", "next",
    "nice", "night", "nine", "no", "noble", "nobody", "nod", "noise", "nominate", "none",
    "nonetheless", "noon", "nor", "normal", "normally", "north", "northern", "nose", "not", "note",
    "notebook", "nothing", "notice", "notion", "noun", "novel", "november", "now", "nowhere", "nuclear",
    "number", "numerous", "nurse", "nut", "nutrition", "nylon", "narrate", "narrative", "narrowly", "nationality",
    "navigation", "negligence", "negligent", "negligible", "neighborhood", "neon", "neutrality", "neutron", "newcomer", "newly",
    "newsworthy", "nickname", "nightmare", "nineteen", "ninety", "ninth", "nobleman", "nobility", "noisy", "nomination",

    "o'clock", "oath", "obdurate", "obey", "object", "objection", "objective", "observation", "observe", "obsessive",
    "obtain", "obvious", "occasion", "occupation", "occupy", "occur", "ocean", "October", "odd", "odds",
    "off", "offend", "offense", "offer", "office", "officer", "official", "often", "oil", "okay",
    "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "onto",
    "open", "operate", "operation", "operator", "opinion", "opponent", "opportunity", "oppose", "opposite", "opposition",
    "option", "or", "orange", "orbit", "orchestra", "order", "ordinary", "organ", "organic", "organization",
    "organize", "origin", "original", "other", "otherwise", "ought", "our", "ourselves", "out", "outcome",
    "outside", "oven", "over", "overall", "overcome", "overlook", "owe", "own", "owner", "oxygen",
    "oasis", "obese", "obituary", "oblivion", "obscure", "obsolete", "obstacle", "obstruct", "obtainable", "obtrusive",

    "p.m.", "pace", "pack", "package", "pad", "page", "pain", "paint", "painter", "pair",
    "pale", "palm", "pan", "panel", "panic", "pants", "paper", "parade", "paragraph", "parallel",
    "parent", "park", "part", "participant", "participate", "particular", "particularly", "partly", "partner", "party",
    "pass", "passage", "passenger", "passion", "past", "patch", "path", "patient", "pattern", "pause",
    "pay", "payment", "peace", "peak", "peer", "pen", "penalty", "pencil", "people", "pepper",
    "per", "perceive", "percentage", "perception", "perfect", "perfectly", "perform", "performance", "perhaps", "period",
    "permanent", "permission", "permit", "person", "personal", "personality", "personally", "personnel", "perspective", "persuade",
    "pet", "phase", "phenomenon", "philosophy", "phone", "photo", "photograph", "photographer", "phrase", "physical",
    "physically", "physician", "physics", "piano", "pick", "picture", "pie", "piece", "pile", "pilot",

    "quack", "quadrangle", "quadrant", "quadrilateral", "quadruple", "quagmire", "quail", "quaint", "quake", "qualification",
    "qualified", "qualify", "quality", "quantify", "quantitative", "quantity", "quarantine", "quark", "quarrel", "quarry",
    "quarter", "quarterback", "quarterly", "quartet", "quartz", "quasar", "quash", "quasi", "quatrain", "quaver",
    "quay", "queasy", "quebec", "queen", "queer", "quell", "quench", "querulous", "query", "quest",
    "question", "questionable", "questionnaire", "queue", "quibble", "quiche", "quick", "quicken", "quickly", "quicksand",
    "quicksilver", "quid", "quiescent", "quiet", "quietly", "quill", "quilt", "quinine", "quintessential", "quintet",
    "quintuple", "quip", "quirk", "quirky", "quit", "quite", "quiver", "quixotic", "quiz", "quizzical",
    "quorum", "quota", "quotable", "quotation", "quote", "quoth", "quran", "quasar", "quintessence", "quintillion",
    "quintuplet", "quixotism", "quod", "quokka", "quondam", "quintain", "quintal", "quintuple", "quintuplicate", "quintillionth",
    "quintuplicate", "quintuple", "quintessence", "quintessential", "quintet", "quintuplet", "quintillion", "quintillionth", "quintuple", "quintuplet",

    "rabbi", "rabbit", "rabble", "rabid", "race", "racecourse", "racehorse", "racetrack", "racial", "racing",
    "racism", "racist", "rack", "racket", "racketeer", "racy", "radar", "radial", "radiance", "radiant",
    "radiate", "radiation", "radiator", "radical", "radio", "radioactive", "radioactivity", "radiocarbon", "radiologist", "radiology",
    "radish", "radius", "raffle", "raft", "ragged", "raging", "raid", "rail", "railcar", "railroad",
    "railway", "rain", "rainbow", "raincoat", "raindrop", "rainfall", "rainforest", "raining", "rainstorm", "rainwater",
    "raise", "raisin", "rake", "rally", "ramble", "ramp", "rampage", "rampant", "ramshackle", "ranch",
    "rancher", "random", "randomly", "range", "ranger", "rank", "ranking", "ransack", "ransom", "rant",
    "rapacious", "rape", "rapid", "rapidity", "rapidly", "rapier", "rapport", "rapprochement", "rapscallion", "rapt",
    "raptor", "rapture", "rare", "rarely", "rarity", "rascal", "rash", "rasp", "raspberry", "ratchet",
    "rate", "rather", "ratify", "rating", "ratio", "rationale", "rational", "rationalism", "rationalist", "rationality",
    "sabotage", "sabre", "sac", "saccharin", "sack", "sacrament", "sacred", "sacrifice", "sacrificial", "sacrilege",
    "sacrilegious", "sacristy", "sacrosanct", "sad", "sadden", "saddle", "sadism", "sadist", "sadistic", "sadly",
    "sadness", "safari", "safe", "safeguard", "safekeeping", "safety", "saffron", "sag", "saga", "sage",
    "saggy", "sail", "sailboat", "sailing", "sailor", "saint", "saintly", "sake", "salad", "salamander",
    "salary", "sale", "salesman", "salesperson", "saleswoman", "salient", "saline", "saliva", "sallow", "salmon",
    "salon", "saloon", "salt", "saltwater", "salty", "salute", "salvage", "salvation", "salve", "salvo",
    "same", "sample", "sampling", "sanatorium", "sanctify", "sanction", "sanctity", "sanctuary", "sandal", "sandbank",
    "sandcastle", "sandalwood", "sandbag", "sandblast", "sandbox", "sandcastle", "sandpaper", "sandpit", "sandstone", "sandstorm",
    "sandwich", "sandy", "sane", "sang", "sanguine", "sanitary", "sanitation", "sanity", "sank", "sap",
    "sapling", "sapphire", "sarcasm", "sarcastic", "sarcoma", "sardine", "sardonic", "sari", "sarong", "sash",
    "table", "tactful", "tactless", "tail", "take", "takeoff", "talent", "talk", "tall", "tank",
    "tap", "tape", "target", "task", "taste", "tax", "taxi", "tea", "teach", "teacher",
    "team", "teammate", "tear", "technical", "technique", "technology", "teen", "teenager", "telephone", "television",
    "tell", "temperature", "temporary", "ten", "tend", "tendency", "tennis", "tense", "tension", "tent",
    "term", "terminal", "terminate", "terrible", "territory", "terror", "test", "text", "textbook", "thank",
    "thanks", "theater", "theft", "theme", "themselves", "theory", "therapist", "therapy", "therefore", "thesis",
    "thick", "thin", "thing", "think", "third", "thirsty", "thirty", "this", "thorough", "though",
    "thought", "thousand", "thread", "threat", "threaten", "three", "threshold", "thrift", "thrill", "thrive",
    "throat", "throne", "through", "throughout", "throw", "thumb", "thunder", "Thursday", "thus", "ticket",
    "tide", "tie", "tight", "tile", "till", "timber", "time", "timely", "timetable", "timid",
    "ubiquitous", "ugly", "ulterior", "ultimate", "umbrella", "unanimous", "unaware", "uncertain", "uncle", "uncomfortable",
    "uncommon", "unconscious", "under", "undergo", "undergraduate", "undermine", "understand", "understanding", "undertake", "unemployment",
    "unexpected", "unfair", "unfold", "unfortunate", "unfortunately", "unhappy", "uniform", "unify", "union", "unique",
    "unit", "unite", "united", "unity", "universal", "universe", "university", "unknown", "unless", "unlike",
    "unlikely", "unlimited", "unload", "unlock", "unnecessary", "unpleasant", "unprecedented", "unpredictable", "unravel", "unrest",
    "unsafe", "unsatisfactory", "unskilled", "unsuccessful", "unsuitable", "unsure", "untidy", "until", "unusual", "unveil",
    "unwilling", "upbeat", "update", "upgrade", "uphold", "upkeep", "uplift", "upon", "upper", "upright",
    "uprising", "uproar", "upset", "upside", "upstairs", "upstream", "uptake", "uptight", "urban", "urge",
    "urgent", "usage", "useful", "useless", "user", "usual", "usually", "utensil", "utility", "utilize",
    "utmost", "utopia", "utter", "utterance", "utterly", "uxorious", "ubiquity", "uglify", "ulcer", "ultra",
    "vacant", "vacate", "vacation", "vaccine", "vacuum", "vagabond", "vague", "vain", "valiant", "valid",
    "validate", "valley", "valor", "valuable", "value", "vanish", "vanity", "vapid", "variable", "variant",
    "variation", "varied", "variety", "various", "varnish", "vary", "vase", "vast", "vault", "vector",
    "vegetable", "vegetarian", "vegetation", "vehicle", "veil", "vein", "velocity", "velvet", "vendor", "veneer",
    "venerable", "venerate", "vengeance", "venison", "venom", "vent", "ventilate", "venture", "venue", "veracity",
    "verbal", "verdict", "verge", "verify", "veritable", "vernacular", "versatile", "verse", "version", "versus",
    "vertical", "very", "vessel", "vest", "vestige", "veteran", "veto", "viable", "vibrant", "vibrate",
    "vibration", "vice", "vicinity", "vicious", "victim", "victor", "victory", "video", "view", "viewer",
    "vigilant", "vigor", "vigorous", "vile", "village", "villain", "vindicate", "vine", "vintage", "violate",
    "violation", "violence", "violent", "violet", "violin", "virtual", "virtue", "virtuous", "virus", "visa",

    "wage", "waist", "wait", "waiter", "waiting", "waive", "wake", "walk", "wall", "wallet",
    "wander", "want", "war", "warm", "warmth", "warn", "warning", "wash", "waste", "watch",
    "water", "wave", "way", "we", "weak", "wealth", "weapon", "wear", "weather", "wedding",
    "week", "weekend", "weekly", "weigh", "weight", "welcome", "welfare", "well", "west", "western",
    "wet", "what", "whatever", "wheel", "when", "whenever", "where", "whereas", "whether", "which",
    "while", "whisper", "white", "who", "whole", "whom", "whose", "why", "wide", "widely",
    "widespread", "wife", "wild", "will", "willing", "win", "wind", "window", "wine", "wing",
    "winner", "winter", "wipe", "wire", "wisdom", "wise", "wish", "with", "withdraw", "within",
    "without", "witness", "woman", "wonder", "wonderful", "wood", "wooden", "word", "work", "worker",
    "working", "works", "workshop", "world", "worried", "worry", "worth", "would", "wound", "wrap" ,

    "xenon", "xerox", "xylophone", "xenophobic", "xylophonist", "xenogenesis", "xerophilous", "xenograft", "xerophyte", "xenolith",
    "xenotropic", "xerothermic", "xenotransplant", "xerostomia", "xenogamy", "xerarch", "xenogeny", "xeroderma", "xenophile", "xeric",
    "xenotropic", "xerophyte", "xenolith", "xerothermic", "xenotransplant", "xerostomia", "xenogamy", "xerarch", "xenogeny", "xeroderma",
    "xenophile", "xeric", "xenotropic", "xerophyte", "xenolith", "xerothermic", "xenotransplant", "xerostomia", "xenogamy", "xerarch",
    "xenogeny", "xeroderma", "xenophile", "xeric", "xenotropic", "xerophyte", "xenolith", "xerothermic", "xenotransplant", "xerostomia",
    "xenogamy", "xerarch", "xenogeny", "xeroderma", "xenophile", "xeric", "xenotropic", "xerophyte", "xenolith", "xerothermic",
    "xenotransplant", "xerostomia", "xenogamy", "xerarch", "xenogeny", "xeroderma", "xenophile", "xeric", "xenotropic", "xerophyte",
    "xenolith", "xerothermic", "xenotransplant", "xerostomia", "xenogamy", "xerarch", "xenogeny", "xeroderma", "xenophile", "xeric",
    "xenotropic", "xerophyte", "xenolith", "xerothermic", "xenotransplant", "xerostomia", "xenogamy", "xerarch", "xenogeny", "xeroderma",
    "xenophile", "xeric", "xenotropic", "xerophyte", "xenolith", "xerothermic", "xenotransplant", "xerostomia", "xenogamy", "xerarch",
    "yacht", "yard", "yarn", "year", "yearn", "yell", "yellow", "yes", "yesterday", "yet",
    "yield", "young", "your", "yours", "yourself", "youth", "yummy", "yawn", "yoga", "yogurt",
    "yonder", "youthful", "yahoo", "yardstick", "yearbook", "yearling", "yearly", "yearnful", "yeast", "yodel",
    "yokel", "yolk", "yonderly", "yore", "you", "youngster", "yourselves", "youthfully", "yowl", "yucca",
    "yule", "yuppie", "yurt", "ywis", "yellowish", "yellowtail", "yellowwood", "yeoman", "yeomanly", "yeomanry",
    "yesteryear", "yippee", "yodeler", "yoga", "yogic", "yogini", "yogurt", "yokemate", "yokefellow", "yokeless",
    "yokelish", "yokewise", "yolked", "yolkless", "yonderward", "yoretime", "yottabyte", "youngling", "youngly", "youngness",
    "yourselves", "youthen", "youthhead", "youthhood", "youthily", "youthiness", "youthquake", "youthsome", "youthward", "youthy",
    "yowley", "yttriferous", "yttrious", "yttrium", "yttrium", "yttriums", "yttrous", "yuckel", "yuckelish", "yuckiness",
    "yucky", "yulan", "yule", "yuletide", "yummily", "yumminess", "yummy", "yuppify", "yuppy", "yurt",
    "zebra", "zeal", "zealous", "zenith", "zephyr", "zest", "zigzag", "zillion", "zinc", "zipper",
    "zodiac", "zombie", "zone", "zoology", "zucchini", "zygote", "zymurgy", "zany", "zap", "zealot",
    "zebrawood", "zen", "zeppelin", "zero", "zestful", "zig", "zing", "zinnia", "zircon", "zither",
    "zodiacal", "zombiism", "zonal", "zonation", "zonked", "zoo", "zookeeper", "zoologist", "zoom", "zooplankton",
    "zoospore", "zootomy", "zori", "zoster", "zounds", "zucchini", "zulu", "zwitterion", "zydeco", "zygoma",
    "zygomorphic", "zygomorphy", "zygosity", "zygospore", "zygotic", "zymase", "zymogen", "zymology", "zymome", "zymosan",
    "zymoscope", "zymosis", "zymosterol", "zymurgy", "zyzzyva", "zabaglione", "zaffer", "zaibatsu", "zakuska", "zamarra",
    "zamboni", "zamindar", "zaniness", "zany", "zapateado", "zappiest", "zappy", "zarzuela", "zax", "zealful",
    "zealotism", "zealotry", "zealousness", "zeatin", "zebraic", "zebrass", "zebrassette", "zebrine", "zebroid", "zebrule",
    "zebu", "zecchin", "zed", "zedoary", "zelkova", "zemindar", "zemstvo", "zenana", "zend", "zenithal",
];

// use the array above to complete 07.html and then add a button to 06 and 07 .html file. allowing user to navigate between pages

let allPressedKey = [];
window.addEventListener('keydown', (e) => {
    e.stopPropagation()
    e.preventDefault()

    const key = e.key // e.key.toLocaleUpperCase();
    const keyC = e.code;
    console.log(e.code, 'e.code');
    console.log(key, 'e.key');

    let pressedKey;
    let mappedKey;

    const keyMap = {
        " ": "Spacebar", // Space key
        "ControlLeft": "LeftControl",
        "ControlRight": "RightControl",
        "CapsLock": "CapsLock",
        "ShiftLeft": "LeftShift",
        "ShiftRight": "ShiftRight",
        "AltLeft": "AltLeft",
        "AltRight": "AltRight",
        "Semicolon": "Semicolon",
    };


    if (keyC in keyMap) {
        mappedKey = keyMap[keyC];

    } else if (keyMap[key]) {
        mappedKey = keyMap[key];

    } else {
        mappedKey = keyC;

    }



    allPressedKey.push(e.key)
    const showkey = document.querySelector('.keyPressed');
    showkey.innerHTML = `<p className="history">${allPressedKey.join(' ')}</p>`;

    console.log(showkey);


    pressedKey = document.getElementById(mappedKey);
    if (pressedKey) {
        pressedKey.style.background = 'magenta';
        pressedKey.style.color = 'white';
    }


});


window.addEventListener('keyup', (e) => {
    console.log(e.code, 'e.code');
    console.log(e.key, 'e.key');

    if (e.code === "PrintScreen") {
        console.log(e.code);
        document.getElementById('PrintScreen').style.backgroundColor = 'magenta'
        document.getElementById('PrintScreen').style.color = 'white'
        e.preventDefault();
    }
});