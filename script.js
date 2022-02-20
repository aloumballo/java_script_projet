/* <!-- <DIV id="block">
<div class="icon">
    <div class="icon1" id="item1"><img src="write.svg" alt="">
    </div>
    <div class="icon2" id="item2"> <img src="trash.svg" alt="">
    </div>

</div>
<textarea name="" id="" cols="30" rows="10"></textarea>
</DIV>
--> */
//fonction pour afficher
function affiche() {
    const btn=document.getElementById('button');
    btn.addEventListener('click',()=>{
    const conteneur=document.querySelector('.conteneur');
    const block=document.createElement('div');
    const icon=document.createElement('div');
    const icon1=document.createElement('div');
    const icon2=document.createElement('div');
    const im1=document.createElement('img');
    const im2=document.createElement('img');
    const txta=document.createElement('textarea');

    //organisation des elements
    conteneur.appendChild(block);
    block.appendChild(icon);
    block.appendChild(txta);
    icon.appendChild(icon1);
    icon.appendChild(icon2);
    icon1.appendChild(im1);
    icon2.appendChild(im2);
    
    //creation class
    block.setAttribute('class','block');
    icon.setAttribute('class','icon');
    icon1.setAttribute('class','icon1');
    icon2.setAttribute('class','icon2');
    im1.setAttribute('class','im1');
    im2.setAttribute('class','im2');

    /* txta.seyAttribute('class','txta'); */
    /*  txta.setAttribute('class','')  */

     im2.addEventListener('click',function(){
        conteneur.removeChild(block);
    })
        im1.addEventListener('click',function(){
        txta.toggleAttribute('disable');
        txta.focus();
    })  
    /* txta.addEventListener('click',function(){
        conteneur.removeChild(conteneur);
    }) */
   }) 
}
affiche();