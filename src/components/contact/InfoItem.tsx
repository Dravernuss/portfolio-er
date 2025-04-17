import { InfoItemProps } from "../../types";

export const InfoItem = ({ icon, title, text }: InfoItemProps) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl md:text-3xl">{icon}</div>
    <div>
      <h4 className="font-bold text-xl">{title}</h4>
      <p className="text-3sm text-black dark:text-white">{text}</p>
    </div>
  </div>
);
