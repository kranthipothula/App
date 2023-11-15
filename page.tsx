import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
  <div className="p-8">
  <div>
    <Container>
      <div>
        <HomeBanner/>
      </div>
    </Container>
  </div> 
  </div>
   )
}
