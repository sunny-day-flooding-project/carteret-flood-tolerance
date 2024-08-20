if (window.innerWidth >= 992) {
    new fullpage('#fullpage', {
        responsiveWidth: 992,

        recordHistory: false,

        // you can also use the HTML attribute data-tooltip on each section instead
        navigation: true,
        navigationTooltips: navTooltips,

        // Navigation for horizontal slides
        slidesNavigation: true,
        slidesNavPosition: 'top', // Default

        controlArrows: true,
        controlArrowsHTML: [
            '<div class="my-arrow">&LeftAngleBracket;</div>',
            '<div class="my-arrow">&RightAngleBracket;</div>'
        ],

        anchors: pageAnchors,

        onLeave: () => {
            document.getElementById("lightbox").className = "";
        },

        licenseKey: 'gplv3-license'
    });
}

// https://code-boxx.com/image-zoom-css-javascript/
window.onload = () => {
    // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
    let all = document.getElementsByClassName("img-zoom"),
        lightbox = document.getElementById("lightbox");
   
    // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
    // * SIMPLY CLONE INTO LIGHTBOX & SHOW
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }}
   
    // (C) CLICK TO CLOSE LIGHTBOX
    lightbox.onclick = () => lightbox.className = "";
};