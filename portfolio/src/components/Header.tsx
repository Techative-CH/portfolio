const Header: React.FC = () => {
	return (
		<header className="header">
			<a className="logo" href="#">
				Samuel Banfi
			</a>

			<nav>
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="#photography">Photography</a>
			</nav>
		</header>
	);
};

export default Header;
