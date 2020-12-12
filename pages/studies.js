const info = [
  {
    title: "ENSEIRB MATMECA student",
    place: "ENSEIRB MATMECA, Bordeaux, France.",
    date: "2019-present",
    image: "/enseirb.jpg",
    imgbg: "bg-white",
    color: "text-red-500",
    description: `after one year in superior stage at ESI, I was chosen for a scholarship by the France government, As part of a double diploma between my engineering school ESI and ENSEIRB, I am continuing my studies at ENSEIRB MATMECA in software engineering field.`,
  },
  {
    title: "National competition to access the superior stage of ESI.",
    place: "National school of computer engineering - ESI, Alger, Algeria",
    date: "2018",
    image: "/esi.png",
    imgbg: "",
    color: "text-blue-500",
    description: `We have to succeed our national competition in order to access next stage of this school ESI, I ranked first in this competition.`,
    link:
      "https://www.esi.dz/2018/07/18/resultats-du-concours-d-acces-aux-classes-superieures-de-l-esi-d-alger-et-de-l-esi-de-sidi-belabbes/",
  },
  {
    title: "Preparatory stage at ESI.",
    place: "National school of computer engineering - ESI, Alger, Algeria",
    date: "2016-2018",
    color: "text-green-300",
    image: "/esi.png",
    imgbg: "",
    color: "text-green-500",
    description: `I did my first two years at ESI, I ranked first most of the semesters, I was valedictorian for these two years.`,
  },
  {
    title: "Mathematics Bachelor degree.",
    place: "High school Taib El Okbi, Blida, Algeria.",
    date: "2015-2016",
    image: "/math.png",
    imgbg: "bg-white",
    color: "text-purple-300",
    description: `I had my baccalaureate diploma in mathematics, mention EXCELLENCE with
          an average of 18/20.`,
  },
];

const StudyPhase = ({
  title,
  place,
  date,
  description,
  image,
  imgbg,
  color,
  link,
}) => (
  <div className="relative  bg-gradient-to-r from-gray-900 rounded-xl my-5 p-10">
    <h2 className={"text-4xl font-bold mb-5 " + color}>{title}</h2>
    <img
      src={image}
      width="86"
      height="86"
      alt="logo"
      className={"float-right rounded-full " + imgbg}
    />
    <h5 className="text-2xl font-semibold mb-5">
      {place} <span className={color}>{date}</span>
    </h5>
    <p className="border-l-4 text-xl border-yellow-500 pl-3">
      {description}
      {link && (
        <a
          className="block mt-3 text-yellow-500 hover:text-yellow-300"
          href={link}
          target="_blank"
        >
          check here for more.
        </a>
      )}
    </p>
  </div>
);
export default () => (
  <div className="p-5 md:p-24 fading-in">
    {info.map((s) => (
      <StudyPhase {...s} />
    ))}
  </div>
);
