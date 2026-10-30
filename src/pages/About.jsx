import Reveal from "../components/Reveal";

function About() {
  return (
    <div className="mb-16">
      <h2 className="font-display text-xl tracking-wide mb-8 flex items-center gap-4 after:h-px after:flex-1 after:bg-rule-soft">ABOUT</h2>
      <Reveal delay={0}>
        <p className="mb-4 text-muted">
          Hi, I'm Hsin Jee. I build machine learning systems, and I've just
          graduated with a <span className="text-ink font-semibold">First Class</span> integrated
          master's in <span className="text-ink font-semibold">Computer Science with Artificial
          Intelligence</span> from the <span className="text-ink font-semibold">University of Leeds</span>.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="mb-4 text-muted">
          Most of my work sits where models meet the messy real world: spotting
          AI-generated video for my thesis, and leading the vision team that
          helped <span className="text-ink font-semibold">Leeds Gryphon Racing</span>'s
          driverless car see the track.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="mb-4 text-muted">
          I'm happiest when a project is a little ridiculous. I've taught a
          model to recognise Jujutsu Kaisen hand signs and turned each one into
          half a million swarming particles, and at DurHack my team predicted
          Mario Kart races well enough to earn an honourable mention from
          G-Research.
        </p>
      </Reveal>
      <Reveal delay={360}>
        <p className="mb-4 text-muted">
          Away from the keyboard, I play piano and violin, and badminton for
          Leeds. I grew up speaking English, Mandarin and Cantonese, get by in
          Malay, and am slowly learning Japanese. At university I also kept the
          books for the British Chinese Society as its treasurer.
        </p>
      </Reveal>
      <Reveal delay={480}>
        <p className="mb-4 text-muted">
          I'm currently looking for roles in{" "}
          <span className="text-ink font-semibold">ML and software engineering</span>. If
          that sounds like your team, I'd love to hear from you.
        </p>
      </Reveal>
    </div>
  );
}

export default About;
