let angle = 0;

function rotateLine() {
    const line = document.getElementById('line');
    angle += 2;
    line.style.transform = `translateY(-50%) rotate(${angle}deg)`;
    requestAnimationFrame(rotateLine);
}

rotateLine();