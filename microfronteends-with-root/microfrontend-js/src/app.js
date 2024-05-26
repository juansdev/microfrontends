const app = {
    async bootstrap(props){
        console.log("App Started", props);
    },
    async mount(props){
        console.log("App Mounted", props);

        const container = document.getElementById("appMicroFrontendRoot");

        const elementButton = document.createElement("button");
        const elementInputText = document.createElement("input");
        elementButton.textContent = props.btnName;
        elementInputText.setAttribute("type", "text");

        container.appendChild(elementInputText);
        container.appendChild(elementButton);
    },
    async unmount(props){
        console.log("App Unmounted", props);

        const container = document.getElementById("appMicroFrontendRoot");
        container.innerHTML = "";
    }
};
export const { bootstrap, mount, unmount } = app;
export function square(number){
    return Math.pow(number, 2);
}