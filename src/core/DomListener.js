import {capitalize} from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root in class DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMetodName(listener)
      if (!this[method]) {
        throw new Error('do not realize method :' + `${method}` + `in ${this.name || ''} Component`)
      }
      this[method] = this[method].bind(this)
      //тоже самое что и addEventlistener
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMetodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

// input --> onInput
function getMetodName(eventName) {
  return 'on' + capitalize(eventName)
}