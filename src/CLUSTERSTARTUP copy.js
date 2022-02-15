
const getImage = img => {
  const image = new Image();
  image.src = `${img}`;
  return image;
};

const data = {
  nodes: [
    {
      id: "0",
      link: "https://www.bauindustrie-bayern.de/",
      fillcolor: "#00016B", //rgb(0, 255, 0)
      isClusterNode: true,
      name: "StartUp's",
      rel_cluster_size: 22.0,
      cluster_size: 33
    },
    {
      id: "1",
      fillcolor: "#2C65BF",
      isClusterNode: true,
      isParagraph: true,
      name: "Ingenieure &",
      nameP: "Projekt mgmt.",
      rel_cluster_size: 11.0,
      cluster_size: 33
    },
    {
      cluster_id: "1",
      id: "Alasco",
      name: "Alasco",
      img: getImage("./images/test.png"),
      rank: 0.006128326587162951,
      location: "Deutschland",
      fillcolor: "#2C65BF",
      link: "https://www.alasco.de/",
      degrees: 1400
    },
    
    {
      cluster_id: "1",
      id: "Sablono",
      name: "Sablono",
      img: getImage("/images/test.png"),
      rank: 0.006128326587162951,
      location: "Deutschland",
      fillcolor: "#2C65BF",
      link: "https://www.sablono.com/",
      degrees: 1600
    },
    {
      cluster_id: "1",
      id: "LandTech",
      name: "LandTech",
      img: getImage("/images/test.png"),
      rank: 0.005676080905103744,
      location: "Deutschland",
      fillcolor: "#2C65BF",
      link: "https://land.tech/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Digital Engineering Solutions",
      name: "Digital Engineering Solutions",
      img: getImage("/images/test.png"),
      rank: 0.0034158013061813784,
      location: "Polen",
      fillcolor: "#2C65BF",
      link: "https://de-solutions.info/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "PlanRadar",
      name: "PlanRadar",
      img: getImage("/images/test.png"),
      rank: 0.0032567280515781232,
      location: "Österreich",
      fillcolor: "#2C65BF",
      link: "https://www.planradar.com/de/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Alice Technologies",
      name: "Alice Technologies",
      img: getImage("/images/test.png"),
      rank: 0.003117809292823006,
      location: "USA",
      fillcolor: "#2C65BF",
      link: "https://www.alicetechnologies.com/home",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "swino",
      name: "swino",
      img: getImage("/images/test.png"),
      rank: 0.002917780318579891,
      location: "Schweiz",
      fillcolor: "#2C65BF",
      link: "https://smino.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "GBuilder",
      name: "GBuilder",
      img: getImage("./images/test.png"),
      rank: 0.0024551430646664175,
      location: "Finnland",
      fillcolor: "#2C65BF",
      link: "https://gbuilder.com/de/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "CAPMO",
      name: "CAPMO",
      img: getImage("/images/test.png"),
      rank: 0.0024267579643031077,
      location: "Deutschland",
      fillcolor: "#2C65BF",
      link: "https://www.capmo.com/de/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Scaled Robotics",
      name: "Scaled Robotics",
      img: getImage("/images/test.png"),
      rank: 0.001792477960243676,
      location: "Spanien",
      fillcolor: "#2C65BF",
      link: "https://scaledrobotics.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "SWAPP",
      name: "SWAPP",
      img: getImage("/images/test.png"),
      rank: 0.0014703448884418133,
      location: "Israel",
      fillcolor: "#2C65BF",
      link: "https://www.swapp.net/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Novade",
      name: "Novade",
      img: getImage("/images/test.png"),
      rank: 0.0014067462913841425,
      location: "Singapur",
      fillcolor: "#2C65BF",
      link: "https://www.novade.net/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Nodes & Links",
      name: "Nodes & Links",
      img: getImage("/images/test.png"),
      rank: 0.0013236119852794678,
      location: "England",
      fillcolor: "#2C65BF",
      link: "https://www.nodeslinks.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Buildots",
      name: "Buildots",
      img: getImage("/images/test.png"),
      rank: 0.0013120980729219797,
      location: "Isreal",
      fillcolor: "#2C65BF",
      link: "https://buildots.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "VU.CITY",
      name: "VU.CITY",
      img: getImage("/images/test.png"),
      rank: 0.0012073983196932965,
      location: "England",
      fillcolor: "#2C65BF",
      link: "https://vu.city/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "testfit",
      name: "testfit",
      img: getImage("/images/test.png"),
      rank: 0.0011364177330698132,
      location: "USA",
      fillcolor: "#2C65BF",
      link: "https://testfit.io/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "buildingradar",
      name: "buildingradar",
      img: getImage("/images/test.png"),
      rank: 0.001118100513661404,
      location: "Deutschland",
      fillcolor: "#2C65BF",
      link: "https://buildingradar.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "process",
      name: "process",
      img: getImage("/images/test.png"),
      rank: 0.001102016048700778,
      location: "Deutschland",
      fillcolor: "#2C65BF",
      link: "https://buildingradar.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Propster",
      name: "Propster",
      img: getImage("/images/test.png"),
      rank: 0.0008781068487482841,
      location: "Österreich",
      fillcolor: "#2C65BF",
      link: "https://propster.tech/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Bulldozair",
      name: "Bulldozair",
      img: getImage("/images/test.png"),
      rank: 0.0008580352499509854,
      location: "Frankreich",
      fillcolor: "#2C65BF",
      link: "https://www.bulldozair.com/",
      degrees: 1200
    },
    
    {
      id: "2",
      fillcolor: "#071B50",
      isClusterNode: true,
      isParagraph: true,
      name: "Vergabe &",
      nameP: "Konstruktion",
      rel_cluster_size: 8.666666666666666,
      cluster_size: 26
    },
    {
      cluster_id: "2",
      id: "area",
      name: "area",
      rank: 0.0042925759622244085,
      degrees: 52
    },
    {
      cluster_id: "2",
      id: "work",
      name: "work",
      rank: 0.003697155796584208,
      degrees: 39
    },
    {
      cluster_id: "2",
      id: "space",
      name: "space",
      rank: 0.003559838671116629,
      degrees: 40
    },
    {
      cluster_id: "2",
      id: "etc",
      name: "etc",
      rank: 0.002872714657792725,
      degrees: 17
    },
    {
      cluster_id: "2",
      id: "place",
      name: "place",
      rank: 0.0022559541449563543,
      degrees: 26
    },
    {
      cluster_id: "2",
      id: "public",
      name: "public",
      rank: 0.002120655464999742,
      degrees: 33
    },
    {
      cluster_id: "2",
      id: "way",
      name: "way",
      rank: 0.0018126358438913682,
      degrees: 26
    },
    {
      cluster_id: "2",
      id: "private",
      name: "private",
      rank: 0.0015587842976087746,
      degrees: 22
    },
    {
      cluster_id: "2",
      id: "available",
      name: "available",
      rank: 0.0014118318821684456,
      degrees: 19
    },
    {
      cluster_id: "2",
      id: "currently",
      name: "currently",
      rank: 0.0013943568193390517,
      degrees: 12
    },
    {
      cluster_id: "2",
      id: "social",
      name: "social",
      rank: 0.0013194532607881523,
      degrees: 22
    },
    {
      cluster_id: "2",
      id: "affordability",
      name: "affordability",
      rank: 0.0012903950695549054,
      degrees: 19
    },
    {
      cluster_id: "2",
      id: "individual",
      name: "individual",
      rank: 0.001074486066376247,
      degrees: 12
    },
    {
      cluster_id: "2",
      id: "care",
      name: "care",
      rank: 0.0009636631118320567,
      degrees: 13
    },
    {
      cluster_id: "2",
      id: "outside",
      name: "outside",
      rank: 0.0008327066375551184,
      degrees: 8
    },
    {
      cluster_id: "2",
      id: "health",
      name: "health",
      rank: 0.0008104487788279386,
      degrees: 9
    },
    {
      cluster_id: "2",
      id: "quality",
      name: "quality",
      rank: 0.0007891703995841135,
      degrees: 15
    },
    {
      cluster_id: "2",
      id: "day",
      name: "day",
      rank: 0.0007648601153706948,
      degrees: 9
    },
    {
      cluster_id: "2",
      id: "source",
      name: "source",
      rank: 0.0007385023729992138,
      degrees: 5
    },
    {
      cluster_id: "2",
      id: "volunteer",
      name: "volunteer",
      rank: 0.0006778205632132275,
      degrees: 3
    },
    {
      cluster_id: "2",
      id: "sector",
      name: "sector",
      rank: 0.0006347238469565776,
      degrees: 11
    },
    {
      cluster_id: "2",
      id: "investment",
      name: "investment",
      rank: 0.0006344324598323271,
      degrees: 19
    },
    {
      cluster_id: "2",
      id: "death",
      name: "death",
      rank: 0.0006273897809840992,
      degrees: 2
    },
    {
      cluster_id: "2",
      id: "bank",
      name: "bank",
      rank: 0.0006182921492677392,
      degrees: 5
    },
    {
      cluster_id: "2",
      id: "good",
      name: "good",
      rank: 0.000609196634945775,
      degrees: 20
    },
    {
      cluster_id: "2",
      id: "hate",
      name: "hate",
      rank: 0.0005946904863069159,
      degrees: 5
    },
    {
      id: "3",
      fillcolor: "#55CCF4",
      isClusterNode: true,
      name: "Baumaschinen",
      rel_cluster_size: 12.666666666666666,
      cluster_size: 38
    },
    {
      cluster_id: "3",
      id: "home",
      name: "home",
      rank: 0.01046736307182641,
      degrees: 148
    },
    {
      cluster_id: "3",
      id: "unit",
      name: "unit",
      rank: 0.005348289200228546,
      degrees: 72
    },
    {
      cluster_id: "3",
      id: "family",
      name: "family",
      rank: 0.005089337904407591,
      degrees: 68
    },
    {
      cluster_id: "3",
      id: "suite",
      name: "suite",
      rank: 0.0026042001932058165,
      degrees: 33
    },
    {
      cluster_id: "3",
      id: "co",
      name: "co",
      rank: 0.0024870360394715924,
      degrees: 42
    },
    {
      cluster_id: "3",
      id: "exist",
      name: "exist",
      rank: 0.0024054804293446265,
      degrees: 54
    },
    {
      cluster_id: "3",
      id: "permit",
      name: "permit",
      rank: 0.0018990652305137575,
      degrees: 15
    },
    {
      cluster_id: "3",
      id: "include",
      name: "include",
      rank: 0.0017760916113226397,
      degrees: 31
    },
    {
      cluster_id: "3",
      id: "single",
      name: "single",
      rank: 0.0016551609961962806,
      degrees: 28
    },
    {
      cluster_id: "3",
      id: "room",
      name: "room",
      rank: 0.0016351182748503838,
      degrees: 27
    },
    {
      cluster_id: "3",
      id: "facility",
      name: "facility",
      rank: 0.0015442773339676681,
      degrees: 18
    },
    {
      cluster_id: "3",
      id: "lot",
      name: "lot",
      rank: 0.0015247622608858156,
      degrees: 26
    },
    {
      cluster_id: "3",
      id: "living",
      name: "living",
      rank: 0.0014666980126206088,
      degrees: 30
    },
    {
      cluster_id: "3",
      id: "large",
      name: "large",
      rank: 0.00138421214546743,
      degrees: 31
    },
    {
      cluster_id: "3",
      id: "number",
      name: "number",
      rank: 0.0013354094167406384,
      degrees: 30
    },
    {
      cluster_id: "3",
      id: "secondary",
      name: "secondary",
      rank: 0.0011993336596113726,
      degrees: 16
    },
    {
      cluster_id: "3",
      id: "urban",
      name: "urban",
      rank: 0.0010954920294487355,
      degrees: 12
    },
    {
      cluster_id: "3",
      id: "child",
      name: "child",
      rank: 0.0010924667795299853,
      degrees: 13
    },
    {
      cluster_id: "3",
      id: "add",
      name: "add",
      rank: 0.0009743343076067844,
      degrees: 15
    },
    {
      cluster_id: "3",
      id: "renovate",
      name: "renovate",
      rank: 0.0009541708776815344,
      degrees: 13
    },
    {
      cluster_id: "3",
      id: "funding",
      name: "funding",
      rank: 0.000939318667371718,
      degrees: 16
    },
    {
      cluster_id: "3",
      id: "upgrade",
      name: "upgrade",
      rank: 0.0009191598277905842,
      degrees: 9
    },
    {
      cluster_id: "3",
      id: "couple",
      name: "couple",
      rank: 0.0009115509477096752,
      degrees: 11
    },
    {
      cluster_id: "3",
      id: "standard",
      name: "standard",
      rank: 0.000900083271951102,
      degrees: 13
    },
    {
      cluster_id: "3",
      id: "bridge",
      name: "bridge",
      rank: 0.0008533050689583273,
      degrees: 7
    },
    {
      cluster_id: "3",
      id: "come",
      name: "come",
      rank: 0.0008517386793546476,
      degrees: 9
    },
    {
      cluster_id: "3",
      id: "condition",
      name: "condition",
      rank: 0.0008404628355359313,
      degrees: 13
    },
    {
      cluster_id: "3",
      id: "additional",
      name: "additional",
      rank: 0.0008008316868480681,
      degrees: 15
    },
    {
      cluster_id: "3",
      id: "size",
      name: "size",
      rank: 0.0007683227508202471,
      degrees: 14
    },
    {
      cluster_id: "3",
      id: "repair",
      name: "repair",
      rank: 0.000756563671197582,
      degrees: 3
    },
    {
      cluster_id: "3",
      id: "read",
      name: "read",
      rank: 0.0007448145083410692,
      degrees: 11
    },
    {
      cluster_id: "3",
      id: "vulnerable",
      name: "vulnerable",
      rank: 0.0007406161995302539,
      degrees: 11
    },
    {
      cluster_id: "3",
      id: "parking",
      name: "parking",
      rank: 0.0006812656978601132,
      degrees: 4
    },
    {
      cluster_id: "3",
      id: "structure",
      name: "structure",
      rank: 0.0006545523506544306,
      degrees: 12
    },
    {
      cluster_id: "3",
      id: "maintenance",
      name: "maintenance",
      rank: 0.0006391129336113497,
      degrees: 10
    },
    {
      cluster_id: "3",
      id: "improve",
      name: "improve",
      rank: 0.0006217024830547798,
      degrees: 13
    },
    {
      cluster_id: "3",
      id: "plus",
      name: "plus",
      rank: 0.0006052714512310334,
      degrees: 10
    },
    {
      cluster_id: "3",
      id: "economic",
      name: "economic",
      rank: 0.0005995047515773711,
      degrees: 7
    },
    {
      id: "4",
      fillcolor: "#0218AC",
      isClusterNode: true,
      isParagraph: true,
      name: "Bausysteme &",
      nameP: "Baustoffe",
      rel_cluster_size: 15.333333333333334,
      cluster_size: 46
    },
    {
      cluster_id: "4",
      id: "rent",
      name: "rent",
      rank: 0.008746035576714743,
      degrees: 123
    },
    {
      cluster_id: "4",
      id: "affordable",
      name: "affordable",
      rank: 0.005923725638974821,
      degrees: 83
    },
    {
      cluster_id: "4",
      id: "build",
      name: "build",
      rank: 0.004908263018400133,
      degrees: 85
    },
    {
      cluster_id: "4",
      id: "new",
      name: "new",
      rank: 0.004689384632736601,
      degrees: 84
    },
    {
      cluster_id: "4",
      id: "building",
      name: "building",
      rank: 0.004522848897620551,
      degrees: 76
    },
    {
      cluster_id: "4",
      id: "need",
      name: "need",
      rank: 0.004496205780160409,
      degrees: 84
    },
    {
      cluster_id: "4",
      id: "house",
      name: "house",
      rank: 0.0032575767681323523,
      degrees: 60
    },
    {
      cluster_id: "4",
      id: "increase",
      name: "increase",
      rank: 0.0030317010403932768,
      degrees: 54
    },
    {
      cluster_id: "4",
      id: "developer",
      name: "developer",
      rank: 0.002244632512105981,
      degrees: 47
    },
    {
      cluster_id: "4",
      id: "require",
      name: "require",
      rank: 0.001802901052218228,
      degrees: 40
    },
    {
      cluster_id: "4",
      id: "development",
      name: "development",
      rank: 0.0017742371096512728,
      degrees: 24
    },
    {
      cluster_id: "4",
      id: "smoke",
      name: "smoke",
      rank: 0.0016223610094635475,
      degrees: 16
    },
    {
      cluster_id: "4",
      id: "household",
      name: "household",
      rank: 0.0015925870405303552,
      degrees: 17
    },
    {
      cluster_id: "4",
      id: "purpose",
      name: "purpose",
      rank: 0.0015422242861376702,
      degrees: 26
    },
    {
      cluster_id: "4",
      id: "design",
      name: "design",
      rank: 0.0015028441483247398,
      degrees: 16
    },
    {
      cluster_id: "4",
      id: "mortgage",
      name: "mortgage",
      rank: 0.0013910524512628858,
      degrees: 14
    },
    {
      cluster_id: "4",
      id: "purchase",
      name: "purchase",
      rank: 0.0013767009218013516,
      degrees: 25
    },
    {
      cluster_id: "4",
      id: "stock",
      name: "stock",
      rank: 0.001316614809737473,
      degrees: 28
    },
    {
      cluster_id: "4",
      id: "especially",
      name: "especially",
      rank: 0.0011994207220094469,
      degrees: 16
    },
    {
      cluster_id: "4",
      id: "shaughnessy",
      name: "shaughnessy",
      rank: 0.0011813896913417763,
      degrees: 16
    },
    {
      cluster_id: "4",
      id: "condo",
      name: "condo",
      rank: 0.0011394241645934537,
      degrees: 27
    },
    {
      cluster_id: "4",
      id: "close",
      name: "close",
      rank: 0.0010609451834015144,
      degrees: 22
    },
    {
      cluster_id: "4",
      id: "bedroom",
      name: "bedroom",
      rank: 0.0010505979750256383,
      degrees: 18
    },
    {
      cluster_id: "4",
      id: "apartment",
      name: "apartment",
      rank: 0.0010349525879583203,
      degrees: 22
    },
    {
      cluster_id: "4",
      id: "tear",
      name: "tear",
      rank: 0.000999405048456351,
      degrees: 15
    },
    {
      cluster_id: "4",
      id: "control",
      name: "control",
      rank: 0.000969314611191312,
      degrees: 21
    },
    {
      cluster_id: "4",
      id: "supply",
      name: "supply",
      rank: 0.0009513154174018707,
      degrees: 13
    },
    {
      cluster_id: "4",
      id: "actually",
      name: "actually",
      rank: 0.0009501007938112096,
      degrees: 20
    },
    {
      cluster_id: "4",
      id: "certain",
      name: "certain",
      rank: 0.0009426876319571819,
      degrees: 14
    },
    {
      cluster_id: "4",
      id: "staff",
      name: "staff",
      rank: 0.0008978196207827627,
      degrees: 14
    },
    {
      cluster_id: "4",
      id: "daycare",
      name: "daycare",
      rank: 0.0008854891616434863,
      degrees: 12
    },
    {
      cluster_id: "4",
      id: "old",
      name: "old",
      rank: 0.000884979190753156,
      degrees: 20
    },
    {
      cluster_id: "4",
      id: "site",
      name: "site",
      rank: 0.0008816821807726108,
      degrees: 18
    },
    {
      cluster_id: "4",
      id: "great",
      name: "great",
      rank: 0.0008313583860303913,
      degrees: 19
    },
    {
      cluster_id: "4",
      id: "class",
      name: "class",
      rank: 0.0008272627593603093,
      degrees: 5
    },
    {
      cluster_id: "4",
      id: "incentive",
      name: "incentive",
      rank: 0.0007964933885733181,
      degrees: 20
    },
    {
      cluster_id: "4",
      id: "heritage",
      name: "heritage",
      rank: 0.0007595619448725505,
      degrees: 11
    },
    {
      cluster_id: "4",
      id: "decade",
      name: "decade",
      rank: 0.0007365750235457053,
      degrees: 13
    },
    {
      cluster_id: "4",
      id: "inthe",
      name: "inthe",
      rank: 0.0007247573936932378,
      degrees: 12
    },
    {
      cluster_id: "4",
      id: "encourage",
      name: "encourage",
      rank: 0.0006677118544064943,
      degrees: 17
    },
    {
      cluster_id: "4",
      id: "act",
      name: "act",
      rank: 0.0006642346005193863,
      degrees: 5
    },
    {
      cluster_id: "4",
      id: "world",
      name: "world",
      rank: 0.000652410718423075,
      degrees: 3
    },
    {
      cluster_id: "4",
      id: "construction",
      name: "construction",
      rank: 0.0006378600518590521,
      degrees: 12
    },
    {
      cluster_id: "4",
      id: "grocery",
      name: "grocery",
      rank: 0.0006323982389077736,
      degrees: 5
    },
    {
      cluster_id: "4",
      id: "lose",
      name: "lose",
      rank: 0.0006173486586811474,
      degrees: 13
    },
    {
      cluster_id: "4",
      id: "financial",
      name: "financial",
      rank: 0.00060301483052814,
      degrees: 11
    },
    {
      id: "5",
      fillcolor: "#4F75A2",
      isClusterNode: true,
      name: "Bautechnologie",
      rel_cluster_size: 11.0,
      cluster_size: 33
    },
    {
      cluster_id: "5",
      id: "city",
      name: "city",
      rank: 0.011023531289674876,
      degrees: 150
    },
    {
      cluster_id: "5",
      id: "resident",
      name: "resident",
      rank: 0.002896883191032499,
      degrees: 55
    },
    {
      cluster_id: "5",
      id: "fund",
      name: "fund",
      rank: 0.002783729239371409,
      degrees: 52
    },
    {
      cluster_id: "5",
      id: "provide",
      name: "provide",
      rank: 0.0026162974138508777,
      degrees: 71
    },
    {
      cluster_id: "5",
      id: "renter",
      name: "renter",
      rank: 0.0023417462747837383,
      degrees: 39
    },
    {
      cluster_id: "5",
      id: "small",
      name: "small",
      rank: 0.0018764897485041873,
      degrees: 37
    },
    {
      cluster_id: "5",
      id: "use",
      name: "use",
      rank: 0.0016775537417781665,
      degrees: 34
    },
    {
      cluster_id: "5",
      id: "service",
      name: "service",
      rank: 0.0015379159438776704,
      degrees: 16
    },
    {
      cluster_id: "5",
      id: "benefit",
      name: "benefit",
      rank: 0.0014984151719625797,
      degrees: 26
    },
    {
      cluster_id: "5",
      id: "revenue",
      name: "revenue",
      rank: 0.001474688162066299,
      degrees: 26
    },
    {
      cluster_id: "5",
      id: "homes",
      name: "homes",
      rank: 0.0013645711115011297,
      degrees: 24
    },
    {
      cluster_id: "5",
      id: "free",
      name: "free",
      rank: 0.0012948287191078007,
      degrees: 30
    },
    {
      cluster_id: "5",
      id: "loan",
      name: "loan",
      rank: 0.0012649304356317673,
      degrees: 20
    },
    {
      cluster_id: "5",
      id: "future",
      name: "future",
      rank: 0.0012512367115999777,
      degrees: 14
    },
    {
      cluster_id: "5",
      id: "end",
      name: "end",
      rank: 0.001231662365600412,
      degrees: 17
    },
    {
      cluster_id: "5",
      id: "street",
      name: "street",
      rank: 0.0011897877850764551,
      degrees: 8
    },
    {
      cluster_id: "5",
      id: "temporary",
      name: "temporary",
      rank: 0.0011679197174071852,
      degrees: 26
    },
    {
      cluster_id: "5",
      id: "business",
      name: "business",
      rank: 0.0011171031151449996,
      degrees: 24
    },
    {
      cluster_id: "5",
      id: "current",
      name: "current",
      rank: 0.0010813553836846186,
      degrees: 19
    },
    {
      cluster_id: "5",
      id: "citizen",
      name: "citizen",
      rank: 0.0010800475140708202,
      degrees: 10
    },
    {
      cluster_id: "5",
      id: "tiny",
      name: "tiny",
      rank: 0.0010620488168619523,
      degrees: 18
    },
    {
      cluster_id: "5",
      id: "interest",
      name: "interest",
      rank: 0.0010155397245218375,
      degrees: 16
    },
    {
      cluster_id: "5",
      id: "big",
      name: "big",
      rank: 0.0009544638297239637,
      degrees: 7
    },
    {
      cluster_id: "5",
      id: "let",
      name: "let",
      rank: 0.0008193154832246992,
      degrees: 17
    },
    {
      cluster_id: "5",
      id: "accommodation",
      name: "accommodation",
      rank: 0.0007920702686981109,
      degrees: 11
    },
    {
      cluster_id: "5",
      id: "local",
      name: "local",
      rank: 0.0007439828193589265,
      degrees: 14
    },
    {
      cluster_id: "5",
      id: "run",
      name: "run",
      rank: 0.0007354740818827688,
      degrees: 16
    },
    {
      cluster_id: "5",
      id: "challenge",
      name: "challenge",
      rank: 0.0007151067578622419,
      degrees: 2
    },
    {
      cluster_id: "5",
      id: "mean",
      name: "mean",
      rank: 0.0006891544164263922,
      degrees: 14
    },
    {
      cluster_id: "5",
      id: "pedestrian",
      name: "pedestrian",
      rank: 0.0006798269382641439,
      degrees: 9
    },
    {
      cluster_id: "5",
      id: "situation",
      name: "situation",
      rank: 0.0006765295432308,
      degrees: 6
    },
    {
      cluster_id: "5",
      id: "meet",
      name: "meet",
      rank: 0.0006388441642085915,
      degrees: 14
    },
    {
      cluster_id: "5",
      id: "shortage",
      name: "shortage",
      rank: 0.0006350008422083106,
      degrees: 6
    },
     
  
  ],
  links: [
    { source: "1", target: "Alasco" },
    { source: "1", target: "Sablono" },
    { source: "1", target: "LandTech" },
    { source: "1", target: "Digital Engineering Solutions" },
    { source: "1", target: "PlanRadar" },
    { source: "1", target: "Alice Technologies" },
    { source: "1", target: "swino" },
    { source: "1", target: "GBuilder" },
    { source: "1", target: "CAPMO" },
    { source: "1", target: "Scaled Robotics" },
    { source: "1", target: "SWAPP" },
    { source: "1", target: "Novade" },
    { source: "1", target: "Nodes & Links" },
    { source: "1", target: "Buildots" },
    { source: "1", target: "VU.CITY" },
    { source: "1", target: "testfit" },
    { source: "1", target: "buildingradar" },
    { source: "1", target: "process" },
    { source: "1", target: "Propster" },
    { source: "1", target: "Bulldozair" },
    { source: "2", target: "area" },
    { source: "2", target: "work" },
    { source: "2", target: "space" },
    { source: "2", target: "etc" },
    { source: "2", target: "place" },
    { source: "2", target: "public" },
    { source: "2", target: "way" },
    { source: "2", target: "private" },
    { source: "2", target: "available" },
    { source: "2", target: "currently" },
    { source: "2", target: "social" },
    { source: "2", target: "affordability" },
    { source: "2", target: "individual" },
    { source: "2", target: "care" },
    { source: "2", target: "outside" },
    { source: "2", target: "health" },
    { source: "2", target: "quality" },
    { source: "2", target: "day" },
    { source: "2", target: "source" },
    { source: "2", target: "volunteer" },
    { source: "2", target: "sector" },
    { source: "2", target: "investment" },
    { source: "2", target: "death" },
    { source: "2", target: "bank" },
    { source: "2", target: "good" },
    { source: "2", target: "hate" },
    { source: "3", target: "home" },
    { source: "3", target: "unit" },
    { source: "3", target: "family" },
    { source: "3", target: "suite" },
    { source: "3", target: "co" },
    { source: "3", target: "exist" },
    { source: "3", target: "permit" },
    { source: "3", target: "include" },
    { source: "3", target: "single" },
    { source: "3", target: "room" },
    { source: "3", target: "facility" },
    { source: "3", target: "lot" },
    { source: "3", target: "living" },
    { source: "3", target: "large" },
    { source: "3", target: "number" },
    { source: "3", target: "secondary" },
    { source: "3", target: "urban" },
    { source: "3", target: "child" },
    { source: "3", target: "add" },
    { source: "3", target: "renovate" },
    { source: "3", target: "funding" },
    { source: "3", target: "upgrade" },
    { source: "3", target: "couple" },
    { source: "3", target: "standard" },
    { source: "3", target: "bridge" },
    { source: "3", target: "come" },
    { source: "3", target: "condition" },
    { source: "3", target: "additional" },
    { source: "3", target: "size" },
    { source: "3", target: "repair" },
    { source: "3", target: "read" },
    { source: "3", target: "vulnerable" },
    { source: "3", target: "parking" },
    { source: "3", target: "structure" },
    { source: "3", target: "maintenance" },
    { source: "3", target: "improve" },
    { source: "3", target: "plus" },
    { source: "3", target: "economic" },
    { source: "4", target: "rent" },
    { source: "4", target: "affordable" },
    { source: "4", target: "build" },
    { source: "4", target: "new" },
    { source: "4", target: "building" },
    { source: "4", target: "need" },
    { source: "4", target: "house" },
    { source: "4", target: "increase" },
    { source: "4", target: "developer" },
    { source: "4", target: "require" },
    { source: "4", target: "development" },
    { source: "4", target: "smoke" },
    { source: "4", target: "household" },
    { source: "4", target: "purpose" },
    { source: "4", target: "design" },
    { source: "4", target: "mortgage" },
    { source: "4", target: "purchase" },
    { source: "4", target: "stock" },
    { source: "4", target: "especially" },
    { source: "4", target: "shaughnessy" },
    { source: "4", target: "condo" },
    { source: "4", target: "close" },
    { source: "4", target: "bedroom" },
    { source: "4", target: "apartment" },
    { source: "4", target: "tear" },
    { source: "4", target: "control" },
    { source: "4", target: "supply" },
    { source: "4", target: "actually" },
    { source: "4", target: "certain" },
    { source: "4", target: "staff" },
    { source: "4", target: "daycare" },
    { source: "4", target: "old" },
    { source: "4", target: "site" },
    { source: "4", target: "great" },
    { source: "4", target: "class" },
    { source: "4", target: "incentive" },
    { source: "4", target: "heritage" },
    { source: "4", target: "decade" },
    { source: "4", target: "inthe" },
    { source: "4", target: "encourage" },
    { source: "4", target: "act" },
    { source: "4", target: "world" },
    { source: "4", target: "construction" },
    { source: "4", target: "grocery" },
    { source: "4", target: "lose" },
    { source: "4", target: "financial" },
    { source: "5", target: "city" },
    { source: "5", target: "resident" },
    { source: "5", target: "fund" },
    { source: "5", target: "provide" },
    { source: "5", target: "renter" },
    { source: "5", target: "small" },
    { source: "5", target: "use" },
    { source: "5", target: "service" },
    { source: "5", target: "benefit" },
    { source: "5", target: "revenue" },
    { source: "5", target: "homes" },
    { source: "5", target: "free" },
    { source: "5", target: "loan" },
    { source: "5", target: "future" },
    { source: "5", target: "end" },
    { source: "5", target: "street" },
    { source: "5", target: "temporary" },
    { source: "5", target: "business" },
    { source: "5", target: "current" },
    { source: "5", target: "citizen" },
    { source: "5", target: "tiny" },
    { source: "5", target: "interest" },
    { source: "5", target: "big" },
    { source: "5", target: "let" },
    { source: "5", target: "accommodation" },
    { source: "5", target: "local" },
    { source: "5", target: "run" },
    { source: "5", target: "challenge" },
    { source: "5", target: "mean" },
    { source: "5", target: "pedestrian" },
    { source: "5", target: "situation" },
    { source: "5", target: "meet" },
    { source: "5", target: "shortage" },
 
    { source: "1", target: "2" },
    { source: "2", target: "3" },
    { source: "3", target: "4" },
    { source: "4", target: "5" },
    { source: "1", target: "5" },

    { source: "0", target: "2" },
    { source: "0", target: "3" },
    { source: "0", target: "4" },
    { source: "0", target: "5" },
    { source: "0", target: "1" }
  ]
};

data.nodes.forEach((node) => {
  node.val = node.cluster_size * 10 || node.degrees / 150;
  if (node.isClusterNode) {
    node.clusterId = null;
  } else node.clusterId = node.cluster_id;
});

export const clusters = data.nodes.filter((node) => node.isClusterNode);
export const clusterIds = clusters.map((cluster) => cluster.id);

export { data };
