import menuData from './menu.json';

export default (function(){
    //Part of first solution
    //const imagesPath = require.context('./food',false,/\.jpg$/i);

    function generatePage(){
        const container = document.createElement('div');
        container.classList.add('page');

        const header = document.createElement('h2');
        header.textContent = "Appetisers"
        container.append(header);

        menuData.appetisers.forEach(dish => {
            container.append(generateDish(dish));
        });

        menuData.mainCourses.forEach(dish => {
            container.append(generateDish(dish));
        });

        menuData.desserts.forEach(dish => {
            container.append(generateDish(dish));
        });


        return container;
    }

    function generateDish(dish){
        const container = document.createElement('div');
        container.classList.add('dish');

        const title = document.createElement('h3');
        title.textContent = dish.title;

        const image = document.createElement('img');

        /* First solution
        const imgSrc = imagesPath.keys().find(imageSrc => (`./${dish.title.toLowerCase()}.jpg` === imageSrc));
        if(imgSrc){
            image.src = imagesPath(imgSrc);
        }*/

        //Second solution, which is better I think
        import(`./food/${dish.title.replace(/\ /g,'-').toLowerCase()}.jpg`)
            .then(({default: imageSrc}) => {
                
                image.src = imageSrc;
            })
            .catch((error) => console.log(`Error: "${dish.title}" dish is missing image`))

        const description = document.createElement('div');
        description.textContent = dish.description;

        const price = document.createElement('div');
        price.textContent = `${dish.price} Ac`;

        container.append(title,image,description,price);

        return container;
    }

    return {generatePage}
})();