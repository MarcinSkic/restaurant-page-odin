export default (function() {
    function generatePage(){
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('page');
        containerDiv.classList.add('contact');

        containerDiv.innerHTML = `<h2>Address</h2>
        <div class="info-box">
            <div>Star Cluster: Ariadne Arm</div>
            <div>Star: 4546</div>
            <div>Planet: 4546B</div>
            <div>Sector: the Crater</div>
            <div>Coordinates: 0 0</div>
        </div>
        <h2>Call Us!</h2>
        <div class="info-box">
            <h3>Alterra Department of Recreation</h3>
            #440 +32 999 999 000
        </div>
        <div class="info-box">
            <h3>Alterra Department of Food and Drugs</h3>
            #440 +33 999 999 000
        </div>
        <div class="info-box">
            <h3>Alterra Department of Intersystems Travel</h3>
            #440 +15 999 999 000
        </div>
        <div class="info-box">
            <h3>Alterra Department of Alien Diseases</h3>
            #440 +25 999 999 000
        </div>
        <div class="info-box">
            <h3>Alterra Headquarters</h3>
            #440 +00 999 999 000
        </div>
        <div class="disclaimer">Standard contact fee aplies, 500 Ac for every minute on line. Company 
        keeps right to charge extra for unnecessary waste of time or resources</div>`
        return containerDiv;
    }

    return {generatePage};
})();