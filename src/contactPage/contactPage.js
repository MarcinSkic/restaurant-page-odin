export default (function() {
    function generatePage(){
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('page');
        containerDiv.classList.add('contact');

        containerDiv.innerHTML = `<h2>Address</h2>
        <div class="description">
            Only dining option is booking visit ahead of time, for minor price of 10 000 Alterra Credits. 
            For this price you get one in a lifetime meal experience (underwater transport included).
            Estimated wait time currently is around 8 months. Alterra reserves right to cancel any reservation in case of
            Kharaa bacteria outbreak. 
        </div>`
        return containerDiv;
    }

    return {generatePage};
})();