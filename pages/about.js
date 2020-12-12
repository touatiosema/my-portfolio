import Link from "next/link";
export default () => (
  <div className="content text-2xl md:text-3xl">
    <div className="fading-in">
      <h1 className="title font-semibold">
        I love <span className="react">web </span> and{" "}
        <span className="next">mobile</span> app development, but also very
        interested in other <span className="text-yellow-600">IT</span> related
        fields
      </h1>
      <p className="mb-10 ">
        I’m Osema TOUATI, but you can just call me Osema.
      </p>
      <p className="mb-10 ">
        An internationl student, Currently in my last year (master's student),
        very ambicious and always looking for new opportunities. Here is{" "}
        <Link href="/studies">
          <a className="text-yellow-600 hover:text-yellow-500" href="/studies">
            My academic background
          </a>
        </Link>
        .
      </p>
      <p className="mb-10 ">
        I recently finished a periode of internship, followed by a fixed terme
        contract of 3 months with{" "}
        <a
          href="https://andersontech.fr/"
          className="text-blue-600 hover:text-blue-500"
        >
          Anderson
        </a>{" "}
        enterprise, where I contributed to the developpement of an innovative
        web app. You can know more about my projects{" "}
        <Link href="/studies">
          <a className="text-yellow-600 hover:text-yellow-500" href="/studies">
            here
          </a>
        </Link>
        .
      </p>
      <p className="bg-white text-gray-900 rounded-xl p-3 font-bold mb-10 ">
        I'm currently searching for an internship for my graduation project, I'm
        looking for a new challenge and a new adventure.
      </p>
      <p className="mb-10">
        I try to specialize in web apps developement, in both backend and
        frontend, at the same time learning the best practices of project
        management, continuous integration and developement, teamwork... you can
        check my technical/soft skills{" "}
        <Link href="/skills">
          <a className="text-yellow-600 hover:text-yellow-500" href="/skills">
            here
          </a>
        </Link>
        .
      </p>
      <p className="mb-10">
        Don't hesitate to{" "}
        <Link href="/contact">
          <a className="text-yellow-600 hover:text-yellow-500" href="/contact">
            contact
          </a>
        </Link>{" "}
        me, I'll be happy to hear from you.
      </p>
    </div>
  </div>
);
