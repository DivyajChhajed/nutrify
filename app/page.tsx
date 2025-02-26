"use client";
import { motion } from "framer-motion";
import { Brain, Utensils, Sparkle } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -top-16 -right-20 opacity-30"
            >
              <Sparkle className="w-24 h-24 text-yellow-200" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-emerald-300 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Meal Planning
              <Sparkle className="inline ml-3 w-6 h-6 text-yellow-200 animate-pulse" />
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create personalized meal plans in seconds with cutting-edge AI,
            tailored to your diet, allergies and goals
          </p>
          <div className="flex justify-center gap-4">
            <Link href={isSignedIn ? "/mealplan" : "/signup"}>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-emerald-600 transition-all duration-300 flex items-center"
              >
                Get Started
                <Sparkle className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
            {/* <motion.button
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(255, 255, 255, 0.8)",
              }}
              className="px-6 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-base"
            >
              How It Works →
            </motion.button> */}
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 bg-white/20 backdrop-blur-lg rounded-3xl p-6 max-w-3xl mx-auto shadow-xl"
          >
            <div className="flex justify-around text-white/80 text-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">1M+</div>
                <div>Meals Generated</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">50+</div>
                <div>Diet Types</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">∞</div>
                <div>Custom Recipes</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section className="py-[93px] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            See It In Action
          </h2>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg">
            <div className="aspect-video bg-emerald-100/30 rounded-xl animate-pulse" />
          </div>
        </motion.div>
      </section>
      {/* Features Section */}
      <section className="py-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Nutrify?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                }}
                className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl text-center"
              >
                <feature.icon className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                }}
                className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl"
              >
                <p className="text-white/80 italic mb-4 text-base">
                  “{testimonial.text}”
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-200/30 mr-3" />
                  <div>
                    <p className="font-semibold text-white text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center px-6">
        <p className="text-white/80 text-center text-sm">
          © 2025 Nutrify. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "Smart AI Algorithm",
    description:
      "Our advanced AI understands your dietary needs and preferences.",
  },
  {
    icon: Utensils,
    title: "Personalized Recipes",
    description: "Get meal plans tailored to your taste and nutrition goals.",
  },
  {
    icon: Sparkle,
    title: "Creative Combinations",
    description: "Explore unique flavors and innovative cooking ideas.",
  },
];

const testimonials = [
  {
    text: "Nutrify transformed my meal planning. The AI suggestions are spot-on!",
    name: "Sarah Johnson",
    role: "Nutritionist",
  },
  {
    text: "As a busy professional, this has saved me hours every week. Love it!",
    name: "Michael Chen",
    role: "Tech Entrepreneur",
  },
];
