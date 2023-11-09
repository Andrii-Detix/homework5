function unpackSausages(boxes)
{
    let prylavok ="";
    let counter =0;
    for(let i = 0; i< boxes.length; i++) {
        for(let j =0; j< boxes[i].length; j++) {
            if (boxes[i][j].length === 6 ? boxes[i][j].includes(`[${boxes[i][j][1].repeat(4)}]`) : false) {
                counter ++;
                if(counter%5!==0) prylavok += boxes[i][j].replaceAll(boxes[i][j][1], `${boxes[i][j][1]} `).slice(1, -1);
            }
        }
    }
    return prylavok.trimEnd();
}

