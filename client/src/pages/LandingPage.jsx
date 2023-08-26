import LandingWrapper from '../styled/pages/LandingWrapper';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiEventbrite } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import eventImg from '../assets/images/landing/event.svg';
import planImg from '../assets/images/landing/plan.svg';
import scheduleImg from '../assets/images/landing/schedule.svg';
import rsvpImg from '../assets/images/landing/rsvp.svg';

const LandingPage = () => {
	const iconSize = 30;
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<LandingWrapper>
			{showModal && 
				<div className="modal-container">
					<div className="modal">
						<div className="modal-header">
							<div className="app-name">
								<SiEventbrite size={iconSize} />
								<p>Event App</p>
							</div>
							<CgCloseR onClick={closeModal} size={iconSize} />
						</div>
						<div className="modal-menu">	
							<Link className="menu-link" to="/login">login</Link>
							<Link className="menu-link" to="/register">register</Link>
						</div>
					</div>
				</div>
			}
			<section className="top">
				<nav>
					<div className="app-name">
						<SiEventbrite size={iconSize} />
						<p>Event App</p>
					</div>
					<div className="login-register-btns">
						<Link className="btn btn-login" to="/login">Login</Link>
						<Link className="btn btn-register" to="/register">Register</Link>
					</div>
					<div className="hamburger-menu">
						<GiHamburgerMenu  onClick={openModal}/>
					</div>
				</nav>
				<div className="about">
					<div className="description">
						<h1>a new way of planning events for your organization</h1>
						<p>
							With this event management application, planning your
							next event becomes so much easier!
						</p>
						<p>
							Brings all the tasks and deadlines together onto a
							visual platform that helps you plan, schedule, and announce
							your events.
						</p>
						<div className="card-container">
							<div className="card">
								<div className="card-description">
									<h2>Planning</h2>
									<p>
										Determine the expected number of guests, location of the venue, and resources.
									</p>
								</div>
								<img src={planImg} className="card-img" />
								<p>Planning</p>
							</div>
							<div className="card">
								<div className="card-description">
									<h2>Scheduling</h2>
									<p>
										Schdule your event and send notifcations to everyone in your organization.
									</p>
								</div>
								<img src={scheduleImg} className="card-img" />
								<p>Scheduling</p>
							</div>
							<div className="card">
								<div className="card-description">
									<h2>RSVP</h2>
									<p>
										Request RSVP for your event and find out exactly how many guests are attending.
									</p>
								</div>
								<img src={rsvpImg} className="card-img" />
								<p>RSVP</p>
							</div>
						</div>
					</div>
					<div className="img-container">
						<div className="img-splash">
							<img src={eventImg} title="phone" />
						</div>
					</div>
				</div>
			</section>
		</LandingWrapper>
	);
};

export default LandingPage;