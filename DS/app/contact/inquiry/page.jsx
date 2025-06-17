// DS/app/contact/inquiry/page.jsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "sonner"

export default function ContactInquiryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactForm />
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}