const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

function drawTree(node, x, y, level = 1) {
    if (!node) return;

    const dx = 200 / level;
    const dy = 70;

    if (node.left) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y + dy);
        ctx.stroke();
        drawTree(node.left, x - dx, y + dy, level + 1);
    }

    if (node.right) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + dx, y + dy);
        ctx.stroke();
        drawTree(node.right, x + dx, y + dy, level + 1);
    }

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(node.value, x - 5, y + 5);
}

function renderTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTree(avlTree.root, canvas.width / 2, 50);
}

function insertNode() {
    let value = parseInt(document.getElementById("nodeValue").value);
    if (!isNaN(value)) {
        avlTree.insert(value);
        renderTree();
    }
}
