
import movieData from "./data.js";


// export async function getMovies(query) {
//     await fakeNetwork(`getMovies:${query}`);
//     let movies = await movieData;
//     if (!movies) movies = [];
//     return movies;
// }
//
// export async function createContact() {
//     await fakeNetwork();
//     let id = Math.random().toString(36).substring(2, 9);
//     let contact = { id, createdAt: Date.now() };
//     let contacts = await getMovies();
//     contacts.unshift(contact);
//     await set(contacts);
//     return contact;
// }
//
// export async function getContact(id) {
//     await fakeNetwork(`contact:${id}`);
//     let contacts = await localforage.getItem("contacts");
//     let contact = contacts.find(contact => contact.id === id);
//     return contact ?? null;
// }
//
// export async function updateContact(id, updates) {
//     await fakeNetwork();
//     let contacts = await localforage.getItem("contacts");
//     let contact = contacts.find(contact => contact.id === id);
//     if (!contact) throw new Error("No contact found for", id);
//     Object.assign(contact, updates);
//     await set(contacts);
//     return contact;
// }
//
// export async function deleteContact(id) {
//     let contacts = await localforage.getItem("contacts");
//     let index = contacts.findIndex(contact => contact.id === id);
//     if (index > -1) {
//         contacts.splice(index, 1);
//         await set(contacts);
//         return true;
//     }
//     return false;
// }
//
// function set(contacts) {
//     return localforage.setItem("contacts", contacts);
// }
//
// // fake a cache so we don't slow down stuff we've already seen
// let fakeCache = {};
//
// async function fakeNetwork(key) {
//     if (!key) {
//         fakeCache = {};
//     }
//
//     if (fakeCache[key]) {
//         return;
//     }
//
//     fakeCache[key] = true;
//     return new Promise(res => {
//         setTimeout(res, Math.random() * 800);
//     });
// }
