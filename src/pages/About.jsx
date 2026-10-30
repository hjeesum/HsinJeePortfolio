function About() {
  return (
    <div className="mb-16">
      <h2 className="font-display text-2xl mb-6 md:hidden">ABOUT</h2>
      <p className="mb-4 text-neutral-500">
        Hi! I'm a software engineer with a focus on AI and machine learning,
        recently completed an integrated master's in <span className="text-neutral-900 font-semibold">Computer Science with
        Artificial Intelligence</span> at the <span className="text-neutral-900 font-semibold">University of Leeds</span> (graduated June
        2026).
      </p>
      <p className="mb-4 text-neutral-500">
        My Master’s thesis focuses on
        developing an AI-generated video detection system designed to identify
        synthetic and manipulated video content. I’m particularly focused on
        modern text-to-video generation models, including systems such as Sora
        by OpenAI and Seedance by ByteDance, which are capable of producing
        highly realistic video from natural language prompts.
      </p>
      <p className="mb-4 text-neutral-500">
        Alongside my academic work at the University of Leeds, I’m also a member
        of <span className="text-neutral-900 font-semibold">Leeds Gryphon Racing</span>, the university’s Formula Student team, where I
        work on the perception team. In this role, I help develop and train
        computer vision and machine learning algorithms that enable the car to
        perceive and understand its environment. This includes working with
        sensor data, building and training models, and improving the reliability
        and performance of perception systems in real-world conditions.
      </p>
      <p className="mb-4 text-neutral-500">
        Outside of work, I like playing piano, violin and coding random and
        weird projects (more coming soon!).
      </p>
    </div>
  );
}

export default About;
