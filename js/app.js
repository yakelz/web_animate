document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');

	burger.addEventListener('click', function () {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 3,
		effects: true
	})


	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '1000',
			scrub: true
		}
	})


	TweenMax.staggerFrom("nav ul li", 1, {
		opacity: 0,
		x: -20,
		ease: Power3.easeInOut
	}, 0.08)

	const image = document.querySelector('.alice__off');
	gsap.to(image, {
		duration: 2,
		opacity: 0,
		repeat: -1,
		yoyo: true,
	});

	let itemsL = gsap.utils.toArray('.sound__title > *');

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: "top 90%",
				end: "bottom 70%",
				scrub: true
			}
		})
	})


	gsap.set(".sound__image img", { y: -200 });

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".sound__image",
			start: "top center",
			end: '-40',
			scrub: true
		}
	});
	tl.to(".sound__image img:nth-child(6)", { y: 0, opacity: 1, duration: 0.6 })
		.to(".sound__image img:nth-child(5)", { y: 0, opacity: 1, duration: 0.6 })
		.to(".sound__image img:nth-child(4)", { y: 0, opacity: 1, duration: 0.6 })
		.to(".sound__image img:nth-child(3)", { y: 0, opacity: 1, duration: 0.6 })
		.to(".sound__image img:nth-child(2)", { y: 0, opacity: 1, duration: 0.6 })
		.to(".sound__image img:nth-child(1)", { y: 0, opacity: 1, duration: 0.6 });


}

