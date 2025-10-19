
const hero = document.querySelector(".hero");
if (hero)
{
gsap.from(".hero", {opacity: 0, y:100, duration: 1});
}

	gsap.from(".wrapper", 
		{
			opacity: 0, 
			y:100, 
			duration: 1
		}
	);
	