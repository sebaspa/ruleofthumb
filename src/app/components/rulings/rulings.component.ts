import { Component, OnInit, Renderer } from '@angular/core';
import { charactersService, Character } from '../../services/characters.service';

@Component({
	selector: 'app-rulings',
	templateUrl: './rulings.component.html'
})
export class RulingsComponent implements OnInit {

	characters: Character[] = [];
	voting = false;
	voted = false;
	typeVote = true;
	idArtist = 0;

	// votes = {
	// 	voting: false,
	// 	voted: false,
	// 	typeVote: true,
	// 	idArtist: 0,
	// 	getTypeIdVote: function(typeVote, id) {
	// 		this.typeVote = typeVote;
	// 		this.idArtist = id;
	// 	},
	// 	vote: function() {
	// 		console.log(this.typeVote, this.idArtist);
	// 		if (this.typeVote) {
	//
	// 		}
	// 	}
	// };


	constructor(private _charactersService: charactersService, private render: Renderer) {

	}

	ngOnInit() {
		this.characters = this._charactersService.getCharacters();
		//console.log(this.characters);

	}

	vote(id: number) {
		this.voting = true;
		setTimeout(() => {
			this.voting = false;
			this.voted = true;
			if (this.typeVote) {
				this.characters[id].votes['likes'] += 1;
			}
			else {
				this.characters[id].votes['dislikes'] += 1;
			}
			localStorage.setItem("characters", JSON.stringify(this.characters));
		}, 3000);

	}

	seltypeVote(typeVote: boolean, id: number) {
		document.getElementsByClassName("btn-view-full")[0].setAttribute("disabled", "disabled");
		document.getElementById("btn-vote-now-" + id).removeAttribute("disabled");
		this.render.setElementClass(event.target, "active", true);


		this.voted = false;
		this.voting = false;
		this.typeVote = typeVote;
		this.idArtist = id;

		//this.votes.getTypeIdVote(typeVote, id);
		// console.log(this.votes.voting);

	}

}
