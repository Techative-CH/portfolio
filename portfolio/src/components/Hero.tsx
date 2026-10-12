const Hero: React.FC = () => {
	return (
		<section className="hero" id="home">
			<p className="hero-label">DEVELOPER & PHOTOGRAPHER</p>

			<h1>
				Curious about
				<br />
				<span>how things work.</span>
			</h1>

			<p className="hero-description">
				<span>Computer Science student at SUPSI,</span>
				<span>passionate about software development, cybersecurity and photography.</span>
				<span>Based in Ticino, Switzerland.</span>
			</p>

			<div className="hero-links">
				<a href="#projects">Explore my projects</a>
				<a href="#photography">Discover my photography</a>
			</div>
		</section>
	);
};

export default Hero;
