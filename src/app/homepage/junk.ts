
  storedMessages(){
    this.auth.getUser().getIdToken().then(a => {
      return a;
      let a = userId ,
      let storedMessages = []
      for (let i in this.messages){
        storedMessages.push ({this.messages[i].title, text: ''});
        for (const x in this.messages[i].parts){
          storedMessages[i].text += (this.pieces[i].parts[x].text);
        }
    }
      return storedMessages;
    }
    )
  }

}

  // filterMessages(){
  //       let filteredMessages = []
  //       for (let i in this.pieces){
  //           filteredMessages.push ({title: this.pieces[i].title, text: ''});
  //           for (const x in this.pieces[i].parts){
  //               console.log(filteredMessages[i].text);
  //               filteredMessages[i].text += (this.pieces[i].parts[x].text);
  //           }
  //       }
  //       return filteredMessages;
  //   }

  // testMessage(){
  //   this.auth.getUser().getIdToken().then(a => {
  //     console.log(a)
  //   	this.msgs.makeMessage(this.messages[1], a)
  //   	})

  // }
