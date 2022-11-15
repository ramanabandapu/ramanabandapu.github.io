import "./Navbar.css";
export const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="navbar">
				<a href="#profile">Home</a>
				<a href="#about" style={{ margin: "10px" }}>
					About
				</a>
				<a href="#project" style={{ margin: "10px" }}>
					Project
				</a>

				<a href="#techStack">Technicall skills</a>

				<a href="#contact" style={{ margin: "10px" }}>
					Contact Me
				</a>
				<a href="#resume" style={{ margin: "10px" }}>
					Resume
				</a>
			</div>
		</div>
	);
};
