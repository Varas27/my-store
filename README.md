NeBeA. Venta de indumentaria de los equipos de la NBA.
Proyecto para el curso de React Js de Coderhouse.

Se incluyeron estas dependencias extras:

.react-icons: Incluye una recopilación de muchas librerias de íconos (FontAwesome, Bootstrap, Material Design, entre ellas).

.react-loader-spinner: Sencilla implementación y suficiente variedad de diseños.

Se crearon 3 contenedores:

.HomeContainer: Contiene al ItemListContainer.

.ItemListContainer: Recibe los productos del json y los pasa como prop a ItemList. ItemList hace un map del array y le pasa un objeto como prop a Item. Item le manda las propiedades del objeto a Card y este las utiliza para realizar las cards de los productos. Si recibe la categoría mediante parámetro por ruta, filtra las cards a mostrar con un filter.

.ItemDetailContainer: Al clickear en el boton "ver más" de las card, navega hasta ItemDetailContainer y recibe el id del producto mediante parámetro por ruta. Le manda el objeto mediante prop a ItemDetail y después de 2 segundos, lo renderiza. El detalle (Título, descripción, precio y foto) del producto se hacen visibles, también muestra un contador de items (ItemCount).