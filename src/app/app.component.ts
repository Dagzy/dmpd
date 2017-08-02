import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	navShouldBe(){ //a function that determines whether or not the nav bar should appear. 
		var state: boolean
		var url = window.location.href
		var indexOfSlash: number
		for(var i = 0; i< url.length; i++){
			if(url[i] === '/'){
				indexOfSlash = i

			}
		}
		var urlEnd = url.substring(indexOfSlash, url.length)
		console.log(urlEnd)
		if(urlEnd === "/#login" || urlEnd === "/#signup"){
			state = false
		} else {
			state = true
		}
		return state
	}	
  title = 'app';
}
