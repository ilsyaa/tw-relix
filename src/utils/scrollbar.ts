class ScrollbarHelper {
    private _element: any

    constructor() {
        this._element = document.body
    }

    getWidth(){
        const documentWidth = document.documentElement.clientWidth
        return Math.abs(window.innerWidth - documentWidth)
    }

    hide(){
        const widthScrollbar = this.getWidth()
        this._element.style.overflow = 'hidden'
        this._element.style.paddingRight = `${widthScrollbar}px`
    }

    reset(){
        this._element.style.overflow = ''
        this._element.style.paddingRight = ''
    }
}

export default ScrollbarHelper