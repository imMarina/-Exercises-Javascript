// Задача 11.6

// Даны объект - девайс (шлагбаум) и массив объектов - камер. 
// Написать функцию, которая будет принимать этот объект и массив объектов, и возвращать объект со свойствами: название барьера `name` и массивом объектов с данными о камерах `cameras`. 
// Свойство `cameras` должно содержать данные только о тех камерах, чьи `id` указаны в свойстве `cameraIDs`.


// input
const devices = {
	name: "Barrier 1",
	cameraIDs: [1, 2],
};

const cameras = [
    {
        id: 1,
        name: "Camera 1",
    },
    {
        id: 2,
        name: "Camera 2",
    },
    {
        id: 3,
        name: "Camera 3",
    },
];


function createNewObj(obj, arr) {

    let newObj = {
        name: obj.name,
        cameras: obj.cameraIDs.map(camID => {

            let newCameraObj = {
                id: camID,
                name: arr.find(camera => camera.id === camID)?.name || '',
            }
            return newCameraObj;
        })
    }
    return newObj;
}

console.log(createNewObj(devices, cameras));

// output
// {
//     name: 'Barrier 1',
//     cameras: [ 
//         { 
//             id: 1, 
//             name: 'Camera 1' 
//         }, 
//         { 
//             id: 2, 
//             name: 'Camera 2' 
//         } 
//     ]
// }