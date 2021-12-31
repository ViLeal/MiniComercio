export const saveLastInterestProduct = (productName) => {
    sessionStorage.setItem("lastProduct", productName)
}