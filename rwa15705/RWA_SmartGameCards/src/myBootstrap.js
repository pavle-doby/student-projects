import {generisiDomElement, generisiInput, generisiParagraf} from "./mydom.service.js";


function basciCardWithLinks(){
    const htmlString = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
    return htmlString;
}
function collapseButtonSetKartica(innerHTML = "prikazi se", id = 1, btnClass1 = "btn btn-primary",btnClass2 = "btn btn-success", text = "Pokreni test"){
    return `
    <p>
    <button class="${btnClass1}" 
    type="button" 
    data-toggle="collapse" 
    data-target="#collapseExample${id}" 
    aria-expanded="false" 
    aria-controls="collapseExample"
    >
        ${innerHtml}
    </button>
    <button type="button" class="${btnClass2}">${text}</button>
    </p>
    `
}
function collapseButton(innerHtml, id, btnClass = "btn btn-primary"){ //collapseExample
    const htmlString = `
    <p>
    <div class="${btnClass}" data-toggle="collapse" 
    data-target="#collapseExample${id}" aria-expanded="false" aria-controls="collapseExample"
    id="${id}">
    ${innerHtml}
    </div>
    </p>
    `;
    return htmlString;
}
function collapseButton1(innerHtml, id, btnClass = "btn btn-primary"){ //collapseExample
    const htmlString = `
    <p>
    <button class="${btnClass}" type="button" data-toggle="collapse" 
    data-target="#collapseExample${id}" aria-expanded="false" aria-controls="collapseExample"
    id="${id}">
        ${innerHtml}
    </button>
    </p>
    `;
    return htmlString;
}
function collapseExample(innerHtml, id){
    const htmlString = `
    <div class="collapse" id="collapseExample${id}">
        <div class="card card-body">
            ${innerHtml}
        </div>
    </div>`
    return htmlString;
}
function collapseExampleDOM(parent = document.body, id){
   
    const divCollapse = generisiDomElement("div","collapse","",parent);
    divCollapse.id = `collapseExample${id}`;
    const divCollapseCard = generisiDomElement("div","card card-body","",divCollapse);

    return divCollapseCard;

}
function basicCard(pojam, definicija){
    const htmlString = `
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${pojam}</li>
            <li class="list-group-item">${definicija}</li>
        </ul>
    </div>`;
    return htmlString;
}

function basicCardwithButton(pojam, definicija){
    return `
    <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${pojam}</h5>
                <p class="card-text">${definicija}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  </div>`;
}

function btnBootstrap(text, id = "",className = "btn btn-info",dataTargetIndex = ""){
    return `
    <p className="paragrafKontejner">
    <button 
        type="button" 
        class= '${className}'
        id = "${id}"
        data-target = "${dataTargetIndex}">
            ${text}
    
    </button>
    </p>`
}

function modalZaKarticu(){
    return `
    <div class="modal-body">
        <h5>Popover in a modal</h5>
        <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
            <hr>
        <h5>Tooltips in a modal</h5>
        <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
    </div>
    `
}
function btnForModal(innerHTML = "Laucn demo modal", className = "btn btn-primary", dataTarget = "exampleModalCenter"){
    return `
    <p>
    <button type="button" class="${className}" data-toggle="modal" data-target="#${dataTarget}">
        ${innerHTML}
    </button>
    </p>
    `;
}
function modal(){
    return `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `
}

function progressBar(id,progers=0){
    return `
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" 
        role="progressbar" 
        aria-valuenow="${progers}" 
        aria-valuemin="0" 
        aria-valuemax="100" 
        style="width: ${progers}%"
        data-id = "${id}>
        </div>
    </div>
    `;
}
export {
    progressBar,
    btnForModal,
    modalZaKarticu,
    modal,
    collapseExampleDOM,
    basciCardWithLinks,
    collapseButton,
    collapseExample,
    basicCard, 
    basicCardwithButton, 
    btnBootstrap, 
    collapseButtonSetKartica};