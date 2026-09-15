import { Reveal } from "./Reveal";

import mashishingHandover from "@/assets/gallery-mashishing-handover.jpg";
import kellysvilleHandover from "@/assets/gallery-kellysville-handover.jpg";
import lydenburgPrimaryHandover from "@/assets/gallery-lydenburg-primary-handover.jpg";
import packingDonations from "@/assets/gallery-packing-donations.jpg";
import totesReady from "@/assets/gallery-totes-ready.jpg";
import containerSchool from "@/assets/gallery-container-school.jpg";
import containerSchoolHandover from "@/assets/gallery-container-school-handover.jpg";
import celebrationOutdoors from "@/assets/gallery-celebration-outdoors.jpg";
import groupTraditionalAttire from "@/assets/gallery-group-traditional-attire.jpg";
import storeDonationDrive from "@/assets/gallery-store-donation-drive.jpg";
import toiletriesDonated from "@/assets/gallery-toiletries-donated.jpg";
import mashishingWallGroup from "@/assets/gallery-mashishing-wall-group.jpg";
import schoolgirlsOutdoor from "@/assets/gallery-schoolgirls-outdoor.jpg";
import classroomGroup from "@/assets/gallery-classroom-group.jpg";
import packHandoverCloseup from "@/assets/gallery-pack-handover-closeup.jpg";
import auditoriumGroup from "@/assets/gallery-auditorium-group.jpg";
import hallGroup from "@/assets/gallery-hall-group.jpg";

const GALLERY_IMAGES = [
  {
    src: celebrationOutdoors,
    alt: "Girls celebrating outdoors, raising Dignified Diamonds hygiene care pack bags in the air",
  },
  {
    src: auditoriumGroup,
    alt: "A large group of schoolgirls in an auditorium holding up sanitary pad packs alongside Dignified Diamonds volunteers",
  },
  {
    src: groupTraditionalAttire,
    alt: "Girls and volunteers in traditional attire smiling together outdoors with Dignified Diamonds tote bags",
  },
  {
    src: containerSchoolHandover,
    alt: "Dignified Diamonds volunteers handing over care pack bags outside a container classroom",
  },
  {
    src: schoolgirlsOutdoor,
    alt: "Schoolgirls standing outdoors with their backpacks after receiving hygiene care packs",
  },
  {
    src: hallGroup,
    alt: "A group of schoolgirls in a hall holding sanitary pad packs and a Dignified Diamonds sign",
  },
  {
    src: classroomGroup,
    alt: "A classroom of schoolgirls giving a thumbs up while holding hygiene care packs",
  },
  {
    src: mashishingWallGroup,
    alt: "Schoolgirls at Mashishing Secondary School holding up Dignified Diamonds hygiene care pack bags, smiling outside their school",
  },
  {
    src: containerSchool,
    alt: "A colourfully painted container classroom building at a community school",
  },
  {
    src: totesReady,
    alt: "Rows of blue Dignified Diamonds tote bags packed and ready for distribution",
  },
  {
    src: packingDonations,
    alt: "A volunteer sorting donated sanitary pads and toiletries ahead of a distribution day",
  },
  {
    src: toiletriesDonated,
    alt: "A bin overflowing with donated toiletries and hygiene products",
  },
  {
    src: storeDonationDrive,
    alt: "A Dignified Diamonds Sanitary Pad Drive donation bin set up inside a retail store",
  },
  {
    src: packHandoverCloseup,
    alt: "Two women exchanging a hygiene care pack during a distribution visit",
  },
  {
    src: lydenburgPrimaryHandover,
    alt: "Volunteers handing over hygiene care packs outside Lydenburg Primary School",
  },
  {
    src: kellysvilleHandover,
    alt: "Volunteers handing over a stack of hygiene care packs at Kellysville Primary School",
  },
  {
    src: mashishingHandover,
    alt: "Volunteers handing over a hygiene care pack at Mashishing Secondary School",
  },
] as const;

export function WorkGallery() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {GALLERY_IMAGES.map((image, i) => (
        <Reveal as="li" key={image.src} delay={(i % 8) * 60} className="aspect-square">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full rounded-2xl object-cover shadow-soft"
          />
        </Reveal>
      ))}
    </ul>
  );
}
