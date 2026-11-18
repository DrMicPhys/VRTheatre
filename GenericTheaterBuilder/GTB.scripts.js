function buildRows(targetID,nseats,nrows ){
    //builds basic stage 
    let targetE1 = document.querySelector(targetID);
    let seatSpacing=0.54;
    let rowHeightStep=.3;
    let rowDepthstep=1.0;
    let toAdd='   ';
    
    for (let j = 0; j < nrows; j++) {
        for (let i = 0; i < nseats; i++) {
            let thisx=(-(nseats-1)/2+i)*seatSpacing;
            let thisy=j*rowHeightStep;
            let thisz=-j*rowDepthstep;
            toAdd +=`
                <a-entity position="${thisx} ${thisy} ${thisz}">
                    <a-box scale=".52 .1 .425" position="0 .4 -.025" material="color: red"></a-box>
                    <a-entity rotation="-10 0 0" position="0 .4 -.425">
                        <a-box height=".55" width=".52" depth=".1" position="0 .25 .25" material="color: red"></a-box>
                    </a-entity>
                    <a-box scale=".05 .02 .3" material="color: black" position="-.230 .6 0"></a-box>
                    <a-box scale=".05 .02 .3" material="color: black" position=".230 .6 0"></a-box>
                    <a-box scale=".03 .4 .2" material="color: gray" position=".240 .2 -.15"></a-box>
                    <a-box scale=".03 .4 .2"  material="color: gray" position="-.240 .2 -.15"></a-box>
                    <a-box scale="${seatSpacing} .34 1.3" position="0 -.17 0"  material="color: #005"></a-box>
                </a-entity> 
                \n
            `;
        }
    } 
    targetE1.innerHTML+=toAdd;
}
function buildRow(targetID,nseats ){
    //builds basic stage 
    let targetE1 = document.querySelector(targetID);
    let seatSpacing=0.54;
    let toAdd='   ';
    for (let i = 0; i < nseats; i++) {
        let thisx=(-(nseats-1)/2+i)*seatSpacing;
        toAdd +=
        `
            <a-entity position="${thisx} 0 0">
                <a-box scale=".52 .1 .425" position="0 .4 -.025" material="color: red"></a-box>
                <a-entity rotation="-10 0 0" position="0 .4 -.425">
                    <a-box height=".55" width=".52" depth=".1" position="0 .25 .25" material="color: red"></a-box>
                </a-entity>
                <a-box scale=".05 .02 .3" material="color: black" position="-.230 .6 0"></a-box>
                <a-box scale=".05 .02 .3" material="color: black" position=".230 .6 0"></a-box>
                <a-box scale=".03 .4 .2" material="color: gray" position=".240 .2 -.15"></a-box>
                <a-box scale=".03 .4 .2" material="color: gray" position="-.240 .2 -.15"></a-box>
                <a-box scale="${seatSpacing} .34 1.3" position="0 -.17 0" material="color: #005"></a-box>
            </a-entity>
            \n
        `;
    }
    targetE1.innerHTML+=toAdd;
    
}
