///////////////////
/******D.O.M******/
///////////////////

//1. Elementos del formulario
const form = document.querySelector('.form-add-content');
const formPreviewImage = document.querySelector('.form-preview-image');
const formNameInput = document.querySelector('.form-name-input');
const formPriceInput = document.querySelector('.form-price-input');
const formImageInput = document.querySelector('.form-image-input');
const formDescriptionTextarea = document.querySelector('.form-description-textarea');
const formButtonAddImage = document.querySelector('.form-button-add-image');
const formButtonReset = document.querySelector('.form-button-reset');

//2. Container de productos
const containerProducts = document.querySelector('.container-products');

//3. Botones de options
const btnGetContent = document.querySelector('.button-get-content');
const buttonLogout = document.querySelector('.button-logout');

///////////////////////
/******FUNCIONES******/
///////////////////////

/**** OPERACIONES CRUD ****/
//1. Envios de datos del formulario al server (CRUD - POST)
const sendFormData = async () => {
  const formData = new FormData(form);
  try {
    const response = await fetch('http://localhost:8080/admin/products', {
      method: 'POST',
      body: formData
    });
    const { msg } = await response.json();
    console.log(`Response received from server: ${msg}`);
    containerProducts.innerHTML = '';
    const data = await getAllData();
    for (let i = 0; i < data.length; i++) {
      renderAll(data[i], i);
    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

//2. Obtener todos los datos del server (CRUD - GET)
const getAllData = async () => {
  try {
    const response = await fetch(`http://localhost:8080/admin/products/`);
    const { msg, result } = await response.json();
    console.log(`Response received from server: ${msg}`);
    return result;
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

//2. Obtener un dato del server (CRUD - GET)
const getData = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/admin/products/${id}`);
    const { msg, result } = await response.json();
    console.log(`Response received from server: ${msg}`);
    return result;
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

//3. Envios de datos del producto editado al server (CRUD - PUT)
const sendData = async (httpMethod, data, idproduct) => {
  const jsonData = JSON.stringify(data);
  try {
    const response = await fetch(`http://localhost:8080/admin/products/${idproduct}`, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    });
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Server responded with a status of ${response.status}`);
    }
    const { msg } = await response.json();
    console.log(`Response received from server: ${msg}`);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

//4. Eleminacion de recurso en el server (CRUD - DELETE)
const deleteResource = async (resourceId) => {
  try {
    const response = await fetch(`http://localhost:8080/admin/products/${resourceId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`Server responded with a status of ${response.status}`);
    }
    const { msg } = await response.json();
    console.log(`Response received from server: ${msg}`);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

//5. Cerrar sesion
const logout = async () => {
  try {
    const response = await fetch(`http://localhost:8080/logout`);
    const { msg, redirect } = await response.json();
    console.log(msg);
    if (redirect === '/login') {
      window.location.replace(`http://localhost:8080/login`);
    } else {

    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}

/**** FUNCIONALIDADES ****/
//1. Reset de los campos del formulario
const resetForm = () => {
  formPreviewImage.src = './images/preview-image.jpg';
  formNameInput.value = '';
  formPriceInput.value = '';
  formDescriptionTextarea.value = '';
}

//2. Renderizar recursos del servidor
const renderAll = (data, idNum) => {
  const newElement = document.createElement('div');
  const map = new Map();
  newElement.classList.add('product-card');
  //Esta linea de codigo me permite agregar un id en funcion del id que esta en la base de datos
  newElement.id = data.id;
  //newElement.id = idNum + 1;
  map.set('id', newElement.id);
  newElement.innerHTML = `
    <div class="product-image-container">
        <img class="product-image" src="${data.image}" alt="product-image">
    </div>
    <div class="product-details">
        <h2 class="product-name-title">Nombre:</h2>
        <input type="text" class="product-name" name="product-name" value="${data.name}" disabled>
        <br>
        <h2 class="product-price-title">Precio:</h2>
        <input type="text" class="product-price" name="product-price" value="${data.price}" disabled>
        <br>
        <h2 class="product-description-title">Descripción:</h2>
        <input type="text" class="product-description" name="product-description" value="${data.description}"
          disabled>
        <br>
        <button class="edit-button-product">Editar</button>
        <button class="delete-button-product">Eliminar</button>
    </div>
  `;
  containerProducts.append(newElement);
  const buttonEdit = newElement.querySelector('.edit-button-product');
  buttonEdit.addEventListener('click', async () => {
    const productName = newElement.querySelector('.product-name');
    const productPrice = newElement.querySelector('.product-price');
    const productDescription = newElement.querySelector('.product-description');
    if (productName.hasAttribute('disabled')) {
      // Cambiar el texto del botón a "Guardar"
      buttonEdit.textContent = "Guardar";
      // Habilitar todos los campos para editar y cambiar el fondo
      productName.removeAttribute('disabled');
      productName.classList.add('editing');
      productName.addEventListener('change', () => {
        //console.log(productName.value);
        map.set('name', productName.value);
      });
      productPrice.removeAttribute('disabled');
      productPrice.classList.add('editing');
      productPrice.addEventListener('change', () => {
        //console.log(productPrice.value);
        map.set('price', productPrice.value);
      });
      productDescription.removeAttribute('disabled');
      productDescription.classList.add('editing');
      productDescription.addEventListener('change', () => {
        //console.log(productDescription.value);
        map.set('description', productDescription.value);
      });

    } else {

      if (buttonEdit.textContent === "Guardar") {
        console.log(map);
        const dataObj = {
          name: map.get('name'),
          price: map.get('price'),
          description: map.get('description')
        }
        await sendData('PUT', dataObj, newElement.id);
        // Deshabilitar todos los campos de entrada y volver al fondo original
        productName.setAttribute('disabled', 'true');
        productName.classList.remove('editing');
        productPrice.setAttribute('disabled', 'true');
        productPrice.classList.remove('editing');
        productDescription.setAttribute('disabled', 'true');
        productDescription.classList.remove('editing');
        // Cambiar el texto del botón de vuelta a "Editar"
        buttonEdit.textContent = "Editar";
        //map.clear();
      } else {
        console.log('Error')
      }
    }
  });

  const buttonDelete = newElement.querySelector('.delete-button-product');
  buttonDelete.addEventListener('click', () => {
    deleteResource(newElement.id);
    newElement.remove();
  });

}

/////////////////////
/******EVENTOS******/
/////////////////////

//1. Evento submit del form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendFormData();
  resetForm();
});

//2. Evento click para activar el input de imagen
formButtonAddImage.addEventListener('click', () => {
  formImageInput.click();
});

//3. Evento change del input de imagen para mostrar la imagen previa
formImageInput.addEventListener('change', function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    formPreviewImage.src = e.target.result;
  };
  reader.readAsDataURL(this.files[0]);
});

//4. Evento click para resetear el formulario manualmente
formButtonReset.addEventListener('click', resetForm);

//5. Evento click para obtener obtener los recursos del server y renderizarlos
btnGetContent.addEventListener('click', async () => {
  containerProducts.innerHTML = '';
  const data = await getAllData();
  for (let i = 0; i < data.length; i++) {
    renderAll(data[i], i);
  }
});

//5. Evento click para cerrar la sesion
buttonLogout.addEventListener('click', async () => {
  await logout();
});

/////////////////
/*****TEST******/
/////////////////

window.addEventListener('DOMContentLoaded', async () => {
  const data = await getAllData();
  for (let i = 0; i < data.length; i++) {
    renderAll(data[i], i);
  }
});