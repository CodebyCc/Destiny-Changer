import business from "../../public/business.jpg";
import worker from "../../public/worker.jpg";
import paris from "../../public/paris.jpg";
import student from "../../public/students.jpg";

export const details = [
  {
    id: 2,
    heading: "Student Visa",
    content:
      "At Destiny Changer, We specialize in helping students achieve their dreams of studying abroad by providing expert guidance throughout the student visa process.From choosing the right study destination to preparing your documents and booking visa interviews , our dedicated team ensures a smooth and stress free experience.  ",
    // span: "Offers",
    image: student,
  },
  {
    id: 1,
    heading: "Work Visa",
    content:
      "Our Travel & Tour agency provides reliable assistance for obtaining work visas, helping professionals start or continue their careers abroad with confidence. We guide you through every step of the visa process—ensuring your documents are in order and deadlines are met—so you can focus on preparing for your new job opportunity. Whether it's a short-term contract or a long-term position, we make your journey to working overseas simple and stress-free.",
    image: worker,
  },

  {
    id: 4,
    heading: "Business Visa",
    content:
      "Our Travel & Tour agency specializes in seamless business visa assistance, helping professionals and entrepreneurs travel globally with ease. We handle the entire visa process—from document preparation to appointment scheduling—ensuring quick and hassle-free approvals. Whether you're attending a conference, sealing a deal, or exploring new markets, we make your business travel smooth, efficient, and stress-free.",
    // span: "Are.",
    image: business,
  },
  {
    id: 3,
    heading: "Tourism Visa",
    // span: "Assistance",
    content:
      "Our Travel & Tour agency offers expert support for securing tourism visas, making your dream vacation a reality. From guiding you through the application process to helping you gather the right documents, we ensure a smooth and stress-free experience. Whether you're exploring new cultures, visiting landmarks, or just relaxing abroad, we make your travel plans easy and enjoyable from start to finish.",
    image: paris,
  },
];
// We need this in the main component to create the grid
