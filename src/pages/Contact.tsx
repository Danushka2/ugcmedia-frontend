import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Get in <span className="text-gradient-hero">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-background p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <Input placeholder="Your name" required className="h-11" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="you@company.com" required className="h-11" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
              <Input placeholder="How can we help?" required className="h-11" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <Textarea placeholder="Tell us more..." rows={5} required />
            </div>
            <Button type="submit" disabled={loading} className="h-11 w-full rounded-full font-semibold">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Info cards */}
          <div className="flex flex-col gap-5">
            {[
              { icon: Mail, title: "Email Us", detail: "hello@ugcmedia.com" },
              { icon: MapPin, title: "Office", detail: "San Francisco, CA" },
              { icon: Clock, title: "Response Time", detail: "Within 24 hours" },
            ].map((info) => (
              <div key={info.title} className="rounded-2xl border bg-secondary/50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <info.icon className="h-5 w-5 text-accent" />
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{info.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
