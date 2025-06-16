document.getElementById("agregar").addEventListener("click",()=>{
    let tarea = document.createElement("div");
    tarea.textContent = "Nueva Tarea";
    tarea.classList.add("tarea");
    document.getElementById("contenedor2").appendChild(tarea);

});

document.getElementById("eliminar").addEventListener("click",()=>{
    let tareas = document.querySelectorAll(".tarea");
    if (tareas.length > 0) {
        tareas[tareas.length - 1].remove();
    } else {
        alert("No hay tareas para eliminar");
    }
});