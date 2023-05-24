function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('mymodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="mymodal__overlay" data-close="true">
            <div class="mymodal__window">
                <div class="mymodal__header">
                    <h3 class="mymodal__title_h3">${options.title}</h3>
                    <span class="mymodal__close" data-close="true"><i class="fa-solid fa-rectangle-xmark" data-close="true"></i></span>
                </div>
                <div class="mymodal__body">
                    <p class="name-location" id="location">Mersin</p>
                    <p class="name-location" id="location">Mersin</p>
                    <p class="name-location" id="location">Mersin</p>
                </div>
                <div class="mymodal__footer">
                    <button class="mymodal__button">Ok</button>
                    <button class="mymodal__button" data-close="true">Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal = function(options){
    const $modal = _createModal(options)
    const animation_sped = 300
    let closing = false

    const modal = {
        open(){
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hiden')
            setTimeout(() => {
                $modal.classList.remove('hiden')
                closing = false
            },animation_sped)
        },
    }

    $modal.addEventListener('click', event => {
        if(event.target.dataset.close){
            modal.close()
        }
    })

    return modal
}