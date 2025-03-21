import { IItem } from "../interfaces/Item";
import asylumDemon from "../../assets/asylum-demon.jpg";
import taurusDemon from "../../assets/taurus-demon.jpg";
import bellGargoyles from "../../assets/bell-gargoyles.jpg";
import capraDemon from "../../assets/capra-demon.jpg";
import gapingDragon from "../../assets/gaping-dragon.jpg";
import quelaag from "../../assets/queelag.jpg";
import ironGolem from "../../assets/iron-golem.jpg";
import ornsteinSmough from "../../assets/ornstein-and-smough.jpg";
import seath from "../../assets/seath.jpg";
import bedOfChaos from "../../assets/bed-of-chaos.jpg";
import nito from "../../assets/nito.jpg";
import fourKings from "../../assets/4-kings.jpg";
import gwyn from "../../assets/gwyn.jpg";


export const mockItems: IItem[] = [
    // {
    //   name: "Slave Knight Gael",
    //   rating: 10,
    //   reviewTitle: "Great item",
    //   comment: `Slave Knight Gael is an intense and emotional final boss in Dark Souls III: The Ringed City. His fight is a test of endurance, featuring aggressive attacks, a haunting soundtrack, and stunning visuals. Gael’s tragic story, driven by his desperate search for the Dark Soul, adds depth to his character. The battle evolves through three phases, each escalating in difficulty, showcasing his raw power and desperation. His design, from his tattered cloak to his beast-like movements, makes him one of the most memorable bosses in the series. Defeating him is both exhilarating and bittersweet, marking the end of Dark Souls III.`,
    //   dateCreated: new Date(),
    //   image: image
    // },
    {
        name: "Asylum Demon",
        rating: 6,
        comment: "A well-designed tutorial boss that introduces basic mechanics, but it's quite easy once you understand its slow attacks. The plunging attack makes it even simpler. While it does its job, it lacks the excitement of later fights.",
        dateCreated: new Date(),
        image: asylumDemon
    },
    {
        name: "Taurus Demon",
        rating: 6,
        comment: "A decent early-game boss with a fun plunging attack opportunity. However, the fight feels a bit basic, and the narrow bridge arena can be annoying. Many players cheese it by running back and forth to reset its position.",
        dateCreated: new Date(),
        image: taurusDemon
    },
    {
        name: "Bell Gargoyles",
        rating: 8,
        comment: "One of the first real difficulty spikes in the game. Fighting two at once teaches the player to manage multiple enemies. The fight feels intense and memorable, though later encounters reuse the same design, making it lose some uniqueness.",
        dateCreated: new Date(),
        image: bellGargoyles
    },
    {
        name: "Capra Demon",
        rating: 5,
        comment: "More frustrating than difficult due to its cramped arena and aggressive dogs. Most players struggle not because of the boss itself but due to the poor space management. Once you get past the opening attack, the fight becomes trivial.",
        dateCreated: new Date(),
        image: capraDemon
    },
    {
        name: "Gaping Dragon",
        rating: 7,
        comment: "Visually one of the coolest bosses in the game. Its massive, grotesque design is intimidating, but the fight itself is slow and easy to exploit. It’s a fun spectacle, though not the most mechanically engaging battle.",
        dateCreated: new Date(),
        image: gapingDragon
    },
    {
        name: "Chaos Witch Quelaag",
        rating: 8,
        comment: "A well-balanced fight with great visuals and a fiery challenge. The lava forces positioning awareness, and her sword attacks can be devastating. However, if you summon Maneater Mildred, the fight becomes much easier.",
        dateCreated: new Date(),
        image: quelaag
    },
    {
        name: "Iron Golem",
        rating: 6,
        comment: "A big, slow boss that’s more of a puzzle than a real challenge. You can stagger him off the bridge, making the fight anticlimactic. It fits the setting well but isn't as thrilling as other encounters.",
        dateCreated: new Date(),
        image: ironGolem
    },
    {
        name: "Ornstein and Smough",
        rating: 10,
        comment: "One of the best boss fights in the series, testing both one-on-one and multi-target combat. Their dynamic attacks and the second phase transformation make for an unforgettable battle. The difficulty is fair but punishing, creating a thrilling challenge.",
        dateCreated: new Date(),
        image: ornsteinSmough
    },
    {
        name: "Seath the Scaleless",
        rating: 7,
        comment: "A fight that is more about lore than mechanics. The initial ‘fake death’ is interesting, but Seath himself is fairly easy once you break his immortality crystal. The arena feels eerie, but his attacks are somewhat repetitive.",
        dateCreated: new Date(),
        image: seath
    },
    {
        name: "Bed of Chaos",
        rating: 4,
        comment: "Easily the most disliked boss in the game. The fight is more of a frustrating platforming puzzle than a real battle. The sweeping arms and collapsing floor make it unfair at times. A great idea executed poorly.",
        dateCreated: new Date(),
        image: bedOfChaos
    },
    {
        name: "Gravelord Nito",
        rating: 7,
        comment: "A boss with fantastic atmosphere and lore, but the fight itself is hindered by the skeletons. If you don’t have a divine weapon, you’ll struggle more with the minions than Nito himself. His design is incredible, though.",
        dateCreated: new Date(),
        image: nito
    },
    {
        name: "Four Kings",
        rating: 8,
        comment: "A unique fight where you must deal damage quickly before getting overwhelmed. The eerie void setting adds to the tension, but slow builds might find it frustrating. It's a true test of DPS over traditional combat strategy.",
        dateCreated: new Date(),
        image: fourKings
    },
    {
        name: "Gwyn, Lord of Cinder",
        rating: 9,
        comment: "An emotional and fitting final boss. His aggressive attacks and fast-paced combat are a stark contrast to previous fights. The music enhances the melancholic atmosphere. Unfortunately, he can be parried too easily, making the fight less impactful for some.",
        dateCreated: new Date(),
        image: gwyn
    },
];
