import proyects from './proyectsarray.json' assert { type: "json" };


const contenedor = document.querySelector("#proyectos")

proyects.forEach((proyect)=>{
    const div = document.createElement("div")
    div.classList = "contenedor"
    div.innerHTML = ` <div>
                    <h1><box-icon type='solid' name='checkbox-minus'></box-icon>${proyect.title}</h1>
                    <p>${proyect.rol}</p> 
                    </div>
    <p>${proyect.text}</p>
    <img src="${proyect.img}" alt="">
    <a href="${proyect.url}">Click here</a>
    `
    contenedor.appendChild(div)
})

console.log(typeof proyects)

