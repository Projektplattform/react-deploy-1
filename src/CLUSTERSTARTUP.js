const c_bbiv = "#10059f";
const c_vergabe = "#071d49";
const c_baumaschinen = "#2d68c4";
const c_baustoffe = "#5e8ab4";
const c_bautechnologie = "#92c1e9";
const c_ingenieure = "#009cde";

const data = {
  nodes: [
    {
      id: "0",
      link: "https://www.ed.tum.de/ppe/home/",
      fillcolor: c_bbiv, //rgb(0, 255, 0)
      isClusterNode: true,
      name: "START UP",
      rel_cluster_size: 22.0,
      cluster_size: 33
    },
    {
      id: "1",
      fillcolor: c_ingenieure,
      isClusterNode: true,
      isParagraph: true,
      name: "INGENIEURE",
      nameP: "PROJEKT MGMT.",
      rel_cluster_size: 11.0,
      cluster_size: 33
    },
    {
      cluster_id: "1",
      id: "Alasco",
      name: "Alasco",
      img: "./images/test.png",
      testimg: require("./images/Alasco.png"),
      rank: 0.006128326587162951,
      location: "Deutschland",
      fillcolor: c_ingenieure,
      link: "https://www.alasco.de/",
      degrees: 1400
    },
    
    {
      cluster_id: "1",
      id: "Sablono",
      name: "Sablono",
      img: "./images/test.png",
      testimg: require("./images/Sablono.png"),
      rank: 0.006128326587162951,
      location: "Deutschland",
      fillcolor: c_ingenieure,
      link: "https://www.sablono.com/",
      degrees: 1600
    },
    {
      cluster_id: "1",
      id: "LandTech",
      name: "LandTech",
      img: "./images/test.png",
      testimg: require("./images/LandTech.png"),
      rank: 0.005676080905103744,
      location: "Deutschland",
      fillcolor: c_ingenieure,
      link: "https://land.tech/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Digital Engineering Solutions",
      name: "Digital Engineering Solutions",
      img: "./images/test.png",
      testimg: require("./images/DES.png"),
      rank: 0.0034158013061813784,
      location: "Polen",
      fillcolor: c_ingenieure,
      link: "https://de-solutions.info/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "PlanRadar",
      name: "PlanRadar",
      img: "./images/test.png",
      testimg: require("./images/PlanRadar.png"),
      rank: 0.0032567280515781232,
      location: "Österreich",
      fillcolor: c_ingenieure,
      link: "https://www.planradar.com/de/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Alice Technologies",
      name: "Alice Technologies",
      img: "./images/test.png",
      testimg: require("./images/Alice.png"),
      rank: 0.003117809292823006,
      location: "USA",
      fillcolor: c_ingenieure,
      link: "https://www.alicetechnologies.com/home",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "smino",
      name: "smino",
      img: "./images/test.png",
      testimg: require("./images/Smino.png"),
      rank: 0.002917780318579891,
      location: "Schweiz",
      fillcolor: c_ingenieure,
      link: "https://smino.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "GBuilder",
      name: "GBuilder",
      img: "./images/test.png",
      testimg: require("./images/GBuilder.png"),
      rank: 0.0024551430646664175,
      location: "Finnland",
      fillcolor: c_ingenieure,
      link: "https://gbuilder.com/de/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "CAPMO",
      name: "CAPMO",
      img: "./images/test.png",
      testimg: require("./images/Capmo.png"),
      rank: 0.0024267579643031077,
      location: "Deutschland",
      fillcolor: c_ingenieure,
      link: "https://www.capmo.com/de/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Scaled Robotics",
      name: "Scaled Robotics",
      img: "./images/test.png",
      testimg: require("./images/Scaled.png"),
      rank: 0.001792477960243676,
      location: "Spanien",
      fillcolor: c_ingenieure,
      link: "https://scaledrobotics.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "SWAPP",
      name: "SWAPP",
      img: "./images/test.png",
      testimg: require("./images/Swapp.png"),
      rank: 0.0014703448884418133,
      location: "Israel",
      fillcolor: c_ingenieure,
      link: "https://www.swapp.net/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Novade",
      name: "Novade",
      img: "./images/test.png",
      testimg: require("./images/Novade.png"),
      rank: 0.0014067462913841425,
      location: "Singapur",
      fillcolor: c_ingenieure,
      link: "https://www.novade.net/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Nodes & Links",
      name: "Nodes & Links",
      img: "./images/test.png",
      testimg: require("./images/NodesLinks.png"),
      rank: 0.0013236119852794678,
      location: "England",
      fillcolor: c_ingenieure,
      link: "https://www.nodeslinks.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Buildots",
      name: "Buildots",
      img: "./images/test.png",
      testimg: require("./images/Buildots.png"),
      rank: 0.0013120980729219797,
      location: "Isreal",
      fillcolor: c_ingenieure,
      link: "https://buildots.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "VU.CITY",
      name: "VU.CITY",
      img: "./images/test.png",
      testimg: require("./images/VuCity.png"),
      rank: 0.0012073983196932965,
      location: "England",
      fillcolor: c_ingenieure,
      link: "https://vu.city/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "testfit",
      name: "TestFit",
      img: "./images/test.png",
      testimg: require("./images/TestFit.png"),
      rank: 0.0011364177330698132,
      location: "USA",
      fillcolor: c_ingenieure,
      link: "https://testfit.io/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "buildingradar",
      name: "buildingradar",
      img: "./images/test.png",
      testimg: require("./images/BuildingRadar.png"),
      rank: 0.001118100513661404,
      location: "Deutschland",
      fillcolor: c_ingenieure,
      link: "https://buildingradar.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "LetsBuild",
      name: "LetsBuild",
      img: "./images/test.png",
      testimg: require("./images/LetsBuild.png"),
      rank: 0.001102016048700778,
      location: "Belgien",
      fillcolor: c_ingenieure,
      link: "https://buildingradar.com/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Propster",
      name: "Propster",
      img: "./images/test.png",
      testimg: require("./images/Propster.png"),
      rank: 0.0008781068487482841,
      location: "Österreich",
      fillcolor: c_ingenieure,
      link: "https://propster.tech/",
      degrees: 1200
    },
    {
      cluster_id: "1",
      id: "Bulldozair",
      name: "Bulldozair",
      img: "./images/test.png",
      testimg: require("./images/Bulldozair.png"),
      rank: 0.0008580352499509854,
      location: "Frankreich",
      fillcolor: c_ingenieure,
      link: "https://www.bulldozair.com/",
      degrees: 1200
    },
    
    {
      id: "2",
      fillcolor: c_vergabe,
      isClusterNode: true,
      isParagraph: true,
      name: "VERGABE",
      nameP: "KONSTRUKTION",
      rel_cluster_size: 8.666666666666666,
      cluster_size: 33
    },
    {
      cluster_id: "2",
      id: "Triax-Technologies",
      name: "Triax Technologies",
      location: "USA",
      link: "https://www.triaxtec.com/",
      img: "./images/test.png",
      testimg: require("./images/Triax.png"),
      fillcolor: c_vergabe,
      rank: 0.0042925759622244085,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "klarx",
      name: "klarx",
      location: "Deutschland",
      link: "www.klarx.de",
      img: "./images/test.png",
      testimg: require("./images/klarx.png"),
      fillcolor: c_vergabe,
      rank: 0.003697155796584208,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "CREE Buildings",
      name: "CREE Buildings",
      location: "Österreich",
      link: "https://www.creebuildings.com/",
      img: "./images/test.png",
      testimg: require("./images/cree.png"),
      fillcolor: c_vergabe,
      rank: 0.003559838671116629,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Koda",
      name: "Koda",
      location: "Estland",
      link: "https://www.kodasema.com/",
      img: "./images/test.png",
      testimg: require("./images/Koda.png"),
      fillcolor: c_vergabe,
      rank: 0.002872714657792725,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "ProperGate",
      name: "ProperGate",
      location: "Polen",
      link: "https://www.propergate.co/",
      img: "./images/test.png",
      testimg: require("./images/ProperGate.png"),
      fillcolor: c_vergabe,
      rank: 0.0022559541449563543,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "011h",
      name: "011h",
      location: "Spanien",
      link: "https://www.011h.com/",
      img: "./images/test.png",
      testimg: require("./images/011h.png"),
      fillcolor: c_vergabe,
      rank: 0.002120655464999742,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "QualisFlow",
      name: "QualisFlow",
      location: "England",
      link: "https://www.qualisflow.com/",
      img: "./images/test.png",
      testimg: require("./images/Qflow.png"),
      fillcolor: c_vergabe,
      rank: 0.0018126358438913682,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Agora",
      name: "Agora",
      location: "USA",
      link: "https://www.helloagora.com/",
      img: "./images/test.png",
      testimg: require("./images/Agora.png"),
      fillcolor: c_vergabe,
      rank: 0.0015587842976087746,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Modulize",
      name: "Modulize",
      location: "Norwegen",
      link: "https://www.modulize.io/",
      img: "./images/test.png",
      testimg: require("./images/Modulize.png"),
      fillcolor: c_vergabe,
      rank: 0.0014118318821684456,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Saqara",
      name: "Saqara",
      location: "USA",
      link: "https://saqara.com/en/",
      img: "./images/test.png",
      testimg: require("./images/Saqara.png"),
      fillcolor: c_vergabe,
      rank: 0.0013943568193390517,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Gropyus",
      name: "Gropyus",
      location: "Österreich",
      link: "https://gropyus.com",
      img: "./images/test.png",
      testimg: require("./images/Gropyus.png"),
      fillcolor: c_vergabe,
      rank: 0.0013194532607881523,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Modulous",
      name: "Modulous",
      location: "England",
      link: "https://www.modulous.com/",
      img: "./images/test.png",
      testimg: require("./images/Modulous.png"),
      fillcolor: c_vergabe,
      rank: 0.0012903950695549054,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Cosuno",
      name: "Cosuno",
      location: "Deutschland",
      link: "https://www.cosuno.de/",
      img: "./images/test.png",
      testimg: require("./images/Cosuno.png"),
      fillcolor: c_vergabe,
      rank: 0.001074486066376247,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Hesus",
      name: "Hesus",
      location: "Frankreich",
      link: "https://hesus.eu/de/hauptseite/",
      img: "./images/test.png",
      testimg: require("./images/Hesus.png"),
      fillcolor: c_vergabe,
      rank: 0.0009636631118320567,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Flexcavo",
      name: "Flexcavo",
      location: "Deutschland",
      link: "https://www.flexcavo.de/",
      img: "./images/test.png",
      testimg: require("./images/Flexcavo.png"),
      fillcolor: c_vergabe,
      rank: 0.0008327066375551184,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "ecoworks",
      name: "ecoworks",
      location: "Deutschland",
      link: "https://www.ecoworks.tech",
      img: "./images/test.png",
      testimg: require("./images/ecoworks.png"),
      fillcolor: c_vergabe,
      rank: 0.0008104487788279386,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "Trusstor",
      name: "Trusstor",
      location: "Israel",
      link: "https://trusstor.com/",
      img: "./images/test.png",
      testimg: require("./images/Trusstor.png"),
      fillcolor: c_vergabe,
      rank: 0.0007891703995841135,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "wastebox",
      name: "wastebox",
      location: "Österreich",
      link: "https://www.wastebox.biz/",
      img: "./images/test.png",
      testimg: require("./images/wastebox.png"),
      fillcolor: c_vergabe,
      rank: 0.0007648601153706948,
      degrees: 1200

    },
    {
      cluster_id: "2",
      id: "BaoLiving",
      name: "BaoLiving",
      location: "Österreich",
      link: "https://www.baoliving.com",
      img: "./images/test.png",
      testimg: require("./images/BaoLiving.png"),
      fillcolor: c_vergabe,
      rank: 0.0007385023729992138,
      degrees: 1200
    },
    {
      cluster_id: "2",
      id: "woodyhousing",
      name: "woodyhousing",
      location: "Niederlande",
      link: "https://www.woodyshousing.com",
      img: "./images/test.png",
      testimg: require("./images/woodyhousing.png"),
      fillcolor: c_vergabe,
      rank: 0.0006778205632132275,
      degrees: 1200
    },
    {
      id: "3",
      fillcolor: c_baumaschinen,
      isClusterNode: true,
      name: "BAUMASCHINEN",
      rel_cluster_size: 12.666666666666666,
      cluster_size: 33
    },
    {
      cluster_id: "3",
      id: "LightYX",
      name: "LightYX",
      location: "Isreal",
      link: "https://www.lightyx.com/",
      img: "./images/test.png",
      testimg: require("./images/LightYX.png"),
      fillcolor: c_baumaschinen,
      rank: 0.01046736307182641,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "HausBots",
      name: "HausBots",
      location: "England",
      link: "https://hausbots.com",
      img: "./images/test.png",
      testimg: require("./images/HausBots.png"),
      fillcolor: c_baumaschinen,
      rank: 0.005348289200228546,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "CivRobotics",
      name: "CivRobotics",
      location: "Israel",
      link: "http://www.civrobotics.com/",
      img: "./images/test.png",
      testimg: require("./images/CivRobotics.png"),
      fillcolor: c_baumaschinen,
      rank: 0.005089337904407591,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "Cobod",
      name: "Cobod",
      location: "England",
      link: "https://cobod.com/",
      img: "./images/test.png",
      testimg: require("./images/Cobod.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0026042001932058165,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "BuiltRobotics",
      name: "BuiltRobotics",
      location: "England",
      link: "http://builtrobotics.com/",
      img: "./images/test.png",
      testimg: require("./images/BuiltRobotics.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0024870360394715924,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "UltraWis",
      name: "UltraWis",
      location: "Israel",
      link: "http://www.ultrawis.com/",
      img: "./images/test.png",
      testimg: require("./images/UltraWis.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0024054804293446265,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "MachineMax",
      name: "MachineMax",
      location: "England",
      link: "https://machinemax.com/",
      img: "./images/test.png",
      testimg: require("./images/MachineMax.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0018990652305137575,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "CyBe",
      name: "CyBe",
      location: "Niederlande",
      link: "https://www.cybe.eu/",
      img: "./images/test.png",
      testimg: require("./images/CyBe.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0017760916113226397,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "SafeAI",
      name: "SafeAI",
      location: "Israel",
      link: "https://safeai.ai/",
      img: "./images/test.png",
      testimg: require("./images/SafeAI.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0016551609961962806,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "DustyRobotics",
      name: "DustyRobotics",
      location: "USA",
      link: "https://www.dustyrobotics.com/",
      img: "./images/test.png",
      testimg: require("./images/DustyRobotics.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0016351182748503838,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "INTSITE",
      name: "INTSITE",
      location: "Israel",
      link: "https://www.intsite.ai/",
      img: "./images/test.png",
      testimg: require("./images/INTSITE.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0015442773339676681,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "MX3D",
      name: "MX3D",
      location: "Niederlande",
      link: "http://www.mx3d.com/",
      img: "./images/test.png",
      testimg: require("./images/MX3D.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0015247622608858156,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "Wingtra",
      name: "Wingtra",
      location: "Schweiz",
      link: "https://wingtra.com/",
      img: "./images/test.png",
      testimg: require("./images/Wingtra.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0014666980126206088,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "Versatile",
      name: "Versatile",
      location: "Israel",
      link: "https://www.versatile.ai/",
      img: "./images/test.png",
      testimg: require("./images/Versatile.png"),
      fillcolor: c_baumaschinen,
      rank: 0.00138421214546743,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "Converge",
      name: "Converge",
      location: "England",
      link: "https://www.converge.io/",
      img: "./images/test.png",
      testimg: require("./images/Converge.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0013354094167406384,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "PrintStones",
      name: "PrintStones",
      location: "Österreich",
      link: "https://www.printstones.eu/",
      img: "./images/test.png",
      testimg: require("./images/PrintStones.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0011993336596113726,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "HyperionRobotics",
      name: "HyperionRobotics",
      location: "Finnland",
      link: "https://www.hyperionrobotics.com/",
      img: "./images/test.png",
      testimg: require("./images/HyperionRobotics.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0010954920294487355,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "KEWAZO",
      name: "KEWAZO",
      location: "Deutschland",
      link: "https://www.kewazo.com/",
      img: "./images/test.png",
      testimg: require("./images/KEWAZO.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0010924667795299853,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "MOBBOT",
      name: "MOBBOT",
      location: "Schweiz",
      link: "https://www.mobbot.ch/",
      img: "./images/test.png",
      testimg: require("./images/MOBBOT.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0009743343076067844,
      degrees: 1200
    },
    {
      cluster_id: "3",
      id: "Okibo",
      name: "Okibo",
      location: "Israel",
      link: "https://www.okibo.com/",
      img: "./images/test.png",
      testimg: require("./images/Okibo.png"),
      fillcolor: c_baumaschinen,
      rank: 0.0009541708776815344,
      degrees: 1200
    },
    {
      id: "4",
      fillcolor: c_baustoffe,
      isClusterNode: true,
      isParagraph: true,
      name: "BAUSYSTEME",
      nameP: "BAUSTOFFE",
      rel_cluster_size: 15.333333333333334,
      cluster_size: 33
    },
    {
      cluster_id: "4",
      id: "Triqbriq",
      name: "Triqbriq",
      location: "Deutschland",
      link: "https://triqbriq.de/",
      img: "./images/test.png",
      testimg: require("./images/Triqbriq.png"),
      fillcolor: c_baustoffe,
      rank: 0.008746035576714743,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Madaster",
      name: "Madaster",
      location: "Deutschland",
      link: "https://madaster.de/",
      img: "./images/test.png",
      testimg: require("./images/Madaster.png"),
      fillcolor: c_baustoffe,
      rank: 0.005923725638974821,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "CarbonUpcycling",
      name: "CarbonUpcycling",
      location: "Kanada",
      link: "https://www.carbonupcycling.com/",
      img: "./images/test.png",
      testimg: require("./images/CarbonUpcycling.png"),
      fillcolor: c_baustoffe,
      rank: 0.004908263018400133,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "MadeofAir",
      name: "MadeofAir",
      location: "Deutschland",
      link: "https://www.madeofair.com/",
      img: "./images/test.png",
      testimg: require("./images/MadeofAir.png"),
      fillcolor: c_baustoffe,
      rank: 0.004689384632736601,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Mixteresting",
      name: "Mixteresting",
      location: "Österreich",
      link: "http://www.mixteresting.com/",
      img: "./images/test.png",
      testimg: require("./images/Mixteresting.png"),
      fillcolor: c_baustoffe,
      rank: 0.004522848897620551,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Upcyclea",
      name: "Upcyclea",
      location: "Frankreich",
      link: "https://www.upcyclea.com/",
      img: "./images/test.png",
      testimg: require("./images/Upcyclea.png"),
      fillcolor: c_baustoffe,
      rank: 0.004496205780160409,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Sonocrete",
      name: "Sonocrete",
      location: "Deutschland",
      link: "https://www.sonocrete.com/",
      img: "./images/test.png",
      testimg: require("./images/Sonocrete.png"),
      fillcolor: c_baustoffe,
      rank: 0.0032575767681323523,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Concular",
      name: "Concular",
      location: "Deutschland",
      link: "https://concular.de/",
      img: "./images/test.png",
      testimg: require("./images/Concular.png"),
      fillcolor: c_baustoffe,
      rank: 0.0030317010403932768,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Carbicrete",
      name: "Carbicrete",
      location: "Kanada",
      link: "https://www.carbicrete.com/",
      img: "./images/test.png",
      testimg: require("./images/Carbicrete.png"),
      fillcolor: c_baustoffe,
      rank: 0.002244632512105981,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "CloudCycle",
      name: "CloudCycle",
      location: "England",
      link: "http://www.cloudcycle.com/",
      img: "./images/test.png",
      testimg: require("./images/CloudCycle.png"),
      fillcolor: c_baustoffe,
      rank: 0.001802901052218228,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "ECOncrete",
      name: "ECOncrete",
      location: "Israel",
      link: "https://econcretetech.com/",
      img: "./images/test.png",
      testimg: require("./images/ECOncrete.png"),
      fillcolor: c_baustoffe,
      rank: 0.0017742371096512728,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "neustark",
      name: "neustark",
      location: "Schweiz",
      link: "http://www.neustark.com/",
      img: "./images/test.png",
      testimg: require("./images/neustark.png"),
      fillcolor: c_baustoffe,
      rank: 0.0016223610094635475,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Oxara",
      name: "Oxara",
      location: "Schweiz",
      link: "https://www.oxara.ch/",
      img: "./images/test.png",
      testimg: require("./images/Oxara.png"),
      fillcolor: c_baustoffe,
      rank: 0.0015925870405303552,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "CarbonBuilt",
      name: "CarbonBuilt",
      location: "USA",
      link: "https://www.carbonbuilt.com/",
      img: "./images/test.png",
      testimg: require("./images/CarbonBuilt.png"),
      fillcolor: c_baustoffe,
      rank: 0.0015422242861376702,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Carbonauten",
      name: "Carbonauten",
      location: "Deutschland",
      link: "https://www.carbonauten.com/",
      img: "./images/test.png",
      testimg: require("./images/Carbonauten.png"),
      fillcolor: c_baustoffe,
      rank: 0.0015028441483247398,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Betolar",
      name: "Betolar",
      location: "Finnland",
      link: "https://betolar.com/",
      img: "./images/test.png",
      testimg: require("./images/Betolar.png"),
      fillcolor: c_baustoffe,
      rank: 0.0013910524512628858,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Polycare",
      name: "Polycare",
      location: "Deutschland",
      link: "https://polycare.de/",
      img: "./images/test.png",
      testimg: require("./images/Polycare.png"),
      fillcolor: c_baustoffe,
      rank: 0.0013767009218013516,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "alcemy",
      name: "alcemy",
      location: "Deutschland",
      link: "https://alcemy.tech/",
      img: "./images/test.png",
      testimg: require("./images/alcemy.png"),
      fillcolor: c_baustoffe,
      rank: 0.001316614809737473,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "Basilisk",
      name: "Basilisk",
      location: "Niederlande",
      link: "https://www.basiliskconcrete.com/",
      img: "./images/test.png",
      testimg: require("./images/Basilisk.png"),
      fillcolor: c_baustoffe,
      rank: 0.0011994207220094469,
      degrees: 1200
    },
    {
      cluster_id: "4",
      id: "FenX",
      name: "FenX",
      location: "Schweiz",
      link: "https://www.fenx.ch/",
      img: "./images/test.png",
      testimg: require("./images/FenX.png"),
      fillcolor: c_baustoffe,
      rank: 0.0011813896913417763,
      degrees: 1200
    },
    
    {
      id: "5",
      fillcolor: c_bautechnologie,
      isClusterNode: true,
      name: "BAUTECHNOLOGIE",
      rel_cluster_size: 11.0,
      cluster_size: 33
    },
    {
      cluster_id: "5",
      id: "ClevAir",
      name: "ClevAir",
      location: "Norwegen",
      link: "http://www.clevair.io/",
      img: "./images/test.png",
      testimg: require("./images/ClevAir.png"),
      fillcolor: c_bautechnologie,
      rank: 0.011023531289674876,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Mondas",
      name: "Mondas",
      location: "Deutschland",
      link: "https://www.mondas-iot.de/",
      img: "./images/test.png",
      testimg: require("./images/Mondas.png"),
      fillcolor: c_bautechnologie,
      rank: 0.002896883191032499,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Kindow",
      name: "Kindow",
      location: "Niederlande",
      link: "https://www.kindowblinds.com/",
      img: "./images/test.png",
      testimg: require("./images/Kindow.png"),
      fillcolor: c_bautechnologie,
      rank: 0.002783729239371409,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "ISAAC",
      name: "ISAAC",
      location: "Italien",
      link: "https://isaacantisismica.com/",
      img: "./images/test.png",
      testimg: require("./images/ISAAC.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0026162974138508777,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Mixergy",
      name: "Mixergy",
      location: "England",
      link: "https://www.mixergy.co.uk/",
      img: "./images/test.png",
      testimg: require("./images/Mixergy.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0023417462747837383,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Envio",
      name: "Envio",
      location: "Deutschland",
      link: "https://enviosystems.com/",
      img: "./images/test.png",
      testimg: require("./images/Envio.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0018764897485041873,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "interpanel",
      name: "interpanel",
      location: "Deutschland",
      link: "https://www.interpanel.com/",
      img: "./images/test.png",
      testimg: require("./images/interpanel.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0016775537417781665,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "bGrid",
      name: "bGrid",
      location: "Niederlande",
      link: "https://www.bgridsolutions.com/",
      img: "./images/test.png",
      testimg: require("./images/bGrid.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0015379159438776704,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Shayp",
      name: "Shayp",
      location: "Belgien",
      link: "https://www.shayp.com/",
      img: "./images/test.png",
      testimg: require("./images/Shayp.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0014984151719625797,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "KUGU",
      name: "KUGU",
      location: "Deutschland",
      link: "https://www.kugu-home.com/",
      img: "./images/test.png",
      testimg: require("./images/KUGU.png"),
      fillcolor: c_bautechnologie,
      rank: 0.001474688162066299,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "PHYSEE",
      name: "PHYSEE",
      location: "Niederlande",
      link: "https://www.physee.eu/",
      img: "./images/test.png",
      testimg: require("./images/PHYSEE.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0013645711115011297,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "vilisto",
      name: "vilisto",
      location: "Deutschland",
      link: "https://www.vilisto.de/",
      img: "./images/test.png",
      testimg: require("./images/vilisto.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0012948287191078007,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "IBIS",
      name: "IBIS",
      location: "Niederlande",
      link: "https://www.ibispower.eu/",
      img: "./images/test.png",
      testimg: require("./images/IBIS.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0012649304356317673,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "GreenY",
      name: "GreenY",
      location: "Schweiz",
      link: "https://www.green-y.ch/",
      img: "./images/test.png",
      testimg: require("./images/GreenY.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0012512367115999777,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Wondrwall",
      name: "Wondrwall",
      location: "England",
      link: "https://www.wondrwall.co.uk/",
      img: "./images/test.png",
      testimg: require("./images/Wondrwall.png"),
      fillcolor: c_bautechnologie,
      rank: 0.001231662365600412,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "nevisQ",
      name: "nevisQ",
      location: "Deutschland",
      link: "https://www.nevisq.com/",
      img: "./images/test.png",
      testimg: require("./images/nevisQ.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0011897877850764551,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "DABBEL",
      name: "DABBEL",
      location: "Deutschland",
      link: "https://www.dabbel.eu/",
      img: "./images/test.png",
      testimg: require("./images/DABBEL.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0011679197174071852,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "Enerbrain",
      name: "Enerbrain",
      location: "Italien",
      link: "https://www.enerbrain.com/",
      img: "./images/test.png",
      testimg: require("./images/Enerbrain.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0011171031151449996,
      degrees: 1200
    },
    {
      cluster_id: "5",
      id: "perto",
      name: "perto",
      location: "Deutschland",
      link: "https://perto.de/",
      img: "./images/test.png",
      testimg: require("./images/perto.png"),
      fillcolor: c_bautechnologie,
      rank: 0.0010813553836846186,
      degrees: 1200
    }, 
  
  ],
  links: [
    { source: "1", target: "Alasco" },
    { source: "1", target: "Sablono" },
    { source: "1", target: "LandTech" },
    { source: "1", target: "Digital Engineering Solutions" },
    { source: "1", target: "PlanRadar" },
    { source: "1", target: "Alice Technologies" },
    { source: "1", target: "smino" },
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
    { source: "1", target: "LetsBuild" },
    { source: "1", target: "Propster" },
    { source: "1", target: "Bulldozair" },
    { source: "2", target: "Triax-Technologies" },
    { source: "2", target: "klarx" },
    { source: "2", target: "CREE Buildings" },
    { source: "2", target: "Koda" },
    { source: "2", target: "ProperGate" },
    { source: "2", target: "011h" },
    { source: "2", target: "QualisFlow" },
    { source: "2", target: "Agora" },
    { source: "2", target: "Modulize" },
    { source: "2", target: "Saqara" },
    { source: "2", target: "Gropyus" },
    { source: "2", target: "Modulous" },
    { source: "2", target: "Cosuno" },
    { source: "2", target: "Hesus" },
    { source: "2", target: "Flexcavo" },
    { source: "2", target: "ecoworks" },
    { source: "2", target: "Trusstor" },
    { source: "2", target: "wastebox" },
    { source: "2", target: "BaoLiving" },
    { source: "2", target: "woodyhousing" },
    { source: "3", target: "LightYX" },
    { source: "3", target: "HausBots" },
    { source: "3", target: "CivRobotics" },
    { source: "3", target: "Cobod" },
    { source: "3", target: "BuiltRobotics" },
    { source: "3", target: "UltraWis" },
    { source: "3", target: "MachineMax" },
    { source: "3", target: "CyBe" },
    { source: "3", target: "SafeAI" },
    { source: "3", target: "DustyRobotics" },
    { source: "3", target: "INTSITE" },
    { source: "3", target: "MX3D" },
    { source: "3", target: "Wingtra" },
    { source: "3", target: "Versatile" },
    { source: "3", target: "Converge" },
    { source: "3", target: "PrintStones" },
    { source: "3", target: "HyperionRobotics" },
    { source: "3", target: "KEWAZO" },
    { source: "3", target: "MOBBOT" },
    { source: "3", target: "Okibo" },
   
    { source: "4", target: "Triqbriq" },
    { source: "4", target: "Madaster" },
    { source: "4", target: "CarbonUpcycling" },
    { source: "4", target: "MadeofAir" },
    { source: "4", target: "Mixteresting" },
    { source: "4", target: "Upcyclea" },
    { source: "4", target: "Sonocrete" },
    { source: "4", target: "Concular" },
    { source: "4", target: "Carbicrete" },
    { source: "4", target: "CloudCycle" },
    { source: "4", target: "ECOncrete" },
    { source: "4", target: "neustark" },
    { source: "4", target: "Oxara" },
    { source: "4", target: "CarbonBuilt" },
    { source: "4", target: "Carbonauten" },
    { source: "4", target: "Betolar" },
    { source: "4", target: "Polycare" },
    { source: "4", target: "alcemy" },
    { source: "4", target: "Basilisk" },
    { source: "4", target: "FenX" },
   
    { source: "5", target: "ClevAir" },
    { source: "5", target: "Mondas" },
    { source: "5", target: "Kindow" },
    { source: "5", target: "ISAAC" },
    { source: "5", target: "Mixergy" },
    { source: "5", target: "Envio" },
    { source: "5", target: "interpanel" },
    { source: "5", target: "bGrid" },
    { source: "5", target: "Shayp" },
    { source: "5", target: "KUGU" },
    { source: "5", target: "PHYSEE" },
    { source: "5", target: "vilisto" },
    { source: "5", target: "IBIS" },
    { source: "5", target: "GreenY" },
    { source: "5", target: "Wondrwall" },
    { source: "5", target: "nevisQ" },
    { source: "5", target: "DABBEL" },
    { source: "5", target: "Enerbrain" },
    { source: "5", target: "perto" },
 
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
