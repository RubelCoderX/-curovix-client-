import ContactForm from "@/components/ContactForm/ContactFrom";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import TextEditor from "@/components/TextEditor/TextEditor";
import Working from "@/components/Work/Working";

const Page = () => {
  return (
    <div className="">
      <Header />
      <div className="my-40">
        <Hero />
      </div>
      <TextEditor />
      <Services />
      <Working />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Page;
