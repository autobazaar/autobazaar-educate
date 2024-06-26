import HomeOnlineAcademy from "../components/homes/home-online-academy";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Main"} />
      <HomeOnlineAcademy />
    </Wrapper>
  );
}
