// Import images
import WebImage1 from '/src/assets/web-project-1.jpg';
import WebImage2 from '/src/assets/web-project-2.jpg';
import MobileImage1 from '/src/assets/mobile-project-1.jpg';
import MobileImage2 from '/src/assets/mobile-project-2.jpg';
import UIImage1 from '/src/assets/ui-project-1.jpg';
import UIImage2 from '/src/assets/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Google Health Platform',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Feb 26, 2024',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: WebImage1,
	},
];
