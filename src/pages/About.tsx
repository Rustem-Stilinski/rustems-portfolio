export default function About() {
  return (
    <section className="page container rise prose">
      <h1 className="page-title">A bit about me</h1>
      <p className="lead">
        Engineer first, but the kind who wants to know what&apos;s happening one
        layer down.
      </p>

      <div className="prose__body">
        <p>
          I&apos;m a software engineer based in Arlington, Virginia. Right now I
          work at Freddie Mac, where I build Drools-based decision trees that
          score mortgage borrowers — the rules that decide how applications get
          evaluated. It&apos;s a satisfying mix of clean engineering and real
          business logic, and the systems I work on touch a lot of people.
        </p>
        <p>
          Before this I spent a couple of years at AWS as an SDE II, building
          tax applications on a serverless stack and learning what it takes to
          run software at scale — queues, lambdas, dashboards, and the
          occasional 2 a.m. page. I came up through a contract role at Freddie
          Mac before that, modernizing legacy systems into microservices.
        </p>
        <p>
          Alongside work I&apos;m finishing a Master&apos;s in Computer
          Information Systems at Boston University. The frontend frameworks
          course this site was built for pushed me deeper into React and
          TypeScript, which I now reach for in my own projects too — including a
          small TypeScript-to-JavaScript engine I wrote from scratch, just to
          understand how compilers do it.
        </p>
        <p>
          When I&apos;m not at a keyboard I&apos;m usually outside — hiking,
          snowboarding in winter, or losing a tennis match I swear I&apos;ll win
          next time. I grew up speaking Russian, work in English, and have roots
          in Kazakhstan, so switching between worlds feels normal to me.
        </p>
      </div>
    </section>
  );
}
