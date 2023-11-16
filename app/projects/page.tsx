import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";


const projects = [
	{
		// icon: <Instagram size={20} />,
		href: "https://github.com/elaineleiyoung/StakeTheStigma",
		label: "Stake the Stigma is a project aimed at destigmatizing women's health topics by providing a personalized dashboard experience for users. The goal of this project is to make it easier for people to access and search for specific articles and insights related to women's health topics. The project aims to increase awareness and communication.",
		handle: "Stake the Stigma",
    image: "https://github.com/elaineleiyoung/StakeTheStigma/blob/master/assets/screenshot2.png?raw=true",
	},
	{
		// icon: <Linkedin size={20} />,
		href: "https://github.com/elaineleiyoung/CS411-B2-9",
		label: "Developed a dynamic Spotify app using React, Firebase, Express, and Node.js to deliver personalized music recommendations based on location and weather conditions.",
		handle: "Spotify Song Recommender",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarcas-logos.net%2Fwp-content%2Fuploads%2F2019%2F11%2FSimbolo-Spotify.jpg&f=1&nofb=1&ipt=672d8de7be9d11028fb9690a1d35c0f37dec5c7f1bda8409638af3ddd672f103&ipo=images",
	},
	{
		// icon: <Mail size={20} />,
		href: "https://github.com/elaineleiyoung/statistical-arbitrage",
		label: "Utilized Python and backtesting techniques to implement pre-existing statistical arbitrage strategies for Bitcoin and Ethereum, simulating practical experience in cryptocurrency trading and financial markets.",
		handle: "Statistical Arbitrage Model",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2F3%2F3%2F765105-technology-background-images-1920x1080-free-download.jpg&f=1&nofb=1&ipt=9300b2191ff2a793e5dd8814247de4022b45969f6389ec312089ed23687db02b&ipo=images",
	},
  {
		// icon: <Mail size={20} />,
		href: "https://github.com/elaineleiyoung/automated-textbook-downloader",
		label: "Web app using Flask and React to display information and download a given book , uses OpenLibrary API and Library Genesis to access book information and files.",
		handle: "Automated Textbook Downloader",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1387022%2Fpexels-photo-1387022.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-amanda-george-1387022.jpg%26fm%3Djpg&f=1&nofb=1&ipt=0560886fd3782b9033e6d7fda1260b7820c7224b291a14930f842869ffb7ba30&ipo=images",
	},
	// {
	// 	icon: <Github size={20} />,
	// 	href: "https://github.com/elaineleiyoung",
	// 	label: "Github",
	// 	handle: "elaineleiyoung",
	// },
];

export default function Projects() {
	return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex">
        <Navigation />
        <div className="container grid grid-cols-3 gap-4 min-h-screen px-10 py-30 mx-auto">
          <div className="col-span-1">
            <h1 className="z-10 fixed top-1/2 transform -translate-y-1/2 text-white text-edge-outline font-display sm:text-5xl md:text-8xl">
              Projects
            </h1>
          </div>
          <div className="col-span-2 transform translate-x-20">
  <div className="container self-end flex-col outline md:outline outline-white items-end px-10 py-20">
    {projects.map((p) => (
      <div className="my-10">
        <Card>
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center backg blur-md"
            style={{
              backgroundImage: `url(${p.image})`, // Replace with the URL of the image
            }}
          ></div>
          <Link
            href={p.href}
            target="_blank"
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
          >
            
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            {/* <span>{p.icon}</span>{" "} */}
            <div className="z-10 flex flex-col items-center">
              <span className="text-xl font-medium duration-150 lg:text-3xl text-black font-display">
              {/* <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 text-black group-hover:text-white font-display"> */}
                {p.handle}
              </span>
              <span className="mt-4 text-sm text-center duration-1000  text-black ">
              {/* <span className="mt-4 text-sm text-center duration-1000 text-zinc-400  text-black group-hover:text-zinc-200"> */}
                {p.label}
              </span>
            </div>
          </Link>
          
        </Card>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
      




    );
}