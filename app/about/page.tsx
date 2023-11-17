"use client";
import { Github, Mail, Twitter } from "lucide-react";
import { Navigation } from "../components/nav";

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
	return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-6 py-20 mx-auto">
				<h1 className="text-3xl font-medium duration-150 lg:text-5xl text-white font-display">
					About Me
				</h1>
				<div className="prose prose-white mt-4">
					<p className="text-white">
						{/* Hi there! 👋  */}
						To Whom It May Concern,
						<br></br><br></br> 
						I'm Elaine, thanks for finding my website! Feel free to take a look around and learn more about me.
					</p>
					<h2 className="text-2xl font-semibold mb-2 text-white">Who I Am</h2>
					<p className="text-white">
						I'm an undergraduate at Boston University studying Computer Science with minors in Economics and Philosophy. 
						I grew up in the Bay Area, and I hope to return there for a full-time job in the future.
						I'm interested in software and data engineering, devops, and AI/ML.

					</p>
					<h2 className="text-2xl font-semibold mb-2 text-white">What I've Done</h2>
						<ul className="list-disc list-inside text-white">
							<li>I'm an incoming Engineering Summer Analyst at Goldman Sachs.</li>
							<li>I am currently an Undergraduate Researcher at Boston University's Department of Computer Science.</li>
							<li>This summer, I was a Hybrid Cloud Data Engineer Intern at Nutanix.</li>
							<li>In Spring 2023, I took part in Meta's Above and Beyond Computer Science Program, Citi's Early ID Technology Program, and SIG's Trading Discovery Day.</li>
							<li>Back in Summer 2022, I was part of Major League Hacking's Production Engineering Fellowship. </li>
							<li>From 2019 - 2021, I was a teaching assistant at MT Learning Center for Geometry, Algebra, Precalculus, and SAT Prep. </li>
							{/* Add more bullet points as needed */}
						</ul>

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
						{/* Check out my favorite songs from this last year: */}
						{/* <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
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
