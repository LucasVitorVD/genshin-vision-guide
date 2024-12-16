import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

// Icons
import mondstadtLogo from "../../../public/mondstadt-logo.png";
import charactersLogo from "../../../public/icons/characters.png";
import weaponsLogo from "../../../public/icons/weapons.png";
import artefactsLogo from "../../../public/icons/artefacts.png";
import homeLogo from "../../../public/icons/home.png";
import aboutLogo from "../../../public/icons/about.png";

// Menu items.
const items = [
  {
    title: "Início",
    url: "/",
    icon: homeLogo,
  },
  {
    title: "Personagens",
    url: "/characters",
    icon: charactersLogo,
  },
  {
    title: "Armas",
    url: "weapons",
    icon: weaponsLogo,
  },
  {
    title: "Artefatos",
    url: "/artifacts",
    icon: artefactsLogo,
  },
  {
    title: "Sobre",
    url: "/about",
    icon: aboutLogo,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Image src={mondstadtLogo} alt="genshin logo" width={50} height={50} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <Image
                        src={item.icon}
                        alt="icone"
                        width={25}
                        height={25}
                        className="bg-[#51596B] rounded-full"
                      />
                      <span className="text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger></SidebarTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}
