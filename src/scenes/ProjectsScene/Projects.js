import React, { Component } from "react";
import './projects.scss';
import gameOfLife from "../../assets/gameOfLife.png";
import motion_planning from "../../assets/motion_planning.png"


export default class Projects extends Component {
	redirectTo(url, e){
		e.stopPropagation()
		window.open(url, '_blank')
	}

	componentDidMount(){
		this.props.scrollComponentIntoView(this.projectsScene, "projectsScene")
	}

	render() {
		return (
			<section className="projects" ref={el => this.projectsScene = el}>
				<div className="header">
					<p>Noteworthy Projects</p>
				</div>
				<div className="project-images">
					<div>
						<div data-aos="fade-left" id="Eidetic">
							<a target="_blank" href="https://github.com/samcasm/Eidetic-the-beginning"></a>
							<img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/eidetic.jpeg" />
							<div className="inner-box"><p>Eidetic: photo management</p></div>
						</div>
						<div data-aos="fade-up">
							<a target="_blank" href="https://github.com/samcasm/gameOfLife"></a>
							<img src={gameOfLife} />
							<div className="inner-box"><p>Conway's game of life</p></div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/motion_planning"></a>
							<img src={motion_planning} />
							<div className="inner-box"><p>Robot motion planning</p></div>
						</div>
					</div>
					
				</div>
			</section>
		);
	}
}