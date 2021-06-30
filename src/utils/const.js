export const onAdd = (counter) => {
    let m;
    if (counter === 1) {
        m = `Se agregó ${counter} producto.`
    } else {
        m = `Se agregaron ${counter} productos.`
    };

    alert(m);
};