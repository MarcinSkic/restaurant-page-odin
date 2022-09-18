export default (function(){
    const path = require.context('./gallery',false,/location([0-9]|[1-9][0-9])\.jpg$/i);
    const images = path.keys().map(path);

    function generatePage(){
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('page');
        containerDiv.classList.add('home');

        containerDiv.innerHTML = `<h2>Location</h2>
        <div class="gallery">

        </div>
        <h2>About</h2>
        <div class="description">
            Restaurant is located in scenic area known as "Grand Reef" where you can admire exotic fauna and flora. 
        </div>
        <h2>Reservation</h2>
        <div class="description">
            Only dining option is booking visit ahead of time, for minor price of 10 000 Alterra Credits. 
            For this price you get one in a lifetime meal experience (underwater transport included).
            Estimated wait time currently is around 8 months. Alterra reserves right to cancel any reservation in case of
            Kharaa bacteria outbreak. 
        </div>`

        const gallery = containerDiv.querySelector('.gallery');

        images.forEach(image => {
            const img = document.createElement('img');
            img.setAttribute('src', image);
            gallery.append(img);
        })

        return containerDiv;
    }

    return {generatePage};
})();