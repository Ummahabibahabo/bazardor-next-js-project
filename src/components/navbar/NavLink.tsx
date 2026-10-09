import NavLinkClient from "./NavLinkClient";

interface NavLinkProps {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const NavLink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const navLinksData: NavLinkProps[] = await res.json();

  return <NavLinkClient navLinksData={navLinksData}></NavLinkClient>;
};

export default NavLink;
