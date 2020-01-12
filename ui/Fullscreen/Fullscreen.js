/* Full Screen Mode **
**     Bugsounet    **
**********************/


class AssistantResponse extends AssistantResponseClass{
  constructor (responseConfig, callbacks) {
    super(responseConfig, callbacks)
  }
 
  getDom () {
    var dom = document.createElement("div")
    dom.id = "AMK2"
    dom.className = "hidden"
    
    var contener = document.createElement("div")
    contener.id = "AMK2_CONTENER"

    var status = document.createElement("div")
    status.id = "AMK2_STATUS"
    contener.appendChild(status)

    var transcription = document.createElement("div")
    transcription.id = "AMK2_TRANSCRIPTION"
    contener.appendChild(transcription)
    
    var logo = document.createElement("div")
    logo.id = "AMK2_LOGO"
    contener.appendChild(logo)
    
    dom.appendChild(contener)

    var chime = document.createElement("audio")
    chime.id = "AMK2_CHIME"
    chime.autoplay = true;
    dom.appendChild(chime)
    
    super.getDom()
    return dom
  } 
 
  prepare () {
    var dom = document.createElement("div")
    dom.id = "AMK2_HELPER"
    dom.classList.add("hidden")

    var scoutpan = document.createElement("div")
    scoutpan.id = "AMK2_RESULT_WINDOW"
    var scout = document.createElement("iframe")
    scout.id = "AMK2_SCREENOUTPUT"
    scoutpan.appendChild(scout)
    dom.appendChild(scoutpan)
    var auoutpan = document.createElement("div")
    var auout = document.createElement("audio")
    auout.id = "AMK2_AUDIO_RESPONSE"
    auout.autoplay = true;
    auout.addEventListener("ended", ()=>{
      this.callbacks.doPlugin("onAfterAudioResponse")
      console.log("audio end")
      this.end()
    })
    auoutpan.appendChild(auout)
    dom.appendChild(auoutpan)
    document.body.appendChild(dom)
    super.prepare()
  }

  fullscreen (active, status) {
    var AMK2 = document.getElementById("AMK2")
    clearTimeout(this.displayTimer)
    this.displayTimer = null
    if (active && !(this.secretMode || this.sayMode)) {
      MM.getModules().exceptWithClass("MMM-AssistantMk2").enumerate(function(module) {
        module.hide(15, {lockString: "AMK2_LOCKED"})
      })
      AMK2.classList.remove("hidden")
      AMK2.classList = "in"
    } else  if(!(this.secretMode || this.sayMode)) {
      if (status && status.actual == "standby") { // only on standby mode
        AMK2.classList.remove("in")
        AMK2.classList = "out"
        this.displayTimer = setTimeout (() => {
          if (status.actual == "standby") { // check again for hidden
            MM.getModules().exceptWithClass("MMM-AssistantMk2").enumerate(function(module) {
              module.show(1000, {lockString: "AMK2_LOCKED"})
              AMK2.classList.add("hidden")
            })
          }
        }, 1000) // timeout set to 1s for fadeout
      }
    }
    super.fullscreen(active, status)
  }
}
