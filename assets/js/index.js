document.getElementById("iniciar").addEventListener("click", function () {
    console.clear(); // limpiar consola

    // Formulario con los prompt
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const email = prompt("Por favor, ingresa tu correo electrónico:");
    const contraseña = prompt("Por favor, ingresa tu contraseña de al menos 8 caracteres:");

    // Validación de los datos ingresados

    let hayError = false; // Variable de Control

    if (!nombre || nombre.trim() === "") {
        console.log("Error: Debes ingresar tu nombre");
        hayError = true;
    }
    if (!email || email.trim() === "") {
        console.log("Error: Debes ingresar tu correo electrónico");
        hayError = true;
    }
    if (!contraseña || contraseña.trim() === "") {
        console.log("Error: Debes ingresar tu contraseña");
        hayError = true;
    }
    if (contraseña && contraseña.length < 8) {
        console.log("Error: La contraseña debe tener al menos 8 caracteres");
        hayError = true;    }

    if (hayError) {
        // En caso de existir al menos un error
        console.log("Registro FALLIDO. Por favor, corrige los errores y vuelve a intentarlo.");
    } else {
        // En caso de que todos los datos fueron ingresados correctamente quitando mensaje repetido
        console.log("¡REGISTRO EXITOSO!");
        console.log(`Bienvenido, ${nombre.trim()}`);
        console.log(`Tu correo: ${email}`);
        console.log(`Contraseña segura de ${contraseña.length} caracteres`);
        
    }

});