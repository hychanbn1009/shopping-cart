import rabbitCannon from './images/list/Rabbit_cannon.webp'
import zaku2FS from './images/list/Zaku_II_FS.webp'
import zakuDesert from './images/list/Zaku_Desert_(DA).webp'
import zaku2F2 from './images/list/Zaku_II_F2.webp'
import zakuMariner from './images/list/Zaku_Mariner.webp'
import zaku2Kai from './images/list/Zaku_II_Kai.webp'
import psycoZaku from './images/list/Psyco_Zaku.webp'
import zakuRecon from './images/list/Zaku_recon_type.webp'
import highMobilityZaku from './images/list/High_Mobility_Psycommu_Zaku_II.webp'

const productData=
[
    {
      "id": 0,
      "name": "Rabbit Cannon",
      "price": 500,
      "img": rabbitCannon,
      "description":"A slightly modified version of the mid-range support unit Zaku Cannon. Based on the Zaku II, the revamped Zaku Cannon was equipped with a 180mm anti-air cannon. "
    },
    {
      "id": 1,
      "name": "Zaku 2 FS",
      "price": 200,
      "img": zaku2FS,
      "description":"A minor upgrade to the Zaku II, produced in small quantities as command units in the period before the further enhanced Zaku II Type S was completed and deployed. "
    },
    {
      "id": 2,
      "name": "Zaku Desert (DA)",
      "price": 200,
      "img": zakuDesert,
      "description":"As a variation of the Zaku II localized warfare type, this version was designed to improve performance in desert environments."
    },
    {
      "id": 3,
      "name": "Zaku 2 F2",
      "price": 250,
      "img": zaku2F2,
      "description":"A later mass production model and modification of the Zaku II. "
    },
    {
      "id": 4,
      "name": "Zaku Mariner",
      "price": 300,
      "img": zakuMariner,
      "description": "A Zaku II modified for amphibious combat. The base Zaku II proved to be extremely versatile, with on-site modifications for desert or cold environments greatly expanding the front lines.",
    },
    {
      "id": 5,
      "name": "Zaku 2 Kai",
      "price": 600,
      "img": zaku2Kai,
      "description":"With the war prolonged beyond the Principality of Zeon's expectations, operations failed to sufficiently take into account the lack of materials and rapid introduction of new MS, and even experienced pilots began having trouble adapting to new suits."
    },
    {
      "id": 6,
      "name": "Psyco Zaku",
      "price": 1000,
      "img": psycoZaku,
      "description":"An MS developed by the Living Dead Division, a unit formed in order to gather combat data on pilots with prosthetic limbs and deployed to the Thunderbolt Sector. "
    },
    {
      "id": 7,
      "name": "Zaku Recon Type",
      "price": 800,
      "img": zakuRecon,
      "description":"A reconnaissance mobile suit based on the Zaku II. During Minovsky particle dispersion, vision-based combat has become the norm, and reconnaissance had become more important than it was in the past."
    },
    {
      "id": 8,
      "name": "High Mobility Psycommu Zaku II",
      "price": 900,
      "img": highMobilityZaku,
      "description":"This unit is based on the unit 2 of the test machine Bishop that was created during the 'Bishop Plan' which developed the MS Zeong for Newtypes."
    }
  ]

export default  productData;
