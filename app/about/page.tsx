"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		label: "Twitter",
		handle: "@chronark_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "dev@chronark.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		label: "Github",
		handle: "chronark",
	},
];

export default function About() {
	// return (
	// 	<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
	// 		<Navigation />
	// 		<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
	// 			<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
	// 				{socials.map((s) => (
	// 					<Card>
	// 						<Link
	// 							href={s.href}
	// 							target="_blank"
	// 							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
	// 						>
	// 							<span
	// 								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
	// 								aria-hidden="true"
	// 							/>
	// 							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
	// 								{s.icon}
	// 							</span>{" "}
	// 							<div className="z-10 flex flex-col items-center">
	// 								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
	// 									{s.handle}
	// 								</span>
	// 								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
	// 									{s.label}
	// 								</span>
	// 							</div>
	// 						</Link>
	// 					</Card>
	// 				))}
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-6 py-20 mx-auto">
				<h1 className="text-3xl font-medium duration-150 lg:text-5xl text-white font-display">
					About Me
				</h1>
				<div className="prose prose-white mt-4">
					<p className="text-white">
						Hi there! 👋 <br></br> I'm Elaine, welcome to my website!
						Let me take a moment to introduce myself.
					</p>
					<h2 className="text-2xl font-semibold mb-2 text-white">Who I Am</h2>
					<p className="text-white">
						I'm an undergraduate at Boston University studying Computer Science with minors in Economics and Philosophy. 
						I grew up in the Bay Area, and I hope to return there for a full-time job in the future.
						I'm interested in software and data engineering, devops, and AI/ML.

					</p>
					<h2 className="text-2xl font-semibold mb-2 text-white">What I've Done</h2>
						<ul className="list-disc list-inside text-white">
							<li>This summer, I was a Hybrid Cloud Data Engineer Intern at Nutanix.</li>
							<li>In Spring 2023, I took part in Meta's Above and Beyond Computer Science Program, Citi's Early ID Technology Program, and SIG's Trading Discovery Day.</li>
							<li>Back in Summer 2022, I was part of Major League Hacking's Production Engineering Fellowship. </li>
							<li>From 2019 - 2021, I was a teaching assistant at MT Learning Center for Geometry, Algebra, Precalculus, and SAT Prep. </li>
							{/* Add more bullet points as needed */}
						</ul>
						<h2 className="text-2xl font-semibold mb-2 text-white">Where I've Been</h2>
						<p className="text-white">
						I love to travel! I hope to travel more in the future, but check out this map of all the places I've been so far:
						<iframe
							src="https://staging.amcharts.com/visited_countries/view/#0-NA,US,TR,MX,KR,JP,IT,GR,FR,ES,GB,DE,CN,CA,AU"
							title="Visited Countries Map"
							width="100%"
							height="250" 
						/>
					</p>

					<h2 className="text-2xl font-semibold mb-2 text-white">What I like</h2>
						<p className="text-white">
						I grew up exploring lots of different things, so I have a pretty wide variety of interests. 
						<br></br>
						<br></br>
						I like playing golf and rock climbing. I've been golfing since 2016 and used to be on my high school's golf team.
						I recently started rock climbing, but I enjoy the accomplishment of solving and sending new routes.
						<br></br>
						<br></br>
						Speaking of problem solving, I am deeply passionate about solving puzzles and critical thinking. I think one of the best applications of these skills is through gaming!
						As such, I like to play many games, from chess and Dungeons and Dragons to League of Legends and Fortnite.
						<br></br>
						<br></br>
						I focus on music as a creative outlet. I grew up playing the cello and piano, and music has always been a big part of my life.
						Currently, I'm learning how to play classical guitar, but I love music of all genres. 
						<br></br>
						Check out my favorite songs from this last year:
						<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
						</p>

					<h2 className="text-2xl font-semibold mb-2 text-white">Let's Connect</h2>
					<p className="text-white">
						I'm excited to connect with fellow individuals who share similar passions and interests,
						so feel free to contact me -- check out my contact page.
						Don't hesitate to reach out if you have any questions or just want to have a chat!
					</p>
					<p className="text-white">
						Thank you for visiting my website, and I look forward to sharing more with you.
					</p>
					<br></br>
					<p className="text-white">Best regards,<br></br> Elaine Leiyoung</p>
				</div>
			</div>
        </div>
    );
}
