import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Works from "./components/Works";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <ContactForm />
      <Works />
    </div>
  );
}
