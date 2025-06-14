import Navbar from "./navbar";
import FloatingNavbar from "./floatingNavbar";
import StaffPicks from "./StaffPicks";

export default function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <section className="flex flex-row flex-wrap">
        <FloatingNavbar />
        <StaffPicks />
      </section>

    
    </>
  );
}
 