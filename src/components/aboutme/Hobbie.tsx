import { ImPointRight } from "react-icons/im";
import { Hobbies } from "../../types";

type HobbieProps = {
  hobbie: Hobbies;
}

export default function Hobbie({hobbie}: HobbieProps) {
  return (
    <li className="flex items-center gap-2">
      <ImPointRight className="text-indigo-600 dark:text-indigo-400" />
      <span>{hobbie.activity} </span> 
      <hobbie.icon className="w-5 h-5"/>
    </li>
  );
}
