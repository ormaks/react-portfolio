import React from 'react';
import '../../css/about.css';

let About = () => (
	<div className="about_content">
		<span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
		<div className="about_main">
			<span className="tag_h1">&lt;h1&gt;</span> <br/>
			<span className="text_h1"> About me </span> <br/>
			<span className="tag_h1">&lt;h1/&gt;</span> <br/>

			<p>Hello, I am 20-year-old student from Ukraine.</p>
			<p>Everything started with passion to web technologies (HTML, CSS). In 2016 I started to learn all
				about web development.</p>
			<p>Year later I got my first commercial work as a junior front-end developer in small agency located
				in UA, Lviv.
				There I first got acquainted with Angular.</p>
			<p>Having worked there for a couple of months I changed the job. It was a German company and I was
				as freelancer for a long-term job.</p>
			<p>In multinational team we where building large Single Page Application like HR tool using
				React.</p>
			<p>Now I'm testing myself in freelance, but I'm open to any suggestions!</p>
		</div>
		<div className="player">
			<iframe className="insta_iframe" width="320" height="440"
					src="https://www.instagram.com/p/BEl5FGdDP1R/embed" frameBorder="0"/>

			<iframe className="player_iframe" width="100%" frameBorder="0" title="music"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405996411&
                            color=%23000000&&hide_related=false&show_comments=true&show_user=true&
                            show_reposts=false&show_teaser=true"/>
		</div>
		<span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
	</div>
);

export default About;