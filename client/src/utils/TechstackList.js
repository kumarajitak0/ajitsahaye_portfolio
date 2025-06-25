import { BsGithub } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { FaPython, FaAws } from "react-icons/fa";
import { TbBrandMysql, TbNetwork } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";

// Custom SVGs
const WiresharkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="#006DAE"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm104 280H152v-48h208v48z" />
  </svg>
);

const NmapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="#3C873A"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="4" fill="none" />
    <path d="M32 12 L36 36 L28 36 Z" fill="#3C873A" />
  </svg>
);

const KaliLinuxIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="#0080FF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="8" fill="#0080FF" />
    <text x="8" y="40" fill="#FFF" fontSize="16" fontWeight="bold">
      KALI
    </text>
  </svg>
);

// Add this to your custom SVG icon list
const BurpSuiteIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="#FF6F00"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="10" fill="#FF6F00" />
    <text x="8" y="40" fill="#FFF" fontSize="14" fontWeight="bold">
      Burp
    </text>
  </svg>
);

// const pfSenseIcon = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 64 64"
//     fill="#283593"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="64" height="64" rx="10" fill="#283593" />
//     <text x="8" y="40" fill="#FFF" fontSize="14" fontWeight="bold">
//       pfSense
//     </text>
//   </svg>
// );

const SplunkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="#00B140"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="8" y="40" fill="#00B140" fontSize="20" fontWeight="bold"></text>
  </svg>
);

// Final Stack List
export const TechstackList = [
  {
    _id: 1,
    name: "Wireshark ",
    icon: WiresharkIcon,
  },
  {
    _id: 2,
    name: "Kali Linux ",
    icon: KaliLinuxIcon,
  },
  {
    _id: 3,
    name: "ReactJS",
    icon: SiReact,
  },
  // {
  //   _id: 4,
  //   name: "pfSense",
  //   icon: pfSenseIcon,
  // },
  // {
  //   _id: 5,
  //   name: "Postman",
  //   icon: SiPostman,
  // },
  {
    _id: 6,
    name: "MySQL/SQL",
    icon: TbBrandMysql,
  },
  {
    _id: 7,
    name: "Burp Suite",
    icon: BurpSuiteIcon,
  },
  // {
  //   _id: 8,
  //   name: "Subnetting",
  //   icon: FaNodeJs,
  // },
  {
    _id: 9,
    name: "Python",
    icon: FaPython,
  },
  {
    _id: 10,
    name: "Nmap",
    icon: NmapIcon,
  },
  {
    _id: 11,
    name: "GitHub",
    icon: BsGithub,
  },
  // {
  //   _id: 12,
  //   name: "VS Code",
  //   icon: TbBrandVscode,
  // },
  {
    _id: 13,
    name: "AWS",
    icon: FaAws,
  },
  {
    _id: 14,
    name: "OSI Model",
    icon: TbNetwork,
  },
  {
    _id: 15,
    name: "Splunk",
    icon: SplunkIcon,
  },
  {
    _id: 16,
    name: "Linux",
    icon: FcLinux,
  },
];
