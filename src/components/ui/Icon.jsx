import {
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaLaptopCode, FaRobot, FaCss3Alt } from "react-icons/fa";

const registry = {
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
  FaAws,
  FaLaptopCode,
  FaRobot,
  FaCss3Alt,
};

export default function Icon({ name, ...props }) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
