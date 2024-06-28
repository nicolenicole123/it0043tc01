function setGap() {
    let n = document.getElementById("gap").value;
    let flex = document.getElementById("flex");
    flex.style.gap = `${n}px`;
    console.log(`Gap: ${flex.style.gap}`);
}

function setJust(opt) {
    let flex = document.getElementById("flex");
    if (opt === 1) {
        flex.style.justifyContent = "flex-start";
    } else if (opt === 2) {
        flex.style.justifyContent = "center";
    } else if (opt === 3) {
        flex.style.justifyContent = "flex-end";
    } else if (opt === 4) {
        flex.style.justifyContent = "space-between";
    } else if (opt === 5) {
        flex.style.justifyContent = "space-around";
    } else if (opt === 6) {
        flex.style.justifyContent = "space-evenly";
    }
    console.log(`Justify-Content: ${flex.style.justifyContent}`);
}

function setAlign(opt) {
    let flex = document.getElementById("flex");
    if (opt === 1) {
        flex.style.alignItems = "flex-start";
    } else if (opt === 2) {
        flex.style.alignItems = "center";
    } else if (opt === 3) {
        flex.style.alignItems = "flex-end";
    } else if (opt === 4) {
        flex.style.alignItems = "stretch";
    }
    console.log(`Align-Items: ${flex.style.alignItems}`);
}

function setDir(opt) {
    let flex = document.getElementById("flex");
    if (opt === 1) {
        flex.style.flexDirection = "row";
    } else if (opt === 2) {
        flex.style.flexDirection = "column";
    }
    console.log(`Flex-Direction: ${flex.style.flexDirection}`);
}

function setGrow(opt) {
    let g1 = document.getElementById("grow1").value;
    let g2 = document.getElementById("grow2").value;
    let g3 = document.getElementById("grow3").value;
    let b1 = document.getElementById("box1");
    let b2 = document.getElementById("box2");
    let b3 = document.getElementById("box3");
    if (opt === 1) {
        b1.style.flexGrow = g1;
    } else if (opt === 2) {
        b2.style.flexGrow = g2;
    } else if (opt === 3) {
        b3.style.flexGrow = g3;
    } else if (opt === 0) {
        b1.style.flexGrow = '0';
        b2.style.flexGrow = '0';
        b3.style.flexGrow = '0';
    } else if (opt === 4) {
        b1.style.flexGrow = g1;
        b2.style.flexGrow = g2;
        b3.style.flexGrow = g3;
    }
    console.log(`Box 1 Flex-Grow: ${b1.style.flexGrow}`);
    console.log(`Box 2 Flex-Grow: ${b2.style.flexGrow}`);
    console.log(`Box 3 Flex-Grow: ${b3.style.flexGrow}`);
}

function reset() {
    document.getElementById("flex").removeAttribute("style");
    document.getElementById("box1").removeAttribute("style");
    document.getElementById("box2").removeAttribute("style");
    document.getElementById("box3").removeAttribute("style");
    document.getElementById("gap").value = 0;
    document.getElementById("grow1").value = 0;
    document.getElementById("grow2").value = 0;
    document.getElementById("grow3").value = 0;
    console.log("Reset all styles to default.");
}



