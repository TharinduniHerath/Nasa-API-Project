import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "APOD",
    url: "/apod",
  },
  {
    id: "2",
    title: "Mars Rover",
    url: "/marsrover",
  },
  {
    id: "3",
    title: "Earth",
    url: "/Earth",
  },
  {
    id: "4",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const features = [
  {
    id: "0",
    title: "Astronomy Picture of the Day",
    text: "Structures the APOD imagery and associated metadata so that it can be repurposed for other applications.",
    backgroundUrl: "./src/assets/features/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage,
    url: "/apod",
  },
  {
    id: "1",
    title: "Earth",
    text: "Landsat imagery is provided to the public as a joint project between NASA and USGS. ",
    backgroundUrl: "./src/assets/features/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage,
    url: "/earth",
  },
  {
    id: "2",
    title: "Mars Rover Photos",
    text: "This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more e.",
    backgroundUrl: "./src/assets/features/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage,
    url: "/marsrover",
  },
  {
    id: "3",
    title: "NASA Image and Video Library",
    text: "The images.nasa.gov API is organized around REST, has predictable/resource­-oriented URLs and uses HTTP response codes to indicate API errors.",
    backgroundUrl: "./src/assets/features/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage,
    url: "/nasa-images",
  },
  {
    id: "4",
    title: "Techport",
    text: "TechPort is NASA’s technology inventory, showcasing the NASA portfolio of active and completed technology projects",
    backgroundUrl: "./src/assets/features/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage,
    url: "/techport",
  },
  {
    id: "5",
    title: "Satellite Situation Center",
    text: "The Satellite Situation Center Web (SSCWeb) service has been developed and is operated jointly by the NASA/GSFC Space Physics Data Facility (SPDF) and the Nat.",
    backgroundUrl: "./src/assets/features/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage,
    url: "/satellites",
  },
];
