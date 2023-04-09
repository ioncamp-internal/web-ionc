// const people = [
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     {
//         name: '李昕威',
//         role: '數學技巧',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     },
//     // More people...
// ]
//
// export default function Example() {
//     return (
//         <>
//             <div className="pt-5">
//                 <div className="mx-auto max-w-full">
//                     <ul role="list"
//                         className="mx-auto mt-20 grid max-w-full grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-10"
//                     >
//                         {people.map((person) => (
//                             <li key={person.name}>
//                                 <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
//                                 <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
//                                 <p className="text-sm leading-6 text-gray-600">{person.role}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className="bg-white pt-5 min-h-screen">
//                 <div className="mx-auto max-w-full px-6 lg:px-8">
//                     <div className="mx-auto max-w-5xl lg:mx-0">
//                         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
//                     </div>
//                     <ul
//                         role="list"
//                         className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-5"
//                     >
//                         {people.map((person) => (
//                             <li key={person.name}>
//                                 <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
//                                 <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
//                                 <p className="text-sm leading-6 text-gray-600">{person.role}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }