import React, { Component } from "react";
import './aboutMe.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import Camera from '@material-ui/icons/CameraEnhance';
import Flight from '@material-ui/icons/FlightLand';


export default class ParallaxScene extends Component {

	componentDidMount() {
		this.props.scrollComponentIntoView(this.aboutmeScene, "aboutmeScene")
	}

	render() {
		return (
			<section className="aboutMe" ref={el => this.aboutmeScene = el}>
				<p>My Journey So Far</p>
				<div className="header">
					{/* <img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/timeline.svg" /> */}
					<VerticalTimeline>
					<VerticalTimelineElement
							className="vertical-timeline-element--education"
							date="Graduating Fall 2019"
							iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
							icon={<SchoolIcon />}
						>
							<h3 className="vertical-timeline-element-title">Master's in Computer Science, CSI City University of New York</h3>
							<h4 className="vertical-timeline-element-subtitle">Master's Degree</h4>
							<p>
								Coursework: Advanced algorithms and data structures, machine learning and data mining, digital image processing, deep learning
    </p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="Aug 2019 - Present"
							iconStyle={{ background: 'rgb(41, 128, 185)', color: '#fff' }}
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">NYC Human Resources Administration</h3>
							<h4 className="vertical-timeline-element-subtitle">Software engineering Intern Fall semester</h4>
							<p>
								Legacy code migration, improvising database performance by employing advanced indexing strategies, user experience,
    </p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="April 2019 - August 2019"
							iconStyle={{ background: 'rgb(41, 128, 185)', color: '#fff' }}
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">Seaquake IO</h3>
							<h4 className="vertical-timeline-element-subtitle">Machine Learning Engineer Summer Intern</h4>
							<p>
								Simulating quantitative models in line with risk profiles, stress testing trading strategies, test new algorithmic trading strategies using machine learning techniques
    </p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="August 2018 - April 2019"
							iconStyle={{ background: 'rgb(26, 188, 156)', color: '#fff' }}
							icon={<Camera />}
						>
							<h3 className="vertical-timeline-element-title">Mid course achivements</h3>
							<h4 className="vertical-timeline-element-subtitle">CSI, City University of New York</h4>
							<ul>
								<li>Hosted a radio show at the WSIA FM</li>
								<li>Winner of the football championship at CSI</li>
								<li >Awarded the CSI academic excellence scholarship for 2019</li>
								<a href="https://samcasmbucket.s3.us-east-2.amazonaws.com/wsia_radio.jpg" target="_blank">
									<img id="radio_img" src="https://samcasmbucket.s3.us-east-2.amazonaws.com/wsia_radio.jpg"/>
								</a>
							</ul>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							date="August 2018"
							iconStyle={{ background: 'rgb(142, 68, 173)', color: '#fff' }}
							icon={<Flight />}
						>
							<h3 className="vertical-timeline-element-title">Landed in America</h3>
							<h4 className="vertical-timeline-element-subtitle">Master's degree commences</h4>
							<h4 className="vertical-timeline-element-subtitle">Computer Science</h4>

							
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="September 2017 - September 2018"
							iconStyle={{ background: 'rgb(41, 128, 185)', color: '#fff' }}
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">Velotio technologies</h3>
							<h4 className="vertical-timeline-element-subtitle">Software developer</h4>
							<p>
								Designed and developed front-end data flows for the entire team, responsible for rapid prototyping and interviewing prospective candidates for strong algorithmic skills
    </p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="September 2016 - September 2017"
							iconStyle={{ background: 'rgb(41, 128, 185)', color: '#fff' }}
							icon={<WorkIcon />}
						>
							<h3 className="vertical-timeline-element-title">Coditas technologies</h3>
							<h4 className="vertical-timeline-element-subtitle">Software developer</h4>
							<p>
								Resolved critical bugs to facilitate product launch, assisted technical lead with interviewing, trained new hires to the current stack
    </p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							date="May 2015"
							iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
							icon={<SchoolIcon />}
						>
							<h3 className="vertical-timeline-element-title">Bachelor's degree in computer engineering</h3>
							<h4 className="vertical-timeline-element-subtitle">Dr. D.Y. Patil College of Engineering, Pune University</h4>
							<p>
								Coursework: Data structures and algorithms, Discrete structures, Microprocessors and interfaces, Advanced database systems, Principles of programming languages
    </p>
						</VerticalTimelineElement>
						
					</VerticalTimeline>
				</div>
				<ul className="footer">
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/GitHub-Mark-Light-120px-plus.png" alt="" /><a className="long_text" target="_blank" href="https://github.com/samcasm">Checkout my github</a><a className="short_text" target="_blank" href="https://github.com/samcasm">Github</a></li>
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/resume-icon.png" alt="" /><a download="samir_resume" className="long_text" href="https://samcasmbucket.s3.us-east-2.amazonaws.com/resume.pdf">Download resume</a><a download="samir_resume" className="short_text" href="https://samcasmbucket.s3.us-east-2.amazonaws.com/resume.pdf">Resume</a></li>
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/email-icon.png" alt="" /><a target="_top" className="long_text" href="mailto:samir7kutty@gmail.com">Email Me</a><a target="_top" className="short_text" href="mailto:samir7kutty@gmail.com">Email</a></li>
				</ul>
			</section>
		);
	}
}