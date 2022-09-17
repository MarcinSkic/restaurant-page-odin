import menuData from './menu.json';

export default (function(){
    //Part of first solution
    //const imagesPath = require.context('./food',false,/\.jpg$/i);

    function generatePage(){
        const container = document.createElement('div');
        container.classList.add('page');
        container.classList.add('menu');


        const appetisersHeader = document.createElement('h2');
        appetisersHeader.textContent = "Appetisers"

        const appetisersCont = document.createElement('div');
        appetisersCont.classList.add('dishes');

        menuData.appetisers.forEach(dish => {
            appetisersCont.append(generateDish(dish));
        });

        container.append(appetisersHeader,appetisersCont);


        const mainCoursesHeader = document.createElement('h2');
        mainCoursesHeader.textContent = "Main Courses";

        const mainCoursesCont = document.createElement('div');
        mainCoursesCont.classList.add('dishes');

        menuData.mainCourses.forEach(dish => {
            mainCoursesCont.append(generateDish(dish));
        });

        container.append(mainCoursesHeader,mainCoursesCont);


        const dessertsHeader = document.createElement('h2');
        dessertsHeader.textContent = "Desserts";
        
        const dessertsCont = document.createElement('div');
        dessertsCont.classList.add('dishes');

        menuData.desserts.forEach(dish => {
            dessertsCont.append(generateDish(dish));
        });

        container.append(dessertsHeader,dessertsCont);


        return container;
    }

    function generateDish(dish){
        const container = document.createElement('div');
        container.classList.add('dish');

        const title = document.createElement('h3');
        title.textContent = dish.title;
        title.style.gridArea = "title"

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
        price.style.gridArea = "price";
        price.style.textAlign = "right";

        container.append(title,image,description,price);

        return container;
    }

    return {generatePage}
})();