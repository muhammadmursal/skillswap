import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}