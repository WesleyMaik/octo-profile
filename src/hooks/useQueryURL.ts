export const useQueryURL = () => {
    return new URLSearchParams(document.location.search);
};