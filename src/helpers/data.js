export function getInitialItems(){
    let initialPos = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]);

    const initialItems = [
        {id: "1", item: initialPos[1], enable: true},
        {id: "2", item: initialPos[2], enable: true},
        {id: "3", item: initialPos[3], enable: true},
        {id: "4", item: initialPos[4], enable: true},
        {id: "5", item: initialPos[5], enable: true},
        {id: "6", item: initialPos[6], enable: true},
        {id: "7", item: initialPos[7], enable: true},
        {id: "8", item: initialPos[8], enable: true},
        {id: "9", item: initialPos[9], enable: true},
        {id: "10", item: initialPos[10], enable: true},
        {id: "11", item: initialPos[11], enable: true},
        {id: "12", item: initialPos[12], enable: true},
        {id: "13", item: initialPos[13], enable: true},
        {id: "14", item: initialPos[14], enable: true},
        {id: "15", item: initialPos[15], enable: true},
        {id: "16", item: initialPos[16], enable: true},
        {id: "17", item: initialPos[17], enable: true},
        {id: "18", item: initialPos[18], enable: true},
        {id: "19", item: initialPos[19], enable: true},
        {id: "20", item: initialPos[20], enable: true},
        {id: "21", item: initialPos[21], enable: true},
        {id: "22", item: initialPos[22], enable: true},
        {id: "23", item: initialPos[23], enable: true},
        {id: "24", item: initialPos[0], enable: true}
    ];
    return initialItems;
}

function shuffle(inarray) {
    var ctr = inarray.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = inarray[ctr];
        inarray[ctr] = inarray[index];
        inarray[index] = temp;
    }
    return inarray;
}