// import Image from "next/image";

export default function Home() {

  const dataContent: ListContent[] = [
    {
      no: 1,
      title: "Navbar",
      desc: "Navbar atas"
    },
    {
      no: 2,
      title: "About",
      desc: "About me section"
    },
    {
      no: 3,
      title: "Protofolio",
      desc: "isi Protofolio project"
    },
    {
      no: 4,
      title: "Stack",
      desc: "isi Stack yang dikuasai"
    },
    {
      no: 5,
      title: "Get in TTouch",
      desc: "isi Get in Touch section"
    },
    {
      no: 6,
      title: "Footbar",
      desc: "isi Footbar section"
    },
  ]

  const referenceContent: ListContent[] = [
    {
      no: 1,
      title: "Website-Portfolio-for-Dev--Community",
      desc: "https://www.figma.com/design/TedM7nQF8if7qWnDf2ZgWz/Website-Portfolio-for-Dev--Community-?node-id=1-1462&t=Zh3jVVUtMfPr9zZT-0"
    },
    {
      no: 2,
      title: "Personal-Portfolio-Free-Template--Community---Community",
      desc: "https://www.figma.com/design/F6YfvplLHeaEc41Yweh5tg/Personal-Portfolio-Free-Template--Community---Community-?node-id=0-1&p=f&t=C2ZN2X8Aq7yK69vG-0"
    },
    {
      no: 3,
      title: "Portfolio-UI---Web---Mobile--Community",
      desc: "https://www.figma.com/design/7y4KIqGgbiXbEednQlO8zm/Portfolio-UI---Web---Mobile--Community-?node-id=0-1&p=f&t=ULZY1gp0RV1q3YLZ-0"
    },
    {
      no: 4,
      title: "Dark-Portfolio-Website-Sketch--Community",
      desc: "https://www.figma.com/design/eXjKL8DTVCpMNJtIq2wK6D/Dark-Portfolio-Website-Sketch--Community-?node-id=0-1&p=f&t=wGjkG5pfAZhgCYnb-0"
    },
    {
      no: 5,
      title: "Portfolio-Website-Design",
      desc: "https://www.figma.com/community/file/1175755450846438274/portfolio-website-design?after-auth-duplicate-file-id=1175755450846438274"
    }
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            List Konten pada halaman ini
          </h1>
          <ul className="">
            {dataContent.map((content) => (
              <li className="mb-2" key={content.no}>
                <h1>{content.no}. {content.title}</h1>
                <p>Description: {content.desc}</p>
              </li>
            ))}
          </ul>
          <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            Reference Konten pada halaman ini
          </h1>
          <ul className="">
            {referenceContent.map((content) => (
              <li key={content.no}>
                <div className="flex flex-col items-center mb-2 text-center sm:items-start sm:text-left">
                  <h1>{content.no}. {content.title}</h1>
                  <p>Link : <a href={content.desc} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {content.desc}
                  </a></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>  */}
      </main>
    </div>
  );
}
