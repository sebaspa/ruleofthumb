import { Injectable } from '@angular/core';

@Injectable()
export class charactersService {

	private characters: Character[] = [
		{
			id: 1,
			name: 'Kanye West',
			desc: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			img: '/assets/images/artists/kany-west.jpg',
			month: '1',
			type: 'Entretainment',
			votes: {
				likes: 64,
				dislikes: 36
			}
		},
		{
			id: 2,
			name: 'Mark Zuckerberg',
			desc: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			img: '/assets/images/artists/mark.jpg',
			month: '1',
			type: 'Bussines',
			votes: {
				likes: 30,
				dislikes: 70
			}
		},
		{
			id: 3,
			name: 'Cristina Fernández de Kirchner',
			desc: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			img: '/assets/images/artists/cristina.jpg',
			month: '1',
			type: 'Politics',
			votes: {
				likes: 50,
				dislikes: 50
			}
		},
		{
			id: 4,
			name: 'Malala Yousafzai',
			desc: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
			img: '/assets/images/artists/malala.jpg',
			month: '1',
			type: 'Entretainment',
			votes: {
				likes: 80,
				dislikes: 20
			}
		},

	];

	constructor() {
		//console.log("Servicio listo para usarse");
		// console.log(localStorage.getItem("characters"));
		if (!localStorage.getItem("characters") || localStorage.getItem("characters") == undefined) {
			localStorage.setItem("characters", JSON.stringify(this.characters));
		}

	}

	getCharacters(): Character[] {
		return JSON.parse(localStorage.getItem("characters"));
	}
}

export interface Character {
	id: number;
	name: string;
	desc: string;
	img: string;
	month: string;
	type: string;
	votes: object;
}
