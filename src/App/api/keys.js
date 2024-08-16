
export const apiUrl = 'https://api.unsplash.com';
export const clientId = 'XMqPNJrgL8VFZqe_iv0gq654sK1ROSypf78XCHUFGjI';

export const getRandomPhotosEndpoint = () => `${apiUrl}/photos/random?client_id=${clientId}&count=1`;

export const getSearchPhotosEndpoint = (query) => {
    return `${apiUrl}/search/photos/?query=${query}&client_id=${clientId}`;
};