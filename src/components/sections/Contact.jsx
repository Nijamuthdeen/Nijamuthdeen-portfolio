import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import { profile } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import GradientButton from "../ui/GradientButton";

/* =========================================================
   CONTACT DETAILS
========================================================= */

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Chidambaram, India",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: profile.socials.github,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: profile.socials.linkedin,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: profile.socials.instagram,
  },
  {
    icon: FaGlobe,
    label: "Stackorax",
    href: profile.socials.stackorax,
  },
];

/* =========================================================
   CONTACT
========================================================= */

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  /* =======================================================
     FORM CHANGE
  ======================================================= */

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear old error when user starts correcting the form
    if (status === "error") {
      setStatus("idle");
    }
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const onSubmit = async (e) => {
    e.preventDefault();

    /* -------------------------------------------------------
       BASIC VALIDATION
    ------------------------------------------------------- */

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.purpose ||
      !form.message.trim()
    ) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    /* -------------------------------------------------------
       FORM DATA
    ------------------------------------------------------- */

    const formData = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || "Not provided",
      purpose: form.purpose,
      budget: form.budget || "Not specified",
      message: form.message.trim(),

      /* FormSubmit settings */

      _subject: `Portfolio Enquiry — ${form.purpose} — ${form.name}`,
      _replyto: form.email,
      _template: "table",
      _captcha: "true",
    };

    try {
      /* -----------------------------------------------------
         SEND TO FORMSUBMIT
      ----------------------------------------------------- */

      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      /* -----------------------------------------------------
         SUCCESS
      ----------------------------------------------------- */

      if (response.ok && result.success) {
        setStatus("sent");

        setForm({
          name: "",
          email: "",
          company: "",
          purpose: "",
          budget: "",
          message: "",
        });

        return;
      }

      /* -----------------------------------------------------
         API ERROR
      ----------------------------------------------------- */

      console.error("Form submission failed:", result);
      setStatus("error");
    } catch (error) {
      /* -----------------------------------------------------
         NETWORK ERROR
      ----------------------------------------------------- */

      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        py-20
        sm:py-24
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-40
            top-40
            w-[400px]
            h-[400px]
            rounded-full
            bg-primary/[0.07]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            w-[450px]
            h-[450px]
            rounded-full
            bg-primary/[0.05]
            blur-[130px]
          "
        />
      </div>

      <div className="relative section-container">

        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <SectionHeading
          eyebrow="LET'S CONNECT"
          title="Let's Build Something"
          subtitle="Have an idea, project, or opportunity? Tell me what you're working on and let's start a conversation."
        />

        {/* ===================================================
            CONTACT LAYOUT
        =================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[0.85fr_1.15fr]
            gap-8
            lg:gap-12
            mt-12
            lg:mt-16
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col"
          >

            {/* =================================================
                INTRO CARD
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                sm:p-8
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  w-56
                  h-56
                  rounded-full
                  bg-primary/[0.10]
                  blur-[80px]
                "
              />

              <div className="relative">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    text-primary
                    mb-4
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-primary
                      shadow-[0_0_10px_currentColor]
                    "
                  />

                  Available for work
                </span>

                <h3
                  className="
                    font-heading
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                    leading-tight
                  "
                >
                  Let's turn your{" "}
                  <span className="text-primary">
                    idea
                  </span>{" "}
                  into reality.
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    text-white/50
                    leading-6
                    max-w-md
                  "
                >
                  Whether you need a complete web application,
                  an e-commerce platform, or a custom digital
                  experience, I'm happy to discuss it.
                </p>

              </div>
            </div>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="mt-6 space-y-3">

              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    data-cursor-hover
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      px-4
                      py-3.5
                      hover:border-primary/30
                      hover:bg-primary/[0.035]
                      transition-all
                      duration-300
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          w-10
                          h-10
                          rounded-xl
                          bg-primary/[0.08]
                          border
                          border-primary/10
                          text-primary
                          shrink-0
                          group-hover:bg-primary/[0.12]
                          transition-colors
                        "
                      >
                        <Icon size={14} />
                      </div>

                      <div className="min-w-0">

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-wider
                            text-white/35
                            mb-0.5
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className="
                            text-sm
                            text-white/75
                            truncate
                          "
                        >
                          {item.value}
                        </p>

                      </div>

                    </div>

                    <FaArrowRight
                      size={11}
                      className="
                        shrink-0
                        text-primary
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                      "
                    />

                  </motion.a>
                );
              })}

            </div>

            {/* =================================================
                SOCIALS
            ================================================= */}

            <div className="mt-7">

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  mb-3
                "
              >
                Find me online
              </p>

              <div className="flex gap-2.5">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      aria-label={social.label}
                      className="
                        group
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        text-white/50
                        hover:text-white
                        hover:border-primary/40
                        hover:bg-primary/[0.08]
                        hover:-translate-y-1
                        transition-all
                        duration-300
                      "
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-2.5
                text-xs
                text-white/40
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  shadow-[0_0_10px_rgba(74,222,128,0.8)]
                "
              />

              Currently open to new opportunities
            </div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE — FORM
          ================================================= */}

          <motion.form
            onSubmit={onSubmit}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              sm:p-8
            "
          >

            {/* =================================================
                FORM GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                w-72
                h-72
                rounded-full
                bg-primary/[0.08]
                blur-[100px]
              "
            />

            <div className="relative">

              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div className="mb-7">

                <h3
                  className="
                    font-heading
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Start a conversation
                </h3>

                <p
                  className="
                    mt-1.5
                    text-xs
                    text-white/40
                  "
                >
                  Fill in the details and I'll get back to you.
                </p>

              </div>

              {/* =================================================
                  NAME + EMAIL
              ================================================= */}

              <div className="grid sm:grid-cols-2 gap-4">

                {/* Name */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-white/35
                      mb-2
                    "
                  >
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Doe"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      text-white
                      placeholder:text-white/20
                      outline-none
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                    "
                  />

                </div>

                {/* Email */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-white/35
                      mb-2
                    "
                  >
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="john@email.com"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      text-white
                      placeholder:text-white/20
                      outline-none
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                    "
                  />

                </div>

              </div>

              {/* =================================================
                  COMPANY + PURPOSE
              ================================================= */}

              <div className="grid sm:grid-cols-2 gap-4 mt-4">

                {/* Company */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-white/35
                      mb-2
                    "
                  >
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Company name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      text-white
                      placeholder:text-white/20
                      outline-none
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                    "
                  />

                </div>

                {/* Purpose */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-white/35
                      mb-2
                    "
                  >
                    Purpose *
                  </label>

                  <select
                    name="purpose"
                    value={form.purpose}
                    onChange={onChange}
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#111111]
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      focus:border-primary/50
                      focus:ring-2
                      focus:ring-primary/10
                      transition-all
                      cursor-pointer
                    "
                  >
                    <option
                      value=""
                      className="bg-[#111111] text-white/40"
                    >
                      Select purpose
                    </option>

                    <option
                      value="Hire Me"
                      className="bg-[#111111]"
                    >
                      Hire Me
                    </option>

                    <option
                      value="Freelance Project"
                      className="bg-[#111111]"
                    >
                      Freelance Project
                    </option>

                    <option
                      value="Full-Time Job"
                      className="bg-[#111111]"
                    >
                      Full-Time Job
                    </option>

                    <option
                      value="Internship"
                      className="bg-[#111111]"
                    >
                      Internship
                    </option>

                    <option
                      value="Collaboration"
                      className="bg-[#111111]"
                    >
                      Collaboration
                    </option>

                    <option
                      value="Other"
                      className="bg-[#111111]"
                    >
                      Other
                    </option>
                  </select>

                </div>

              </div>

              {/* =================================================
                  BUDGET
              ================================================= */}

              <div className="mt-4">

                <label
                  className="
                    block
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-white/35
                    mb-2
                  "
                >
                  Budget
                </label>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#111111]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    focus:border-primary/50
                    focus:ring-2
                    focus:ring-primary/10
                    transition-all
                    cursor-pointer
                  "
                >
                  <option
                    value=""
                    className="bg-[#111111]"
                  >
                    Select budget
                  </option>

                  <option className="bg-[#111111]">
                    Less than ₹10,000
                  </option>

                  <option className="bg-[#111111]">
                    ₹10,000 - ₹25,000
                  </option>

                  <option className="bg-[#111111]">
                    ₹25,000 - ₹50,000
                  </option>

                  <option className="bg-[#111111]">
                    ₹50,000 - ₹1,00,000
                  </option>

                  <option className="bg-[#111111]">
                    Above ₹1,00,000
                  </option>
                </select>

              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="mt-4">

                <label
                  className="
                    block
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-white/35
                    mb-2
                  "
                >
                  Project Details *
                </label>

                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project, goals, timeline..."
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    placeholder:text-white/20
                    outline-none
                    resize-none
                    focus:border-primary/50
                    focus:ring-2
                    focus:ring-primary/10
                    transition-all
                  "
                />

              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  justify-between
                  gap-4
                "
              >

                <GradientButton
                  type="submit"
                  disabled={status === "sending"}
                  className="px-7 py-3"
                >
                  <FaPaperPlane size={13} />

                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}
                </GradientButton>

                {/* Direct Email */}

                <a
                  href={`mailto:${profile.email}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    text-white/40
                    hover:text-primary
                    transition-colors
                  "
                >
                  Email directly
                  <FaArrowRight size={9} />
                </a>

              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {status === "sent" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-5
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-green-500/20
                    bg-green-500/[0.06]
                    p-4
                  "
                >
                  <FaCheckCircle
                    className="text-green-400 mt-0.5 shrink-0"
                    size={15}
                  />

                  <div>

                    <p className="text-sm font-semibold text-green-400">
                      Message sent successfully
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      Thanks! Your enquiry has been sent. I'll get back to you soon.
                    </p>

                  </div>
                </motion.div>
              )}

              {/* =================================================
                  ERROR MESSAGE
              ================================================= */}

              {status === "error" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-5
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.06]
                    p-4
                  "
                >
                  <FaExclamationCircle
                    className="text-red-400 mt-0.5 shrink-0"
                    size={15}
                  />

                  <div>

                    <p className="text-sm font-semibold text-red-400">
                      Message could not be sent
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      Please check your details and try again, or email me directly.
                    </p>

                  </div>
                </motion.div>
              )}

            </div>
          </motion.form>
        </div>

        {/* =====================================================
            BOTTOM TRUST STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            text-center
          "
        >

          <div className="flex items-center gap-2 text-xs text-white/35">
            <FaCheckCircle
              className="text-primary"
              size={11}
            />
            Fast communication
          </div>

          <span className="hidden sm:block text-white/15">
            •
          </span>

          <div className="flex items-center gap-2 text-xs text-white/35">
            <FaCheckCircle
              className="text-primary"
              size={11}
            />
            Clean & scalable solutions
          </div>

          <span className="hidden sm:block text-white/15">
            •
          </span>

          <div className="flex items-center gap-2 text-xs text-white/35">
            <FaCheckCircle
              className="text-primary"
              size={11}
            />
            End-to-end development
          </div>

        </motion.div>

      </div>
    </section>
  );
}