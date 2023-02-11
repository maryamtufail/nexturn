import { RiGithubFill, RiAppleFill, RiRedditFill, RiGooglePlayFill } from "react-icons/ri";

export const InvestDB = [
  {
    id:0,
    title: "Gadget",
    desc: "Apple California",
    price: " 200.22 ",
    upOrDown: "up",
    percent: "1.04%",
    icon: <RiGithubFill className="invest-icon" />,
  },
  {
    id:1,
    title: "House",
    desc: "Manulife Inc.",
    price: "890.00",
    upOrDown: "down",
    percent: "5.04%",
    icon: <RiAppleFill className="invest-icon" />,
  },
  {
    id:2,
    title: "Education",
    desc: "Interaction design",
    price: " 58.99 ",
    upOrDown: "up",
    percent: "10.2%",
    icon: <RiRedditFill className="invest-icon" />,
  },
  {
    id:3,
    title: "Food",
    desc: "Interaction design",
    price: "13.25",
    upOrDown: "down",
    percent: "0.25%",
    icon: <RiGooglePlayFill className="invest-icon" />,
  },
];