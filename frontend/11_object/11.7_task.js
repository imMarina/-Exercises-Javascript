// Задача 11.8

// Допустим, что с бекенда приходит объект с данными о шлагбаумах и камерах.
// Написать функцию, которая будет принимать этот объект и возвращать массив объектов со шлагбаумами.
// Каждый объект шлагбаума должен содержать массив объектов с камерами согласно их `id`.

// input
const respData = {
    devices: [
    {
        id: 1,
        name: "Barrier 1",
        cameraIDs: [4, 2],
    },
    {
        id: 2,
        name: "Barrier 2",
        cameraIDs: [1],
    },
    {
        id: 3,
        name: "Barrier 3",
        cameraIDs: [2, 3],
    },
    ],
    cameras: [
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
    ],
};



// output
//   [
//       {
//       id: 1,
//       name: "Barrier 1",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//         },
//         {
//           id: 2,
//           name: "Camera 2",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Barrier 2",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Barrier 3",
//       cameras: [
//         {
//           id: 2,
//           name: "Camera 2",
//         },
//         {
//           id: 3,
//           name: "Camera 3",
//         },
//       ],
//     },
//   ];



// let devices = respData.devices;
// let camerasArr = respData.cameras;


function mergeInfo(objectFromBackend) {

    // Destructuring of objects
    let {devices, cameras} = objectFromBackend;

    let newArr = devices.map(barrier => {

        let newBarrier = {
            // operator spread ...barrier
            // (put all properties which doesn't need to change and transfer to a new object)
            ...barrier,
            cameras: barrier.cameraIDs.map(camID => {

                let newCamera = {
                    id: camID,
                    // ternary operator gives opportunity to check does object have the searching value or not
                    name: cameras.find(camera => camera.id === camID)?.name || '',
                    // name: cameras.find(camera => camera.id === camID).name,
                }

                return newCamera;
            }),

            // erasing unused value
            cameraIDs: undefined,
        }

        return newBarrier;
    });

    return newArr;
}

console.log(mergeInfo(respData));
// output
// [
//     {
//         id: 1,
//         name: 'Barrier 1',
//         cameraIDs: undefined,
//         cameras:
//         [
//             {
//                 "id": 4,
//                 "name": "",
//             },
//             {
//                 "id": 2,
//                 "name": "Camera 2",
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: 'Barrier 2',
//         cameraIDs: undefined,
//         cameras: [
//             {
//                 "id": 1,
//                 "name": "Camera 1",
//             },
//         ]
//     },
//     {
//         id: 3,
//         name: 'Barrier 3',
//         cameraIDs: undefined,
//         cameras:
//         [
//             {
//                 "id": 2,
//                 "name": "Camera 2",
//             },
//             {
//                 "id": 3,
//                 "name": "Camera 3",
//             }
//         ]
//     }
// ]


// Деструктуризация объектов в JavaScript
// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };

// let {year, month, day} = obj;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31