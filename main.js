let soldiers = JSON.parse(localStorage.getItem('soldiers')) || [];
let isAscending = true


document.getElementById('new-soldier-form').addEventListener('submit', addSoldier);
document.getElementById('edit-soldier-form').addEventListener('submit', saveSoldier);
document.getElementById('sort-button').addEventListener('click', sortSoldiers);
document.getElementById('save-soldier-change-btn').addEventListener('click', changeSoldierInfo)
// document.getElementById('cancelEditButton').addEventListener('click', cancelEdit);


displaySoldiers();



function addSoldier(e) {
    e.preventDefault();
    const SOLDIER = {
        fullName: document.getElementById('full-name-input').value,
        rank: document.getElementById('rank-input').value,
        role: document.getElementById('position-input').value,
        company: document.getElementById('platoon-input').value,
        status: document.getElementById('selection-input').value,
        missionTime: parseInt(document.getElementById('mission-time-input').value),
    };
    
    soldiers.push(SOLDIER);
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    displaySoldiers();
    document.getElementById('new-soldier-form').reset();

}

function saveSoldier(params) {
    
}

function sortSoldiers(params) {
    
}


function displaySoldiers() {
    const TABLE_BODY = document.querySelector('#soldier-table tbody');
    TABLE_BODY.innerHTML = '';
    soldiers.forEach((soldier, index) => {
        const ROW = document.createElement('tr');
        ROW.innerHTML = `
            <td class="table-square">${soldier.fullName}</td>
            <td class="table-square">${soldier.rank}</td>
            <td class="table-square">${soldier.role}</td>
            <td class="table-square">${soldier.company}</td>
            <td class="table-square">${soldier.status}</td>
            <td class="table-square">
                <button onclick="startMission(${index})" class="table-btn">Start Mission</button>
                <button onclick="editSoldier(${index})" class="table-btn">Edit</button>
                <button onclick="deleteSoldier(${index})" id="delete-btn" class="table-btn">Delete</button>
            </td>
        `;
        TABLE_BODY.appendChild(ROW);
    });
}


function deleteSoldier(soldierIndex) {
    soldiers.splice(soldierIndex, 1);
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    displaySoldiers();
}

function changeSoldierInfo(params) {
    
}

function cancelEdit() {
    
}

function editSoldier(index) {

    const SOLDIER = soldiers[index];
    document.getElementById('full-name-edit').value = SOLDIER.fullName;
    document.getElementById('rank-edit').value = SOLDIER.rank;
    document.getElementById('position-edit').value = SOLDIER.role;
    document.getElementById('platoon-edit').value = SOLDIER.company;
    document.getElementById('selection-status-edit').value = SOLDIER.status;
    document.getElementById('mission-time-edit').value = SOLDIER.missionTime;
    
    document.getElementById('new-soldier-form').style.display = 'none';
    document.getElementById('soldier-table').style.display = 'none';
    document.getElementById('edit-soldier-form').style.display = 'block';
    
    document.getElementById('edit-soldier-form').dataset.index = index;
}


function sortSoldiers() {
    // debugger
    isAscending = !isAscending;
    soldiers.sort((a, b) => {
        const nameA = a.fullName.toUpperCase();
        const nameB = b.fullName.toUpperCase();
        if (nameA < nameB) return isAscending ? -1 : 1;
        if (nameA > nameB) return isAscending ? 1 : -1;
        return 0;
    });
    localStorage.setItem('soldiers', JSON.stringify(soldiers));
    displaySoldiers();
}
