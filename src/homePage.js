export default (function(){
    function generatePage(contentDiv){

        const locationHeader = document.createElement('h2');
        locationHeader.textContent = "Location"

        contentDiv.append(locationHeader);
    }

    return {generatePage};
})();