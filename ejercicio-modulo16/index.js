const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const eliminar = document.querySelector(".imagen-papelera")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma");
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)

    })

    parrafo.addEventListener("dragend", () => {
      parrafo.classList.remove("dragging");
    });
})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover", (event)=>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
        //console.log('Drag Over')
    })
   
    seccion.addEventListener("drop", (event)=>{
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
       // console.log('Parrafo id: ', id_parrafo)
       const parrafo = document.getElementById(id_parrafo)
       seccion.appendChild(parrafo)
    })
})


eliminar.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
});
 
eliminar.addEventListener("drop", event=>{
      const id_parrafo = event.dataTransfer.getData("id");
      document.getElementById(id_parrafo).remove()
});

  

